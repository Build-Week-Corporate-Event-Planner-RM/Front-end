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
// import FormikEventForm from "./components/katrina/EventForm";
// import Events from "./components/katrina/Events";
// import Login from "./components/katrina/Login";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <FormikEventForm /> */}
      {/* <Events /> */}
      <Link to="/Login">Login</Link>
      <br />
      <br />
      <Link to="/protected">Account (private route)*</Link>
      <br />
      <Link to="/testLogin">Test Login*</Link>
      <br />
      <Link to="/testRegister">Test Register*</Link>
      <br />
      <Link to="/testAddEvent">Test Add Event*</Link>
      <br />

      <Route path="/testLogin" component={TestLogin} />
      <Route path="/testRegister" component={Register} />
      <Route path="/testAddEvent" component={AddEvent} />

      <Route path="/Registration" component={Registration} />
      <Route path="/Login" component={Login} />
      <Switch>
        <PrivateRoute path="/protected">
          <Events />
        </PrivateRoute>
        <Route path="/Login" />
      </Switch>
    </div>
  );
}

export default App;
