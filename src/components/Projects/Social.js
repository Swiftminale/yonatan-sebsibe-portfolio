import { Box, Paper, Typography, Modal } from "@mui/material";
import React, { useState, useEffect } from "react";
import Masonry from '@mui/lab/Masonry';

// Import images from the assets folder
import image1 from "../../Assest/Social/image 1.jpg";
import image2 from "../../Assest/Social/image 2.jpg";
import image3 from "../../Assest/Social/image 3.png";
import image4 from "../../Assest/Social/image 4.png";
import image5 from "../../Assest/Social/image 5.jpg";
import image6 from "../../Assest/Social/image 6.jpg";
import image7 from  "../../Assest/Social/image 7.jpg";
import image8 from "../../Assest/Social/image 8.png";
import image9 from "../../Assest/Social/image 9.jpg";
import image10 from "../../Assest/Social/image 10.jpg";
import image11 from "../../Assest/Social/image 11.jpg";
import image12 from "../../Assest/Social/image 12.jpg";
import image13 from "../../Assest/Social/image 13.jpg";
import image14 from "../../Assest/Social/image 14.jpg";
import image15 from "../../Assest/Social/image 15.jpg";
import image16 from "../../Assest/Social/image 16.jpg";
import image17 from "../../Assest/Social/image 17.png";
import image18 from "../../Assest/Social/image 18.png";
import image19 from "../../Assest/Social/image 19.jpg";
import image20 from "../../Assest/Social/image 20.jpg";
import image21 from "../../Assest/Social/image 21.jpg";
import image22 from "../../Assest/Social/image 22.png";
import image23 from "../../Assest/Social/image 23.jpg";
import image24 from "../../Assest/Social/image 24.jpg";
import image25 from "../../Assest/Social/image 25.JPG";
import image26 from "../../Assest/Social/image 26.PNG";
import image27 from "../../Assest/Social/image 27.PNG";
import image28 from "../../Assest/Social/image 28.jpg";
import image29 from "../../Assest/Social/image 29.jpg";
import image30 from "../../Assest/Social/image 30.jpg";
import image31 from "../../Assest/Social/image 31.png";
import image32 from "../../Assest/Social/image 32.jpg";
import image33 from "../../Assest/Social/image 33.jpg";
import image34 from "../../Assest/Social/image 43.png";
import image35 from "../../Assest/Social/image 35.jpg";
import image36 from "../../Assest/Social/image 36.jpg";
import image37 from "../../Assest/Social/image 37.png";
import image38 from "../../Assest/Social/image 38.jpg";
import image39 from "../../Assest/Social/image 39.jpg";
import image40 from "../../Assest/Social/image 40.jpg";
import image41 from "../../Assest/Social/image 41.jpg";
import image42 from "../../Assest/Social/image 42.png";
import image43 from "../../Assest/Social/image 43.png";


function Bina() {
  // Array of imported image paths
  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8,
    image9, image10, image11, image12, image13, image14, image15, image16,
    image17, image18, image19, image20, image21, image22, image23, image24,
    image25, image26, image27, image28, image29, image30, image31, image32,
    image33, image34, image35, image36, image37, image38, image39, image40,
    image41, image42, image43
  ];

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
    e.stopPropagation(); // Prevent modal from closing
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    setSelectedImage(images[currentIndex > 0 ? currentIndex - 1 : images.length - 1]);
  };

  const handleNext = (e) => {
    e.stopPropagation(); // Prevent modal from closing
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
          Social Media Posts
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 350, textAlign: "center", mt: 3, color: "#fff" }}
        >
          SOCIAL MEDIA AND BRANDING | 2023 | Lead Designer
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
                alt={`Bina Addis branding ${index + 1}`}
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
