import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Avatar,
  Box,
  Chip,
} from '@mui/material';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'Kevin',
    email: 'business.online@zylker.com',
    phone: '+911212121212',
    workspace: 'Consultations - New York',
    role: 'Super Admin',
    designation: 'Business Owner',
    dob: '1995-03-15',
    gender: 'Male',
    status: 'Active',
    bio: 'I am Kevin and I provide world-class software solutions which cut costs and improve efficiency. I have five years of business solutions experience in the industry. I can certainly help you to build the infrastructure to optimize it. You',
  });

  const [editMode, setEditMode] = useState(false);

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleSaveProfile = () => {
    // Save the updated profile data
    setEditMode(false);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        User Profile
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome! Here you can view your appointments, update your profile, and more.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2}>
                <Avatar alt={userProfile.name} src="/avatar.png" sx={{ width: 120, height: 120 }} />
              </Box>
              <Typography variant="h6" align="center" gutterBottom>
                {userProfile.name}
              </Typography>
              <Typography variant="body2" align="center" color="textSecondary">
                {userProfile.designation}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Profile Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    value={userProfile.name}
                    disabled={!editMode}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    value={userProfile.email}
                    disabled={!editMode}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone"
                    value={userProfile.phone}
                    disabled={!editMode}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Workspace"
                    value={userProfile.workspace}
                    disabled={!editMode}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Role"
                    value={userProfile.role}
                    disabled={!editMode}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Designation"
                    value={userProfile.designation}
                    disabled={!editMode}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Date of Birth"
                    value={userProfile.dob}
                    disabled={!editMode}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Gender"
                    value={userProfile.gender}
                    disabled={!editMode}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Bio"
                    value={userProfile.bio}
                    disabled={!editMode}
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Box display="flex" justifyContent="flex-end" mt={2}>
                <Chip
                  label={userProfile.status}
                  color={userProfile.status === 'Active' ? 'success' : 'default'}
                  variant="outlined"
                  sx={{ mr: 2 }}
                />
                {editMode ? (
                  <>
                    <Button variant="contained" color="primary" onClick={handleSaveProfile}>
                      Save
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={handleCancelEdit} sx={{ ml: 1 }}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button variant="contained" color="primary" onClick={handleEditProfile}>
                    Edit Profile
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserProfile;