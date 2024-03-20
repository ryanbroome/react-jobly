import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup } from "reactstrap";

const LoginForm = ({ login }) => {
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
    login(formData.username, formData.password);
    setFormData(INITIAL_STATE);
    history.push(`/`);
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
