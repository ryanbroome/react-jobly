import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import "./App.css";

import Routes from "./Routes";
import Navigation from "./Navigation";
import JoblyApi from "./api/Api";
// import LoginForm from "./LoginForm";
import userContext from "./userContext";

function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [validUser, setValidUser] = useState(null);

  // const [infoLoaded, setInfoLoaded] = useState(null);

  const decodeToken = (token) => {
    const user = jwtDecode(token);
    return user;
  };

  useEffect(
    function fetchUser() {
      async function validateUser() {
        try {
          const res = await JoblyApi.validateUser(currentUser.username, currentUser.password);
          setToken(res.token);
          setValidUser(decodeToken(res.token));
        } catch (err) {
          console.log(err);
        }
      }
      validateUser();
    },
    [currentUser]
  );

  // method to login / trigger a validate post request of user input username, password
  const login = (username, password) => {
    setCurrentUser({
      username: username,
      password: password,
    });
  };

  // method to logout / remove valid user from state
  const logout = () => {
    setValidUser(null);
  };
  // method to register a new user
  const register = () => {};

  return (
    <div className="App">
      <userContext.Provider value={{ validUser }}>
        <Navigation logout={logout} />
      </userContext.Provider>

      <Routes login={login} />

      {/* {currentUser === null ? <LoginForm login={login} /> : "Logged In"} */}
    </div>
  );
}
export default App;
