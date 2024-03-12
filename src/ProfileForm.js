// TODO Complete for signup. Recall that signup is in another exercise or submission. We are just looking to check the DB for a user, if not there add them to db and return a JSON auth token.
// todo WHAT COULD I DO TO MAKE THIS FORM A RE-USABLE COMPONENT?
// todo WHAT IS NEEDED? {Object(INITIAL_STATE), String("Title")}
import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FormGroup, Form, Input, Label, Button } from "reactstrap";

const ProfileForm = (props) => {
  // const {urlParam} = useParams()
  const history = useHistory();

  const INITIAL_STATE = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
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
    // updateStateMethod({...formData})
    console.log("PROFILE FORM SUBMITTED:", { ...formData });
    setFormData(INITIAL_STATE);
    // !
    // history.push(`/`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Profile</h3>
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
