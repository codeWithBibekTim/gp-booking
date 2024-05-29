'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Hidden,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import SearchDropdown from './SearchDropDown';

const Hero = () => {
  const [input, setInput] = useState('');
  const [service, setService] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Location
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSearch = () => {
    if (input) {
      searchByPostcode(input);
    } else {
      console.error('Input is empty');
    }
  };

  const handleLocationSearch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          searchByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error('Error obtaining location', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const searchByPostcode = (postcode: string) => {
    console.log('Searching for postcode:', postcode);
    // Placeholder for API call by postcode
  };

  const searchByCoordinates = (lat: number, lon: number) => {
    console.log('Fetching practices near', lat, lon);
    // Placeholder for API call by geographic coordinates
  };

  // Service
  const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setService(event.target.value);
    setDropdownOpen(event.target.value !== '');
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth='lg'>
        <Typography
          variant='h3'
          component='h1'
          gutterBottom
          textAlign={{ xs: 'center', md: 'center' }}
        >
          Book your next healthcare appointment
        </Typography>
        <Typography
          variant='h6'
          color='textSecondary'
          paragraph
          textAlign={{ xs: 'center', md: 'center' }}
        >
          Find, book and add your favourite practitioners to your care team.
        </Typography>
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            padding: 2,
            gap: 1,
            mt: 4,
          }}
        >
          {/* <TextField
            fullWidth
            placeholder='Service, practice or practitioner'
            variant='outlined'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          /> */}
          <div style={{ position: 'relative', width: '100%' }}>
            <TextField
              fullWidth
              placeholder='Service, practice or practitioner'
              variant='outlined'
              value={service}
              onChange={handleServiceChange}
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <SearchDropdown
              open={dropdownOpen}
              filter={service}
              onSelect={(item) => setService(item)}
            />
          </div>
          <TextField
            fullWidth
            placeholder='Suburb or postcode'
            value={input}
            onChange={handleInputChange}
            variant='outlined'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LocationOnIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={handleLocationSearch} edge='end'>
                    <MyLocationIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Hidden mdUp>
            <Button variant='contained' color='primary' sx={{ width: '100%' }}>
              Search
            </Button>
          </Hidden>
          <Hidden mdDown>
            <Button
              variant='contained'
              color='primary'
              onClick={handleSearch}
              sx={{
                minWidth: 120, // Ensuring the width aligns with other input fields
                height: 56, // Match the height of the TextFields
                borderRadius: '4px', // Match the border radius of the TextFields
                margin: '0 8px', // Consistent spacing
              }}
            >
              <SearchIcon />
            </Button>
          </Hidden>
        </Paper>
      </Container>
    </Box>
  );
};

export default Hero;
