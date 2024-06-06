import React from 'react';
import Layout from './components/layout';
import { Typography, Paper, Box } from '@mui/material';

const Optometrist = () => (
  <Layout>
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Optometrist
      </Typography>
      <Typography variant="body1" paragraph>
        Optometrists are eye care professionals who provide primary vision care ranging from sight testing and correction to the diagnosis, treatment, and management of vision changes.
      </Typography>
      <Typography variant="body1" paragraph>
        They play a critical role in ensuring good eye health and visual acuity.
      </Typography>
    </Paper>
  </Layout>
);

export default Optometrist;
