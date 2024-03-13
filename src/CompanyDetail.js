import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import JobCard from "./JobCard";

import JoblyApi from "./api/Api";

function CompanyDetail() {
  // use URL handle to make API request
  const { handle } = useParams();

  // state to hold company data
  const [company, setCompany] = useState(null);

  // fetches data on initial load for company
  useEffect(function fetchCompanyWhenMounted() {
    async function fetchCompany() {
      try {
        const res = await JoblyApi.getCompany(handle);
        setCompany(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCompany();
  }, []);

  return (
    <div className="CompanyDetail">
      {company ? (
        <div>
          <dl>
            <dt>Company</dt>
            <dd>{company.name}</dd>
            <dt>Employees</dt>
            <dd>{company.numEmployees}</dd>
            <dt>Description</dt>
            <dd>{company.description}</dd>
          </dl>
          {company.jobs.length > 0 ? (
            <ul>
              {company.jobs.map((j) => (
                <JobCard job={j} />
              ))}
            </ul>
          ) : (
            "This company is not currently hiring"
          )}
        </div>
      ) : (
        "Loading Company"
      )}
    </div>
  );
}

export default CompanyDetail;
