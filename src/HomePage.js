import React, { useContext } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import userContext from "./userContext";

const HomePage = () => {
  const { validUser } = useContext(userContext);
  return (
    <div>
      {validUser ? (
        <div className="HomePage-User">
          <h1 className="HomePage-User-Title">Welcome to Jobly {validUser.username.toLowerCase()}</h1>
          <ul className="HomePage-User-List">
            This site has:
            <li className="HomePage-User-ListItem">Express Full CRUD API</li>
            <li className="HomePage-User-ListItem">Postgres Database</li>
            <li className="HomePage-User-ListItem">React Front End</li>
          </ul>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default HomePage;
