import React, { useState, useEffect } from "react";
import ToggleButton from "../ToggleButton/toggleButton";
import Navbar from "react-bootstrap/Navbar";
import Sun from "../../assests/icons8-sun-58.png";
import Moon from "../../assests/icons8-moon-48.png";
import Nav from "react-bootstrap/Nav";
import { Alert } from "react-bootstrap";

function Navigation({ scrollToSection, setTheme }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className="border-warning border-bottom bg-black text-white"
        style={{ position: "sticky", top: "0", zIndex: "2" }}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex flex-row gap-4 ms-auto">
            <Nav.Link
              className="pt-3 fs-6 fw-bold"
              style={{ letterSpacing: "2px" }}
              onClick={() => {
                scrollToSection("home");
              }}
              href="#home"
            >
              HOME
            </Nav.Link>
            <Nav.Link
              className="pt-3 fs-6 fw-bold"
              style={{ letterSpacing: "2px" }}
              onClick={() => {
                scrollToSection("about");
              }}
              href="#about"
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              className="pt-3 fs-6 fw-bold"
              style={{ letterSpacing: "2px" }}
              onClick={() => {
                scrollToSection("skills");
              }}
              href="#skills"
            >
              SKILLS
            </Nav.Link>
            <Nav.Link
              className="pt-3 fs-6 fw-bold"
              style={{ letterSpacing: "2px" }}
              onClick={() => {
                scrollToSection("certifications");
              }}
              href="#certifications"
            >
              CERTIFICATIONS
            </Nav.Link>
            {/* <Nav.Link className="pt-3 fs-6 fw-bold"
                        style={{ letterSpacing: '2px' }}
                        onClick={() => {
                            scrollToSection("awards");
                        }}
                        href="#awards"
                    >
                        AWARDS
                    </Nav.Link> */}
            <Nav.Link
              className="pt-3 fs-6 fw-bold"
              style={{ letterSpacing: "2px" }}
              onClick={() => {
                scrollToSection("contact");
              }}
              href="#contact"
            >
              CONTACT
            </Nav.Link>
            <div className="d-flex flex-row gap-1 pt-3">
              <img style={{ height: "55%" }} src={Sun} alt="" />
              <ToggleButton setTheme={setTheme} />
              <img style={{ height: "45%" }} src={Moon} alt="" />
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
      
    </>
  );
}

export default Navigation;
