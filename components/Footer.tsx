'use client';

import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container maxWidth='lg'>
        <Grid container spacing={4} justifyContent='space-between'>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant='h6' gutterBottom>
              For Patients
            </Typography>
            <Link href='#' variant='subtitle1' color='textSecondary'>
              Find a Doctor
            </Link>
            <br />
            <Link href='#' variant='subtitle1' color='textSecondary'>
              Find a Dentist
            </Link>
            <br />
            <Link href='#' variant='subtitle1' color='textSecondary'>
              Find a Physiotherapist
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant='h6' gutterBottom>
              For Practices
            </Typography>
            <Link href='#' variant='subtitle1' color='textSecondary'>
              General Practice
            </Link>
            <br />
            <Link href='#' variant='subtitle1' color='textSecondary'>
              Allied Health
            </Link>
            <br />
            <Link href='#' variant='subtitle1' color='textSecondary'>
              Dentists
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant='h6' gutterBottom>
              HelloDoc
            </Typography>
            <Link href='#' variant='subtitle1' color='textSecondary'>
              About us
            </Link>
            <br />
            <Link href='#' variant='subtitle1' color='textSecondary'>
              Careers
            </Link>
            <br />
            <Link href='#' variant='subtitle1' color='textSecondary'>
              Contact us
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
