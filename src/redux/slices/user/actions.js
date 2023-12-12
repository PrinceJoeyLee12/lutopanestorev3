import { API, Auth } from 'aws-amplify';
import {
  registerUser as registerUserMutation,
  loginUser as loginUserMutation,
  verifyToken as verifyTokenMutation,
  updateUser as updateUserMutation,
  createUser as createUserMutation,
} from 'graphql/mutations';
import {
  setLocalStorageItem,
  getLocalStorageItem,
  getDeviceId,
  formatBillingAddressInfo,
  removeLocalStorageItem,
} from 'utils/index';
import { formattedCart } from 'utils/user/index';
import { UTILS, EMAIL_STATUS, USER_ADDRESS_CODE, LocalStorageKey } from 'constants/index';
import {
  listUsersCustom as listUsersCustomQueries,
  getCartCustom as getCartCustomQueries,
} from 'graphql/customQueries';
import { capitalizerOfWords, encodePHPhoneNumber } from 'utils/common/stringHelper';
import { slice as productSlice } from 'redux/slices/product/product';
import { slice as alertSlice } from 'redux/slices/alert/alert';
import uuidv4 from 'utils/uuidv4';
import { slice } from './user';
import { dispatch, store } from '../../store';
// Actions

// ----------------------------------------------------------------------

export const getUser = async (email = '', userSub = '') => {
  dispatch(slice.actions.startLoading());
  try {
    let filter = null;
    if (email) {
      filter = { email: { eq: email } };
    } else if (userSub) {
      filter = { userSub: { eq: userSub } };
    } else {
      return null;
    }
    const userResponse = await API.graphql({
      query: listUsersCustomQueries,
      variables: { filter },
    });
    const userData = userResponse.data.listUsers?.items?.[0];
    const { password, cart, ...userToDispatch } = userData;

    if (cart?.id) {
      dispatch(slice.actions.getUserCart(formattedCart(cart)));
    } else {
      dispatch(slice.actions.cartIsFetchedUpdate(true));
    }
    if (userData?.email) {
      const localUnverfiedUser = getLocalStorageItem(EMAIL_STATUS.UNVERIFIED_EMAIL);
      dispatch(slice.actions.getUserData({ ...userToDispatch, isVerified: !localUnverfiedUser }));
    }

    return { ...userToDispatch };
  } catch (error) {
    dispatch(slice.actions.hasError(error));
  }
};

export const registerUser = async (data) => {
  dispatch(slice.actions.startLoading());

  const { firstName, lastName, email, phoneNumber, userSub, password } = data;
  try {
    const args = {
      password,
      userData: JSON.stringify({
        firstName: capitalizerOfWords(firstName),
        lastName: capitalizerOfWords(lastName),
        number_1: encodePHPhoneNumber(phoneNumber),
        email,
        userSub,
        address: {
          country: 'Philippines',
        },
      }),
    };

    // const userResponse = await API.graphql({
    //   query: registerUserMutation,
    //   variables: { args },
    // });
    // console.log('@@@@@@@@@@@@@:  ~ file: actions.js:88 ~ userResponse:', userResponse);

    // const createdDataResponse = userResponse?.data?.registerUser;
    // const responseCreatedUserData = JSON.parse(createdDataResponse)?.data?.createUser;
    // console.log('@@@@@@@@@@@@@:  ~ file: actions.js:91 ~ responseCreatedUserData:', responseCreatedUserData);
    // const responseAttributesData = JSON.parse(createdDataResponse)?.data?.attributes;
    // console.log('@@@@@@@@@@@@@:  ~ file: actions.js:93 ~ responseAttributesData:', responseAttributesData);
    // const token = responseAttributesData?.token;
    // console.log('@@@@@@@@@@@@@:  ~ file: actions.js:93 ~ token:', token);

    // if (token) {
    //   console.log('@@@@@@@@@@@@@:  ~ file: actions.js:98 ~ token:', token);
    //   setLocalStorageItem({ [UTILS.TOKEN]: token });
    // }
    // if (responseCreatedUserData?.email) {
    //   console.log('@@@@@@@@@@@@@:  ~ file: actions.js:102 ~ responseCreatedUserData:', responseCreatedUserData);
    //   dispatch(slice.actions.getUserData(responseCreatedUserData));
    // }

    const userResponse = await API.graphql({
      query: createUserMutation,
      variables: {
        input: {
          firstName: capitalizerOfWords(firstName),
          lastName: capitalizerOfWords(lastName),
          number_1: encodePHPhoneNumber(phoneNumber),
          email,
          userSub,
          address: {
            country: 'Philippines',
          },
        },
      },
    });
    const responseCreatedUserData = userResponse?.data?.createUser;
    if (responseCreatedUserData) {
      dispatch(slice.actions.getUserData(responseCreatedUserData));
    }
    return { success: true, user: responseCreatedUserData };
  } catch (error) {
    dispatch(slice.actions.hasError(error));
    return { success: false, user: null };
  }
};

