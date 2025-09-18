// components/Header.js
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
  useTheme,
  Box,
  Container,
  Divider,
  alpha,
  styled
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Construction as ConstructionIcon,
  PhotoLibrary as ProjectsIcon,
  ContactMail as ContactIcon,
} from '@mui/icons-material';

// Styled components for enhanced design
const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'scrolled',
})(({ theme, scrolled }) => ({
  backgroundColor: scrolled ? alpha(theme.palette.background.paper, 0.9) : 'transparent',
  backdropFilter: scrolled ? 'blur(10px)' : 'none',
  boxShadow: scrolled ? theme.shadows[4] : 'none',
  transition: 'all 0.3s ease-in-out',
  color: scrolled ? theme.palette.text.primary : theme.palette.grey[600],
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block',
}));

const NavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'scrolled',
})(({ theme, isActive, scrolled }) => ({
  fontWeight: 600,
  margin: theme.spacing(0, 0.5),
  color: isActive 
    ? theme.palette.primary.main 
    : scrolled 
      ? theme.palette.text.primary 
      : theme.palette.grey[400],
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: isActive ? '100%' : '0%',
    height: '2px',
    backgroundColor: theme.palette.primary.main,
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
  },
  '&:hover:after': {
    width: '100%',
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
}));

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'About', path: '/about', icon: <InfoIcon /> },
    { text: 'Services', path: '/services', icon: <ConstructionIcon /> },
    { text: 'Projects', path: '/projects', icon: <ProjectsIcon /> },
    { text: 'Contact', path: '/contact', icon: <ContactIcon /> },
  ];

  // Convert Google Drive link to direct image URL
  const googleDriveDirectUrl = "https://drive.google.com/uc?export=view&id=1d617WoG5Zb3SZrSAlEjZ2u_G35A6DnoE";

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}
      role="presentation"
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box 
            component="img"
            src={googleDriveDirectUrl}
            sx={{ 
              width: 32, 
              height: 32, 
              mr: 1,
              borderRadius: '50%',
              objectFit: 'cover'
            }}
            alt="VersaBuild BD Logo"
            onError={(e) => {
              e.target.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzE5NzZkMiI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4eiIvPjxwYXRoIGQ9Ik0xMi41IDdIMTF2Nmw1LjI1IDMuMTUuNzUtMS4yMy00LjUtMi42N3oiLz48L3N2Zz4=";
            }}
          />
          <LogoText variant="h6">
            VersaBuild BD
          </LogoText>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: alpha(theme.palette.common.white, 0.2) }} />
      <List sx={{ flexGrow: 1, pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            onClick={handleDrawerToggle}
            sx={{
              mb: 1,
              mx: 1,
              borderRadius: 2,
              '&.Mui-selected': {
                backgroundColor: alpha(theme.palette.common.white, 0.2),
                '&:hover': {
                  backgroundColor: alpha(theme.palette.common.white, 0.3),
                },
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{ fontWeight: 600 }}
            />
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <>
      <StyledAppBar position="fixed" scrolled={scrolled}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Box 
                component={Link} 
                to="/" 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  textDecoration: 'none',
                  mr: 3
                }}
              >
                <Box 
                  component="img"
                  src={googleDriveDirectUrl}
                  sx={{ 
                    width: 40, 
                    height: 40, 
                    mr: 1,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: { xs: 'none', sm: 'flex' }
                  }}
                  alt="VersaBuild BD Logo"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzE5NzZkMiI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4eiIvPjxwYXRoIGQ9Ik0xMi41IDdIMTF2Nmw1LjI1IDMuMTUuNzUtMS4yMy00LjUtMi42N3oiLz48L3N2Zz4=";
                  }}
                />
                <LogoText variant="h6" noWrap>
                  VersaBuild BD
                </LogoText>
              </Box>

              {!isMobile && (
                <Box sx={{ display: 'flex' }}>
                  {menuItems.map((item) => (
                    <NavButton
                      key={item.text}
                      component={Link}
                      to={item.path}
                      isActive={location.pathname === item.path}
                      scrolled={scrolled}
                    >
                      {item.text}
                    </NavButton>
                  ))}
                </Box>
              )}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {!isSmallMobile && (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ 
                    borderRadius: 5,
                    px: 3,
                    mr: 2,
                    boxShadow: theme.shadows[4],
                    fontWeight: 600,
                  }}
                  onClick={() => navigate('/contact')}
                >
                  Get Quote
                </Button>
              )}

              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    ml: 1,
                    color: scrolled ? theme.palette.text.primary : theme.palette.grey[600],
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* Add padding to prevent content from being hidden behind the fixed app bar */}
      <Toolbar />
    </>
  );
};

export default Header;