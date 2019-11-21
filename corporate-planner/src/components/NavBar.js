import React, { useState } from "react";
import Login from "../components/Login";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Corporate Event Planner</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink href="./Login">Log In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./Registration">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./events">Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./vendors">Vendors</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Add
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="./addevents">
                  Add Events
                </DropdownItem>
                <DropdownItem href="./addvendors">
                  Add Vendors
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>

  );
};

export default NavBar;
