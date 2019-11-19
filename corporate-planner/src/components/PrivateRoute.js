import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAuthenticated = () => sessionStorage.getItem("token");

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/Login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
