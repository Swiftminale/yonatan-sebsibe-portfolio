import { Paper, Typography } from "@mui/material";
import React from "react";

const paperStyles = {
  bgcolor: "#121214",
  color: "white",
  mt: 5,
  p: 2,
  borderRadius: 9,
};

const titleStyles = {
  fontWeight: 350,
  textAlign: "center",
  mt: 3,
  color: "#EB5E28",
};

const bodyStyles = {
  fontWeight: 300,
  textAlign: "center",
  mt: 3,
};

function About() {
  return (
    <Paper sx={paperStyles}>
      <Typography variant="h4" sx={titleStyles}>
        About
      </Typography>
      <Typography variant="body1" sx={bodyStyles}>
        BSc in Urban Design from Addis Ababa University, and I bring extensive
        experience in both urban planning and graphic design to my work. I
        specialize in logo design, social media visuals, and digital content
        creation, always striving to deliver professional and visually
        compelling solutions that align with brand strategies. With a strong
        understanding of branding, communication, and digital marketing, I
        create content that engages audiences and effectively promotes brands. I
        am dedicated to producing high-quality work that blends creativity with
        strategic thinking, ensuring that my projects not only look great but
        also achieve impactful results.
      </Typography>
    </Paper>
  );
}

export default About;
