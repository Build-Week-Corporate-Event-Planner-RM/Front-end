import React from "react";
import "./App.css";
import Registration from "./components/Registration";
import { Route, Switch, Link } from "react-router-dom";
import AddEvent from "./components/AddEvent";
import NavBar from "./components/NavBar";
import EditEvent from "./components/EditEvent";
import PrivateRoute from "./components/PrivateRoute";
import TestLogin from "./components/TestLogin";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Link to="/Login">Login</Link>
      <br />
      <Link to="/protected">Account</Link>
      <Route path="/Registration" component={Registration} />
      <Route path="/Login" component={TestLogin} />
      <Route path="/addevent" component={AddEvent} />
      <Switch>
        <PrivateRoute path="/protected">
          <EditEvent />
        </PrivateRoute>
        <Route path="/Login" />
      </Switch>
    </div>
  );
}

export default App;
