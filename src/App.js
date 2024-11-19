import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import About from "./components/About";
import Services from "./components/Services";
import FooterBar from "./components/FooterBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Load Component route
import BookCover from "./components/Projects/bookCover"; // Import BookCover component
import Bina from "./components/Projects/Bina"; // Import Bina component
import Dz from "./components/Projects/Dz";
import Gursha from "./components/Projects/Gursha";
import Tamagnjobs from "./components/Projects/TamagnJobs";
import Social from "./components/Projects/Social"

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
            <Route path="/bina" element={<Bina />} />
            <Route path="/dz" element={<Dz />} />
            <Route path="/gursha" element={<Gursha />} />
            <Route path="/tamagnjobs" element={<Tamagnjobs />} />"
            <Route path="/social" element={<Social/>} />
          {/* Define the BookCover route */}
        </Routes>
        <FooterBar/>
      </Container>
    </Router>
  );
}

export default App;
