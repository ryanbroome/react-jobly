import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import CompanyList from "./CompanyList";
// import CompanyCard from "./CompanyCard";

import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import JobCard from "./JobCardList";
import Stage from "./Stage";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

// import JoblyApi from "./api/Api";

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

      <Route
        exact
        path="/jobs/:id">
        <JobCard />
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
        <LoginForm />
      </Route>

      <Route
        exact
        path="/signup">
        <SignupForm />
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
