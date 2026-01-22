import React from 'react';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { styled } from '@mui/material/styles';
import Video1 from '../video/homeVideo.mp4';

const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  color: '#fff',
}));

const BackgroundImage = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: 'url(https://i.ibb.co.com/204pPqnx/background-Home.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: 1,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

const VideoContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  maxWidth: '1200px',
  height: '70%',
  maxHeight: '600px',
  zIndex: 3,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  boxShadow: theme.shadows[10],
  
  [theme.breakpoints.down('md')]: {
    width: '90%',
    height: '50%',
  },
  
  [theme.breakpoints.down('sm')]: {
    width: '95%',
    height: '40%',
  },
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 4,
  textAlign: 'center',
  padding: theme.spacing(4),
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(8),
}));

const NewHome = () => {
  // Google Drive video embedding instructions:
  // 1. Upload your video to Google Drive
  // 2. Right-click on the video file and select "Get shareable link"
  // 3. Change the sharing settings to "Anyone with the link can view"
  // 4. Extract the file ID from the URL (between /d/ and /view)
  // 5. Use this format: https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
  
  const googleDriveVideoId = '1W2n4lV0mYVpTmZKjZfFzQ7qQJ3X9bYyK'; // Replace with your actual video ID
  const videoUrl = `https://drive.google.com/uc?export=download&id=${googleDriveVideoId}`;
  
  // Alternative: If you want to use a sample video for testing
  const sampleVideoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  return (
    <HeroContainer>
      {/* Background Image */}
      <BackgroundImage />
      
      {/* Video Overlay */}
      <VideoContainer>
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'scale-down', // This will show full video and scale down if needed
    }}
    controls={false}
  >
    <source src={Video1} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</VideoContainer>
      
    </HeroContainer>
  );
};

export default NewHome;