import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// Images from assets folders
import image1 from "../../Assest/Gursha/Image 1.jpg";
import image2 from "../../Assest/Gursha/Image 2.jpg";
import image3 from "../../Assest/Gursha/Image 3.png";
import image4 from "../../Assest/Gursha/Image 4.png";
import image5 from "../../Assest/Gursha/Image 5.png";
import image6 from "../../Assest/Gursha/Image 6.jpg";
import image7 from "../../Assest/Gursha/Image 7.jpg";
import image8 from "../../Assest/Gursha/Image 8.png";
import image9 from "../../Assest/Gursha/Image 9.jpg";
import image10 from "../../Assest/Gursha/Image 10.jpg";
import image11 from "../../Assest/Gursha/Image 11.jpg";
import image12 from "../../Assest/Gursha/Image 12.jpg";
import image13 from "../../Assest/Gursha/Image 13.jpg";
import image14 from "../../Assest/Gursha/Image 14.jpg";
import image15 from "../../Assest/Gursha/Image 15.jpg";

// Import your videos from the assets folder
import video1 from "../../Assest/Gursha/vid.mp4";
import video2 from "../../Assest/Gursha/Vid last.mp4";
// Add more videos as needed

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

// Array of video data
const itemData = [
  { video: video1, title: "Video 1" },
  { video: video2, title: "Video 2" },
  // Add more video items as needed
];

function Gursha() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
  ];

  return (
    <Paper sx={{ bgcolor: "transparent", p: 2 }}>
      <Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: 350, textAlign: "center", mt: 3, color: "#EB5E28" }}
        >
          Gursha
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "350", textAlign: "center", mt: 3, color: "white" }}
        >
          LOGO DESIGN | 2024 | Lead Designer
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={{ color: "#EB5E28", mt: 3 }}>
              Gursha Digitals Logo
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
              The Gursha Digitals logo is a creative and minimalistic design
              that represents a digital agency with a modern, approachable, and
              dynamic identity.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={{ color: "#EB5E28", mt: 3 }}>
              Typography & Iconography
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
              The logo features a unique, stylized "g" as the primary visual
              element. The letter is split into two parts: the top circle, which
              has a dot on its side, and the lower crescent. The dot may
              symbolize a digital point or a moment of connection. The
              simplified, abstract form of the "g" makes it modern and
              memorable, while also embodying a forward-thinking digital
              identity.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={{ color: "#EB5E28", mt: 3 }}>
              Color Palette
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
              The use of orange evokes energy, creativity, and innovation, which
              aligns with the dynamic nature of digital work. The teal/blue
              color contrasts with the orange, representing trust, reliability,
              and calm, reinforcing the professionalism of the brand.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={{ color: "#EB5E28", mt: 3 }}>
              Typography
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
              The brand name Gursha is written in rounded, custom letters, which
              complement the overall friendly and accessible vibe of the logo.
              The word "DIGITALS" is subtly placed below in orange, further
              reinforcing the company’s focus on digital services.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={{ color: "#EB5E28", mt: 3 }}>
              Symbolism
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
              The letter "g" in the logo might hint at "Gursha," a word
              referring to a traditional Ethiopian gesture of feeding someone,
              symbolizing care, sharing, and connection. This could subtly
              represent how the company nurtures relationships and offers its
              digital services with care.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={{ color: "#EB5E28", mt: 3 }}>
              Overall Concept
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
              The logo effectively blends modern design principles with a
              simple, approachable aesthetic, positioning Gursha Digitals as a
              creative and trustworthy partner in the digital space.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 8 }}>
        <Grid container spacing={2}>
          {/* Video Grid */}
          {itemData.map((item, index) => (
            <Grid
              item
              xs={12} // Full width on small screens
              sm={6} // Two columns side by side on medium and large screens
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "auto", // Allow the height to auto-adjust
                border: "1px solid #CCC5B9",
                borderRadius: 4,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <video
                  src={item.video}
                  controls
                  style={{
                    borderRadius: 6,
                    display: "block",
                    width: "100%", // Make the video responsive
                    maxHeight: "500px", // Set a maximum height for the video player
                    objectFit: "contain", // Ensure the video fits without stretching
                  }}
                />
                <Label sx={{ bgcolor: "transparent", color: "white" }}>
                  {item.title}
                </Label>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 3 }}>
        {/* Image Grid */}
        <Grid container spacing={2}>
          {images.map((src, index) => (
            <Grid
              item
              xs={12} // Full width on small screens
              sm={6} // Two columns on medium and large screens
              key={index}
            >
              <Box>
                <img
                  src={src}
                  alt={`Gursha branding ${index + 1}`}
                  style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}

export default Gursha;
