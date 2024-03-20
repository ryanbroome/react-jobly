import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup } from "reactstrap";

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
    signup(formData.username, formData.firstName, formData.lastName, formData.password, formData.email);
    setFormData(INITIAL_STATE);
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
