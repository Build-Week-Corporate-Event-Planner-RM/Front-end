import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
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
import { Link } from "react-router-dom";

export default function Events() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    axios.get(`https://reqres.in/api/events/`, {}).then(response => {
      console.log(response);
      const characters = response.data.data.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log("corporate events", response);
      setData(characters);
    });
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const EventList = styled.div`
    background-color: lightgrey;
    width: 380px;
    height: 20rem;
    border-radius: 15px;
    padding: 10px;
    padding-top: 30px;
    box-shadow: 0px 1px 4px black;
    text-align: center;
    margin: 15px auto;
    margin-top: 5%;
  `;

  return (
    <div>
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
              <NavLink href="./Events">Events</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="Find An Event"
          autoComplete="off"
        />
      </form>
      <p>
        Planning an Event?<Link to="/AddEvent"> Add Event</Link>
      </p>
      <div>
        {data.map(data => {
          return (
            <EventList className="character-list " key={data._id}>
              <h2>{data.name}</h2>
              <h3 className="capital">Date: {data.datetime}</h3>
              <h3 className="capital">Description: {data.description}</h3>
              <h3 className="capital">Budget: {data.budget}</h3>
            </EventList>
          );
        })}
      </div>
    </div>
  );
}
