import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import userContext from "./userContext";

import { Nav, NavItem, Button } from "reactstrap";

/**Navigation Component to render a NavBar, different Items rendered based on if logged in user present
 *
 * **/
const Navigation = ({ logout }) => {
  const { token } = useContext(userContext);

  //method for JSX to return when valid token present in userContext
  function isLoggedIn() {
    return (
      <Nav
        justified
        pills>
        <NavItem>
          <NavLink
            exact
            to="/"
            className="nav-link"
            activeClassName="active">
            Home
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            exact
            to="/profile"
            className="nav-link"
            activeClassName="active">
            Profile
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            exact
            to="/companies"
            className="nav-link"
            activeClassName="active">
            Companies
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            exact
            to="/jobs"
            className="nav-link"
            activeClassName="active">
            Jobs
          </NavLink>
        </NavItem>
        <NavItem>
          <Button
            color="danger"
            onClick={logout}
            size="sm">
            Logout
          </Button>
        </NavItem>
      </Nav>
    );
  }

  // JSX to return when no valid token present in userContext
  function isLoggedOut() {
    return (
      <Nav
        justified
        pills>
        <NavItem>
          <NavLink
            exact
            to="/"
            className="nav-link"
            activeClassName="active">
            Jobly - Home
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            exact
            to="/login"
            className="nav-link"
            activeClassName="active">
            Login
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            exact
            to="/signup"
            className="nav-link"
            activeClassName="active">
            Signup
          </NavLink>
        </NavItem>
      </Nav>
    );
  }

  return token ? isLoggedIn() : isLoggedOut();
};

export default Navigation;
