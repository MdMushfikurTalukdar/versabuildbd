// pages/Projects.js
import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Tabs,
  Tab,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import { Close, ZoomIn } from '@mui/icons-material';

const Projects = () => {
  const [value, setValue] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const projects = [
    {
      title: 'Modern Family Home',
      description: 'A contemporary 4-bedroom home with open living spaces and sustainable features.',
      image: 'https://source.unsplash.com/random/600x400/?modern-house',
      category: 'residential',
      features: ['Solar panels', 'Open floor plan', 'Energy efficient'],
      year: '2022',
    },
    {
      title: 'Office Complex',
      description: 'A 5-story commercial building with retail space and underground parking.',
      image: 'https://source.unsplash.com/random/600x400/?office-building',
      category: 'commercial',
      features: ['LEED Certified', 'Smart building technology', 'Green roof'],
      year: '2021',
    },
    {
      title: 'Kitchen Renovation',
      description: 'Complete transformation of a traditional kitchen into a modern culinary space.',
      image: 'https://source.unsplash.com/random/600x400/?kitchen',
      category: 'renovation',
      features: ['Custom cabinetry', 'Quartz countertops', 'Smart appliances'],
      year: '2022',
    },
    {
      title: 'Community Center',
      description: 'A multi-purpose facility for community events and activities.',
      image: 'https://source.unsplash.com/random/600x400/?community-center',
      category: 'commercial',
      features: ['Accessible design', 'Multi-purpose rooms', 'Sustainable materials'],
      year: '2020',
    },
    {
      title: 'Lakeside Retreat',
      description: 'A luxury vacation home with panoramic views of the lake.',
      image: 'https://source.unsplash.com/random/600x400/?lake-house',
      category: 'residential',
      features: ['Floor-to-ceiling windows', 'Outdoor living space', 'Dock access'],
      year: '2021',
    },
    {
      title: 'Historic Restoration',
      description: 'Careful restoration of a 19th-century building for modern use.',
      image: 'https://source.unsplash.com/random/600x400/?historic-building',
      category: 'renovation',
      features: ['Period-appropriate materials', 'Structural reinforcement', 'Modern utilities'],
      year: '2019',
    },
  ];

  const filteredProjects = value === 'all' 
    ? projects 
    : projects.filter(project => project.category === value);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Our Projects
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
        A showcase of our quality craftsmanship and attention to detail
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="All Projects" value="all" />
          <Tab label="Residential" value="residential" />
          <Tab label="Commercial" value="commercial" />
          <Tab label="Renovation" value="renovation" />
        </Tabs>
      </Box>

      <Grid container spacing={4}>
        {filteredProjects.map((project, index) => (
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
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={project.image}
                  alt={project.title}
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                  }}
                  onClick={() => handleClickOpen(project.image)}
                >
                  <ZoomIn />
                </IconButton>
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                  {project.features.map((feature, idx) => (
                    <Chip
                      key={idx}
                      label={feature}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Box>
                <Typography variant="caption" color="text.secondary">
                  Completed: {project.year}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogContent>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
          <img
            src={selectedImage}
            alt="Enlarged view"
            style={{ width: '100%', height: 'auto' }}
          />
        </DialogContent>
      </Dialog>

      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Ready to Start Your Project?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 600, mx: 'auto' }}>
          Let us bring the same quality and dedication to your construction project.
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="/contact"
        >
          Get Started Today
        </Button>
      </Box>
    </Container>
  );
};

export default Projects;