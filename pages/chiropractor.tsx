import React from 'react';
import Layout from './components/layout';
import { Typography, Paper, Box } from '@mui/material';

const Chiropractor = () => (
  <Layout>
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Chiropractor
      </Typography>
      <Typography variant="body1" paragraph>
        Chiropractors diagnose and treat neuromuscular disorders, with an emphasis on treatment through manual adjustment and/or manipulation of the spine.
      </Typography>
      <Typography variant="body1" paragraph>
        They aim to reduce pain and improve the functionality of patients as well as to educate them on how they can account for their own health via exercise, ergonomics, and other therapies.
      </Typography>
    </Paper>
  </Layout>
);

export default Chiropractor;
