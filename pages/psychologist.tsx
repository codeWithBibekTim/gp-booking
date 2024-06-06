import React from 'react';
import Layout from './components/layout';
import { Typography, Paper, Box } from '@mui/material';

const Psychologist = () => (
  <Layout>
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Psychologist
      </Typography>
      <Typography variant="body1" paragraph>
        Psychologists study cognitive, emotional, and social processes and behavior by observing, interpreting, and recording how individuals relate to one another and to their environments.
      </Typography>
      <Typography variant="body1" paragraph>
        They use their findings to help improve processes and behaviors in various settings, including schools, workplaces, and clinics.
      </Typography>
    </Paper>
  </Layout>
);

export default Psychologist;
