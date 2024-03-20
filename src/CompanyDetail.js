import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import JobCard from "./JobCard";
import userContext from "./userContext";

import JoblyApi from "./api/Api";

function CompanyDetail() {
  const history = useHistory();
  const { token } = useContext(userContext);
  const { handle } = useParams();

  const [company, setCompany] = useState(null);

  useEffect(
    function fetchCompanyWhenMounted() {
      async function fetchCompany() {
        try {
          const res = await JoblyApi.getCompany(handle);
          setCompany(res);
        } catch (err) {
          console.log(err);
        }
      }
      fetchCompany();
    },
    [handle]
  );

  return (
    <div>
      {token ? (
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
                "This company is not currently hiring or does not have any jobs listed"
              )}
            </div>
          ) : (
            "Loading Company"
          )}
        </div>
      ) : (
        history.push("/")
      )}
    </div>
  );
}

export default CompanyDetail;
