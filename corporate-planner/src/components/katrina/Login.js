import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import Registration from "./Registration";
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

const Card = styled.div`
  background-color: lightgrey;
  width: 380px;
  height: 30rem;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 15px auto;
  margin-top: 5%;
`;

const FormField = styled(Form)`
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10%;
`;

const FormField2 = styled(Field)`
margin-top:1%
margin-bottom: 5%;
`;

const Login = ({ values, errors, touched, status }) => {
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
      ​
      <Card>
        <FormField>
          <h2>Welcome Back 👋</h2>
          <FormField2 type="text" name="email" placeholder="Email" />
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
          ​
          <FormField2 type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
          ​<button>Log In!</button>​
          <p>
            New here?<Link to="/Registration"> Sign Up</Link>
          </p>
          <p>
            Planning an Event?<Link to="/AddEvent"> Add Event</Link>
          </p>
          <p>
            See All Events<Link to="/Events"> See Events </Link>
          </p>
        </FormField>
      </Card>
    </div>
  );
};
const LoginOnboard = withFormik({
  mapPropsToValues({ name, email, password, termsOfService }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      termsOfService: termsOfService || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required()
  }),
  handleSubmit(values, { setStatus }) {
    // values is our object with all our data on it
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(Login);

export default LoginOnboard;