export const loginUser = async (data) => {
  dispatch(slice.actions.startLoading());

  const { email, password } = data;
  try {
    const args = {
      password,
      email,
    };

    const userResponse = await API.graphql({
      query: loginUserMutation,
      variables: { args },
    });
    return { success: true, ...userResponse };
  } catch (error) {
    dispatch(slice.actions.hasError(error));
    return { success: false };
  }
};

export const logoutUser = async (shouldInitializeGuestUser = false) => {
  dispatch(slice.actions.logoutUser());
  dispatch(productSlice.actions.logoutUser());
  if (shouldInitializeGuestUser) {
    dispatch(slice.actions.startLoading());
    // fetch cart with device id
    const { identifier: deviceId } = await getDeviceId();
    await getCart();
    const cartJSON = getLocalStorageItem(LocalStorageKey.CART);

    if (cartJSON) {
      const parsedCart = JSON.parse(cartJSON);
      if (parsedCart?.cartId === deviceId && parsedCart?.billingInfo?.length) {
        dispatch(slice.actions.updateBillingInfo(parsedCart?.billingInfo));
      }
    }

    // dispatch(slice.actions.updateBillingInfo(billingInfo));
    // dispatch(productSlice.actions.createBilling(formattedBillingInfo));
    // billingInfo =

    dispatch(slice.actions.startLoading(false));
  }
};

// export const initializeLocal

export const verifyToken = async (data) => {
  dispatch(slice.actions.startLoading());

  const { token, shouldCreateNewOne = false } = data;
  try {
    const args = {
      token,
      shouldCreateNewOne,
    };

    const verifyResponse = await API.graphql({
      query: verifyTokenMutation,
      variables: { args },
    });
    const response = JSON.parse(verifyResponse?.data?.verifyToken || '');
    const userData = response?.data?.verifyToken?.user;
    const attributes = response?.data?.attributes;
    const newToken = attributes?.newToken;
    if (newToken) {
      setLocalStorageItem({ [UTILS.TOKEN]: newToken });
    }
    let user = {};
    if (userData?.email) {
      setLocalStorageItem({ [EMAIL_STATUS.UNVERIFIED_EMAIL]: userData?.email });
      user = await getUser(userData?.email);
    }

    return { success: true, user };
  } catch (error) {
    dispatch(slice.actions.hasError(error));
    return { success: false };
  }
};

export const setSelectedAddressCode = (code = '') => {
  if (!code) {
    return null;
  }
  setLocalStorageItem({ [USER_ADDRESS_CODE]: code });
  dispatch(slice.actions.setSelectedAddressCode(code));
};

