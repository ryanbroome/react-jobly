import React, { useState, useEffect } from "react";
import { FormGroup, Form, Input, Label, Button } from "reactstrap";
import "./SearchForm.css";

const SearchForm = ({ search }) => {
  const [searchTerm, setSearchTerm] = useState(null);

  const INITIAL_STATE = {
    searchTerm: "",
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
    // filterCompanies(formData.searchTerm);
    setSearchTerm(searchTerm);
    setFormData({ searchTerm: "" });
  };

  useEffect(
    function () {
      async function searchCompany() {
        search(searchTerm);
      }
      searchCompany(searchTerm);
    },
    [searchTerm]
  );

  return (
    <form onSubmit={handleSubmit}>
      <h3>Filter Companies</h3>
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
