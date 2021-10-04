import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" className="red-shadow" expand="lg">
            <Container>
                <NavLink to="/" className="text-decoration-none">
                    <Navbar.Brand className="text-white fs-1 nav-title metal-font">Music School</Navbar.Brand>
                </NavLink>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="text-white">
                    <Nav className="ms-auto">
                        <NavLink to="/home" className="text-white me-4 fs-5 text-decoration-none nav-item metal-font">
                            Home
                        </NavLink>

                        <NavLink to="/service" className="text-white me-4 fs-5 text-decoration-none nav-item metal-font">
                            Service
                        </NavLink>

                        <NavLink to="/About" className="text-white me-4 fs-5 text-decoration-none nav-item metal-font">
                            About
                        </NavLink>

                        <NavLink to="/admission" className="text-white me-4 fs-5 text-decoration-none nav-item metal-font">
                            Admission
                        </NavLink>

                        <NavLink to="/contact" className="text-white me-4 fs-5 text-decoration-none nav-item metal-font">
                            Contact
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;