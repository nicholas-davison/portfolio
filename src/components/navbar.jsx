import { Container, Nav, Navbar } from "react-bootstrap"
import { useEffect, useState } from "react";
import './navbar.css'
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom";


export const NavBar = ({triggerShake}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false)
  const location = useLocation();

  const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0); // Set to true if scrolled down
  };

  const handleToggle = () => {
    setIsDarkMode((prev) => !prev); // Toggle dark mode on navbar collapse
  };

  useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      // Cleanup the event listener on component unmount
      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);

    return (
        <Navbar 
          expand="lg" 
          className={`navbar ${isScrolled | isDarkMode ? "bg-dark" : "bg-transparent"} transition`} 
          sticky="top" 
          data-bs-theme={isScrolled | isDarkMode ? "dark" : "light"}>
        <Container>
          <Navbar.Brand href="/">
          <img
              src="/NDLogo.png"
              className="logo"
              alt="Nicholas Davison Logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-evenly flex-grow-1" >
            <Nav.Link href="/" className={location.pathname === "/" ? "active-link" : ""}>Home</Nav.Link>
            <Nav.Link href="/experience" className={location.pathname === "/experience" ? "active-link" : ""}>Professional Experience</Nav.Link>
            <Nav.Link href="/work" className={location.pathname === "/work" ? "active-link" : ""}>Digital Work</Nav.Link>
            {/* <Nav.Link href="/music">Music</Nav.Link> */}
            <ScrollLink
            to="footer"
            smooth={true}
            duration={1}
            className="nav-link"
            onClick={triggerShake}
            >Contact
            </ScrollLink>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}