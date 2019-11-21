import React from "react";
import styled from "styled-components";
// import { Card, CardText, CardTitle, CardBody, } from "reactstrap";

const Card = styled.div`
  background-color: #84FAA3;
  width: 380px;
  height: 300px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 15px auto;
`;

const Title = styled.div`
  font-size: 25px;
  border-bottom: 1px solid lightgrey;
  font-weight: 500;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: center;
`;

const EventCard = props => {
  return (
      <Card>
        <Title>{props.name}</Title>
        <CardContent>Description:{props.description}</CardContent>
        <CardContent>Date & Time:{props.datetime}</CardContent>
        <CardContent>Budget:{props.budget}</CardContent>
      </Card>
  )
}

export default EventCard;
