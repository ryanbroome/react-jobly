import React, { useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FormGroup, Form, Input, Label, Button } from "reactstrap";
import userContext from "./userContext";

const ProfileForm = ({ userInfo, update }) => {
  const { validUser, token, userDetails } = useContext(userContext);
  console.log("validUser:", validUser);

  const INITIAL_STATE = {
    username: userDetails.username,
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
    //
    update({ ...formData });
    console.log("PROFILE FORM SUBMITTED:", { ...formData });
    setFormData(INITIAL_STATE);
    // !
    // history.push(`/`);
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
