import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import About from "./components/About";
import Services from "./components/Services";
import BookCover from "./components/Projects/bookCover"; // Import BookCover component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container sx={{ color: "white" }}>
        <ResponsiveAppBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Projects />
              </>
            }
          />
          <Route path="/book-cover" element={<BookCover />} />

          {/* Define the BookCover route */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
