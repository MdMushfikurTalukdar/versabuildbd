// pages/Contact.js
import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Alert,
  Card,
  CardContent,
} from '@mui/material';
import { Phone, Email, LocationOn, Schedule } from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactMethods = [
    {
      icon: <Phone sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
    },
    {
      icon: <Email sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Email Us',
      details: 'info@buildmaster.com',
      description: 'Send us a message anytime',
    },
    {
      icon: <LocationOn sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Visit Us',
      details: '123 Construction Avenue',
      description: 'Builders City, BC 12345',
    },
    {
      icon: <Schedule sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Business Hours',
      details: 'Monday - Friday: 8am - 6pm',
      description: 'Saturday: 9am - 1pm',
    },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
        Get in touch with us to discuss your construction project
      </Typography>

      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
              Send us a Message
            </Typography>
            {submitted && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Thank you for your message! We'll get back to you soon.
              </Alert>
            )}
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={4}
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" size="large">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {contactMethods.map((method, index) => (
              <Card key={index} variant="outlined">
                <CardContent sx={{ textAlign: 'center' }}>
                  {method.icon}
                  <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
                    {method.title}
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {method.details}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {method.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 8 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.6214610301857!2d-74.00594268459418!3d40.71274927933013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1e1c2c0e1b%3A0x5d0e2e5e5e5e5e5e!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1629999999999!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: 8 }}
          allowFullScreen=""
          loading="lazy"
          title="BuildMaster Construction Location"
        ></iframe>
      </Box>
    </Container>
  );
};

export default Contact;