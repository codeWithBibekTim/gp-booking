'use client';

import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import GeneralPractitionerIcon from '@mui/icons-material/LocalHospital';
import TelehealthIcon from '@mui/icons-material/PhoneInTalk';
import PhysiotherapistIcon from '@mui/icons-material/FitnessCenter';
import DentistIcon from '@mui/icons-material/Mood';
import PsychologistIcon from '@mui/icons-material/Psychology';
import OptometristIcon from '@mui/icons-material/Visibility';
import ChiropractorIcon from '@mui/icons-material/AcUnit';
import PodiatristIcon from '@mui/icons-material/DirectionsWalk';

import { styled } from '@mui/material/styles';

const features = [
  { icon: <GeneralPractitionerIcon />, title: 'General Practitioner', link: './general-practitioner'},
  { icon: <TelehealthIcon />, title: 'GP Telehealth', link: '/gp-telehealth' },
  { icon: <PhysiotherapistIcon />, title: 'Physiotherapist', link: './find-a-physiotherapist' },
  { icon: <DentistIcon />, title: 'Dentist', link: './find-a-dentist' },
  { icon: <PsychologistIcon />, title: 'Psychologist', link: '/psychologist' },
  { icon: <OptometristIcon />, title: 'Optometrist', link: '/optometrist' },
  { icon: <ChiropractorIcon />, title: 'Chiropractor', link: '/chiropractor' },
  { icon: <PodiatristIcon />, title: 'Podiatrist', link: '/podiatrist' },
];

const FeaturePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  cursor: 'pointer',
  textAlign: 'center',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[10], // Elevated shadow on hover
  },
}));

const Features = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 1, marginBottom: 8 }}>
      <Typography variant="subtitle1" sx={{ mb: 2, textAlign: 'left' }}>
        Top Searches
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature) => (
          <Grid item xs={12} sm={6} md={3} key={feature.title}>
            <Link href={feature.link} passHref>
              <FeaturePaper sx={{ p: 4, textAlign: 'center' }}>
                {feature.icon}
                <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
                  {feature.title}
                </Typography>
              </FeaturePaper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features;
