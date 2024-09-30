import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

// Import your images
import image1 from "../../Assest/BookCover/Image 1.avif";
import image2 from "../../Assest/BookCover/Image 2.avif";
import image3 from "../../Assest/BookCover/Image 3.avif";
// Add more images as needed

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

// Update itemData to use your imported images
const itemData = [
  { img: image2, title: "Cover" },
  { img: image1, title: "Image 1" },
  { img: image3, title: "Image 3" },
  // Add more items as needed
];

function BookCover() {
  return (
    <Paper sx={{ bgcolor: "transparent", p: 2 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 350, textAlign: "center", mt: 3, color: "#EB5E28" }}
      >
        BOOK COVER
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontWeight: 350, textAlign: "center", mt: 3, color: "#fff" }}
      >
        COVER | 2022 | Lead Designer
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          minHeight: 829,
          alignItems: "center",
          mt: 3,
        }}
      >
        <Grid container spacing={3}>
          {itemData.map((item, index) => (
            <Grid
              item
              xs={12} // Make each item take full width in the column
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center", // Center the grid items
                alignItems: "center", // Center the items vertically
              }}
            >
              <Box sx={{ position: "relative", textAlign: "center" }}>
                <img
                  srcSet={`${item.img}?w=300&auto=format&dpr=2 2x`} // Increased width for higher resolution
                  src={`${item.img}?w=300&auto=format`} // Increased width for normal resolution
                  alt={item.title}
                  loading="lazy"
                  style={{
                    borderRadius: 6,
                    display: "block",
                    width: "100%", // Make the image responsive
                    height: "auto", // Maintain aspect ratio
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
    </Paper>
  );
}

export default BookCover;
