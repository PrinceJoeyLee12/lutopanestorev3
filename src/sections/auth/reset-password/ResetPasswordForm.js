import * as Yup from 'yup';
import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useAuth from 'hooks/useAuth';
import { useSelector } from 'redux/store';
import { Stack, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_AUTH } from '../../../routes/paths';
// components
import { FormProvider, RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export const useForgotPasswordHook = () => {
  const navigate = useNavigate();
  const { forgotPasswordSendEmail } = useAuth();
  const { data: userData } = useSelector((state) => state.user);

  const [sendingCode, setSendingCode] = useState(false);
  const [resendIsClicked, setResendIsClicked] = useState(false);
  const numberOfTimesInSendingCode = useRef(0);
  const [delayValueString, setDelayValueString] = useState('');

  useEffect(() => {
    if (resendIsClicked && numberOfTimesInSendingCode.current > 0) {
      setResendIsClicked(false);
      startTimer(numberOfTimesInSendingCode.current * 30);
    }
  }, [numberOfTimesInSendingCode, resendIsClicked]);

  const startTimer = (duration) => {
    let timer = duration;
    let minutes;
    let seconds;
    const resendTimer = setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0'.concat(minutes) : minutes;
      seconds = seconds < 10 ? '0'.concat(seconds) : seconds;

      setDelayValueString(` ${minutes}:${seconds}`);

      // eslint-disable-next-line
      if (--timer < 0) {
        setDelayValueString('');
        clearInterval(resendTimer);
      }
    }, 1000);
  };

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  });
  const defaultValues = useMemo(
    () => ({
      email: userData?.email || '',
    }),
    [userData]
  );

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = useCallback(
    async (data) => {
      setSendingCode(true);
      if (data.email) {
        const response = await forgotPasswordSendEmail(data.email);
        // eslint-disable-next-line
        if (response.success) {
          numberOfTimesInSendingCode.current += 1;
          setResendIsClicked(true);
          navigate(PATH_AUTH.newPassword);
        }
      }
      setSendingCode(false);
    },
    [numberOfTimesInSendingCode]
  );
  return {
    delayValueString,
    onSubmit,
    isSubmitting,
    methods,
    sendingCode,
    errors,
    handleSubmit,
    userData,
  };
};

export default function ResetPasswordForm() {
  const { delayValueString, onSubmit, isSubmitting, methods, sendingCode, errors, handleSubmit } =
    useForgotPasswordHook();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        <RHFTextField name="email" label="Email address" />

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={sendingCode || isSubmitting}
          disabled={Boolean(delayValueString)}
        >
          {`Send Request ${delayValueString}`}
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
