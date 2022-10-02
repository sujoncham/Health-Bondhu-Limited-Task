import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {

    
    return (
        <Navbar bg="light" expand="lg" className='sticky-top'>
            <Container>
                <Navbar.Brand href="#"> 
                    <span className='logo-text'>Doc</span> 
                    <span className='logo-text-one'>mic.</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }} navbarScroll >
                        <Nav.Link style={{color:'#2D89FF'}} href="#action1">Home</Nav.Link>
                        <Nav.Link to="/">About</Nav.Link>
                        <Nav.Link to="/">Departments</Nav.Link>
                        <Nav.Link to="/">Pages</Nav.Link>
                        <Nav.Link to="/">Blog</Nav.Link>
                        <Nav.Link to="/">Contact</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto my-3 md:my-1 lg:my-1 my-lg-0">
                        <Link to='/freeConsult' className='btn btn-warning' >Free Consultation</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;