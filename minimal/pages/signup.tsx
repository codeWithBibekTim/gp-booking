import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Link, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      const response = await axios.post('/api/signup', { email, password, role });
      if (response.data.success) {
        router.push('/login'); // Redirect to login page after successful signup
      } else {
        alert('Signup failed');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Sign Up
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
            label="Phone"
            type="Phone"
            fullWidth
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
           // required
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
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Sign Up
          </Button>
        </form>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" align="center">
            Already have an account?{' '}
            <Link href="/login" underline="hover">
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
