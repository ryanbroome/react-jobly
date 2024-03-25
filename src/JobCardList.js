import React from "react";

import JobCard from "./JobCard";

function JobCardList({ jobs }) {
  <h1>Available Jobs</h1>;
  return jobs.map((job) => (
    <JobCard
      job={job}
      key={job.id}
    />
  ));
}

export default JobCardList;
