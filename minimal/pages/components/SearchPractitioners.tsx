import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const SearchPractitioners = () => {
  const [speciality, setSpeciality] = useState('');
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('/api/practitioners', { params: { speciality } });
      if (response.data.length > 0) {
        setResults(response.data);
        setMessage('');
      } else {
        setResults([]);
        setMessage('Data not found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults([]);
      setMessage('Data not found');
    }
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <TextField
          label="Speciality"
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSearch} sx={{ mt: 2 }}>
          Search
        </Button>
        {message && (
          <Typography variant="body1" color="error" sx={{ mt: 2 }}>
            {message}
          </Typography>
        )}
        <Box sx={{ mt: 4 }}>
          {results.length > 0 ? (
            results.map((practitioner) => (
              <Box key={practitioner.id} sx={{ mb: 2 }}>
                <Typography variant="h6">{practitioner.name}</Typography>
                <Typography variant="body1">{practitioner.speciality}</Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body1">No practitioners found.</Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default SearchPractitioners;
