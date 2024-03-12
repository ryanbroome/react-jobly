import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//// import JoblyApi from "./api/Api";

function CompanyCard({ company }) {
  // const { handle } = useParams();
  //// const [company, setCompany] = useState(null);

  ////useEffect(function fetchCompanyWhenMounted() {
  ////  async function fetchCompany() {
  ////    const res = await JoblyApi.getCompany(handle);
  ////    setCompany(res);
  ////  }
  ////  fetchCompany();
  ////}, []);

  return (
    <div>
      <div>
        <dl>
          <dt>Company</dt>
          <dd>{company.name}</dd>
          <dt>Employees</dt>
          <dd>{company.numEmployees}</dd>
          <dt>Description</dt>
          <dd>{company.description}</dd>
        </dl>

        {/* Jobs List for this Company PULL OUT INTO JobsList Component*/}
        {company.jobs.length > 0 ? (
          <ul>
            {company.jobs.map((j) => (
              <li>{j.title}</li>
            ))}
          </ul>
        ) : (
          "No Jobs for this Company to render"
        )}
      </div>
    </div>
  );
}

export default CompanyCard;
