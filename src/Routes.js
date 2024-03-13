import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import CompanyList from "./CompanyList";

import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import Stage from "./Stage";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ProfileForm from "./ProfileForm";

const Routes = (props) => {
  return (
    <Switch>
      {/* HomePage Route */}
      <Route
        exact
        path="/">
        <HomePage />
      </Route>

      {/* Companies Route's */}
      <Route
        exact
        path="/companies">
        <CompanyList />
      </Route>

      <Route
        exact
        path="/companies/:handle">
        <CompanyDetail />
      </Route>

      {/* Jobs Routes */}
      <Route
        exact
        path="/jobs">
        <JobList />
      </Route>

      {/* Stage / Practice routes */}
      <Route
        exact
        path="/stage">
        <Stage />
      </Route>

      {/* Auth routes */}
      <Route
        exact
        path="/login">
        <LoginForm login={props.login} />
      </Route>

      <Route
        exact
        path="/signup">
        <RegisterForm register={props.register} />
      </Route>

      <Route
        exact
        path="/profile">
        <ProfileForm />
      </Route>
    </Switch>
  );
};

export default Routes;
