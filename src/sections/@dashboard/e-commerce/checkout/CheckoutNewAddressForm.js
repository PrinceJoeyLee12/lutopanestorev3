import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Stack, Dialog, Button, Divider, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useAddressFormHook, addressDefaultValues, yupOnDefaultAddressValue } from 'hooks/useAddressHook';
import { useDispatch } from 'redux/store';
import { FormProvider, RHFCheckbox, RHFSelect, RHFTextField, RHFRadioGroup } from 'components/hook-form';

// ----------------------------------------------------------------------

CheckoutNewAddressForm.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onNextStep: PropTypes.func,
  onCreateBilling: PropTypes.func,
};

export default function CheckoutNewAddressForm({ open, onClose, onCreateBilling }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();

  const defaultValues = {
    ...addressDefaultValues,
    addressType: 'Home',
    phone: '09',
    email: '',
    city: '',
    state: '',
    country: 'Philippines',
    zipcode: '',
    isDefault: true,
    firstName: '',
    lastName: '',
  };

  const NewAddressSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    phone: Yup.string()
      .min(11, 'Must be exactly 11 digits')
      .max(11, 'Must be exactly 11 digits')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .test({
        message: "Number should starts with '09'",
        test: (value) => {
          return value.startsWith('09');
        },
      }),
    email: Yup.string().email('Email must be a valid email address'),
    ...yupOnDefaultAddressValue,
  });

  const methods = useForm({
    resolver: yupResolver(NewAddressSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = methods;
  
  const values = watch();

  // useEffect(() => {
  //   const firstError = Object.keys(errors).reduce((field, a) => {
  //     return !!errors[field] ? field : a;
  //   }, null);

  //   if (firstError) {
  //     setFocus(firstError);
  //   }
  // }, [errors, setFocus]);

  const { regList, barangayList, cityList, stateList } = useAddressFormHook({ watch, setValue });

  const onSubmit = useCallback(async () => {
    if (errors?.length) {
      return;
    }
    setIsSubmitting(true);
    try {
      await onCreateBilling(values);
      onClose();
    } catch (error) {
      console.error(error);
    }
    reset();
    onClose();
    setIsSubmitting(false);
  }, [errors, values]);

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
      <DialogTitle>Add new address</DialogTitle>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Stack spacing={3}>
            <RHFRadioGroup
              name="addressType"
              options={[
                { label: 'Home', value: 'Home' },
                { label: 'Office', value: 'Office' },
              ]}
            />

            <Box
              sx={{
                display: 'grid',
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="firstName" label="First Name" />
              <RHFTextField name="lastName" label="Last Name" />
            </Box>
            <Box
              sx={{
                display: 'grid',
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="phone" label="Phone Number" placeholder="09xxxxxxxx" type="number" />
              <RHFTextField name="email" label="Email (Optional)" />
            </Box>

            {/* <RHFSelect name="country" label="Country">
              {countries.map((option) => (
                <option key={option.code} value={option.label} disabled>
                  {option.label}
                </option>
              ))}
            </RHFSelect> */}

            <Box
              sx={{
                display: 'grid',
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFSelect name="region" label="Region" placeholder="region">
                <option value="" />
                {(regList?.current ?? []).map((option) => (
                  <option key={option.region_name} value={option.region_name}>
                    {option.region_name}
                  </option>
                ))}
              </RHFSelect>
              <RHFSelect name="state" label="State" placeholder="state">
                <option value="" />
                {stateList.map((option) => (
                  <option key={option.province_name} value={option.province_name}>
                    {option.province_name}
                  </option>
                ))}
              </RHFSelect>
            </Box>

            <Box
              sx={{
                display: 'grid',
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFSelect name="city" label="City" placeholder="city">
                <option value="" />
                {cityList.map((option) => (
                  <option key={option.city_name} value={option.city_name}>
                    {option.city_name}
                  </option>
                ))}
              </RHFSelect>
              <RHFSelect name="barangay" label="Barangay" placeholder="barangay">
                <option value="" />
                {barangayList.map((option) => (
                  <option key={option.brgy_name} value={option.brgy_name}>
                    {option.brgy_name}
                  </option>
                ))}
              </RHFSelect>
            </Box>

            <RHFTextField name="addressLine1" label="Address Line" />
            <RHFTextField name="landMark" label="Land Mark" multiline maxRows={4} />

            <RHFCheckbox name="isDefault" label="Use this address as default." sx={{ mt: 1 }} />
            {/* <RHFCheckbox name="agreeInAccountCreation" label="By creating with this ." sx={{ mt: 3 }} /> */}
          </Stack>
        </DialogContent>

        <Divider />

        <DialogActions>
          <LoadingButton type="submit" size="medium" variant="contained" loading={isSubmitting}>
            Deliver to this Address
          </LoadingButton>
          <Button color="inherit" variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
}
