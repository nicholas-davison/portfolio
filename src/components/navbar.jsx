import { Container, Nav, Navbar } from "react-bootstrap"


export const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
          <img
              src="/NDLogo.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="Nicholas Davison Logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-evenly flex-grow-1" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/experience">Professional Experience</Nav.Link>
            <Nav.Link href="/work">Digital Work</Nav.Link>
            <Nav.Link href="/music">Music</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}