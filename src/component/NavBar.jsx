import React from "react";
import { Navbar, Nav } from "react-bootstrap";
const NavBar = () => {
	return (
		<Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
			<Navbar.Brand>PortFolio</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='/about'>About</Nav.Link>
					<Nav.Link href='/work'>Work</Nav.Link>
					<Nav.Link href='/projects'>Projects</Nav.Link>
					<Nav.Link href='/contact'>Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
