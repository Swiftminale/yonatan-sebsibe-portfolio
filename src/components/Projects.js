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
import Askuala from "../Assest/Askuala/logo.png"
import Liyu from "../Assest/Liyu Koffi/logo.png"

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
      {/* Add a Grid container for layout */}
      <Grid container spacing={2}>
        {/* Grid item for each Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              bgcolor: "transparent",
              border: "1px solid #CCC5B9",
              borderRadius: 4,
            }}
          >
            <CardActionArea onClick={() => handleCardClick("/book-cover")}>
              <CardMedia
                component="img"
                height="250"
                image={bookCover}
                alt="book cover"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#EB5E28", fontWeight: 350 }}
                >
                Book Cover
                  {/* ጻዴ */}
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Book cover Designed for "Dade" writen for "dean Ze'Aman Asefa"
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Repeat Grid item for each additional card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              bgcolor: "transparent",
              border: "1px solid #CCC5B9",
              borderRadius: 4,
            }}
          >
            <CardActionArea onClick={() => handleCardClick("/dz")}>
              <CardMedia
                component="img"
                height="250"
                image={DZ}
                alt="DZ General Trading"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#EB5E28", fontWeight: 350 }}
                >
                  DZ General Trading
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  DZ General Trading's logo will feature arrows, 
                  a container, and "DZ" to represent trade, shipping, and professionalism.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              bgcolor: "transparent",
              border: "1px solid #CCC5B9",
              borderRadius: 4,
            }}
          >
            <CardActionArea onClick={() => handleCardClick("/gursha")}>
              <CardMedia
                component="img"
                height="250"
                image={Gursha}
                alt="Gursha"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#EB5E28", fontWeight: 350 }}
                >
                  Gursha Digital
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                 The Gursha Digitals logo is a creative and minimalistic design that 
                 represents a digital agency with a modern, approachable, and dynamic identity.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              bgcolor: "transparent",
              border: "1px solid #CCC5B9",
              borderRadius: 4,
            }}
          >
            <CardActionArea onClick={() => handleCardClick("/tamagnjobs")}>
              <CardMedia
                component="img"
                height="250"
                image={TAMAGMJOBS}
                alt="TAMAGM JOBS"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#EB5E28", fontWeight: 350 }}
                >
                  TAMAGM JOBS
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                 The Tamagn Jobs logo is a modern, visually engaging 
                 representation of a job agency that focuses on connecting employers with potential candidates.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              bgcolor: "transparent",
              border: "1px solid #CCC5B9",
              borderRadius: 4,
            }}
          >
            <CardActionArea onClick={() => handleCardClick("/bina")}>
              <CardMedia
                component="img"
                height="250"
                image={BINAADDIS}
                alt="BINA ADDIS"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#EB5E28", fontWeight: 350 }}
                >
                  BINA ADDIS
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  The logo for Bina Addis Educational Consultancy is a 
                  bold and dynamic representation of the company's focus on facilitating international education opportunities, with a strong emphasis on professionalism and movement.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              bgcolor: "transparent",
              border: "1px solid #CCC5B9",
              borderRadius: 4,
            }}
          >
            <CardActionArea onClick={() => handleCardClick("/liyu")}>
              <CardMedia
                component="img"
                height="250"
                image={Liyu}
                alt="Social Media Posts"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#EB5E28", fontWeight: 350 }}
                >
                  Liyu Koffi
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                 Askuala connects parents with vetted tutors via a web and mobile app, 
                 offering personalized, accessible tutoring for primary and secondary students.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

                    <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              bgcolor: "transparent",
              border: "1px solid #CCC5B9",
              borderRadius: 4,
            }}
          >
            <CardActionArea onClick={() => handleCardClick("/askuala")}>
              <CardMedia
                component="img"
                height="250"
                image={Askuala}
                alt="Social Media Posts"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#EB5E28", fontWeight: 350 }}
                >
                  Askuala
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                 Askuala connects parents with vetted tutors via a web and mobile app, 
                 offering personalized, accessible tutoring for primary and secondary students.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              bgcolor: "transparent",
              border: "1px solid #CCC5B9",
              borderRadius: 4,
            }}
          >
            <CardActionArea onClick={() => handleCardClick("/social")}>
              <CardMedia
                component="img"
                height="250"
                image={SocilaPic}
                alt="Social Media Posts"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#EB5E28", fontWeight: 350 }}
                >
                  Social Media Posts
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  We also offers social media management and post design 
                  services to enhance your brand's online presence and engagement.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Projects;
