import React from "react";
import "./App.css";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <Route path="/Login" component={Login} />
      <Route path="/Registration" component={Registration} />
    </div>
  );
}

export default App;
