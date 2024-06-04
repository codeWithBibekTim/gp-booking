import React, { useState, useEffect } from 'react';
import { Box, Button, Container, TextField, Typography, Link } from '@mui/material';
import { useRouter } from 'next/router';
import { signIn, useSession, sendPasswordReset } from 'next-auth/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      router.push('/user-profile');
    }
  }, [session, router]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (!result.error) {
      // Handle success here
    } else {
      alert(result.error);
    }
  };

  const handlePasswordReset = async () => {
    try {
      await sendPasswordReset(email);
      alert('Password reset link sent to your email');
    } catch (error) {
      console.error('Error sending password reset link:', error);
      alert('Error sending password reset link');
    }
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" align="center">
            Don't have an account?{' '}
            <Link href="/signup" underline="hover">
              Sign up
            </Link>
          </Typography>
          <Typography variant="body2" align="center" sx={{ mt: 1 }}>
            Forgot password?{' '}
            <Link component="button" onClick={handlePasswordReset} underline="hover">
              Reset Password
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
