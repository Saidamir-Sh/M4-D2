import React from 'react'
import './MyNav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const MyNav = () => {
    return (
        <div className='MyNav'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className='position-absolute' style={{right: '0px'}}>
                    <Nav.Link href="#deets">Home</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">About</Nav.Link>
                    <Nav.Link href="#deets">Browse</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MyNav
