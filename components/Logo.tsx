'use client';

import Image from 'next/image';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Logo = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography
        variant={isSmallDevice ? 'subtitle1' : 'h6'}
        component='div'
        sx={{
          display: 'flex',
          alignItems: 'center',
          transform: isSmallDevice ? 'scale(0.8)' : 'none', // Scales down the content on small devices
          fontWeight: 'bold',
        }}
      >
        <Image
          src='/stethoscope.svg'
          alt='GP Master'
          width={isSmallDevice ? 64 : 80} // Adjusting size based on the device
          height={isSmallDevice ? 64 : 80} // Adjusting size based on the device
          priority
          style={{ marginRight: 2 }}
        />
        HelloDoc
      </Typography>
    </Box>
  );
};

export default Logo;
