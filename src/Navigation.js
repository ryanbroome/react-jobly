import React, { useContext } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import userContext from "./userContext";

/**Navigation Component to render a NavBar, different Items rendered based on if logged in user present
 *
 * **/
const Navigation = ({ logout }) => {
  const { token } = useContext(userContext);

  function isLoggedIn() {
    return (
      <Navbar expand="md">
        <Nav
          className="ml-auto"
          navbar>
          <NavItem>
            <NavLink
              exact
              to="/"
              className="navbar-brand">
              Jobly
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              exact
              to="/profile">
              Profile
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              exact
              to="/companies">
              Companies
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              exact
              to="/jobs">
              Jobs
            </NavLink>
          </NavItem>
          <button
            className="Navigation-Logout"
            onClick={logout}>
            Logout
          </button>
        </Nav>
      </Navbar>
    );
  }

  function loggedOut() {
    return (
      <Navbar expand="md">
        <Nav
          className="ml-auto"
          navbar>
          <NavItem>
            <NavLink
              exact
              to="/"
              className="navbar-brand">
              Jobly
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              exact
              to="/login">
              🔐 Login
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              exact
              to="/signup">
              Signup
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }

  return token ? isLoggedIn() : loggedOut();
};

export default Navigation;

// todo ? How do I know which logic is ok to put in a render / return method in React component?
