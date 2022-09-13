import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
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
                    <Nav.Link href="#action2">About</Nav.Link>
                    <Nav.Link href="#action2">Departments</Nav.Link>
                    <Nav.Link href="#action2">Pages</Nav.Link>
                    <Nav.Link href="#action2">Blog</Nav.Link>
                    <Nav.Link href="#action2">Contact</Nav.Link>
                </Nav>
                <Nav className="ms-auto my-2 my-lg-0">
                    <Button variant="outline-success">Free Consultation</Button>
                </Nav>
          
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;