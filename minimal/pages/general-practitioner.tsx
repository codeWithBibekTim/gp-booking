import React from 'react';
import Layout from './components/layout';
import { Typography, Paper, Box } from '@mui/material';

const GeneralPractitioner = () => (
  <Layout>
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        General Practitioner
      </Typography>
      <Typography variant="body1" paragraph>
      A general practitioner also known as a GP is a medical doctor who deals with acute and chronic diseases and also partakes in preventive care and impart knowledge to patients.
      </Typography>
      <Typography variant="body1" paragraph>
      GPs deal with kinds of illness that are not well defined when in an early tidal phase and may need quick handling.
      </Typography>
    </Paper>
  </Layout>
);

export default GeneralPractitioner;
