import React, { useContext } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import userContext from "./userContext";

const HomePage = () => {
  const { validUser, token } = useContext(userContext);

  if (!token) {
    return (
      <div className="Homepage-Login-Signup">
        <Link
          exact="true"
          to={`/login`}>
          Login
        </Link>
        <br></br>
        <Link
          exact="true"
          to={`/signup`}>
          Signup
        </Link>
      </div>
    );
  } else
    return (
      <div className="HomePage-User">
        <h1 className="HomePage-User-Title">Welcome to Jobly {validUser ? validUser.username : "no Valid user"}</h1>

        {/* <h3 className="HomePage-User-Title">Admin : {validUser.isAdmin ? "Yes" : "No"}</h3> */}
        <ul className="HomePage-User-List">
          This application uses:
          <li className="HomePage-User-ListItem">Express API to access and manipulate data</li>
          <li className="HomePage-User-ListItem">Postgres Database to hold the data</li>
          <li className="HomePage-User-ListItem">React Front End for UI</li>
        </ul>
      </div>
    );
};

export default HomePage;
