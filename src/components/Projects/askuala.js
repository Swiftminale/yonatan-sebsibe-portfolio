import { Box, Grid, Paper, Typography, Modal } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import React, { useState, useEffect } from "react";

// Import images from the assets folder
import image1 from "../../Assest/Askuala/image 1.svg";
import image3 from "../../Assest/Askuala/image 3.jpg";
import image4 from "../../Assest/Askuala/image 4.jpg";
import image5 from "../../Assest/Askuala/image 5.jpg";
import image6 from "../../Assest/Askuala/image 6.jpg";
import image7 from "../../Assest/Askuala/image 7.jpg";
import image8 from "../../Assest/Askuala/image 8.jpg";
import image9 from "../../Assest/Askuala/image 9.jpg";
import image10 from "../../Assest/Askuala/image 10.jpg";
import image11 from "../../Assest/Askuala/image 11.jpg";
import image12 from "../../Assest/Askuala/image 12.jpg";

function Bina() {
  // Array of imported image paths
  const images = [image1,image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];

  // Add state for modal
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Add handlers for modal
  const handleOpenImage = (src) => {
    setSelectedImage(src);
    setCurrentIndex(images.indexOf(src));
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  // Add navigation handlers
  const handlePrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    setSelectedImage(images[currentIndex > 0 ? currentIndex - 1 : images.length - 1]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    setSelectedImage(images[currentIndex < images.length - 1 ? currentIndex + 1 : 0]);
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowLeft') handlePrevious(e);
      if (e.key === 'ArrowRight') handleNext(e);
      if (e.key === 'Escape') handleCloseImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Paper sx={{ bgcolor: "transparent", p: 2 }}>
      <Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: 350, textAlign: "center", mt: 3, color: "#EB5E28" }}
        >
          Askuala
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 350, textAlign: "center", mt: 3, color: "#fff" }}
        >
          LOGO AND BRANDING | 2023 | Lead Designer
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={{ color: "#EB5E28", mt: 3 }}>
              Typography
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
              The logo uses a combination of two main words: "BINA" and "ADDIS."
              "BINA" is rendered in dark blue, signifying trust, reliability,
              and professionalism. "ADDIS" is displayed in a bright orange,
              symbolizing energy, enthusiasm, and a forward-thinking approach,
              essential traits for an educational consultancy that aims to help
              students advance in their careers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={{ color: "#EB5E28", mt: 3 }}>
              Visual Elements
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
              The word "ADDIS" is intersected by a diagonal line, which
              transitions into an airplane at the end of the "S". This line
              symbolizes movement, growth, and global connectivity, alluding to
              the consultancy’s role in facilitating international study
              opportunities. The airplane at the end emphasizes the idea of
              travel and overseas education, reinforcing the company’s focus on
              helping students study abroad.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={{ color: "#EB5E28", mt: 3 }}>
              Color Scheme
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
              The dark blue conveys trustworthiness, professionalism, and depth,
              qualities that are critical in an educational consultancy. The
              bright orange reflects energy, ambition, and the vibrant nature of
              Addis Ababa, the capital city of Ethiopia, where the consultancy
              is presumably based.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={{ color: "#EB5E28", mt: 3 }}>
              Subtext
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
              The tagline "Educational Consultancy" appears in orange beneath
              "BINA," aligning with the rest of the logo’s color palette and
              reinforcing the company's core service. The overall design merges
              a sense of movement and professionalism, positioning Bina Addis as
              a forward-thinking consultancy that is deeply invested in helping
              clients achieve their educational goals abroad.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={0.5}>
          {images.map((src, index) => (
            <Box
              key={index}
              sx={{
                p: 0.5,
                lineHeight: 0,
                cursor: 'pointer',
              }}
              onClick={() => handleOpenImage(src)}
            >
              <img
                src={src}
                alt={`Askuala branding ${index + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '4px',
                }}
              />
            </Box>
          ))}
        </Masonry>
      </Box>

      <Modal
        open={Boolean(selectedImage)}
        onClose={handleCloseImage}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '95vw',
            maxHeight: '95vh',
            width: 'auto',
            height: 'auto',
            outline: 'none',
          }}
          onClick={handleCloseImage}
        >
          {/* Navigation overlays */}
          <Box
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '30%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '0 20px',
              '&:hover': {
                '& .nav-button': {
                  opacity: 1,
                },
              },
            }}
          >
            <Typography 
              className="nav-button"
              sx={{ 
                color: 'white', 
                fontSize: '2rem', 
                opacity: 0.3,
                transition: 'opacity 0.2s',
                userSelect: 'none',
              }}
            >
              ←
            </Typography>
          </Box>
          <Box
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '30%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: '0 20px',
              '&:hover': {
                '& .nav-button': {
                  opacity: 1,
                },
              },
            }}
          >
            <Typography 
              className="nav-button"
              sx={{ 
                color: 'white', 
                fontSize: '2rem', 
                opacity: 0.3,
                transition: 'opacity 0.2s',
                userSelect: 'none',
              }}
            >
              →
            </Typography>
          </Box>

          {selectedImage && (
            <img
              src={selectedImage}
              alt="Enlarged view"
              style={{
                maxWidth: '100%',
                maxHeight: '95vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          )}
        </Box>
      </Modal>
    </Paper>
  );
}

export default Bina;
