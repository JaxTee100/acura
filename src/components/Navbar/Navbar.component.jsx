import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './navbar.component.css'
import ShoppingCart from '../shopping-cart/ShoppingCart.component';

const NavbarComponent = () => {
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  >
      <Navbar.Brand as={Link}  to="/" style={{width: "10%"}} ><h1>Acura</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto my-margin">
          <Nav.Link as={NavLink} to='/acura-home' className="nav-link" activeclassname="active">Home</Nav.Link>
          <Nav.Link as={NavLink} to='/acura-home2' className="nav-link" activeclassname="active">Home2</Nav.Link>
          <Nav.Link as={NavLink} to="/tires" className="nav-link" activeclassname="active1">Tires</Nav.Link>
          <Nav.Link as={NavLink} to="/wheels" className="nav-link" activeclassname="active1">Wheels</Nav.Link>
          <Nav.Link as={NavLink} to="/accessories" className="nav-link" activeclassname="active1">Accessories</Nav.Link>
          <Nav.Link as={NavLink} to="/packages" className="nav-link" activeclassname="active1">Packages</Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className="nav-link" activeclassname="active1">Contact Us</Nav.Link>
        </Nav>
        <Nav className="align-items-center spaced">
          <Button variant="primary" className="mr-2 b-r">Sign In</Button>
          <ShoppingCart />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
