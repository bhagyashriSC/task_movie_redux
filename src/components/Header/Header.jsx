import React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './scss/Header.scss';
class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <>
      
  <Navbar className="header" expand="lg"  variant="dark">
  <Navbar className="navbar-brand">
    <Link to="/home" className="navLinks_logo"> HCL</Link></Navbar>
  
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
   {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
    </Nav>
    <Nav className="onCollapse">
    <div className="bottom"></div>
    <Nav><Link to="/home"> Movie List </Link></Nav>    
    </Nav>
  </Navbar.Collapse>  
</Navbar>

</>
    )
  }
}

export default Header;