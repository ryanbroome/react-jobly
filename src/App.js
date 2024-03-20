import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import "./App.css";

import Routes from "./Routes";
import Navigation from "./Navigation";
import JoblyApi from "./api/Api";
import userContext from "./userContext";

// Token is used to verify around the site
// TODO change from token to validUser to verify around the Application
function App() {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [validUser, setValidUser] = useState(() => JSON.parse(localStorage.getItem("validUser")) || null);
  const [userDetails, setUserDetails] = useState(() => JSON.parse(localStorage.getItem("userDetails")) || null);

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
      console.log("JoblyApi.token => handleLogin, after setting", JoblyApi.token);
      // *get userDetails save to state and localStorage
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
      //* res coming back is {...user}
      const res = await JoblyApi.updateUser(username, { username, firstName, lastName, email });
      console.log("handleUpdate => res", res);

      setValidUser(res);
      localStorage.setItem("userDetails", JSON.stringify(res));
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("validUser");
    localStorage.removeItem("userDetails");
  };

  return (
    <div className="App">
      <userContext.Provider value={{ validUser, token, userDetails }}>
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

// TODO
// todo 1 update JSX return statements. Can make functions like isLoggedIn() that returns JSX you want to see when someone is logged in and loggedOut() that just returns JSX you want to see when no valid user is present in context pieces of state
