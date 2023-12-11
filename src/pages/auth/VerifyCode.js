import {useCallback } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useAuth from 'hooks/useAuth';
import { useResendDelayHook } from 'hooks/useResendDelayHook';
import { useSelector } from 'redux/store';
import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';
import Page from '../../components/Page';
import { VerifyCodeForm } from '../../sections/auth/verify-code';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function VerifyCode() {
  const { verify: confirmRegistration, resendConfirmation } = useAuth();
  const { data: userData } = useSelector((state) => state.user);

  const handleClickResendCode = useCallback(async () => {
    if (userData.email) {
      await resendConfirmation(userData.email);
    }
  }, [userData]);

  const { delayValueString, handleClick, sendingCode } = useResendDelayHook({
    handleClickTrigger: handleClickResendCode,
  });

  return (
    <Page title="Verify Code">
      <LogoOnlyLayout />

      <Container>
        <ContentStyle sx={{ textAlign: 'center' }}>
          <Typography variant="h3" paragraph>
            Please check your email!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            {`We have emailed a 6-digit confirmation code to ${userData.email}, please enter the code in below box to verify your
            email.`}
          </Typography>

          <Box sx={{ mt: 5, mb: 3 }}>
            <VerifyCodeForm confirmRegistration={confirmRegistration} email={userData.email} />
          </Box>

          <Typography variant="body2">
            Don’t have a code? &nbsp;
            <LoadingButton
              loading={sendingCode}
              variant="text"
              onClick={handleClick}
              disabled={Boolean(delayValueString)}
            >
              {' '}
              <b>{`Resend Code ${delayValueString}`}</b>
            </LoadingButton>
          </Typography>
        </ContentStyle>
      </Container>
    </Page>
  );
}
