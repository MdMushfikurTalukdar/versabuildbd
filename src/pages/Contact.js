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
  alpha,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Zoom,
  Chip,
  IconButton,
  Divider
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Schedule,
  Send,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Close,
  CheckCircle
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';

// Animation for gradient background
const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Animation for floating elements
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

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
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
      color: theme.palette.primary.main,
      action: 'tel:+15551234567'
    },
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      title: 'Email Us',
      details: 'info@buildmaster.com',
      description: 'Send us a message anytime',
      color: theme.palette.secondary.main,
      action: 'mailto:info@buildmaster.com'
    },
    {
      icon: <LocationOn sx={{ fontSize: 40 }} />,
      title: 'Visit Us',
      details: '123 Construction Avenue',
      description: 'Builders City, BC 12345',
      color: theme.palette.success.main,
      action: '#map'
    },
    {
      icon: <Schedule sx={{ fontSize: 40 }} />,
      title: 'Business Hours',
      details: 'Monday - Friday: 8am - 6pm',
      description: 'Saturday: 9am - 1pm',
      color: theme.palette.warning.main,
      action: null
    },
  ];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          pt: 15,
          pb: 10,
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(${alpha(theme.palette.primary.main, 0.2)} 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            opacity: 0.3,
          }
        }}
      >
        <Container maxWidth="lg">
          <Fade in={isVisible} timeout={1000}>
            <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
              <Chip 
                label="GET IN TOUCH" 
                color="primary" 
                variant="outlined"
                sx={{ 
                  mb: 3, 
                  px: 2,
                  fontWeight: 'bold',
                  background: alpha(theme.palette.primary.main, 0.1)
                }} 
              />
              <Typography
                variant="h2"
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Let's Build Something Amazing Together
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ 
                  maxWidth: 600, 
                  mx: 'auto', 
                  mt: 3,
                  fontSize: { xs: '1rem', md: '1.25rem' }
                }}
              >
                Ready to start your construction project? Get in touch with our team for a free consultation and quote.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Contact Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} lg={8}>
            <Slide in={isVisible} timeout={800} direction="right">
              <Paper 
                elevation={0}
                sx={{ 
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.default, 0.5)} 100%)`,
                  boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.1)}`,
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                }}
              >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Send us a Message
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                  Fill out the form below and our team will get back to you within 24 hours.
                </Typography>
                
                {submitted && (
                  <Alert 
                    severity="success" 
                    sx={{ 
                      mb: 3,
                      borderRadius: 2,
                      background: alpha(theme.palette.success.main, 0.1),
                      color: theme.palette.success.dark,
                      border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
                    }}
                    icon={<CheckCircle />}
                  >
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
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
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
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
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
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
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
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button 
                        type="submit" 
                        variant="contained" 
                        size="large"
                        endIcon={<Send />}
                        sx={{
                          borderRadius: 2,
                          py: 1.5,
                          px: 4,
                          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          '&:hover': {
                            background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                            transform: 'translateY(-2px)',
                            boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Slide>
          </Grid>

          {/* Contact Methods */}
          <Grid item xs={12} lg={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {contactMethods.map((method, index) => (
                <Zoom in={isVisible} timeout={800} style={{ transitionDelay: `${index * 100}ms` }} key={index}>
                  <Card 
                    variant="outlined"
                    sx={{
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.default, 0.3)} 100%)`,
                      border: `1px solid ${alpha(method.color, 0.2)}`,
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 24px ${alpha(method.color, 0.15)}`,
                        borderColor: method.color,
                      },
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 70,
                          height: 70,
                          borderRadius: '50%',
                          bgcolor: alpha(method.color, 0.1),
                          color: method.color,
                          mb: 2,
                          animation: `${float} 4s ease-in-out infinite`,
                          animationDelay: `${index * 0.5}s`,
                        }}
                      >
                        {method.icon}
                      </Box>
                      <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
                        {method.title}
                      </Typography>
                      <Typography variant="body1" fontWeight="bold" color={method.color}>
                        {method.details}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {method.description}
                      </Typography>
                      {method.action && (
                        <Button
                          variant="outlined"
                          size="small"
                          href={method.action}
                          sx={{
                            mt: 2,
                            borderRadius: 2,
                            borderColor: alpha(method.color, 0.5),
                            color: method.color,
                            '&:hover': {
                              borderColor: method.color,
                              bgcolor: alpha(method.color, 0.05),
                            }
                          }}
                        >
                          Contact Now
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </Zoom>
              ))}
            </Box>

            {/* Social Media */}
            <Zoom in={isVisible} timeout={800} style={{ transitionDelay: '400ms' }}>
              <Paper 
                sx={{ 
                  p: 3, 
                  mt: 4,
                  borderRadius: 3,
                  background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.default, 0.3)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                }}
              >
                <Typography variant="h6" gutterBottom align="center">
                  Follow Us
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
                  {[
                    { icon: <Facebook />, color: '#1877F2' },
                    { icon: <Twitter />, color: '#1DA1F2' },
                    { icon: <Instagram />, color: '#E4405F' },
                    { icon: <LinkedIn />, color: '#0A66C2' },
                  ].map((social, index) => (
                    <IconButton
                      key={index}
                      sx={{
                        color: 'white',
                        background: social.color,
                        '&:hover': {
                          background: social.color,
                          transform: 'translateY(-2px)',
                          boxShadow: `0 4px 12px ${alpha(social.color, 0.4)}`,
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </Paper>
            </Zoom>
          </Grid>
        </Grid>
      </Container>

      {/* Map Section */}
      <Box sx={{ py: 8, bgcolor: alpha(theme.palette.grey[100], 0.5) }}>
        <Container maxWidth="lg">
          <Fade in={isVisible} timeout={1000}>
            <Box>
              <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
                Our Location
              </Typography>
              <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
                Visit our office or reach out to us for directions
              </Typography>
              
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.15)}`,
                  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.6214610301857!2d-74.00594268459418!3d40.71274927933013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1e1c2c0e1b%3A0x5d0e2e5e5e5e5e5e!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1629999999999!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="BuildMaster Construction Location"
                />
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;