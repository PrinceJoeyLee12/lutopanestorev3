// @mui
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useForgotPasswordHook } from 'sections/auth/reset-password/ResetPasswordForm';
// layouts
import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';
// components
import Page from '../../components/Page';
// sections
import { NewPasswordForm } from '../../sections/auth/new-password';
// assets
import { SentIcon } from '../../assets';

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

export default function NewPassword() {
  const { delayValueString, onSubmit, isSubmitting, sendingCode, userData } = useForgotPasswordHook();
  const [email, setEmail] = useState(userData?.email);

  return (
    <Page title="New Password">
      <LogoOnlyLayout />

      <Container>
        <ContentStyle sx={{ textAlign: 'center' }}>
          <SentIcon sx={{ mb: 5, mx: 'auto', height: 120 }} />

          <Typography variant="h3" gutterBottom>
            Request sent successfully!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            We've sent a 6-digit confirmation email to your email.
            <br />
            Please enter the code in below box to verify your email.
          </Typography>

          <Box sx={{ mt: 5, mb: 3 }}>
            <NewPasswordForm email={email} setEmail={setEmail} />
          </Box>

          <Typography variant="body2">
            Don’t have a code? &nbsp;
            <LoadingButton
              onClick={() => onSubmit({ email })}
              variant="text"
              loading={sendingCode || isSubmitting}
              disabled={Boolean(delayValueString)}
            >
              {`Resend code ${delayValueString}`}
            </LoadingButton>
          </Typography>
        </ContentStyle>
      </Container>
    </Page>
  );
}
