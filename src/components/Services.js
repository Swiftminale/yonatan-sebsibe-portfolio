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
          {/* Card 1 */}
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
                  // background:
                  //   "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)", // rainbow gradient
                  // WebkitBackgroundClip: "text",
                  // WebkitTextFillColor: "transparent",
                }}
              >
                Comprehensive Graphic Design
              </Typography>
              <Typography variant="body2">
                From branding to promotional materials, I provide a full range
                of graphic design services tailored to meet the unique needs of
                each client. Whether it's print design, digital media, or
                marketing collateral, I ensure that every design is visually
                impactful and aligned with your brand's vision.
              </Typography>
            </Card>
          </Grid>

          {/* Card 2 */}
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
                  // background:
                  //   "linear-gradient(90deg, indigo, orange, yellow, green, violet, yellow, violet)", // rainbow gradient
                  // WebkitBackgroundClip: "text",
                  // WebkitTextFillColor: "transparent",
                }}
              >
                Logo & Identity Design
              </Typography>
              <Typography variant="body2">
                I create distinctive logos and cohesive brand identities that
                leave a lasting impression. Each design reflects your brand's
                personality, ensuring it stands out in a competitive market.
              </Typography>
            </Card>
          </Grid>

          {/* Card 3 */}
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
                  // background:
                  //   "linear-gradient(90deg, red, indigo, yellow, green, indigo, indigo, violet)", // rainbow gradient
                  // WebkitBackgroundClip: "text",
                  // WebkitTextFillColor: "transparent",
                }}
              >
                Social Media & Digital Design
              </Typography>
              <Typography variant="body2">
                Engage your audience with visually compelling social media
                graphics, digital ads, and banners. I design content that
                captures attention and enhances your brand’s digital presence
                across multiple platforms.
              </Typography>
            </Card>
          </Grid>

          {/* Card 4 */}
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
                  // background:
                  //   "linear-gradient(90deg, blue, orange, yellow, green, red, indigo, violet)", // rainbow gradient
                  // WebkitBackgroundClip: "text",
                  // WebkitTextFillColor: "transparent",
                }}
              >
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
    </Paper>
  );
}

export default Services;
