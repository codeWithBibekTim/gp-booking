import React from 'react';
import { Container, Typography } from '@mui/material';

const UserProfile = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        User Profile
      </Typography>
      <Typography variant="body1">
        Welcome! Here you can view your appointments, update your profile, and more.
      </Typography>
      {/* Add more user-specific functionalities here */}
    </Container>
  );
};

export default UserProfile;
