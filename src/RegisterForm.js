// TODO Complete for signup. Recall that signup is in another exercise or submission. We are just looking to check the DB for a user, if not there add them to db and return a JSON auth token.

import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FormGroup, Form, Input, Label, Button } from "reactstrap";

const RegisterForm = ({ signup }) => {
  // const {variable} = useParams()
  const history = useHistory();

  const INITIAL_STATE = {
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // signup method passed down from App
    signup(formData.username, formData.firstName, formData.lastName, formData.password, formData.email);
    // reset form data after passdown state method executed
    setFormData(INITIAL_STATE);
    // Do I need to redirect?
    history.push(`/`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Signup / signup Page</h3>
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
      <button>Signup</button>
    </form>
  );
};

export default RegisterForm;
