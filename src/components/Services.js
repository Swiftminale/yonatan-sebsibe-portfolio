import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";

// Styled Paper Item (Optional, in case you use it elsewhere)
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const services = [
  {
    title: "Comprehensive Graphic Design",
    description:
      "From branding to promotional materials, I provide a full range of graphic design services tailored to meet the unique needs of each client. Whether it's print design, digital media, or marketing collateral, I ensure that every design is visually impactful and aligned with your brand's vision.",
  },
  {
    title: "Logo & Identity Design",
    description:
      "I create distinctive logos and cohesive brand identities that leave a lasting impression. Each design reflects your brand's personality, ensuring it stands out in a competitive market.",
  },
  {
    title: "Social Media & Digital Design",
    description:
      "Engage your audience with visually compelling social media graphics, digital ads, and banners. I design content that captures attention and enhances your brand’s digital presence across multiple platforms.",
  },
  {
    title: "Print Design",
    description:
      "From brochures and flyers to packaging and business cards, I design print materials that communicate your message effectively and professionally. My designs are crafted to ensure clarity and aesthetic appeal in any format.",
  },
];

function ServiceCard({ title, description }) {
  return (
    <Grid item xs={12} md={6}>
      <Card
        sx={{
          color: "white",
          bgcolor: "transparent",
          textAlign: "center",
          borderColor: "#b6ad90",
          padding: 2,
          borderRadius: 5,
          height: "100%",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginBottom: 3,
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Card>
    </Grid>
  );
}

function Services() {
  return (
    <Paper
      elevation={0}
      sx={{ bgcolor: "#121214", padding: 1, mt: 5, borderRadius: 9 }}
    >
      <Box sx={{ width: "100%", color: "white", borderRadius: 9 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 350, textAlign: "center", mt: 3, color: "#EB5E28" }}
        >
          Services
        </Typography>
        <Grid
          container
          spacing={4} // Adds space between items
          sx={{ mt: 3, color: "white" }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}

export default Services;
