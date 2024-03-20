import React, { useState, useContext } from "react";
import { FormGroup } from "reactstrap";
import userContext from "./userContext";

import { useHistory } from "react-router-dom";

const ProfileForm = ({ update }) => {
  const { userDetails } = useContext(userContext);

  const history = useHistory();

  let INITIAL_STATE = {
    firstName: userDetails.firstName,
    lastName: userDetails.lastName,
    email: userDetails.email,
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
    update(userDetails.username, formData.firstName, formData.lastName, formData.email);
    setFormData(INITIAL_STATE);
    // *currently the form input values don't update immediately when form submitted, redirect to home page, if user goes back it will be correct
    history.push(`/`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Profile Form</h3>
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
      <button style={{ color: "black", backgroundColor: "coral" }}>Update</button>
    </form>
  );
};

export default ProfileForm;
