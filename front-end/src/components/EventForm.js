import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import Registration from './Registration';
import { Link } from 'react-router-dom';

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
  DropdownItem } from 'reactstrap';


  const Card = styled.div`
  background-color: white;
  width: 380px;
  height: 28rem;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 15px auto;
  margin-top: 5%;
`;

const FormField = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 15%;
`;

const EventForm = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

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
              <NavLink href="./Events">Add An Event</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
​
      <Card>
        <FormField>
          <h2>Add an Event 👋</h2>
            <Field type="text" name="name" placeholder="Event Name" />
            {touched.name && errors.name && <p className="errors">{errors.name}</p>}
            <Field type="date" name="date" placeholder="Event Date" />
            {touched.date && errors.date && <p className="errors">{errors.date}</p>}
            <Field type="description" name="description" placeholder="Event Description" />
            {touched.description && errors.description && <p className="errors">{errors.description}</p>}
            <Field type="budget" name="budget" placeholder="Event Budget" />
            
​
            <button>Add New Event!</button>
​
          <p>New here?<Link to="/Registration"> Sign Up</Link></p>
          <p>Need to Login?<Link to="/Login"> Login</Link></p>
          
        </FormField>
      </Card>
  </div>
  );
};
const FormikEventForm = withFormik({
  mapPropsToValues({ name, date, description, budget }) {
    return {
      name: name || "",
      date: date || "",
      description: description || "",
      budget: budget || "",
      
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    date: Yup.string().required(),
    description: Yup.string().required()
  }),
  handleSubmit(values, { setStatus }) {
    // values is our object with all our data on it
    axios
      .post("https://reqres.in/api/events/", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(EventForm);

export default FormikEventForm;

