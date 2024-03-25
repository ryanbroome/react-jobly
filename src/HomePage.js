import React, { useContext } from "react";

import userContext from "./userContext";

const HomePage = () => {
  const { validUser, token } = useContext(userContext);

  if (!token) {
    return (
      <div>
        <h3>{validUser ? validUser.username : "Check out the Signup page or Login"}</h3>
        <img
          alt="Sample"
          src={require("../src/images/jobly_logo.jpg")}
          width="100%"
          height="600px"
        />
      </div>
    );
  } else
    return (
      <div>
        <h3>Welcome {validUser ? validUser.username : "Well something must be broken if your seeing this"}</h3>
        <img
          alt="Sample"
          src={require("../src/images/jobly_logo.jpg")}
          width="100%"
          height="600px"
        />
      </div>
    );
};

export default HomePage;
