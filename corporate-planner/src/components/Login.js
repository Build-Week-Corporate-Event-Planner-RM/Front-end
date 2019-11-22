import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import Registration from "../components/Registration";
import { Link } from "react-router-dom";

const Card = styled.div`
  background-color: #84faa3;
  width: 380px;
  min-height: 400px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 15px auto;
  margin-top: 15%;
`;
//
const Login = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
    <div>
      <Card>
        <Form className="theForm">
          <h2>Welcome Back 👋</h2>
          <Field
            type="text"
            className="formField"
            name="username"
            placeholder="Username"
          />
          {touched.username && errors.username && (
            <p className="errors">{errors.username}</p>
          )}

          <Field
            type="password"
            className="formField"
            name="password"
            placeholder="Password"
          />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}

          <p>
            New here? <Link to="/Registration">Sign Up</Link>
          </p>
          <button type="submit">Submit!</button>
        </Form>
      </Card>
    </div>
  );
};

const LoginOnboard = withFormik({
  mapPropsToValues({ username, email, password, termsOfService }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),
  handleSubmit(values, { setStatus }) {
    // values is our object with all our data on it
    console.log("clicked");
    axios
      .post(
        `https://corporate-event-planner-api.herokuapp.com/api/auth/login`,
        values
      )
      .then(res => {
        alert(res.data.message);
        sessionStorage.setItem("id", res.data.id);
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("id", res.data.id);
      })
      .catch(err => console.log(err));
    // axios
    //   .post("https://reqres.in/api/users/", values)
    //   .then(res => {
    //     setStatus(res.data);
    //     console.log(res);
    //   })
    //   .catch(err => console.log(err.response));
  }
})(Login);

export default LoginOnboard;
