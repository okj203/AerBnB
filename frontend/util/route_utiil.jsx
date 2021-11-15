import { Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import { openModal } from "../actions/modal_actions";

// renders component if logged out, otherwise redirects to the root url
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const handleClick = () => openModal("login");

// renders component if logged in, otherwise redirects to the login page
// how to open modal right after redirecting user to the home page?
const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return (<Route
    path={path}
    exact={exact}
    render={(props) => (loggedIn ? <Component {...props} /> : <Redirect to="/"/>)}
  />)
};

// access the Redux state to check if the user is logged in
const mapStateToProps = (state) => {
  return { loggedIn: state.session.id === null ? false : Boolean(state.session.currentUser.id) };
};

// connect Auth to the redux state
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
// connect Protected to the redux state
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
