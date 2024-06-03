// Header.tsx

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import Logo from './Logo';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSearchClick = () => {
    const searchSection = document.getElementById('search-section');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position='static' color='default'>
      <Container maxWidth='lg'>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <Link href="/" passHref>
              <Logo />
            </Link>
          </Box>
          <Box display="flex" alignItems="center">
            {isMobile ? (
              <>
                <IconButton color='inherit' aria-label='open drawer' edge='end' onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
                <Drawer anchor='right' open={drawerOpen} onClose={handleDrawerToggle} transitionDuration={250}>
                  <List>
                    <ListItem button onClick={handleSearchClick}>
                      <ListItemIcon>
                        <SearchIcon />
                      </ListItemIcon>
                      <ListItemText primary='Search' />
                    </ListItem>
                    <Link href="/login" passHref>
                      <ListItem button>
                        <ListItemIcon>
                          <LoginIcon />
                        </ListItemIcon>
                        <ListItemText primary='Log in / Sign up' />
                      </ListItem>
                    </Link>
                  </List>
                </Drawer>
              </>
            ) : (
              <>
                <Link href="/list-your-practice" passHref>
                  <Button sx={{ textTransform: 'none' }} endIcon={<LoginIcon />} color="inherit">
                    <Typography variant='subtitle2' component='h2' sx={{ fontWeight: 'bold' }}>
                      List your practice
                    </Typography>
                  </Button>
                </Link>
                <Button sx={{ textTransform: 'none' }} onClick={handleSearchClick} color="inherit">
                  <Typography variant='subtitle2' component='h2' sx={{ fontWeight: 'bold' }}>
                    Search
                  </Typography>
                </Button>
                <Link href="/login" passHref>
                  <Button startIcon={<LoginIcon />} sx={{ textTransform: 'none' }} color="inherit">
                    <Typography variant='subtitle2' component='h2' sx={{ fontWeight: 'bold' }}>
                      Log in / Sign up
                    </Typography>
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
