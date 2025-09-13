// pages/About.js
import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Card,
  CardContent,
} from '@mui/material';
import { Engineering, Architecture, Construction } from '@mui/icons-material';

const About = () => {
  const team = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      experience: '30 years in construction',
      avatar: 'J',
    },
    {
      name: 'Sarah Johnson',
      role: 'Lead Architect',
      experience: '15 years in architectural design',
      avatar: 'S',
    },
    {
      name: 'Michael Brown',
      role: 'Construction Manager',
      experience: '20 years in project management',
      avatar: 'M',
    },
  ];

  const stats = [
    { number: '250+', label: 'Projects Completed' },
    { number: '25+', label: 'Years Experience' },
    { number: '50+', label: 'Team Members' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        About BuildMaster
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
        Building excellence since 1995
      </Typography>

      <Grid container spacing={6} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1" paragraph>
            BuildMaster Construction was founded in 1995 with a simple mission: to deliver 
            exceptional construction services with uncompromising quality and integrity. What 
            started as a small local contractor has grown into a respected full-service 
            construction company serving clients across the region.
          </Typography>
          <Typography variant="body1" paragraph>
            Throughout our journey, we've remained committed to our core values of quality, 
            reliability, and customer satisfaction. Every project we undertake is approached 
            with the same dedication to excellence that has defined our company from the beginning.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ overflow: 'hidden' }}>
            <img
              src="https://source.unsplash.com/random/600x400/?construction-site"
              alt="Construction site"
              style={{ width: '100%', height: 'auto' }}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* Stats Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6, borderRadius: 2, mb: 8 }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item key={index} xs={6} sm={3} textAlign="center">
                <Typography variant="h3" fontWeight="bold">
                  {stat.number}
                </Typography>
                <Typography variant="h6">{stat.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Our Values
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3 }}>
              <Engineering sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Quality
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We never compromise on quality. From materials to craftsmanship, we ensure 
                every aspect of your project meets the highest standards.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3 }}>
              <Architecture sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Innovation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We embrace new technologies and methods to deliver efficient, sustainable, 
                and forward-thinking construction solutions.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3 }}>
              <Construction sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Integrity
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We believe in transparency, honesty, and doing what's right for our clients, 
                our team, and our community.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Team Section */}
      <Box>
        <Typography variant="h3" align="center" gutterBottom>
          Leadership Team
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {team.map((member, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card sx={{ textAlign: 'center', p: 3 }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 2,
                    bgcolor: 'primary.main',
                    fontSize: '2rem',
                  }}
                >
                  {member.avatar}
                </Avatar>
                <Typography variant="h5" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.experience}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About;