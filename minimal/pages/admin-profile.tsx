import React from 'react';
import { Container, Typography } from '@mui/material';

const AdminProfile = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Profile
      </Typography>
      <Typography variant="body1">
        Welcome, Admin! Here you can manage users, view statistics, and more.
      </Typography>
      {/* Add more admin-specific functionalities here */}
    </Container>
  );
};

export default AdminProfile;
