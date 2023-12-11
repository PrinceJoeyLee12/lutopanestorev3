import { useCallback, useState } from 'react';
import { Card, Typography, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Label from 'components/Label';
import useAuth from 'hooks/useAuth';
import { useResendDelayHook } from 'hooks/useResendDelayHook';
import useResponsive from 'hooks/useResponsive';
import { VerifyCodeForm } from 'sections/auth/verify-code';

export const VerificationCard = ({ values, currentUser }) => {
  const { verify: confirmRegistration, resendConfirmation } = useAuth();
  const [isClickedSend, setIsClickedSend] = useState(false);
  const isDesktop = useResponsive('up', 'sm');

  const handleClickResendCode = useCallback(async () => {
    setIsClickedSend(true);
    if (currentUser.email) {
      await resendConfirmation(currentUser.email);
    }
  }, [currentUser]);

  const { delayValueString, handleClick, sendingCode } = useResendDelayHook({
    handleClickTrigger: handleClickResendCode,
  });

  return (
<>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Don’t have a code? &nbsp;
          <LoadingButton
            loading={sendingCode}
            variant="text"
            onClick={handleClick}
            disabled={Boolean(delayValueString)}
          >
            <b>{`Resend Code ${delayValueString}`}</b>
          </LoadingButton>
        </Typography>
        {isClickedSend && (
          <Box sx={{ mt: 5, mb: 3 }}>
            <VerifyCodeForm
              confirmRegistration={confirmRegistration}
              email={currentUser.email}
              shouldNavigate={false}
              cardComponentSx={isDesktop ? { width: { xs: 25, sm: 35 }, height: { xs: 25, sm: 35 } } : null}
            />
          </Box>
        )}</>
  );
};
