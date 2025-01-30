import { Paper, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Import the images
import bookCover from "../Assest/bookCover.avif";
import DZ from "../Assest/Dz.webp";
import Gursha from "../Assest/Gursha.webp";
import TAMAGMJOBS from "../Assest/TAMAGM JOBS.webp";
import BINAADDIS from "../Assest/dOJtiusZ9xqTXdaBhaGp6ve444.webp";
import SocilaPic from "../Assest/Social.webp";
import Askuala from "../Assest/Askuala/logo.png";
import Liyu from "../Assest/Liyu Koffi/logo.png";

const projects = [
  {
    path: "/book-cover",
    image: bookCover,
    title: "Book Cover",
    description:
      'Book cover Designed for "Dade" writen for "dean Ze\'Aman Asefa"',
  },
  {
    path: "/dz",
    image: DZ,
    title: "DZ General Trading",
    description:
      'DZ General Trading\'s logo will feature arrows, a container, and "DZ" to represent trade, shipping, and professionalism.',
  },
  {
    path: "/gursha",
    image: Gursha,
    title: "Gursha Digital",
    description:
      "The Gursha Digitals logo is a creative and minimalistic design that represents a digital agency with a modern, approachable, and dynamic identity.",
  },
  {
    path: "/tamagnjobs",
    image: TAMAGMJOBS,
    title: "TAMAGM JOBS",
    description:
      "The Tamagn Jobs logo is a modern, visually engaging representation of a job agency that focuses on connecting employers with potential candidates.",
  },
  {
    path: "/bina",
    image: BINAADDIS,
    title: "BINA ADDIS",
    description:
      "The logo for Bina Addis Educational Consultancy is a bold and dynamic representation of the company's focus on facilitating international education opportunities, with a strong emphasis on professionalism and movement.",
  },
  {
    path: "/liyu",
    image: Liyu,
    title: "Liyu Koffi",
    description:
      "Askuala connects parents with vetted tutors via a web and mobile app, offering personalized, accessible tutoring for primary and secondary students.",
  },
  {
    path: "/askuala",
    image: Askuala,
    title: "Askuala",
    description:
      "Askuala connects parents with vetted tutors via a web and mobile app, offering personalized, accessible tutoring for primary and secondary students.",
  },
  {
    path: "/social",
    image: SocilaPic,
    title: "Social Media Posts",
    description:
      "We also offers social media management and post design services to enhance your brand's online presence and engagement.",
  },
];

function ProjectCard({ path, image, title, description, handleCardClick }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          maxWidth: 345,
          bgcolor: "transparent",
          border: "1px solid #CCC5B9",
          borderRadius: 4,
        }}
      >
        <CardActionArea onClick={() => handleCardClick(path)}>
          <CardMedia component="img" height="250" image={image} alt={title} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#EB5E28", fontWeight: 350 }}
            >
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

function Projects() {
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle card click
  const handleCardClick = (path) => {
    navigate(path); // Programmatically navigate to the path
  };

  return (
    <Paper
      elevation={0}
      sx={{ bgcolor: "#121214", borderRadius: 9, mt: 5, padding: 5 }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 350,
          textAlign: "center",
          mt: 3,
          marginBottom: 3,
          color: "#EB5E28",
        }}
      >
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <ProjectCard
            key={project.path}
            path={project.path}
            image={project.image}
            title={project.title}
            description={project.description}
            handleCardClick={handleCardClick}
          />
        ))}
      </Grid>
    </Paper>
  );
}

export default Projects;
