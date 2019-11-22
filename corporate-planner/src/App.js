import React from "react";
import "./App.css";
import Registration from "./components/Registration";
import { Route, Switch, Link } from "react-router-dom";
import AddEvent from "./components/AddEvent";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import TestLogin from "./components/TestLogin";
import Events from "./components/Events";
import Register from "./components/Register";
import Login from "./components/Login";
<<<<<<< HEAD
import Vendors from "./components/Vendors";
import AddVendor from "./components/AddVendor";
// import FormikEventForm from "./components/katrina/EventForm";
// import Events from "./components/katrina/Events";
// import Login from "./components/katrina/Login";
=======
import AddVendors from "./components/AddVendors";
import MainEvents from "./components/MainEvents";
import MainVendors from "./components/MainVendors";
import AddEvent2 from "./components/AddEvent2";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Route path="/Registration" component={Registration} />
      <Route path="/Login" component={Login} />
      <Route path="/addevents" component={AddEvent2} />
      <Route path="/addvendors" component={AddVendors} />

      <Route path="/events" component={MainEvents} />
      <Route path="/vendors" component={MainVendors} />
      <Switch>
        <PrivateRoute path="/events">
          <Events />
        </PrivateRoute>
        <Route path="/Login" />
      </Switch>
    </div>
  );
}

export default App;
