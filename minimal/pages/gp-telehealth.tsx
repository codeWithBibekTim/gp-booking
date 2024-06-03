import React from 'react';
import Layout from './components/layout';
import { Typography, Paper, Box } from '@mui/material';

const GPTelehealth = () => (
  <Layout>
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        GP Telehealth
      </Typography>
      <Typography variant="body1" paragraph>
        GP Telehealth services provide remote consultations with general practitioners through phone or video calls.
      </Typography>
      <Typography variant="body1" paragraph>
        This service ensures patients can receive medical advice and treatment from the comfort of their homes, especially useful during pandemics or for those with mobility issues.
      </Typography>
    </Paper>
  </Layout>
);

export default GPTelehealth;
