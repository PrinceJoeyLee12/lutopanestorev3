import { useCallback, useState } from 'react';
import sum from 'lodash/sum';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Grid, Card, CardHeader, Button, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { getCart } from 'redux/slices/user/actions';
import { cartQuantityChecker } from 'utils/index';
import { useCartHookListener } from 'hooks/useCartHookListener';
// redux
import { useDispatch, useSelector } from '../../../../redux/store';
import {
  deleteCart,
  onNextStep,
  applyDiscount,
  increaseQuantity,
  decreaseQuantity,
} from '../../../../redux/slices/product/product';
// routes
import { PATH } from '../../../../routes/paths';
// components
import Iconify from '../../../../components/Iconify';
import Scrollbar from '../../../../components/Scrollbar';
import EmptyContent from '../../../../components/EmptyContent';
//
import CheckoutSummary from './CheckoutSummary';
import CheckoutProductList from './CheckoutProductList';

// ----------------------------------------------------------------------

export default function CheckoutCart({ setOpenModalErrorQuantity }) {
  const dispatch = useDispatch();

  useCartHookListener();

  const { checkout } = useSelector((state) => state.product);
  const { cartId: userCartId } = useSelector((state) => state.user.cart);

  const [loading, setLoading] = useState(false);

  const { cart, total, discount, subtotal } = checkout;

  const totalItems = sum(cart.map((item) => item.quantity));

  const isEmptyCart = cart.length === 0;

  const handleDeleteCart = (productId) => {
    dispatch(deleteCart(productId));
  };

  const handleNextStep = useCallback(async () => {
    setLoading(true);
    const cart = await getCart(true);
    const { requestQuantityIsInAvailability } = cartQuantityChecker(cart);
    setLoading(false);
    if (requestQuantityIsInAvailability) {
      dispatch(onNextStep());
    } else {
      setOpenModalErrorQuantity(true);
    }
  }, []);

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleApplyDiscount = (value) => {
    dispatch(applyDiscount(value));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Cart
                <Typography component="span" sx={{ color: 'text.secondary' }}>
                  &nbsp;({totalItems} item)
                </Typography>
              </Typography>
            }
            sx={{ mb: 3 }}
          />

          {!isEmptyCart ? (
            <Scrollbar>
              <CheckoutProductList
                products={cart}
                onDelete={handleDeleteCart}
                onIncreaseQuantity={handleIncreaseQuantity}
                onDecreaseQuantity={handleDecreaseQuantity}
              />
            </Scrollbar>
          ) : (
            <EmptyContent
              title="Cart is empty"
              description="Look like you have no items in your shopping cart."
              img="/assets/illustrations/illustration_empty_cart.svg"
            />
          )}
        </Card>

        <Button
          color="inherit"
          component={RouterLink}
          to={PATH.eCommerce.root}
          startIcon={<Iconify icon={'eva:arrow-ios-back-fill'} />}
        >
          Continue Shopping
        </Button>
      </Grid>

      <Grid item xs={12} md={4}>
        <CheckoutSummary
          enableDiscount={false}
          total={total}
          discount={discount}
          subtotal={subtotal}
          onApplyDiscount={handleApplyDiscount}
        />
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          loading={loading}
          variant="contained"
          disabled={cart.length === 0 || !userCartId}
          onClick={handleNextStep}
        >
          Check Out
        </LoadingButton>
      </Grid>
    </Grid>
  );
}
