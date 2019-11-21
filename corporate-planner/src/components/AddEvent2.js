import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Login from '../components/Login';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Card = styled.div`
  background-color: #84FAA3;
  width: 500px;
  min-height: 600px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 15px auto;
  margin-top: 10%;
`;

const FormField = styled(Form)`
  width: 100%;
  align-items: center;
  margin-top: 5%;
`;

const AddEvent2 = (props) => {
    return (
    <Card>
      <FormField>
        <h2>Add an event</h2>
        <FormGroup>
          <Label for="eventName">Event Name</Label>
          <Input type="name" name="eventName" id="eventName" placeholder="Event Name" />
        </FormGroup>
        <FormGroup>
          <Label for="eventDescription">Description</Label>
          <Input type="text" name="descriptionText" id="descriptionText" placeholder="Fill out details"/>
        </FormGroup>
        <FormGroup>
          <Label for="eventDate">Date & Time</Label>
          <Input type="datetime-local" name="DateTime" id="DateTime" />
        </FormGroup>
        <FormGroup>
          <Label for="eventBudget">Event Budget</Label>
          <Input type="select" name="eventBudget" id="eventBudget">
            <option>100</option>
            <option>200</option>
            <option>300</option>
            <option>400</option>
            <option>500</option>
          </Input>
        </FormGroup>
        <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
            Completed?
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </FormField>
      </Card>
    );
  }

  export default AddEvent2;
