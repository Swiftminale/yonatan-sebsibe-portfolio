import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";
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

function Services() {
  return (
    <Box sx={{ width: "100%", color: "white", mt: 9 }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: 300, textAlign: "center", mt: 3 }}
      >
        Services
      </Typography>
      <Grid
        container
        rowSpacing={6}
        sx={{ mt: 3, color: "white" }}
        columnSpacing={{ xs: 2, sm: 3, md: 4 }}
      >
        <Grid size={6}>
          <Card
            sx={{
              color: "white",
              bgcolor: "transparent",
              textAlign: "center",
              //   border: 1,
              borderColor: "#b6ad90",
              padding: 2,
              borderRadius: 5,
              height: "100%",
            }}
          >
            <Typography variant="h5" sx={{ marginBottom: 3 }}>
              Comprehensive Graphic Design
            </Typography>
            <Typography variant="body2">
              From branding to promotional materials, I provide a full range of
              graphic design services tailored to meet the unique needs of each
              client. Whether it's print design, digital media, or marketing
              collateral, I ensure that every design is visually impactful and
              aligned with your brand's vision.
            </Typography>
          </Card>
        </Grid>
        <Grid size={6}>
          <Card
            sx={{
              color: "white",
              bgcolor: "transparent",
              textAlign: "center",
              //   border: 1,
              borderColor: "#b6ad90",
              padding: 2,
              borderRadius: 5,
              height: "100%",
            }}
          >
            <Typography variant="h5" sx={{ marginBottom: 3 }}>
              {" "}
              Logo & Identity Design
            </Typography>
            <Typography variant="body2">
              I create distinctive logos and cohesive brand identities that
              leave a lasting impression. Each design reflects your brand's
              personality, ensuring it stands out in a competitive market.
            </Typography>
          </Card>
        </Grid>

        <Grid size={6}>
          <Card
            sx={{
              color: "white",
              bgcolor: "transparent",
              textAlign: "center",
              //   border: 1,
              borderColor: "#b6ad90",
              padding: 2,
              borderRadius: 5,
              height: "100%",
            }}
          >
            <Typography variant="h5" sx={{ marginBottom: 3 }}>
              {" "}
              Social Media & Digital Design
            </Typography>
            <Typography variant="body2">
              Engage your audience with visually compelling social media
              graphics, digital ads, and banners. I design content that captures
              attention and enhances your brand’s digital presence across
              multiple platforms.
            </Typography>
          </Card>
        </Grid>
        <Grid size={6}>
          <Card
            sx={{
              color: "white",
              bgcolor: "transparent",
              textAlign: "center",
              //   border: 1,
              borderColor: "#b6ad90",
              padding: 2,
              borderRadius: 5,
              height: "100%",
            }}
          >
            <Typography variant="h5" sx={{ marginBottom: 3 }}>
              Print Design
            </Typography>
            <Typography variant="body2">
              From brochures and flyers to packaging and business cards, I
              design print materials that communicate your message effectively
              and professionally. My designs are crafted to ensure clarity and
              aesthetic appeal in any format.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Services;
