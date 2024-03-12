import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import JoblyApi from "./api/Api";

function CompanyDetail({ search }) {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(function fetchCompanyWhenMounted() {
    async function fetchCompany() {
      const res = await JoblyApi.getCompany(handle);
      setCompany(res);
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
                <li>{j.title}</li>
              ))}
            </ul>
          ) : (
            "This company is not currently hiring"
          )}
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default CompanyDetail;
