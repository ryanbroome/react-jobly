import React, { useState, useEffect, useContext } from "react";
import JoblyApi from "./api/Api";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";

import { useHistory } from "react-router-dom";
import userContext from "./userContext";

function JobList() {
  const history = useHistory();
  const { token } = useContext(userContext);
  const [jobs, setJobs] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(
    function fetchJobs() {
      async function filterJobs() {
        const filteredRes = await JoblyApi.searchJobs(searchTerm);
        setJobs(filteredRes);
      }
      filterJobs();
    },
    [searchTerm]
  );

  const searchJobs = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const resetList = () => {
    setSearchTerm(null);
  };

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
