import React from "react";
import ToggleButton from "../ToggleButton/toggleButton";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Sun from '../../assests/icons8-sun-58.png';
import Moon from '../../assests/icons8-moon-48.png';
import Nav from 'react-bootstrap/Nav';



function Navigation({  scrollToSection, setTheme }) {

    return (
        <Navbar expand="lg" sticky="top" className="bg-black text-white border-bottom border-2 ">
            <Navbar.Collapse id="basic-navbar-nav ">
                <div className="d-flex flex-row  gap-4 ms-auto ">
                    <Nav.Link className="pt-3 fs-5 fw-normal "
                        style={{ letterSpacing: '2px' }}
                        onClick={() => {
                            scrollToSection("home");
                        }}
                        href="#home"
                    >
                        HOME
                    </Nav.Link>
                    <Nav.Link className="pt-3 fs-5 fw-normal "
                        style={{ letterSpacing: '2px' }}
                        onClick={() => {
                            scrollToSection("about");
                        }}
                        href="#about"
                    >
                        ABOUT
                    </Nav.Link>
                    <Nav.Link className="pt-3 fs-5 fw-normal "
                        style={{ letterSpacing: '2px' }}
                        onClick={() => {
                            scrollToSection("skills");
                        }}
                        href="#skills"
                    >
                        <div className="">
                            SKILLS
                        </div></Nav.Link>
                    <Nav.Link className="pt-3 fs-5 fw-normal "
                        style={{ letterSpacing: '2px' }}
                        onClick={() => {
                            scrollToSection("projects");
                        }}
                        href="#projects"
                    >
                        PROJECT
                    </Nav.Link>
                    <Nav.Link className="pt-3 fs-5 fw-normal "
                        style={{ letterSpacing: '2px' }}
                        onClick={() => {
                            scrollToSection("certifications");
                        }}
                        href="#certifications"
                    >
                        CERTIFICATIONS
                    </Nav.Link>
                    {/* <Nav.Link className="pt-3 fs-5 fw-normal "
                        style={{ letterSpacing: '2px' }}
                        onClick={() => {
                            scrollToSection("blogs");
                        }}
                        href="#blogs"
                    >
                        BLOGS
                    </Nav.Link> */}
                    <Nav.Link className="pt-3 fs-5 fw-normal "
                        style={{ letterSpacing: '2px' }}
                        onClick={() => {
                            scrollToSection("contact");
                        }}
                        href="#contact"
                    >
                        CONTACT
                    </Nav.Link>
                    <div className="d-flex flex-row gap-1 pt-3">
                        <img style={{ height: "55%" }} src={Sun} alt="" ></img>
                        <ToggleButton  setTheme={setTheme}  ></ToggleButton>
                        <img style={{ height: "45%" }} src={Moon} alt="" ></img>
                    </div>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
