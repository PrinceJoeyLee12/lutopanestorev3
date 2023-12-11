import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import { Box, Grid, Card, Button, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { formatBillingInfo, cartQuantityChecker } from 'utils/index';
import EmptyContent from 'components/EmptyContent';
import { useDispatch, useSelector } from 'redux/store';
import { onBackStep, onNextStep, createBilling } from 'redux/slices/product/product';
import { saveBillingAddress, deleteAddress, getCart } from 'redux/slices/user/actions';
import { _addressBooks } from '_mock';
import Label from 'components/Label';
import Iconify from 'components/Iconify';
import CheckoutSummary from './CheckoutSummary';
import CheckoutNewAddressForm from './CheckoutNewAddressForm';

// ----------------------------------------------------------------------

export default function CheckoutBillingAddress({ setOpenModalErrorQuantity }) {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { checkout } = useSelector((state) => state.product);
  const { billingInfo } = useSelector((state) => state.user.data);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const formattedBillingInfo = formatBillingInfo(billingInfo) || [];

  const { total, discount, subtotal, shipping } = checkout;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNextStep = () => {
    dispatch(onNextStep());
  };

  const handleBackStep = () => {
    dispatch(onBackStep());
  };

  const checkCartItems = useCallback(async () => {
    const cart = await getCart(true);
    const { requestQuantityIsInAvailability } = cartQuantityChecker(cart);
    if (requestQuantityIsInAvailability) {
      // 1. navigate to next step
      dispatch(onNextStep());
    } else {
      setOpenModalErrorQuantity(true);
    }
  }, []);

  const handleCreateBilling = useCallback(
    async (value) => {
      setIsSubmitting(true);
      await saveBillingAddress(value);
      await checkCartItems();
      setIsSubmitting(false);
    },
    [isAuthenticated]
  );

  const handleSelectedBilling = useCallback(
    async (addressBilling) => {
      const address = billingInfo?.find((add) => add?.id === addressBilling?.id);
      setIsSubmitting(true);
      if (address) {
        dispatch(createBilling(address));
      }
      await checkCartItems();
      setIsSubmitting(false);
      // await saveBillingAddressOnLocalStorage(value);
    },
    [isAuthenticated]
  );

  const handleDeleteAddress = useCallback(
    async (id) => {
      if (id) {
        await deleteAddress(id);
      }

      // dispatch(createBilling(value));
    },
    [isAuthenticated]
  );

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {!formattedBillingInfo?.length && (
            <Card sx={{ p: 3, mb: 3, position: 'relative' }}>
              <EmptyContent
                title="Billing and Address is Empty"
                description="Look like you have no delivery and billing address yet."
                ignorImage
                ButtonComponent={() => (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button size="small" onClick={handleClickOpen} startIcon={<Iconify icon={'eva:plus-fill'} />}>
                      Add new address
                    </Button>
                  </Box>
                )}
              />
            </Card>
          )}
          {formattedBillingInfo?.map((address, index) => (
            <AddressItem
              key={index}
              address={address}
              selectedBilling={handleSelectedBilling}
              deleteAddress={handleDeleteAddress}
              isSubmitting={isSubmitting}
            />
          ))}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              size="small"
              color="inherit"
              onClick={handleBackStep}
              startIcon={<Iconify icon={'eva:arrow-ios-back-fill'} />}
            >
              Back
            </Button>
            <Button size="small" onClick={handleClickOpen} startIcon={<Iconify icon={'eva:plus-fill'} />}>
              Add new address
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <CheckoutSummary subtotal={subtotal} total={total} discount={discount} shipping={shipping} />
        </Grid>
      </Grid>
      <CheckoutNewAddressForm
        open={open}
        onClose={handleClose}
        onNextStep={handleNextStep}
        onCreateBilling={handleCreateBilling}
      />
    </>
  );
}

// ----------------------------------------------------------------------

AddressItem.propTypes = {
  address: PropTypes.object,
  selectedBilling: PropTypes.func,
};

function AddressItem({ address, selectedBilling, deleteAddress, isSubmitting }) {
  const { receiver, fullAddress, addressType, phone, isDefault, id } = address;

  const handleCreateBilling = async () => {
    await selectedBilling(address);
  };

  const handleDeleteAddress = () => {
    deleteAddress(id);
  };

  return (
    <Card sx={{ p: 3, mb: 3, position: 'relative' }}>
      <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle1">{receiver}</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          &nbsp;({addressType})
        </Typography>

        {isDefault && (
          <Label color="info" sx={{ ml: 1 }}>
            Default
          </Label>
        )}
      </Box>

      <Typography variant="body2" gutterBottom>
        {fullAddress}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {phone}
      </Typography>

      <Box
        sx={{
          mt: 3,
          display: 'flex',
          position: { sm: 'absolute' },
          right: { sm: 24 },
          bottom: { sm: 24 },
        }}
      >
        {!isDefault && (
          <Button variant="outlined" size="small" color="inherit" onClick={handleDeleteAddress} disabled={isSubmitting}>
            Delete
          </Button>
        )}
        <Box sx={{ mx: 0.5 }} />
        <LoadingButton variant="outlined" size="small" onClick={handleCreateBilling} loading={isSubmitting}>
          Deliver to this Address
        </LoadingButton>
      </Box>
    </Card>
  );
}
