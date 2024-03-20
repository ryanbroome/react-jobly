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
      {/* HomePage  */}
      <Route
        exact
        path="/">
        <HomePage />
      </Route>

      {/* Protected Start */}

      {/* Companies  */}
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

      {/* Jobs  */}
      <Route
        exact
        path="/jobs">
        <JobList />
      </Route>

      {/* Profile  */}
      <Route
        exact
        path="/profile">
        <ProfileForm update={props.update} />
      </Route>

      {/* Stage / Practice  */}
      <Route
        exact
        path="/stage">
        <Stage />
      </Route>

      {/* Auth  */}
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
      {/* CatchAll NotFound */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
