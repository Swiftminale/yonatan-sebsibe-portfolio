import "./App.css";
import { Container } from "@mui/material";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import About from "./components/About";
import Services from "./components/Services";



function App() {
  return (
    <Container sx={{ color: "white", }}>
      <ResponsiveAppBar />
      <Hero />
      <About />
      <Services />
      <Projects />
    </Container>
  );
}

export default App;
