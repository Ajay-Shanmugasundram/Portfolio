import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navbar/navbar";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Skills from "./pages/skills/skills";
import Certifications from "./pages/certifications/certifications";
import Projects from "./pages/projects/projects";
import Blogs from "./pages/blogs/blogs";
import LandingPage from "./pages/landingpage/landingpage";
import { Container } from "react-bootstrap";

function App() {
  const [theme, setTheme] = useState("light");
 



  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App fs-5" id={theme}>
      <Navigation
        setTheme={setTheme}
        scrollToSection={scrollToSection}
      ></Navigation>
      <Container>
        <section id="home">
          <LandingPage></LandingPage>
        </section>
        <section className="section" id="about">
          <About></About>
        </section>
        <section className="section" id="skills">
          <Skills></Skills>
        </section>
        {/* <section className="section" id="projects">
          <Projects></Projects>
        </section> */}
        <section className="section" id="certifications">
          <Certifications></Certifications>
        </section>
        {/* <section className="section" id="blogs">
          <Blogs></Blogs>
        </section> */}
        <section className="section" id="contact">
          <Contact></Contact>
        </section>
      </Container>
    </div>
  );
}

export default App;
