import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import JoblyApi from "./api/Api";

function JobCard() {
  const [job, setJob] = useState(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(
    function () {
      async function getJobById(id) {
        const job = await JoblyApi.getJobs(id);
        console.log("job", job);
        setJob(job);
      }
      getJobById(id);
    },
    [id]
  );

  const goBack = () => {
    history.push(`/jobs`);
  };

  return (
    <div>
      {job ? (
        <div>
          <h3>{job.company_handle.toUpperCase()}</h3>
          <dl>
            <dt>Title</dt>
            <dd>{job.title}</dd>
            <dt>Salary</dt>
            <dd>{job.salary}</dd>
            <dt>Equity</dt>
            <dd>{job.equity}</dd>
          </dl>
          <button onClick={goBack}>All Jobs</button>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default JobCard;
