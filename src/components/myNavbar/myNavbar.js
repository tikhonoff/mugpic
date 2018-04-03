//sets up the reusable Navbar component
import React, { Component } from "react";
import "./myNavbar.css";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class myNavbar extends Component {
  render() {
    return (
      <Navbar color="faded" light expand="md" className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
      <NavbarBrand href="/"><h2>Employers of the month. <br></br>Remember Them All.</h2></NavbarBrand>
      <Nav className="nav justify-content-end ">
            <NavItem>
             <NavLink disabled href="#"><h2>Score: {this.props.score}</h2></NavLink>
            </NavItem> 
            <NavItem>
             <NavLink disabled href="#"><h2>Left: {parseInt(12-this.props.score, 10)}</h2></NavLink>
            </NavItem> 




            
      </Nav>
      </Navbar>
    );
  }
}

export default myNavbar;