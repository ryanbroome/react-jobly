import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ProfileForm from "./ProfileForm";
import NotFound from "./NotFound";

const Routes = (props) => {
  return (
    <Switch>
      <Route
        exact
        path="/">
        <HomePage />
      </Route>

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

      <Route
        exact
        path="/jobs">
        <JobList apply={props.apply} />
      </Route>

      <Route
        exact
        path="/profile">
        <ProfileForm update={props.update} />
      </Route>

      <Route
        exact
        path="/login">
        <LoginForm login={props.login} />
      </Route>

      <Route
        exact
        path="/signup">
        <RegisterForm signup={props.signup} />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
