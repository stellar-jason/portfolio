import React, { Component } from "react";
import Header from "./HeaderComponent";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";
// import { NavLink } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <>
        <Header />
        <Navbar expand="sm" dark className="py-0 sticky-top">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} className='ml-auto' />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className='nav-link' href='#home'>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="#about">
                    About Me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="#skills">
                    Skills
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="#projects">
                    Projects
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="#contact">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
