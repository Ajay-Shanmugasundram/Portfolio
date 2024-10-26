import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navbar/navbar";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Skills from "./pages/skills/skills";
import Certifications from "./pages/certifications/certifications";
// import Awards from "./pages/awards/awards";
// import Blogs from "./pages/blogs/blogs";
import LandingPage from "./pages/landingpage/landingpage";
import { Alert } from "react-bootstrap";

function App() {
  const [theme, setTheme] = useState("light");
  const [show, setShow] = useState(true); // State to control visibility

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClose = () => setShow(false); // Funct

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="App fs-5" id={theme}>
      <Navigation
        setTheme={setTheme}
        scrollToSection={scrollToSection}
      ></Navigation>
      <>
        <Alert
          style={{ position: "fixed", width: "100%", zIndex: "2" }}
          variant="success"
          className="text-center"
          onClose={handleClose}
          dismissible
        >
          <Alert.Heading>
            🌟 Exciting News! Version 2.0 Launching Before January 2025! Get
            Ready for a Mobile-Responsive Design, Enhanced Optimization, and the
            Latest Technologies!
          </Alert.Heading>
        </Alert>
        <section className="section" id="home">
          <LandingPage></LandingPage>
        </section>
        <section className="section" id="about">
          <About></About>
        </section>
        <section className="section" id="skills">
          <Skills></Skills>
        </section>
        <section className="section" id="certifications">
          <Certifications></Certifications>
        </section>
        {/* <section className="section" id="awards">
          <Awards></Awards>
        </section> */}
        {/* <section className="section" id="blogs">
          <Blogs></Blogs>
        </section> */}
        <section className="section" id="contact">
          <Contact></Contact>
        </section>
      </>
    </div>
  );
}

export default App;
