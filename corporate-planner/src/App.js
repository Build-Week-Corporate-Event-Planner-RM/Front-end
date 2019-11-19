import React from "react";
import "./App.css";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { Route, Link } from "react-router-dom";
import AddEvent from "./components/AddEvent";

function App() {
  return (
    <div className="App">
      <Link to="/Login">Login</Link>
      <Route path="/Login" component={Login} />
      <Route path="/Registration" component={Registration} />
      <Route path="/addevent" component={AddEvent} />
    </div>
  );
}

export default App;
