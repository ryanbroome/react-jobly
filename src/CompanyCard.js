import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({ company }) {
  return (
    <div>
      <Link to={`companies/${company.handle}`}>{company.handle}</Link>
      <dl>
        <dt>Name</dt>
        <dd>{company.name}</dd>
        <dt>Employees</dt>
        <dd>{company.numEmployees}</dd>
        <dt>Description</dt>
        <dd>{company.description}</dd>
      </dl>
    </div>
  );
}

export default CompanyCard;
