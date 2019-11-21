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

const Card = styled.div`
  background-color: white;
  width: 380px;
  min-height: 550px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 15px auto;
  margin-top: 10%;
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
      <Card>
        <Form className="theForm">
          <h2>Hello! 👋</h2>

          <Field type="text" className="formField" name="username" placeholder="Username" />
          {touched.username && errors.username && (
            <p className="errors">{errors.username}</p>
          )}

          <Field type="text" className="formField" name="email" placeholder="Work e-mail" />
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}

          <Field type="password" className="formField" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}

          <Field type="text" className="formField" name="company" placeholder="Company" />

          <Field type="text" className="formField" name="role" placeholder="Role" />

          <label className="checkbox-container">
            Terms Of Service
            <Field
              type="checkbox"
              className="formField"
              name="termsOfService"
              checked={values.termsOfService}
            />
          </label>

          <button type="submit">Submit!</button>

          <p>
            Already have an account? <Link to="/Login">Log In</Link>
          </p>
        </Form>
      </Card>
    </div>
  );
};

const RegistrationOnboard = withFormik({
  mapPropsToValues({ username, email, password, company, role }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      company: company || "",
      role: role || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required()
  }),
  handleSubmit(values, { setStatus }) {
    // values is our object with all our data on it
    console.log("submit");
    axios
      .post(
        `https://corporate-event-planner-api.herokuapp.com/api/auth/register`,
        values
      )
      .then(res => {
        setStatus(res.data);
        sessionStorage.setItem("id", res.data.id);
        sessionStorage.setItem("token", res.data.token);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(Registration);

export default RegistrationOnboard;
