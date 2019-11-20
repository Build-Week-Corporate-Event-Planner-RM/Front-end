import React from 'react';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import EventForm from './components/EventForm';
import { Route } from 'react-router-dom';

function App() {
  return(
    <div className="App">
      <Route path="/Login" component={Login} />
      <Route path="/Registration" component={Registration} />
      <Route path="/Events" component={EventForm} />
    </div>
  );


}
export default App;


