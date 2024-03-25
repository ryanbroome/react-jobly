import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import userContext from "./userContext";
import ProfileCard from "./ProfileCard";
import { FormGroup, Form, Input, Label, Button } from "reactstrap";

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
    history.push(`/`);
  };

  return (
    <>
      <ProfileCard user={userDetails} />
      <Form onSubmit={handleSubmit}>
        {Object.keys(INITIAL_STATE).map((val, idx) => (
          <FormGroup key={`FormGroup-${val}`}>
            <Label
              htmlFor={val}
              key={`Label-${idx}`}>
              {val}
            </Label>
            <Input
              id={val}
              key={`Input-${val}`}
              type={val !== "email" ? "text" : "email"}
              name={val}
              placeholder={val.toLowerCase()}
              value={formData[val]}
              onChange={handleChange}></Input>
          </FormGroup>
        ))}

        <Button color="primary">Update</Button>
      </Form>
    </>
  );
};

export default ProfileForm;
