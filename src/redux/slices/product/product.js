import { createSlice } from '@reduxjs/toolkit';
import sum from 'lodash/sum';
import uniqBy from 'lodash/uniqBy';
import { createProductOptions, calculateCart } from 'utils/product/index';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  products: [],
  product: null,
  sortBy: null,
  storeCategories: [],
  filters: {
    categories: ['All'],
  },
  checkout: {
    activeStep: 0,
    cart: [],
    shouldUpdateCart: false,
    subtotal: 0,
    total: 0,
    discount: 0,
    shipping: 0,
    billing: null,
  },
};

export const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET CATEGORIES
    getStoreCategories(state, action) {
      state.isLoading = false;
      state.storeCategories = action.payload;
    },

    // logout user
    logoutUser(state, action) {
      state = initialState;
    },

    // GET CATEGORIES
    resetProduct(state) {
      state.product = null;
    },

    // GET PRODUCTS
    getProductsSuccess(state, action) {
      state.isLoading = false;
      state.products = action.payload;
    },

    // GET PRODUCT
    getProductSuccess(state, action) {
      state.isLoading = false;
      state.product = action.payload;
    },

    //  SORT & FILTER PRODUCTS
    sortByProducts(state, action) {
      state.sortBy = action.payload;
    },

    filterProducts(state, action) {
      state.filters.categories = action.payload.categories;
    },

    // CHECKOUT
    getCart(state, action) {
      const cart = action.payload || state.checkout.cart;

      const discount = cart.length === 0 ? 0 : state.checkout.discount;
      const billing = cart.length === 0 ? null : state.checkout.billing;

      const { shipping, subtotal, total } = calculateCart(cart);

      state.checkout.cart = cart;
      state.checkout.discount = discount;
      state.checkout.shipping = shipping;
      state.checkout.billing = billing;
      state.checkout.subtotal = subtotal;
      state.checkout.total = total;
    },

    addCart(state, action) {
      const payload = action.payload;
      const variant = payload.variant;
      const price = variant.price;
      const quantity = payload.quantity;
      const subtotal = price * quantity;
      const product = {
        id: variant.id,
        available: variant.inventory,
        cover: payload.cover,
        name: payload.name,
        options: createProductOptions(payload, variant),
        price, // price sale should comes first
        salePrice: variant?.salePrice || '',
        quantity,
        subtotal,
        code: payload.code,
      };
      const isEmptyCart = state.checkout.cart.length === 0;

      if (isEmptyCart) {
        state.checkout.cart = [...state.checkout.cart, product];
      } else {
        state.checkout.cart = state.checkout.cart.map((_product) => {
          const isExisted = _product.id === product.id;
          if (isExisted) {
            return {
              ..._product,
              quantity: _product.quantity + quantity,
            };
          }
          return _product;
        });
      }

      const udpatedCart = uniqBy([...state.checkout.cart, product], 'id');
      const { shipping, subtotal: cartSubtotal, total } = calculateCart(udpatedCart);

      state.checkout.cart = udpatedCart;
      state.checkout.shipping = shipping;
      state.checkout.total = total;
      state.checkout.subtotal = cartSubtotal;
      // Set active step to zero if adding as this is done only on the product page and Cart Page
      state.checkout.activeStep = 0;
    },

    deleteCart(state, action) {
      const updateCart = state.checkout.cart.filter((item) => item.id !== action.payload);

      const { shipping, subtotal, total } = calculateCart(updateCart);

      state.checkout.cart = updateCart;
      state.checkout.shipping = shipping;
      state.checkout.total = total;
      state.checkout.subtotal = subtotal;
    },

    resetCart(state) {
      state.checkout.activeStep = 0;
      state.checkout.cart = [];
      state.checkout.total = 0;
      state.checkout.subtotal = 0;
      state.checkout.discount = 0;
      state.checkout.shipping = 0;
      state.checkout.billing = null;
    },

    onBackStep(state) {
      state.checkout.activeStep -= 1;
    },

    onNextStep(state) {
      state.checkout.activeStep += 1;
    },

    resetStep(state) {
      state.checkout.activeStep = 0;
    },

    onGotoStep(state, action) {
      const goToStep = action.payload;
      state.checkout.activeStep = goToStep;
    },

    increaseQuantity(state, action) {
      const productId = action.payload;
      const updateCart = state.checkout.cart.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });

      const { shipping, subtotal, total } = calculateCart(updateCart);

      state.checkout.cart = updateCart;
      state.checkout.shipping = shipping;
      state.checkout.total = total;
      state.checkout.subtotal = subtotal;
    },

    decreaseQuantity(state, action) {
      const productId = action.payload;
      const updateCart = state.checkout.cart.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });

      const { shipping, subtotal, total } = calculateCart(updateCart);

      state.checkout.cart = updateCart;
      state.checkout.shipping = shipping;
      state.checkout.total = total;
      state.checkout.subtotal = subtotal;
    },

    createBilling(state, action) {
      state.checkout.billing = action.payload;
    },

    applyDiscount(state, action) {
      const discount = action.payload;
      state.checkout.discount = discount;
      state.checkout.total = state.checkout.subtotal - discount;
    },

    applyShipping(state, action) {
      const shipping = action.payload;
      state.checkout.shipping = shipping;
      state.checkout.total = state.checkout.subtotal - state.checkout.discount + shipping;
    },

    setActiveStep(state, action) {
      state.checkout.activeStep = action.payload || 0;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  getCart,
  setActiveStep,
  resetStep,
  addCart,
  resetCart,
  onGotoStep,
  onBackStep,
  onNextStep,
  deleteCart,
  createBilling,
  applyShipping,
  applyDiscount,
  increaseQuantity,
  decreaseQuantity,
  sortByProducts,
  filterProducts,
} = slice.actions;
