import { useEffect, useCallback } from 'react';
import { dispatch, store, useSelector } from 'redux/store';
import { useDebounceSearch } from 'hooks/useDebounceSearch';
import { updateCart } from 'redux/slices/product/actions';
import { cartHasChangesFunction, getDeviceId } from 'utils/index';

export const useCartHookListener = async () => {
  const { debounceSearch, clearTimeoutFunc } = useDebounceSearch();

  const userState = useSelector((state) => state.user);
  const isAuthenticated = userState?.isAuthenticated;

  const localCart = store.getState().product.checkout?.cart || [];
  const userCart = store.getState().user?.cart || { cartId: '', lineItems: [] };
  const isUserCartFetched = store.getState().user?.cartIsFetched || false;

  const handleCartAction = useCallback(
    async (localCartValue) => {
      const hasChange = cartHasChangesFunction(localCartValue, userCart);
      const deviceId = !isAuthenticated ? await getDeviceId() : '';
      if (hasChange) {
        await updateCart(deviceId?.identifier);
      }
    },
    [userCart, isAuthenticated]
  );

  // Delay updating on cart for user input to
  useEffect(() => {
    if ((isAuthenticated && isUserCartFetched) || !isAuthenticated) {
      clearTimeoutFunc();
      debounceSearch(handleCartAction, localCart)();
    }
  }, [localCart, isAuthenticated, isUserCartFetched]);
};
