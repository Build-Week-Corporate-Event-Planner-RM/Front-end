import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import Registration from "../components/Registration";
import { Link } from "react-router-dom";
import { login } from "../actionsAndModules/crud";
import NavBar from "./NavBar";

const Card = styled.div`
  background-color: white;
  width: 380px;
  height: 300px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 15px auto;
  margin-top: 15%;
`;

const FormField = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 15%;
`;

const Login = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);
  console.log(" : Login -> users", users);

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
    <div>
      <NavBar />

      <Card>
        <FormField>
          <h2>Welcome Back 👋</h2>
          <Field type="text" name="name" placeholder="Work e-mail" />
          {touched.name && errors.name && (
            <p className="errors">{errors.name}</p>
          )}

          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}

          <p>
            New here?<Link to="/Registration">Sign Up</Link>
          </p>
        </FormField>
        <button type="submit">Submit!</button>
      </Card>
    </div>
  );
};
const LoginOnboard = withFormik({
  mapPropsToValues({ name, email, password, termsOfService }) {
    return {
      name: name || "",
      //   email: email || "",
      password: password || ""
      //   termsOfService: termsOfService || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    // email: Yup.string().required(),
    password: Yup.string().required()
  }),
  handleSubmit(values, { setStatus }) {
    // values is our object with all our data on it
    console.log("clicked");
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
