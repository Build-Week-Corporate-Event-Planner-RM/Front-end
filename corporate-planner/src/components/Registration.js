import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
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
import NavBar from "./NavBar";

const Card = styled.div`
  background-color: white;
  width: 380px;
  height: 475px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 15px auto;
  margin-top: 10%;
`;

const FormField = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 15%;
`;

const Registration = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
    <div>
      {/* <NavBar /> */}

      <Card>
        <FormField>
          <h2>Hello! 👋</h2>

          <Field type="text" name="name" placeholder="Full Name" />
          {touched.name && errors.name && (
            <p className="errors">{errors.name}</p>
          )}

          <Field type="text" name="email" placeholder="Work e-mail" />
          {touched.name && errors.name && (
            <p className="errors">{errors.email}</p>
          )}

          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}

          <Field type="text" name="company" placeholder="Company" />

          <Field type="text" name="role" placeholder="Role" />

          <label className="checkbox-container">
            Terms Of Service
            <Field
              type="checkbox"
              name="termsOfService"
              checked={values.termsOfService}
            />
          </label>

          <button>Submit!</button>

          <p>
            Already have an account?<Link to="/Login">Log In</Link>
          </p>
        </FormField>
      </Card>
    </div>
  );
};
const RegistrationOnboard = withFormik({
  mapPropsToValues({ name, email, password, company, role, termsOfService }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      company: company || "",
      role: role || ""
      //   termsOfService: termsOfService || false
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
      .post(
        `https://corporate-event-planner-api.herokuapp.com/api/auth/login`,
        values
      )
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(Registration);

export default RegistrationOnboard;
