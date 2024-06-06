// // SearchDropdown.tsx
// import React from 'react';
// import { List, ListItem, ListItemText, Paper } from '@mui/material';

// interface SearchDropdownProps {
//   open: boolean;
//   filter: string;
//   onSelect: (value: string) => void;
// }

// const SearchDropdown: React.FC<SearchDropdownProps> = ({
//   open,
//   filter,
//   onSelect,
// }) => {
//   const popularSearches = [
//     'General Practitioner',
//     'GP Telehealth',
//     'Physiotherapist',
//     'Dentist',
//     'Psychologist',
//     'Optometrist',
//     'Chiropractor',
//     'Podiatrist',
//   ];

//   // Filter searches based on input
//   const filteredSearches = popularSearches.filter((search) =>
//     search.toLowerCase().includes(filter.toLowerCase())
//   );

//   if (!open || filter === '') return null;

//   return (
//     <List
//       style={{
//         position: 'absolute',
//         width: '100%',
//         zIndex: 1000,
//         backgroundColor: 'white',
//         top: '100%',
//         maxHeight: 300,
//         overflow: 'auto',
//         boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//       }}
//     >
//       {filteredSearches.map((item, index) => (
//         <ListItem button key={index} onClick={() => onSelect(item)}>
//           <ListItemText primary={item} />
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// export default SearchDropdown;

import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';

interface SearchDropdownProps {
  open: boolean;
  filter: string;
  onSelect: (value: string) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  open,
  filter,
  onSelect,
}) => {
  const popularSearches = [
    'General Practitioner',
    'GP Telehealth',
    'Physiotherapist',
    'Dentist',
    'Psychologist',
    'Optometrist',
    'Chiropractor',
    'Podiatrist',
  ];

  // Filter searches based on input
  const filteredSearches = filter
    ? popularSearches.filter((search) =>
        search.toLowerCase().includes(filter.toLowerCase())
      )
    : popularSearches;

  if (!open) return null;

  return (
    <Paper
      style={{
        position: 'absolute',
        width: '100%',
        zIndex: 1000,
        top: '56px',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      }}
    >
      <Typography variant='body1' sx={{ mx: 2, fontWeight: 'bold' }}>
        Popular Searches
      </Typography>
      <Divider />
      <List dense>
        {filteredSearches.map((item, index) => (
          <ListItem
            key={index}
            onClick={() => onSelect(item)}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#f4f4f4', // Light grey color on hover
                color: 'primary.main', // Optional: change text color on hover
              },
            }}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default SearchDropdown;
