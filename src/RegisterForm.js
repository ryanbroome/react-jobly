import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, Form, Input, Label, Button, Col } from "reactstrap";
import "./RegisterForm.css";

const RegisterForm = ({ signup }) => {
  const history = useHistory();

  const INITIAL_STATE = {
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  // const [formErrors, setFormErrors] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData.username, formData.firstName, formData.lastName, formData.password, formData.email);
    setFormData(INITIAL_STATE);
    history.push(`/`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {Object.keys(INITIAL_STATE).map((val, idx) => (
        <FormGroup
          inline
          floating
          key={`FormGroup-${val}`}>
          <Col>
            <Label
              htmlFor={val}
              key={`Label-${idx}`}></Label>
            <Input
              id={val}
              key={`Input-${val}`}
              type={val !== "email" ? "text" : "email"}
              name={val}
              placeholder={val.toLowerCase()}
              value={formData[val]}
              onChange={handleChange}
              bsSize="lg"></Input>
          </Col>
        </FormGroup>
      ))}

      <Button color="primary">Signup</Button>
    </Form>
  );
};

export default RegisterForm;
