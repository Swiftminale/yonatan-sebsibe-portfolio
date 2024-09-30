import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

// Import images from the assets folder
import image1 from "../../Assest/Bina/Image 1.png";
import image2 from "../../Assest/Bina/Image 2.png";
import image3 from "../../Assest/Bina/Image 3.png";
import image4 from "../../Assest/Bina/Image 4.png";
import image5 from "../../Assest/Bina/Image 5.png";
import image6 from "../../Assest/Bina/Image 6.png";
import image7 from "../../Assest/Bina/Image 7.png";

function Bina() {
  // Array of imported image paths
  const images = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <Paper sx={{ bgcolor: "transparent", p: 2 }}>
      <Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: 350, textAlign: "center", mt: 3, color: "#EB5E28" }}
        >
          BINA ADDIS
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
        <Grid container spacing={2}>
          {images.map((src, index) => (
            <Grid
              item
              xs={12} // Full width on small screens
              sm={6} // Two columns on medium and large screens (6 = half of 12)
              key={index}
            >
              <Box>
                <img
                  src={src}
                  alt={`Bina Addis branding ${index + 1}`}
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

export default Bina;
