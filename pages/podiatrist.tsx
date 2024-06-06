import React from 'react';
import Layout from './components/layout';
import { Typography, Paper, Box } from '@mui/material';

const Podiatrist = () => (
  <Layout>
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Podiatrist
      </Typography>
      <Typography variant="body1" paragraph>
        Podiatrists are medical professionals devoted to the study, diagnosis, and treatment of disorders of the foot, ankle, and lower extremity.
      </Typography>
      <Typography variant="body1" paragraph>
        They provide comprehensive care for all foot and ankle conditions, including sports injuries, diabetic foot care, and surgical procedures.
      </Typography>
    </Paper>
  </Layout>
);

export default Podiatrist;
