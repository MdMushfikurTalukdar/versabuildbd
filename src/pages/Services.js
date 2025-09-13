// pages/Services.js
import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Residential Construction',
      description: 'We build beautiful, durable homes tailored to your needs and preferences.',
      features: [
        'Custom home building',
        'Home additions and expansions',
        'Quality materials selection',
        'Energy-efficient solutions',
        'Project management',
      ],
      image: 'https://source.unsplash.com/random/400x300/?house',
    },
    {
      title: 'Commercial Construction',
      description: 'From offices to retail spaces, we deliver commercial buildings that impress.',
      features: [
        'Office buildings',
        'Retail spaces',
        'Restaurants and hospitality',
        'Industrial facilities',
        'Tenant improvements',
      ],
      image: 'https://source.unsplash.com/random/400x300/?office-building',
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform your existing space with our expert renovation services.',
      features: [
        'Kitchen and bathroom remodels',
        'Whole-house renovations',
        'Historic restorations',
        'Accessibility modifications',
        'Space optimization',
      ],
      image: 'https://source.unsplash.com/random/400x300/?renovation',
    },
    {
      title: 'Design & Planning',
      description: 'Comprehensive design services to bring your vision to life.',
      features: [
        'Architectural design',
        'Space planning',
        '3D modeling and visualization',
        'Permitting assistance',
        'Budget planning',
      ],
      image: 'https://source.unsplash.com/random/400x300/?blueprint',
    },
    {
      title: 'Project Management',
      description: 'Professional oversight to keep your project on time and on budget.',
      features: [
        'Timeline development',
        'Budget management',
        'Contractor coordination',
        'Quality control',
        'Regular progress reports',
      ],
      image: 'https://source.unsplash.com/random/400x300/?project-management',
    },
    {
      title: 'Sustainable Building',
      description: 'Eco-friendly construction solutions for a greener future.',
      features: [
        'LEED certification consulting',
        'Energy-efficient systems',
        'Sustainable material sourcing',
        'Solar installation',
        'Green building techniques',
      ],
      image: 'https://source.unsplash.com/random/400x300/?sustainable-building',
    },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
        Comprehensive construction solutions for residential and commercial clients
      </Typography>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6,
                },
              }}
            >
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  height: 200,
                  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {service.description}
                </Typography>
                <List dense>
                  {service.features.map((feature, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircle color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  fullWidth
                  component={Link}
                  to="/contact"
                >
                  Request Service
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Don't See What You Need?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 600, mx: 'auto' }}>
          We offer custom solutions for unique projects. Contact us to discuss how we can help with your specific construction needs.
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/contact"
        >
          Get a Custom Quote
        </Button>
      </Box>
    </Container>
  );
};

export default Services;