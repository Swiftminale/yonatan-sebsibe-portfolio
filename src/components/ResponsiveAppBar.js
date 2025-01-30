import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom"; // Import Link from react-router-dom

const typographyStyles = {
  fontFamily: "monospace",
  fontWeight: 900,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
};

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      elevation={0}
      sx={{ bgcolor: "transparent", mt: 2 }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Replace href with Link to="/" for the home page */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              ...typographyStyles,
            }}
          >
            YS
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              ...typographyStyles,
            }}
          >
            YS
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
