import React, { useState } from "react";
import { FormGroup, Form, Input, Label, Button } from "reactstrap";
import "./SearchForm.css";

const SearchForm = ({ search }) => {
  const INITIAL_STATE = {
    searchTerm: null,
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    search(formData.searchTerm);
    setFormData({ searchTerm: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Search</h3>
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
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
