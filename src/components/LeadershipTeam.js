// LeadershipTeam.js
import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  alpha,
  useTheme,
  useMediaQuery,
  Fade,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Divider
} from '@mui/material';
import {
  LinkedIn,
  Twitter,
  Email,
  Close,
  ArrowForward,
    BusinessCenter,
    DesignServices,
    Engineering,
    Psychology
} from '@mui/icons-material';

const LeadershipTeam = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      experience: '30 years in construction',
      bio: 'John founded BuildMaster with a vision to revolutionize the construction industry through innovation and quality. Under his leadership, the company has grown into a regional leader known for exceptional craftsmanship and client satisfaction.',
      expertise: ['Strategic Planning', 'Business Development', 'Project Financing'],
      image: 'https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX2FuaW1lX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY3MjE3MzQ4Nl8wNDM/screen-0.jpg?fakeurl=1&type=.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'john@buildmaster.com'
      },
      stats: { projects: 250, clients: 180 },
      icon: <BusinessCenter sx={{ fontSize: 24 }} />
    },
    {
      name: 'Sarah Johnson',
      role: 'Lead Architect',
      experience: '15 years in architectural design',
      bio: 'Sarah brings creative vision and technical expertise to every project she oversees. She holds a Master\'s in Architecture from MIT and has won several design awards for innovative sustainable building solutions.',
      expertise: ['Sustainable Design', '3D Modeling', 'Space Planning'],
      image: 'https://i.pinimg.com/736x/a8/3d/aa/a83daa12dcd60a207541fba02a166d57.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@buildmaster.com'
      },
      stats: { projects: 120, clients: 95 },
      icon: <DesignServices sx={{ fontSize: 24 }} />
    },
    {
      name: 'Michael Brown',
      role: 'Construction Manager',
      experience: '20 years in project management',
      bio: 'Michael ensures that every project is completed on time, within budget, and to the highest standards. His meticulous approach to project management has resulted in a 98% on-time completion rate across all projects.',
      expertise: ['Project Management', 'Quality Control', 'Team Leadership'],
      image: 'https://thypix.com/wp-content/uploads/2021/10/grey-anime-profile-picture-thypix-114-700x700.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@buildmaster.com'
      },
      stats: { projects: 180, clients: 140 },
      icon: <Engineering sx={{ fontSize: 24 }} />
    },
    {
      name: 'Emily Chen',
      role: 'Design Director',
      experience: '12 years in interior design',
      bio: 'Emily specializes in creating functional and beautiful spaces that reflect clients\' personalities and needs. Her designs have been featured in several prestigious architecture and design publications.',
      expertise: ['Interior Design', 'Material Selection', 'Color Theory'],
      image: 'https://finetoshine.com/wp-content/uploads/Anime-Profile-Picture-16.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@buildmaster.com'
      },
      stats: { projects: 95, clients: 80 },
      icon: <Psychology sx={{ fontSize: 24 }} />
    }
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Calculate responsive grid values
  const getGridSize = () => {
    if (isMobile) return 12;
    if (isTablet) return 6;
    return 4;
  };

  return (
    <>
      <Box sx={{ 
        py: 10,
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.secondary.main, 0.03)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: `radial-gradient(${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
            opacity: 0.3,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -50,
            left: -50,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: `radial-gradient(${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 70%)`,
            opacity: 0.2,
          }}
        />
        
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip 
              label="LEADERSHIP TEAM" 
              color="primary" 
              variant="outlined"
              sx={{ 
                mb: 2, 
                px: 2,
                fontWeight: 'bold',
                background: alpha(theme.palette.primary.main, 0.1),
                fontSize: '0.9rem'
              }} 
            />
            <Typography 
              variant="h3"
              fontWeight="bold" 
              gutterBottom
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              Meet Our Leadership
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ 
                maxWidth: 700, 
                mx: 'auto', 
                mt: 2,
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              Our experienced leaders bring decades of expertise and a shared commitment to excellence in every project we undertake.
            </Typography>
          </Box>
          
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                <Fade in={isVisible} timeout={800} style={{ transitionDelay: `${index * 100}ms` }}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      borderRadius: 4,
                      transition: 'all 0.4s ease',
                      boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
                      background: theme.palette.background.paper,
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 16px 48px ${alpha(theme.palette.primary.main, 0.15)}`,
                        '& .member-image': {
                          transform: 'scale(1.05)',
                        },
                        '& .view-profile-btn': {
                          opacity: 1,
                          transform: 'translateY(0)',
                        }
                      },
                    }}
                  >
                    {/* Image Container */}
                    <Box sx={{ 
                      height: 280, 
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <Box
                        className="member-image"
                        component="img"
                        src={member.image}
                        alt={member.name}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(to bottom, transparent 40%, ${theme.palette.background.paper} 100%)`,
                        }}
                      />
                      
                      {/* Stats overlay */}
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 16,
                          left: 16,
                          display: 'flex',
                          gap: 2,
                        }}
                      >
                        <Box sx={{ 
                          background: alpha(theme.palette.primary.main, 0.8),
                          color: 'white',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5
                        }}>
                          <Typography variant="caption" fontWeight="bold">
                            {member.stats.projects}+
                          </Typography>
                          <Typography variant="caption">
                            Projects
                          </Typography>
                        </Box>
                        <Box sx={{ 
                          background: alpha(theme.palette.secondary.main, 0.8),
                          color: 'white',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5
                        }}>
                          <Typography variant="caption" fontWeight="bold">
                            {member.stats.clients}+
                          </Typography>
                          <Typography variant="caption">
                            Clients
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    
                    <CardContent sx={{ p: 3, position: 'relative' }}>
                      
                      {/* Name and role */}
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {member.name}
                      </Typography>
                      <Typography variant="body2" color="primary" fontWeight="medium" gutterBottom>
                        {member.role}
                      </Typography>
                      
                      {/* Experience */}
                      <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                        {member.experience}
                      </Typography>
                      
                      <Divider sx={{ my: 2 }} />
                      
                      {/* Expertise chips */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                        {member.expertise.slice(0, 2).map((skill, i) => (
                          <Chip
                            key={i}
                            label={skill}
                            size="small"
                            variant="outlined"
                            sx={{ 
                              fontSize: '0.6rem',
                              height: 22,
                              background: alpha(theme.palette.primary.main, 0.05),
                              borderColor: alpha(theme.palette.primary.main, 0.2),
                            }}
                          />
                        ))}
                      </Box>
                      
                      {/* Social links and CTA */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                          <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
                            <LinkedIn fontSize="small" />
                          </IconButton>
                          <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
                            <Twitter fontSize="small" />
                          </IconButton>
                          <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
                            <Email fontSize="small" />
                          </IconButton>
                        </Box>
                        
                        <Button
                          className="view-profile-btn"
                          variant="text"
                          endIcon={<ArrowForward />}
                          onClick={() => handleMemberClick(member)}
                          sx={{
                            opacity: { xs: 1, md: 0 },
                            transform: { xs: 'translateY(0)', md: 'translateY(10px)' },
                            transition: 'all 0.3s ease',
                            color: theme.palette.primary.main,
                            fontSize: '0.8rem',
                            fontWeight: 'bold'
                          }}
                        >
                          View Profile
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Member Detail Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            background: theme.palette.background.paper,
            overflow: 'hidden'
          }
        }}
      >
        {selectedMember && (
          <>
            <DialogContent sx={{ p: 0 }}>
              {/* Header with image */}
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  sx={{
                    width: '100%',
                    height: 300,
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(to bottom, transparent 40%, ${theme.palette.background.paper} 100%)`,
                  }}
                />
                
                <IconButton
                  aria-label="close"
                  onClick={handleCloseDialog}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    color: 'white',
                    bgcolor: alpha(theme.palette.common.black, 0.5),
                    '&:hover': {
                      bgcolor: alpha(theme.palette.common.black, 0.7),
                    }
                  }}
                >
                  <Close />
                </IconButton>
              </Box>
              
              <Box sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                      {selectedMember.name}
                    </Typography>
                    <Typography variant="h6" color="primary" fontWeight="medium" gutterBottom>
                      {selectedMember.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedMember.experience}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ 
                    width: 60, 
                    height: 60, 
                    borderRadius: '50%',
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ml: 2
                  }}>
                    {selectedMember.icon}
                  </Box>
                </Box>
                
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 3 }}>
                  {selectedMember.bio}
                </Typography>
                
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Areas of Expertise:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                  {selectedMember.expertise.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      variant="outlined"
                      sx={{
                        background: alpha(theme.palette.primary.main, 0.05),
                        borderColor: alpha(theme.palette.primary.main, 0.2),
                      }}
                    />
                  ))}
                </Box>
                
                <Box sx={{ 
                  p: 3, 
                  background: alpha(theme.palette.primary.main, 0.05),
                  borderRadius: 3,
                  display: 'flex',
                  justifyContent: 'space-around',
                  textAlign: 'center'
                }}>
                  <Box>
                    <Typography variant="h4" fontWeight="bold" color="primary">
                      {selectedMember.stats.projects}+
                    </Typography>
                    <Typography variant="body2">
                      Projects
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" fontWeight="bold" color="secondary">
                      {selectedMember.stats.clients}+
                    </Typography>
                    <Typography variant="body2">
                      Clients
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 3, borderTop: `1px solid ${theme.palette.divider}` }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton sx={{ color: theme.palette.primary.main }}>
                  <LinkedIn />
                </IconButton>
                <IconButton sx={{ color: theme.palette.primary.main }}>
                  <Twitter />
                </IconButton>
                <IconButton sx={{ color: theme.palette.primary.main }}>
                  <Email />
                </IconButton>
              </Box>
              
              <Button 
                variant="contained"
                sx={{
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  '&:hover': {
                    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                  }
                }}
              >
                Contact {selectedMember.name.split(' ')[0]}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default LeadershipTeam;