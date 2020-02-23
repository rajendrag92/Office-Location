import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function NavigationBar() {

    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Navbar.Brand href="/home">Office Location</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/login" className="mr-11">Login</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}