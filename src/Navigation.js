import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

/**  <Navigation />
 *
 * Renders react strap styling components to create a navigation bar for the App
 *
 * props: {  }
 *
 * Displays Navigation NavLinks for [ HomePage, CompaniesList, JobCardList, LoginForm, RegisterForm  ] routes
 * Displays Number( Snacks/Drinks )
 * **/

function Navigation({ logout }) {
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

        <NavItem>
          <NavLink
            exact
            to="/stage">
            Stage
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

export default Navigation;
