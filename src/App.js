import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import "./App.css";

import Routes from "./Routes";
import Navigation from "./Navigation";
import JoblyApi from "./api/Api";
import LoginForm from "./LoginForm";
import userContext from "./userContext";

function App() {
  // Refer to notes to setup context, save user data in context, that context will be consumed here for starters

  // make post request to /auth/token with a known users info
  // const [user, setUser] = useState({
  //   currentUsername: null,
  //   token: null,
  //   infoLoaded: false,
  // });

  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  // const [infoLoaded, setInfoLoaded] = useState(null);

  const decodeToken = (token) => {
    const user = jwtDecode(token);
    return user;
  };

  // TODO FINISH LOGIN METHOD BY SAVING TOKEN THAT COMES BACK FROM EFFECT TO CONTEXT
  // effect to request token, abstracted to JoblyApi

  useEffect(
    function fetchUser() {
      async function validateUser() {
        try {
          const res = await JoblyApi.validateUser(currentUser.username, currentUser.password);
          setToken(res.token);
        } catch (err) {
          console.log(err);
        }
      }
      validateUser();
    },
    [currentUser, token]
  );

  console.log("token =>", token);

  // todo complete this
  // when jobs rendered make a ternary that checks a value in userContext, if true returns "has applied in job card" if not render an apply button, apply button will change piece of context hasApplied to true" that way when all jobs are re-rendered will show as applied to any job in that context.

  function login(username, password) {
    setCurrentUser({
      username: username,
      password: password,
    });
  }

  return (
    <div className="App">
      <Navigation
      // TODO write logout , believe it will be just removing current user or setting back to blank, removing token
      //* logout={logout}
      />
      <userContext.Provider value={{ currentUser }}>
        <Routes login={login} />
      </userContext.Provider>
      {/* {currentUser === null ? <LoginForm login={login} /> : "Logged In"} */}
    </div>
  );
}
export default App;
