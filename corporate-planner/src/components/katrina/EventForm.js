import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import Registration from "./Registration";
import { Link } from "react-router-dom";

const Card = styled.div`
  background-color: lightgrey;
  width: 380px;
  height: 32rem;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 15px auto;
  margin-top: 1%;
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

const EventForm = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
    <div>
      <Card>
        <FormField>
          <h2>Add an Event 👋</h2>
          <FormField2
            type="text"
            name="name"
            placeholder="Event Name"
            value={values.name || ""}
          />
          {touched.name && errors.name && (
            <p className="errors">{errors.name}</p>
          )}
          <FormField2
            type="date"
            name="date"
            placeholder="Event Date"
            value={values.date || ""}
          />
          {touched.date && errors.date && (
            <p className="errors">{errors.date}</p>
          )}
          <FormField2
            type="description"
            name="description"
            placeholder="Event Description"
            value={values.description || ""}
          />
          {touched.description && errors.description && (
            <p className="errors">{errors.description}</p>
          )}
          <FormField2
            type="budget"
            name="budget"
            placeholder="Event Budget"
            value={values.budget || ""}
          />
          ​<button type="submit">Add New Event!</button>​
          <p>
            Need to Login?<Link to="/Login"> Login</Link>
          </p>
          <p>
            Not A Member?<Link to="/Registration"> Sign Up</Link>
          </p>
          <p>
            See All Events<Link to="/Events"> See Events</Link>
          </p>
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
      budget: budget || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    date: Yup.string().required(),
    description: Yup.string().required()
  }),
  handleSubmit(values, { setStatus }) {
    // values is our object with all our data on it
    console.log("clicked");
    axios
      .get("https://pokeapi.co/api/v2/", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(EventForm);

export default FormikEventForm;
