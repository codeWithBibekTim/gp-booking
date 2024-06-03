import React from 'react';
import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AppBar position="static">
      <Header />
      </AppBar>
      <Container sx={{ mt: 4 }}>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;




