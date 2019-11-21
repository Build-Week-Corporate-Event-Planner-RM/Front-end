import React, { useState, useEffect } from "react";
import { login } from "../actionsAndModules/crud";
import { Link } from "react-router-dom";

const TestLogin = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const [loaded, setLoaded] = useState(false);

  //   useEffect(() => {
  //     sessionStorage.getItem("token") ? props.history.push(`/events`) : null;
  //   }, []);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitLogin = e => {
    e.preventDefault();
    login(user, props);
  };

  return (
    <div className="login">
      <div className="login-form">
        {sessionStorage.getItem("token") ? (
          <h3>Logged In</h3>
        ) : (
          <h3>Please Log In</h3>
        )}
        <form>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Username"
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <br />
          <br />
          <button onClick={submitLogin}>Login</button>
          <br />
          <p>
            New here?<Link to="/Registration">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default TestLogin;
