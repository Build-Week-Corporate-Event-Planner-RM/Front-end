import React, { useState } from "react";
import { registerAcct } from "../actionsAndModules/crud";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    company: null,
    role: null
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const register = e => {
    e.preventDefault();
    registerAcct(user);
  };

  return (
    <div className="register">
      <div className="register-form">
        <h3>Register</h3>
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
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
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
          <input
            type="text"
            name="company"
            onChange={handleChange}
            placeholder="Company"
          />
          <br />
          <br />
          <input
            type="text"
            name="role"
            onChange={handleChange}
            placeholder="Role"
          />
          <br />
          <br />
          <button onClick={register}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
