import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useMemo } from 'react';
import { useSnackbar } from 'notistack';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, Typography } from '@mui/material';
import { decodePHPhoneNumber, encodePHPhoneNumber } from 'utils/index';
import { updateUserProfileData } from 'redux/slices/user/actions';
// components
import Label from 'components/Label';
import { FormProvider, RHFTextField } from 'components/hook-form';
import { VerificationCard } from './VerificationCard';

// ----------------------------------------------------------------------

SimpleProfileForm.propTypes = {
  currentUser: PropTypes.object,
};

export default function SimpleProfileForm({ currentUser }) {
  const { enqueueSnackbar } = useSnackbar();

  const isUserVerified = currentUser?.isVerified;

  const NewUserSchema = Yup.object().shape({
    lastName: Yup.string().required('Last Name is required'),
    firstName: Yup.string().required('First Name is required'),
    email: Yup.string().required('Email is required').email(),
    number_1: Yup.string()
      .min(11, 'Must be exactly 11 digits')
      .max(11, 'Must be exactly 11 digits')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .test({
        message: "Number should starts with '09'",
        test: (value) => {
          return value.startsWith('09');
        },
      }),
    isVerified: Yup.string().required('Phone number is required'),
  });

  const defaultValues = useMemo(
    () => ({
      lastName: currentUser?.lastName || '',
      firstName: currentUser?.firstName || '',
      email: currentUser?.email || '',
      number_1: decodePHPhoneNumber(currentUser?.number_1) || '09',
      isVerified: isUserVerified,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentUser]
  );

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = methods;

  const values = watch();

  const onSubmit = async () => {
    try {
      const { isVerified, number_1, ...restValues } = values;
      await updateUserProfileData({ ...restValues, number_1: encodePHPhoneNumber(number_1) });
      reset(values);
      enqueueSnackbar('Update success!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card sx={{ py: 10, px: 3 }}>
          <Label
            color={!isUserVerified ? 'warning' : 'success'}
            sx={{ textTransform: 'uppercase', position: 'absolute', top: 24, right: 24 }}
          >
            {isUserVerified ? 'verified' : 'unverified'}
          </Label>

          <>
            <Typography variant="subtitle2" sx={{ mb: 0.5, textDecorationLine: true }}>
              Email: <span textDecoration="underline">{currentUser.email}</span>
            </Typography>
            {isUserVerified ? (
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                This email is verified!
              </Typography>
            ) : (
              <VerificationCard currentUser={currentUser} values={values} />
            )}
          </>
        </Card>
      </Grid>

      <Grid item xs={12} md={8}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="firstName" label="First Name" />
              <RHFTextField name="lastName" label="Last Name" />
              <RHFTextField name="email" label="Email Address" disabled />
              <RHFTextField name="number_1" label="Phone Number" />
            </Box>

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting} disabled={!isDirty}>
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </FormProvider>
      </Grid>
    </Grid>
  );
}
