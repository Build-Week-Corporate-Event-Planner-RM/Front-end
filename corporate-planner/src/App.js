import React from "react";
import "./App.css";
import Registration from "./components/Registration";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Events from "./components/Events";
import Login from "./components/Login";
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
