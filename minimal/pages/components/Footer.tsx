'use client';

import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container maxWidth='lg'>
        <Grid container spacing={4} justifyContent='space-between'>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant='h6' gutterBottom>
              For Patients
            </Typography>
            <Link href='/find-a-doctor' passHref>
              <Typography variant='subtitle1' color='textSecondary'>
                Find a Doctor
              </Typography>
            </Link>
            <br />
            <Link href='/find-a-dentist' passHref>
              <Typography variant='subtitle1' color='textSecondary'>
                Find a Dentist
              </Typography>
            </Link>
            <br />
            <Link href='/find-a-physiotherapist' passHref>
              <Typography variant='subtitle1' color='textSecondary'>
                Find a Physiotherapist
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant='h6' gutterBottom>
              For Practices
            </Typography>
            <Link href='/general-practice' passHref>
              <Typography variant='subtitle1' color='textSecondary'>
                General Practice
              </Typography>
            </Link>
            <br />
            <Link href='/allied-health' passHref>
              <Typography variant='subtitle1' color='textSecondary'>
                Allied Health
              </Typography>
            </Link>
            <br />
            <Link href='/dentists' passHref>
              <Typography variant='subtitle1' color='textSecondary'>
                Dentists
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant='h6' gutterBottom>
              HelloDoc
            </Typography>
            <Link href='/about' passHref>
              <Typography variant='subtitle1' color='textSecondary'>
                About us
              </Typography>
            </Link>
            <br />
            <Link href='/careers' passHref>
              <Typography variant='subtitle1' color='textSecondary'>
                Careers
              </Typography>
            </Link>
            <br />
            <Link href='/contact' passHref>
              <Typography variant='subtitle1' color='textSecondary'>
                Contact us
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Box mt={4} textAlign='center'>
          <Typography variant='body2' color='textSecondary'>
            © 2024 HelloDoc Online Pty Ltd
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