export const getCart = async (isCartForChecking = false) => {
  const userCartId = store.getState().user?.cart?.cartId;
  const userId = store.getState().user?.data?.id;
  const { identifier: deviceId } = await getDeviceId();

  // If User Cart Id already exists and is not Cart for Checking meaning cart  already fetched/ populated from getUser()
  if (!isCartForChecking && userCartId) {
    return null;
  }

  const getCartId = userId || userCartId || deviceId || ''; // User Id Should comes first

  if (!getCartId) {
    return null;
  }

  try {
    const getCartResponse = await API.graphql({
      query: getCartCustomQueries,
      variables: { id: getCartId },
    });

    const cart = getCartResponse?.data?.getCart;

    if (cart?.id) {
      const formattedCartValue = formattedCart(cart);
      dispatch(slice.actions.getUserCart(formattedCartValue));
      if (isCartForChecking) {
        updateLocalCart(formattedCartValue);
      }
    }

    return cart;
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
};

// export const fetchCartByAddress = async () => {
//   const userIdStore = store.getState().user?.data?.id;

//   const saveLocalAddressCode = getLocalStorageItem(USER_ADDRESS_CODE);
//   const selectedAddressCode = store.getState().user?.selectedAddressCode;
//   const { identifier: deviceId } = await getDeviceId();

//   const addressCode = saveLocalAddressCode || selectedAddressCode || '019203';
//   const userId = userIdStore || deviceId;

//   if (!userId) {
//     return null;
//   }

//   try {
//     let filter = null;
//     if (userId) {
//       filter = { userId: { eq: userId } };
//     }

//     if (addressCode) {
//       filter = { ...filter, addressCode: { eq: addressCode } };
//     }

//     const getCartResponse = await API.graphql({
//       query: listCartsCustomQueries,
//       variables: { filter },
//     });

//     const cart = getCartResponse?.data?.listCarts?.items?.[0];

//     if (cart?.id) {
//       const formattedCartValue = formattedCart(cart);
//       dispatch(slice.actions.getUserCart(formattedCartValue));
//     }

//     return cart;
//   } catch (error) {
//     console.log('Error:', error);
//     return null;
//   }
// };

export const saveBillingAddress = async (newBillingAdress = null) => {
  const userData = store.getState().user?.data;
  const cartId = store.getState().user?.cart?.cartId;
  const isAuthenticated = store.getState().user?.isAuthenticated;
  let billingAdresses = userData?.billingInfo || [];

  const noUser = !isAuthenticated || !userData?.id;

  // NON-Authenticated - if user is not sigin then check and get the billing address from localStorage if there's any from user with the device id
  if (noUser) {
    const localUserCart = getLocalStorageItem('cart');
    const parseLocalCart = JSON.parse(localUserCart);
    billingAdresses = parseLocalCart?.cartId === cartId ? parseLocalCart?.billingInfo : [];
  }

  const formattedBillingInfo = formatBillingAddressInfo(newBillingAdress);

  let billingInfo = [];
  if (billingAdresses?.length) {
    // Find isDefault in BillingAddresses
    if (formattedBillingInfo?.isDefault) {
      const indexOfDefaultAdd = billingAdresses?.findIndex((address) => address?.isDefault);
      if (indexOfDefaultAdd > -1) {
        const filteredAddresses = billingAdresses?.filter((address) => !address?.isDefault);
        const addresses = [
          formattedBillingInfo,
          ...filteredAddresses,
          { ...billingAdresses?.[indexOfDefaultAdd], isDefault: false },
        ];
        billingInfo = addresses;
      }
    } else {
      billingInfo = [...billingAdresses, formattedBillingInfo];
    }
  } else {
    billingInfo = [formattedBillingInfo];
  }

  let response = '';

  if (noUser) {
    setLocalStorageItem({ [LocalStorageKey.CART]: JSON.stringify({ cartId, billingInfo }) });

    response = 'success';
  } else {
    const updateUserBillingInfoData = await API.graphql({
      query: updateUserMutation,
      variables: {
        input: {
          id: userData?.id,
          billingInfo,
        },
      },
    });

    response = updateUserBillingInfoData?.data?.updateUser?.id;
  }

  if (response) {
    dispatch(slice.actions.updateBillingInfo(billingInfo));
    dispatch(productSlice.actions.createBilling(formattedBillingInfo));
    return { success: true };
  }

  // Error

  dispatch(
    alertSlice.actions.setAlert({
      id: uuidv4(),
      type: 'error',
      message: 'We have an error updating your billing information',
      timeout: 4000,
    })
  );

  return { success: false };
};

export const updateUserProfileData = async (otherData = null) => {
  const userData = store.getState().user?.data;

  const dynamoPayload = {
    id: userData?.id,
    ...(otherData && otherData), // other data should be on the same User @model (keys should be exactly the same e.g. firstName, lastName)
  };

  const cognitoPayload = {
    ...(otherData?.firstName && { given_name: otherData?.firstName }),
    ...(otherData?.lastName && { family_name: otherData?.lastName }),
    ...(otherData?.number_1 && { phone_number: otherData?.number_1 }),
    ...((otherData?.firstName || userData?.firstName) &&
      (otherData?.lastName || userData?.lastName) && {
        name: `${otherData?.firstName || userData?.firstName} ${otherData?.lastName || userData?.lastName}`,
      }),
  };

  const promises = [];

  if (Object.keys(dynamoPayload).length) {
    promises.push(
      await API.graphql({
        query: updateUserMutation,
        variables: { input: dynamoPayload },
      })
    );
  }

  if (Object.keys(cognitoPayload).length) {
    const user = await Auth.currentAuthenticatedUser();
    console.log('@@@@@@@@@@@@@:  ~ file: actions.js:345 ~ user:', user);
    promises.push(await Auth.updateUserAttributes(user, cognitoPayload));
  }

  const [updateUserInfoData, updatedDynamoData] = await Promise.all(promises);

  const responseId = updateUserInfoData?.data?.updateUser?.id;

  if (responseId) {
    dispatch(slice.actions.getUserData(otherData));
    return { success: true };
  }

  // Error

  dispatch(
    alertSlice.actions.setAlert({
      id: uuidv4(),
      type: 'error',
      message: 'We have an error updating your billing information',
      timeout: 4000,
    })
  );

  return { success: false };
};

export const deleteAddress = async (id) => {
  const userData = store.getState().user?.data;
  const billingAdresses = userData?.billingInfo || [];
  const isAuthenticated = store.getState().user?.isAuthenticated;
  const cartId = store.getState().user?.cart?.cartId;

  const noUser = !isAuthenticated || !userData?.id;
  let responseId = '';

  if (!id) {
    return { success: false };
  }

  const billingInfo = billingAdresses?.filter((address) => address.id !== id);

  if (id) {
    dispatch(slice.actions.updateBillingInfo(billingInfo));
  }

  if (!noUser) {
    const updateUserBillingInfoData = await API.graphql({
      query: updateUserMutation,
      variables: { input: { id: userData?.id, billingInfo } },
    });

    responseId = updateUserBillingInfoData?.data?.updateUser?.id;
  } else {
    if (cartId) {
      removeLocalStorageItem(LocalStorageKey.CART);
      setLocalStorageItem({ [LocalStorageKey.CART]: JSON.stringify({ cartId, billingInfo }) });
    }
    responseId = 'success';
  }
  return { success: Boolean(responseId) };
};

export const updateLocalCart = (onlineCart) => {
  const onlineCartLineItems = onlineCart?.lineItems;

  const localCart = store.getState().product?.checkout?.cart;

  const hasChangesOnValues = [];

  const lineItems = onlineCartLineItems?.reduce((acc, item) => {
    const localCartItemIndex = localCart?.findIndex((localItem) => localItem?.id === item?.variantId);
    if (localCartItemIndex !== -1) {
      const localCartItem = localCart[localCartItemIndex];
      const availabilityChanges = localCartItem?.available !== item?.available;
      const priceChanges = localCartItem?.price !== item?.price;
      const salePriceChanges =
        Boolean(localCartItem?.salePrice && item?.salePrice) && localCartItem?.salePrice !== item?.salePrice;

      const hasChanges = availabilityChanges || priceChanges || salePriceChanges;

      hasChangesOnValues.push(hasChanges);

      if (hasChanges) {
        acc.push({
          ...localCartItem,
          ...(priceChanges ? { price: item?.price } : {}),
          ...(availabilityChanges ? { available: item?.available } : {}),
          ...(salePriceChanges ? { salePrice: item?.salePrice } : {}),
        });
      } else {
        acc.push(localCartItem);
      }
    }

    return acc;
  }, []);

  // Update local cart if there's changes
  if (hasChangesOnValues.includes(true)) {
    dispatch(productSlice.actions.getCart(lineItems));
  }
};
