'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PracticeIcon from '@mui/icons-material/LocalHospital';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from './Logo';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position='static' color='default'>
      <Container maxWidth='lg'>
        <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
          <Logo />
          {isMobile ? (
            <>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor='right'
                open={drawerOpen}
                onClose={handleDrawerToggle}
                transitionDuration={250} // smoother transitions
              >
                <List>
                  <ListItem>
                    <Typography
                      variant='subtitle2'
                      component='h2'
                      sx={{
                        fontWeight: 'bold',
                      }}
                    >
                      List your practice
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary='Search' />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LoginIcon />
                    </ListItemIcon>
                    <ListItemText primary='Log in / Sign up' />
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <>
              <Button sx={{ textTransform: 'none' }}>
                <Typography
                  variant='subtitle2'
                  component='h2'
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  List your practice
                </Typography>
              </Button>
              <Button sx={{ textTransform: 'none' }}>
                <Typography
                  variant='subtitle2'
                  component='h2'
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Search
                </Typography>
              </Button>
              <Button startIcon={<LoginIcon />} sx={{ textTransform: 'none' }}>
                <Typography
                  variant='subtitle2'
                  component='h2'
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Log in / Sign up
                </Typography>
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
