// components/Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              BuildMaster Construction
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Building dreams into reality with quality construction and exceptional service since 1995.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Construction Avenue, Builders City, BC 12345
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@buildmaster.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 (555) 123-4567
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton aria-label="Facebook" color="primary">
                <Facebook />
              </IconButton>
              <IconButton aria-label="Twitter" color="primary">
                <Twitter />
              </IconButton>
              <IconButton aria-label="Instagram" color="primary">
                <Instagram />
              </IconButton>
              <IconButton aria-label="LinkedIn" color="primary">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
              BuildMaster Construction
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;