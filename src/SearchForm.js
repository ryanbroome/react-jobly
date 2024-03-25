import React, { useState } from "react";

import "./SearchForm.css";
import { FormGroup, Form, Col, Input, Button } from "reactstrap";

const SearchForm = ({ search, resetList }) => {
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
    search(formData.searchTerm);
    setFormData({ searchTerm: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {Object.keys(INITIAL_STATE).map((val, idx) => (
        <Col
          md={10}
          key={`Col-${idx}`}>
          <FormGroup key={`FormGroup-${val}`}>
            <Input
              id={val}
              key={`Input-${val}`}
              type={val !== "email" ? "text" : "email"}
              name={val}
              placeholder={val.toLowerCase()}
              value={formData[val]}
              onChange={handleChange}></Input>
          </FormGroup>
        </Col>
      ))}

      <Button color="primary">Search</Button>
      <Button
        color="danger"
        onClick={resetList}>
        Reset
      </Button>
    </Form>
  );
};

export default SearchForm;
