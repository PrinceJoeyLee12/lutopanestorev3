import uuidv4 from 'utils/uuidv4';

export const formattedCart = (cart) => {
  const formattedCartItems = cart?.lineItems?.items?.reduce((acc, item) => {
    const variant = item?.variant;
    const quantity = item?.quantity;
    const price = variant?.price;
    const subtotal = quantity * price;
    const variantId = variant?.id;
    const salePrice = variant?.salePrice;
    const inventory = variant?.inventory;
    const option1_value = variant?.option1_value;
    const option2_value = variant?.option2_value;
    const option3_value = variant?.option3_value;
    const product = variant?.product;
    const productName = product?.name;
    const option1_name = product?.option1_name;
    const option2_name = product?.option2_name;
    const option3_name = product?.option3_name;
    const productMainImage = product?.mainImage?.urlImage;
    const cartItem = {
      variantId, // variant Id,
      cartItemId: item?.id,
      productId: product?.id,
      available: inventory,
      cover: productMainImage || '',
      name: productName,
      options: [],
      price,
      salePrice,
      quantity,
      subtotal,
    };
    acc.push(cartItem);
    return acc;
  }, []);
  return { cartId: cart?.id, lineItems: formattedCartItems };
};

export const formatLocalCartToUserCart = (localCart, userCartLineItems, userCreatedCartResponse, cartId) => {
  const lineItems = localCart?.map(({ id, ...rest }) => {
    const userCartItem = userCreatedCartResponse?.find((item) => item?.variantId === id);
    const userCartLineItem = userCartLineItems?.find((item) => item?.variantId === id);
    const quantity = userCartItem?.quantity || userCartLineItem?.quantity || 0;
    const productId = userCartItem?.variant?.productId || userCartLineItem?.productId || '';
    const salePrice = userCartItem?.variant?.salePrice || userCartLineItem?.salePrice || '';
    const price = userCartItem?.variant?.price || userCartLineItem?.price || 0;
    const cartItemId = userCartItem?.id || userCartLineItem?.cartItemId || '';
    const subtotal = price * quantity || 0;

    return {
      ...rest,
      variantId: id,
      ...(cartItemId && { cartItemId }),
      ...(salePrice && { salePrice }),
      ...(productId && { productId }),
      ...(quantity && { quantity }),
      ...(subtotal && { subtotal }),
      ...(price && { price }),
    };
  });

  return { cartId, lineItems };
};

export const formatBillingInfo = (billingInfo = null) => {
  if (!billingInfo) {
    return null;
  }
  return billingInfo?.map((billingInfo) => ({
    id: billingInfo?.id || uuidv4(),
    receiver: `${billingInfo?.fullName}`,
    fullAddress: fullAddressConstructor(billingInfo?.address),
    phone: `${billingInfo?.phone}`,
    addressType: billingInfo?.type || 'Home',
    isDefault: Boolean(billingInfo?.isDefault),
  }));
};

export const fullAddressConstructor = (address) => {
  const { addressLine1, city, zipCode, barangay } = address;
  return `${addressLine1 || ''} ${barangay || ''}, ${city}, ${zipCode}`.trim();
};

export const formatBillingAddressInfo = (data) => {
  const { email, firstName, lastName, isDefault, addressType, phone } = data;
  return {
    id: uuidv4(),
    email,
    fullName: `${firstName} ${lastName}`,
    isDefault,
    type: addressType,
    phone,
    address: {
      addressLine1: data?.addressLine1 || '',
      addressLine2: data?.addressLine2 || '',
      country: data?.country || '',
      region: data?.region || '',
      regionCode: data?.regionCode || '',
      state: data?.state || '',
      stateCode: data?.stateCode || '',
      city: data?.city || '',
      cityCode: data?.cityCode || '',
      barangay: data?.barangay || '',
      barangayCode: data?.barangayCode || '',
      landMark: data?.landMark || '',
      zipCode: data?.zipCode || '',
      latitude: data?.latitude || '',
      longitude: data?.longitude || '',
      accuracy: data?.accuracy || '',
      altitudeAccuracy: data?.altitudeAccuracy || '',
      speed: data?.speed || '',
      heading: data?.heading || '',
    },
  };
};
