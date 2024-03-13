// TODO Login will check the database for a user to see if that username exists, if so take the password they entered and bcrypt hash it or bcrypt verify it matches the hashed PW should be saved in DB associated with their username, may need to add some methods to our JoblyApi class to accomplish then can just call those methods.

import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FormGroup, Form, Input, Label, Button } from "reactstrap";

const LoginForm = ({ login }) => {
  // const {variable} = useParams()
  const history = useHistory();

  const INITIAL_STATE = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("LOGIN FORM SUBMITTED:", { ...formData });
    login(formData.username, formData.password);
    setFormData(INITIAL_STATE);
    //todo  Change the Client history to take them to the new list including their added item
    // history.push(`/`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login Page</h3>
      {Object.keys(INITIAL_STATE).map((val) => (
        <FormGroup key={`FormGroup-${val}`}>
          <label
            htmlFor={val}
            key={`Label-{idx}`}>
            {val}
          </label>
          <input
            id={val}
            key={`Input-${val}`}
            type="text"
            name={val}
            placeholder={val.toLowerCase()}
            value={formData[val]}
            onChange={handleChange}></input>
        </FormGroup>
      ))}
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
