import React, { useState, useEffect, useContext } from "react";
import JoblyApi from "./api/Api";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";

import { useHistory } from "react-router-dom";
import userContext from "./userContext";

function JobList() {
  const history = useHistory();
  const { validUser, token } = useContext(userContext);
  const [jobs, setJobs] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  // *Fetch data at load, and anytime searchTerm changes from searchForm
  useEffect(
    function fetchJobs() {
      async function filterJobs() {
        const filteredRes = await JoblyApi.searchJobs(searchTerm);
        console.log("useEffect JOBS searchTerm", searchTerm);
        setJobs(filteredRes);
      }
      filterJobs();
    },
    [searchTerm]
  );

  //* method to make another filtered API call
  const searchJobs = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  // *method to reset to all jobs
  const resetList = () => {
    setSearchTerm(null);
  };

  // validUser ? return
  if (!token) {
    history.push("/");
    return null;
  } else {
    return (
      <div className="JobList">
        <h1>Jobs List</h1>
        <SearchForm
          search={searchJobs}
          resetList={resetList}
        />
        <button onClick={resetList}>Reset</button>
        {jobs ? <JobCardList jobs={jobs} /> : <i>No Jobs found</i>}
      </div>
    );
  }
}

export default JobList;
