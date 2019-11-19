import React from "react";
import "./App.css";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { Route, Switch, Link } from "react-router-dom";
import AddEvent from "./components/AddEvent";
import NavBar from "./components/NavBar";
import EditEvent from "./components/EditEvent";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
      <Route path="/Registration" component={Registration} />
      <Route path="/addevent" component={AddEvent} />
      <EditEvent />
      <Switch>
        <PrivateRoute path="/protected">Private content</PrivateRoute>
        <Route path="/Login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
