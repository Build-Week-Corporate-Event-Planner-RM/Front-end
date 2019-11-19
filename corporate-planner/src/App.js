import React from "react";
import "./App.css";
import Login from "./components/Login";
// import Registration from "./components/Registration";
import { Route, Switch, Link } from "react-router-dom";
import AddEvent from "./components/AddEvent";
import NavBar from "./components/NavBar";
import EditEvent from "./components/EditEvent";
import PrivateRoute from "./components/PrivateRoute";
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
      <Route path="/Login" component={Login} />
      <Route path="/addevent" component={AddEvent} />
      <Switch>
        <PrivateRoute path="/protected">Private content</PrivateRoute>
        <Route path="/Login" />
      </Switch>
      <EditEvent />
    </div>
  );
}

export default App;
