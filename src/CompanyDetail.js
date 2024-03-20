// TODO see note below in the return statement, need to move the redirect logic out of the return statement so it does not depend on the component rendering.
// todo Will need to adjust the redirect also for CompanyList and JobList components as well as any other components using this same approach. Will need to double check and finish prior to moving on to Step Seven.

import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import JobCard from "./JobCard";
import userContext from "./userContext";

import JoblyApi from "./api/Api";

// * How come is isn't working to re-direct the way i did in the other components.

function CompanyDetail() {
  const history = useHistory();
  const { validUser, token } = useContext(userContext);

  // use URL handle to make API request
  const { handle } = useParams();

  // state to hold company data
  const [company, setCompany] = useState(null);

  // fetches data on initial load for company
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
    // add or remove handle to run when handle changes or not
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
