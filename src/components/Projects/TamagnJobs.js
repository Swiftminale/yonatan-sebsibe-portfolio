import { Box, Paper, Typography, Modal } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import React, { useState, useEffect } from "react";

// Import images from the assets folder
import image1 from "../../Assest/tamagn/image1.jpg";
import image2 from "../../Assest/tamagn/image2.png";
import image3 from "../../Assest/tamagn/image3.png";
import image4 from "../../Assest/tamagn/image4.png";
import image5 from "../../Assest/tamagn/image5.png";
import image6 from "../../Assest/tamagn/image6.jpg";
import image7 from "../../Assest/tamagn/image7.jpg";
import image8 from "../../Assest/tamagn/image8.jpg";
import image10 from "../../Assest/tamagn/image10.png";
import image11 from "../../Assest/tamagn/image11.png";
import image12 from "../../Assest/tamagn/image12.png";
import image13 from "../../Assest/tamagn/image13.png";
import image14 from "../../Assest/tamagn/image14.jpg";
import image15 from "../../Assest/tamagn/image15.png";
import image16 from "../../Assest/tamagn/image16.png";
import image17 from "../../Assest/tamagn/image17.png";
import image18 from "../../Assest/tamagn/image18.png";


function TamagnJobs() {
  // Array of imported image paths
  const images = [image1, image2, image3, image4, image5, image6, image7, image8,image10, image11, image12, image13, image14, image15, image16, image17, image18];

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
          TAMAGM JOBS
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 350, textAlign: "center", mt: 3, color: "#fff" }}
        >
         LOGO DESIGN | 2023 | Lead Designer
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" sx={{ color: "#EB5E28", mt: 3 }}>
          Typography
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
          The word "TAMAGN" is stylized with bold, rounded letters in blue, projecting a sense of trust, professionalism, and accessibility.
The word "JOBS" is highlighted in yellow, providing a contrast that draws attention to the core service offered by the agency.
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" sx={{ color: "#EB5E28", mt: 3 }}>
          Visual Elements
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
          The central feature is a magnifying glass, symbolizing the act of searching and finding, which is critical in job placement and recruitment.
          The use of the magnifying glass reinforces the idea of thoroughness and diligence, traits necessary for matching the right candidates to the right jobs.
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" sx={{ color: "#EB5E28", mt: 3 }}>
          Color Scheme
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
          Blue is predominantly used, signifying reliability and stability, key attributes for a job agency.
          Yellow adds vibrancy and optimism, suggesting a bright future and opportunities for job seekers.
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" sx={{ color: "#EB5E28", mt: 3 }}>
          Overall Concept
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
          The logo conveys a sense of approachability and efficiency, positioning Tamagn Jobs as a trustworthy partner for both employers and job seekers in their search for ideal placements.
        </Typography>
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
                alt={`Tamagn Jobs ${index + 1}`}
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

export default TamagnJobs;
