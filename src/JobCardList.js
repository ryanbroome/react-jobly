import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JoblyApi from "./api/Api";

function JobCardList() {
  const [jobs, setJobs] = useState(null);

  //   effect to fetch Jobs
  useEffect(function fetchJobsWhenMounted() {
    async function fetchJobs() {
      const jobsResult = await JoblyApi.getAllJobs();
      setJobs(jobsResult);
    }
    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Jobs List</h1>
      {jobs ? (
        <div>
          <ul>
            {jobs.map((job, idx) => (
              <li key={job.id}>
                <Link
                  to={`/jobs/${job.id}`}
                  exact>
                  {job.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <i>loading</i>
      )}
    </div>
  );
}

// TODO I'm working on the API calls first gotta get those working. Should be using all able routes.
export default JobCardList;
