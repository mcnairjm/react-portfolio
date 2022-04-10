import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
        <Navbar.Brand>John McNair</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
            <NavLink to = "/about">About</NavLink> //
            <NavLink to ="/projects">Projects</NavLink> // 
            <NavLink to="/resume">Resume</NavLink> //
            <NavLink to="/contact">Contact</NavLink> //
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Navigation;