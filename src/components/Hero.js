import { Paper, Box, Typography, IconButton, Divider } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import ProfileImg from "../Assest/ProfielPic.webp";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Hero() {
  return (
    <Paper elevation={4} sx={{ flexGrow: 1, bgcolor: "transparent", mt: 3 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          sx={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              YONATHAN SEBSBIE
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 500 }}>
              Urban Planner | Graphic Designer | Content Creator
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ color: "white" }}>
          <Box>
            <img
              src={ProfileImg}
              alt="Profile"
              style={{
                width: "50%",
                height: "auto",
                borderRadius: "50%",
                margin: "auto",
                display: "block",
              }}
            />
            <Box
              display="flex"
              justifyContent="center"
              mt={2}
              sx={{ color: "white" }}
            >
              <IconButton href="https://www.facebook.com" target="_blank">
                <FacebookIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton href="https://www.twitter.com" target="_blank">
                <XIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton href="https://www.linkedin.com" target="_blank">
                <LinkedInIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/official_yona_hood/"
                target="_blank"
              >
                <InstagramIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider
        component="li"
        sx={{
          width: "80%", // adjust the width as needed
          borderBottomWidth: 1, // thin border
          borderColor: "white", // white color
          margin: "20px auto", // centers the divider
        }}
      />
    </Paper>
  );
}

export default Hero;
