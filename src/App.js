import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useHistory } from "react-router-dom";

import "./App.css";
import Routes from "./Routes";
import Navigation from "./Navigation";
import JoblyApi from "./api/Api";
import userContext from "./userContext";

function App() {
  const history = useHistory();
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [validUser, setValidUser] = useState(() => JSON.parse(localStorage.getItem("validUser")) || null);
  const [userDetails, setUserDetails] = useState(() => JSON.parse(localStorage.getItem("userDetails")) || null);
  const [appliedJobs, setAppliedJobs] = useState(() => JSON.parse(localStorage.getItem("appliedJobs")) || null);

  JoblyApi.token = token;

  const handleDetails = async (username) => {
    try {
      const res = await JoblyApi.getUser(username);
      setUserDetails({ ...res.user });
      localStorage.setItem("userDetails", JSON.stringify({ ...res.user }));
      console.log("APP =>  => handleDetails(username)", { ...res.user });
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const res = await JoblyApi.validateUser(username, password);
      setToken(res);
      setValidUser(jwtDecode(res));
      JoblyApi.token = res;
      localStorage.setItem("token", res);
      localStorage.setItem("validUser", JSON.stringify(jwtDecode(res)));
      handleDetails(username);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignup = async (username, firstName, lastName, password, email) => {
    try {
      const res = await JoblyApi.registerUser(username, firstName, lastName, password, email);
      setToken(res);
      setValidUser(jwtDecode(res));
      JoblyApi.token = res;
      localStorage.setItem("token", res);
      localStorage.setItem("validUser", JSON.stringify(jwtDecode(res)));
      handleDetails(username);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (username, firstName, lastName, email) => {
    try {
      const res = await JoblyApi.updateUser(username, { firstName, lastName, email });
      setUserDetails(res.user);
      setValidUser(res.user);
      localStorage.setItem("userDetails", JSON.stringify(res.user));
      localStorage.setItem("validUser", JSON.stringify(res.user));
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    setToken(null);
    setUserDetails(null);
    setValidUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("validUser");
    localStorage.removeItem("userDetails");
    history.push(`/`);
  };

  const handleApply = async (username, id) => {
    const res = await JoblyApi.applyToJob(username, id);
    console.log(res);
    if (res.applied) {
      setAppliedJobs(new Set([...appliedJobs, res.applied]));
    }
    console.log("App => handleApply => res.applied", res.applied);
    localStorage.setItem("appliedJobs", appliedJobs);
  };

  return (
    <div className="App">
      <userContext.Provider value={{ validUser, token, userDetails }}>
        <Navigation logout={handleLogout} />
        <Routes
          login={handleLogin}
          signup={handleSignup}
          update={handleUpdate}
          apply={handleApply}
        />
      </userContext.Provider>
    </div>
  );
}

export default App;
// * TODO LEFT OFF WORKING ON APPLY TO JOBS , APPLY SHOULD BE IN CONTEXT BUT ISN"T MAKING IT TO JobCard
// TODO
// todo 1 update JSX return statements. Can make functions like isLoggedIn() that returns JSX you want to see when someone is logged in and loggedOut() that just returns JSX you want to see when no valid user is present in context pieces of state
