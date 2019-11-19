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

function App() {
  return (
    <div className="App">
      <NavBar />
      <Link to="/Login">Login</Link>
      <br />
      <Link to="/protected">Account</Link>
      {/* <Route path="/Registration" component={Registration} /> */}
      <Route path="/Registration" component={Register} />
      <Route path="/Login" component={TestLogin} />
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
