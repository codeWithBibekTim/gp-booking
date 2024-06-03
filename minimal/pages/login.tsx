import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Link } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      if (response.data.success) {
        // Redirect to appropriate profile page after successful login
        router.push('/user-profile');
      } else {
        // Display error message for invalid login credentials
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Display generic error message for login failure
      alert('Error logging in');
    }
  };

  const handlePasswordReset = async () => {
    try {
      await axios.post('/api/password-reset', { email });
      // Display success message for password reset link sent
      alert('Password reset link sent to your email');
    } catch (error) {
      console.error('Error sending password reset link:', error);
      // Display error message for password reset link failure
      alert('Error sending password reset link');
    }
  };

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
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => signIn('google')}
            sx={{ mt: 1 }}
          >
            Sign in with Google
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => signIn('facebook')}
            sx={{ mt: 1 }}
          >
            Sign in with Facebook
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
