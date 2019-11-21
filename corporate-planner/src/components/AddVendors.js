import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Login from '../components/Login';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Card = styled.div`
  background-color: #84FAA3;
  width: 500px;
  min-height:  250px;
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

const AddVendor = (props) => {
    return (
    <Card>
      <FormField>
        <h2>Add a vendor</h2>
        <FormGroup>
          <Label for="eventName">Vendor Name</Label>
          <Input type="name" name="vendor" id="vendorName" placeholder="Vendor" />
        </FormGroup>
        <Button>Submit</Button>
      </FormField>
      </Card>
    );
  }

  export default AddVendor;
