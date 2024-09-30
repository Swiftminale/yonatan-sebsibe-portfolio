import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

// Import images from the assets folder
import image1 from "../../Assest/DZGeneral/image 1.jpg";
import image2 from "../../Assest/DZGeneral/image 2.jpg";
import image3 from "../../Assest/DZGeneral/image 3.jpg";
import image4 from "../../Assest/DZGeneral/image 4.jpg";
import image5 from "../../Assest/DZGeneral/image 5.png";
import image6 from "../../Assest/DZGeneral/image 6.png";
import image7 from "../../Assest/DZGeneral/image 7.png";
import image8 from "../../Assest/DZGeneral/image 8.png";

function Dz() {
  // Array of imported image paths
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

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
              Project Overview
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
              DZ General Trading operates in the import/export and shipping
              sectors, offering a wide range of services. The aim of this
              project is to design a logo that represents the company’s core
              activities of global trade and shipping. The design will feature
              arrow symbols to express the flow of import and export, a
              container symbol to signify shipping, and the initials "DZ" to
              create a strong brand identity. The logo will reflect trust and
              professionalism, which are key values of the company.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={{ color: "#EB5E28", mt: 3 }}>
              Objectives
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
              Design a distinctive logo featuring arrow and container elements
              to represent import, export, and shipping services. Use bold,
              formal fonts for a professional look, and apply colors that convey
              trust and competence. Ensure the logo is versatile for social
              media, packaging, and business cards. Target audience: Businesses
              and individuals in the import/export and shipping sectors seeking
              a reliable trading partner. The word "ADDIS" incorporates a
              diagonal line transitioning into an airplane, symbolizing global
              connectivity and the consultancy’s role in facilitating
              international study opportunities.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" sx={{ color: "#EB5E28", mt: 3 }}>
              Deliverables
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
              Primary logo in vector formats (AI, EPS) and web-friendly formats
              (PNG, JPEG). Color variations, including full-color, monochrome,
              and black-and-white versions. A brand guide detailing color codes
              and typography usage. Timeline: Expected completion: 2 weeks from
              project start date.
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

export default Dz;
