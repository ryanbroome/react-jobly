import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import Stage from "./Stage";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ProfileForm from "./ProfileForm";
import NotFound from "./NotFound";
// import userContext from "./userContext";

const Routes = (props) => {
  // const { validUser } = useContext(userContext);
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

      {/* Profile Routes */}
      <Route
        exact
        path="/profile">
        <ProfileForm />
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

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
