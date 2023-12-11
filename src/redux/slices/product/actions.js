import { API } from 'aws-amplify';
import { listProductsCustom as listProductsCustomQueries } from 'graphql/customQueries';
import { listStoreCategories as listStoreCategoriesQueries, listStores as listStoreQueries } from 'graphql/queries';
import { batchAddCartLineItems, batchDeleteCartLineItems, createCart as createCartMutation } from 'graphql/mutations';
import { dispatch, store } from 'redux/store';
import uuidv4 from 'utils/uuidv4';
import { slice as alertSlice } from 'redux/slices/alert/alert';
import { slice as userSlice } from 'redux/slices/user/user';
import { formattedProduct, cartDifferencesAnalyzer } from 'utils/product/index';
import { formatLocalCartToUserCart } from 'utils/user/index';
import { getDeviceId } from 'utils/index';
import { slice } from './product';
// Actions

export function getProducts() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      // 1. Get Products
      const productsResponse = await API.graphql({
        query: listProductsCustomQueries,
        variables: {},
      });

      const products = (productsResponse.data.listProducts?.items || []).map((product) => formattedProduct(product));

      dispatch(slice.actions.getProductsSuccess(products));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function searchProducts(filterQuery = {}) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      // 1. Get Products
      let filter = null;
      if (Object.keys(filterQuery)?.length) {
        filter = filterQuery;
      }
      const productsResponse = await API.graphql({
        query: listProductsCustomQueries,
        variables: { ...(filter ? { filter } : {}) },
      });

      const products = (productsResponse.data.listProducts?.items || [])
        .filter((product) => product?.variants?.items?.length)
        .map((product) => formattedProduct(product));

      dispatch(slice.actions.getProductsSuccess(products));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getProductsByStoreCategories(categories) {
  return async () => {
    dispatch(slice.actions.startLoading());
    const storeCategories = store.getState().product.products?.storeCategories;
    try {
      // 1. Get Products
      // TODO create category fetch filter
      const ids = categories?.map((cat) => storeCategories?.name === cat)?.filter((item) => item);
      // if()
      const filter = { categoryId: { eq: 'c438e7a6-45da-436b-9a13-aa4fe470eda6' } };
      const productsResponse = await API.graphql({
        query: listStoreQueries,
        variables: { ...(filter ? { filter } : {}) },
      });

      // const products = (productsResponse.data.listProducts?.items || []).map((product) => formattedProduct(product));

      dispatch(slice.actions.getProductsSuccess());
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getStoreCategories() {
  return async () => {
    dispatch(slice.actions.startLoading());
    const storeCategories = store.getState().product.storeCategories;
    try {
      // 1. Get Products
      if (storeCategories?.length) {
        return storeCategories;
      }
      const categoriesResponse = await API.graphql({
        query: listStoreCategoriesQueries,
        variables: {},
      });

      const categories = (categoriesResponse.data.listStoreCategories?.items || []).map((category) => category);

      dispatch(slice.actions.getStoreCategories(categories));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getProductBySlug(slug = '') {
  return async () => {
    if (!slug) {
      return;
    }
    dispatch(slice.actions.startLoading());
    dispatch(slice.actions.resetProduct());
    try {
      const productResponse = await API.graphql({
        query: listProductsCustomQueries,
        variables: { filter: { slug: { eq: `${slug}` } } },
      });
      const product = productResponse?.data?.listProducts?.items?.[0] || null;
      dispatch(slice.actions.getProductSuccess(formattedProduct(product)));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// CART
// ----------------------------------------------------------------------

export async function updateCart(deviceId = '') {
  const localCart = store.getState().product.checkout?.cart;
  const userCart = store.getState().user?.cart;
  const { id: userId } = store.getState().user.data;
  try {
    // NOTE: Only Delete and Add Operation are being used (e.g. if quantity changes delete it then add it);

    let cartId = userId || userCart?.cartId || deviceId || ''; // userId should go first it's possible that user already have cart with deviceId so will neglect that one

    // 1. Create Cart if there isn't any
    if (!cartId) {
      cartId = await createCart(cartId);
    }

    if (!cartId) {
      return null;
    }

    // 2. Check difference to delete and update
    const { toDeleteItems, toCreateItems } = cartDifferencesAnalyzer(localCart, userCart, cartId);

    const promises = [];

    if (toDeleteItems?.length) {
      promises.push(await deleteCartLineItems(toDeleteItems));
    }

    if (toCreateItems?.length) {
      promises.push(await createCartLineItems(toCreateItems));
    }

    if (promises?.length) {
      const promisesResponse = await Promise.all(promises);

      // 3. Update User Cart
      let createCartResponse = [];
      // If Cart have deleted Item(s)
      if (typeof promisesResponse?.[0]?.[0] === 'string' && promisesResponse?.length === 2) {
        createCartResponse = promisesResponse?.[1];
      }
      // If Cart
      if (typeof promisesResponse?.[0]?.[0] === 'object') {
        createCartResponse = promisesResponse?.[0];
      }
      dispatch(
        userSlice.actions.getUserCart(
          formatLocalCartToUserCart(localCart, userCart?.lineItems || [], createCartResponse, cartId)
        )
      );
    }
  } catch (error) {
    console.log('Error Cart:', error);
    dispatch(
      alertSlice.actions.setAlert({
        id: uuidv4(),
        type: 'error',
        message: `Error Updating your cart`,
        timeout: 2000,
      })
    );
    return userCart;
  }
}

export const createCart = async (userId = '') => {
  const { id } = store.getState().user.data;
  try {
    const idToCreate = userId || id;
    if (!idToCreate) {
      return '';
    }
    // 1. Get Products
    const createCartResponse = await API.graphql({
      query: createCartMutation,
      variables: { input: { id: idToCreate } },
    });

    const createdCart = createCartResponse?.data?.createCart || '';

    if (!createdCart?.id) {
      dispatch(
        alertSlice.actions.setAlert({
          id: uuidv4(),
          type: 'error',
          message: `Error Updating your cart`,
          timeout: 2000,
        })
      );
    }

    return createdCart?.id || '';
  } catch (error) {
    dispatch(
      alertSlice.actions.setAlert({
        id: uuidv4(),
        type: 'error',
        message: `Error Updating your cart`,
        timeout: 2000,
      })
    );

    return '';
  }
};

// CART LINE ITEMS

export const createCartLineItems = async (items) => {
  try {
    // 1. Get Products
    const addItemsToCartResponse = await API.graphql({
      query: batchAddCartLineItems,
      variables: { items },
    });

    const itemsCreated = addItemsToCartResponse?.data?.batchAddCartLineItems || [];

    return itemsCreated;
  } catch (error) {
    console.log('Batch Create Error: ', error);
    return null;
  }
};

export const deleteCartLineItems = async (ids) => {
  try {
    // 1. Get Products
    const addItemsToCartResponse = await API.graphql({
      query: batchDeleteCartLineItems,
      variables: { ids },
    });

    const itemsCreated = addItemsToCartResponse?.data?.batchDeleteCartLineItems || [];

    return itemsCreated;
  } catch (error) {
    console.log('Batch Create Error: ', error);
    return null;
  }
};
