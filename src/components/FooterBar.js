import { Box, Paper, Typography, Link } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Paper sx={{color:'white', marginBottom: 3, bgcolor:'transparent'}}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={2}
      >
        <Typography variant="body2">© 2024 Yonatan Sebsibe</Typography>
        <Typography variant="body2">
          © Developed by{" "}
          <Link
            href="https://swiftcomputertech.com/"
            target="_blank"
            rel="noopener"
          >
            Swift Computer Technology
          </Link>
        </Typography>
      </Box>
    </Paper>
  );
}

export default Footer;
