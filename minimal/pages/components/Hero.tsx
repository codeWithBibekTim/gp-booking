import React, { useState } from 'react';
import { 
  Box, Typography, Container, Paper, TextField, Button, 
  InputAdornment, IconButton, Grid, Card, CardContent, Hidden, CardMedia 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import SearchDropdown from './SearchDropDown';

const Hero = () => {
  const [input, setInput] = useState('');
  const [service, setService] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setService(event.target.value);
    setDropdownOpen(event.target.value !== '');
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

  const handleSearch = async () => {
    try {
      if (input) {
        const response = await fetch(`/api/practitioners?postcode=${input}`); 
        const data = await response.json();
        setSearchResults(data);
      } else if (service) {
        const response = await fetch(`/api/practitioners?speciality=${service}`);
        const data = await response.json();
        setSearchResults(data);
      } else {
        console.error('Please enter a postcode or service.');
      }
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
      setSearchResults([]); // Clear search results on error
    }
  };

  const searchByCoordinates = async (lat: number, lon: number) => {
    try {
      const response = await fetch(`/api/practitioners?lat=${lat}&lon=${lon}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
      setSearchResults([]); // Clear search results on error
    }
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
            <Button variant='contained' color='primary' sx={{ width: '100%' }} onClick={handleSearch}>
              Search
            </Button>
          </Hidden>
          <Hidden mdDown>
            <Button
              variant='contained'
              color='primary'
              onClick={handleSearch}
              sx={{
                minWidth: 120, 
                height: 56, 
                borderRadius: '4px', 
                margin: '0 8px', 
              }}
            >
              <SearchIcon />
            </Button>
          </Hidden>
        </Paper>

        {/* Display Search Results */}
        <Grid container spacing={2} mt={4}>
          {searchResults.map((practitioner) => (
            <Grid item xs={12} sm={6} md={4} key={practitioner.id}>
              <Card>
                <CardMedia 
                  component="img"
                  alt={practitioner.name}
                  image={practitioner.image_url || './stethoscope.svg'}
                  height="140" 
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {practitioner.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {practitioner.speciality} - {practitioner.address}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
