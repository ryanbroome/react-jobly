import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import JoblyApi from "./api/Api";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";

// Route "/jobs" => list of all jobs by rendering a card list JobCardList
function JobList() {
  const [jobs, setJobs] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  ////   effect to fetch All Jobs
  // useEffect(function fetchJobsWhenMounted() {
  //   async function fetchJobs() {
  //     const jobsResult = await JoblyApi.getAllJobs();
  //     setJobs(jobsResult);
  //   }
  //   fetchJobs();
  // }, []);

  // *Fetch data at load, and anytime searchTerm changes from searchForm
  useEffect(
    function fetchJobs() {
      async function filterJobs() {
        const filteredRes = await JoblyApi.searchJobs(searchTerm);
        console.log("useEffect JOBS searchTerm", searchTerm);
        setJobs(filteredRes);
      }
      filterJobs(searchTerm);
    },
    [searchTerm]
  );

  // method to make another filtered API call
  const searchJobs = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  // method to reset to all jobs
  const resetList = () => {
    setSearchTerm("");
  };

  return (
    <div>
      <h1>Jobs List</h1>
      <SearchForm
        search={searchJobs}
        resetList={resetList}
      />
      <button onClick={resetList}>Reset</button>
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

export default JobList;
