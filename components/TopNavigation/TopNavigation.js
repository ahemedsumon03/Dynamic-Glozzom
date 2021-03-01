import React, {Component} from 'react';
import {Button, Nav, Navbar} from "react-bootstrap";
import Link from "next/link";

class TopNavigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg" className='fixed-top'>
                    <Navbar.Brand className='text-light'><Link href='/'>Glozzom</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className='text-light'><Link href='/'>Home</Link></Nav.Link>
                            <Nav.Link className='text-light'><Link href='/about'>About Us</Link></Nav.Link>
                            <Nav.Link className='text-light'><Link href='/service'>Service</Link></Nav.Link>
                            <Nav.Link className='text-light'><Link href='/blog'>Blog</Link></Nav.Link>
                            <Nav.Link className='text-light'><Link href='/contact'>Contact</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default TopNavigation;