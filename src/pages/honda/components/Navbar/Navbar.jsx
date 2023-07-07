import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'

const NavbarComponent = ({url1,url2, name2,  name1}) => {
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  >
      <Navbar.Brand as={Link}  to="/" style={{width: "10%"}} ><h1 className='text-danger'>Honda</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto my-margin">
          <Nav.Link as={NavLink} to='/honda-home' className="nav-link" activeclassname="active">Home</Nav.Link>
          <Nav.Link as={NavLink} to='/honda-home2' className="nav-link" activeclassname="active">Home2</Nav.Link>
          <Nav.Link as={NavLink} to="/honda-tires" className="nav-link" activeclassname="active1">Tires</Nav.Link>
          <Nav.Link as={NavLink} to="/honda-wheels" className="nav-link" activeclassname="active1">Wheels</Nav.Link>
          <Nav.Link as={NavLink} to="/honda-accessories" className="nav-link" activeclassname="active1">Accessories</Nav.Link>
          <Nav.Link as={NavLink} to="/honda-packages" className="nav-link" activeclassname="active1">Packages</Nav.Link>
          <Nav.Link as={NavLink} to="/honda-contact" className="nav-link" activeclassname="active1">Contact Us</Nav.Link>
        </Nav>
        <Nav className="align-items-center spaced">
          <Button variant="danger" className="mr-2 b-r">Sign In</Button>
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
