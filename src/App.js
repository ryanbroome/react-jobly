import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useHistory } from "react-router-dom";

// import "./App.css";
import Routes from "./Routes";
import Navigation from "./Navigation";
import JoblyApi from "./api/Api";
import userContext from "./userContext";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const history = useHistory();

  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [validUser, setValidUser] = useState(() => JSON.parse(localStorage.getItem("validUser")) || null);
  const [userDetails, setUserDetails] = useState(() => JSON.parse(localStorage.getItem("userDetails")) || null);
  const [appliedJobIdsForThisUser, setAppliedJobIdsForThisUser] = useState(() => JSON.parse(localStorage.getItem("appliedJobIdsForThisUser")) || []);

  JoblyApi.token = token;

  const handleDetails = async (username) => {
    try {
      const res = await JoblyApi.getUser(username);
      setUserDetails({ ...res.user });
      localStorage.setItem("userDetails", JSON.stringify({ ...res.user }));
      localStorage.setItem("appliedJobIdsForThisUser", JSON.stringify([...res.user.jobs]));
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const res = await JoblyApi.validateUser(username, password);
      setToken(res);
      console.log("handleLogin res=>", res);
      setValidUser(jwtDecode(String(res)));
      JoblyApi.token = res;
      localStorage.setItem("token", res);
      localStorage.setItem("validUser", JSON.stringify(jwtDecode(res)));
      handleDetails(username);
    } catch (err) {
      console.error(err);
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
    localStorage.removeItem("appliedJobIdsForThisUser");
    history.push(`/`);
  };

  const handleApply = async (username, id) => {
    try {
      // did not end up using res for anything
      await JoblyApi.applyToJob(username, id);
      // res returns a success message { "applied" : id }

      setAppliedJobIdsForThisUser([...appliedJobIdsForThisUser, id]);
      handleDetails(username);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <userContext.Provider value={{ validUser, token, userDetails, handleApply }}>
        <Navigation logout={handleLogout} />
        <Routes
          login={handleLogin}
          signup={handleSignup}
          update={handleUpdate}
        />
      </userContext.Provider>
    </div>
  );
}

export default App;
