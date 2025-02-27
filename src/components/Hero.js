import { Paper, Box, Typography, IconButton, Divider } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import ProfileImg from "../Assest/ProfielPic.webp";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const paperStyles = {
  flexGrow: 1,
  bgcolor: "#121214",
  mt: 3,
  borderRadius: 9,
  padding: 6,
};

const textSectionStyles = {
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: { xs: "center", md: "left" },
};

const imageSectionStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const iconButtonStyles = { color: "white" };

function Hero() {
  return (
    <Paper elevation={0} sx={paperStyles}>
      <Grid container spacing={2} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6} sx={textSectionStyles}>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 700, color: "#EB5E28" }}>
              YONATHAN SEBSBIE
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 500,
                mt: 1,
              }}
            >
              Urban Planner | Graphic Designer | Content Creator
            </Typography>
          </Box>
        </Grid>

        {/* Image and Social Icons Section */}
        <Grid item xs={12} md={6} sx={imageSectionStyles}>
          <img
            src={ProfileImg}
            alt="Profile"
            style={{
              width: "70%",
              height: "auto",
              borderRadius: "50%",
            }}
          />
          <Box
            display="flex"
            justifyContent="center"
            mt={2}
            sx={{ mt: 5, gap: 2 }}
          >
            <IconButton href="https://www.facebook.com" target="_blank">
              <FacebookIcon sx={iconButtonStyles} />
            </IconButton>
            <IconButton href="https://www.twitter.com" target="_blank">
              <XIcon sx={iconButtonStyles} />
            </IconButton>
            <IconButton href="https://www.linkedin.com" target="_blank">
              <LinkedInIcon sx={iconButtonStyles} />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/official_yona_hood/"
              target="_blank"
            >
              <InstagramIcon sx={iconButtonStyles} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider
        component="li"
        sx={{
          width: "80%",
          borderBottomWidth: 1,
          borderColor: "white",
          margin: "20px auto",
          mt: 12,
        }}
      />
    </Paper>
  );
}

export default Hero;
