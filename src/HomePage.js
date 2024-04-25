import React, { useContext } from "react";

import userContext from "./userContext";

// import { Spinner } from "reactstrap";

const HomePage = () => {
  const { validUser, token } = useContext(userContext);

  function isLoggedIn() {
    return token ? (
      <div>
        <h3>{validUser ? validUser.username : "Check out the Signup page or Login"}</h3>
        <img
          alt="Sample"
          src={require("../src/images/jobly_logo.jpg")}
          width="100%"
          height="600px"
        />
      </div>
    ) : (
      <div
        class="spinner-border"
        role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  function isLoggedOut() {
    return token ? (
      <div>
        <h3>
          Welcome{" "}
          {
            validUser ? validUser.username : "" // <div
            //   class="spinner-border"
            //   role="status">
            //   <span class="visually-hidden"></span>
            // </div>
          }
        </h3>
        <img
          alt="Sample"
          src={require("../src/images/jobly_logo.jpg")}
          width="100%"
          height="600px"
        />
      </div>
    ) : (
      <div>
        <h3>
          Welcome{" "}
          {validUser ? (
            validUser.username
          ) : (
            <div></div>
            // <div
            //   class="spinner-border"
            //   role="status">
            //   <span class="visually-hidden">Loading...</span>
            // </div>
          )}
        </h3>
        <img
          alt="Sample"
          src={require("../src/images/jobly_logo.jpg")}
          width="100%"
          height="600px"
        />
      </div>
    );
  }
  return token ? isLoggedIn() : isLoggedOut();
};

export default HomePage;
