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

function App() {
  return (
    <div className="App">
      <NavBar />
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
      <Route path="/addevent" component={AddEvent} />
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
