import React from "react";
import JobCard from "./JobCard";

function JobCardList({ jobs }) {
  return jobs.map((job) => (
    <JobCard
      job={job}
      key={job.id}
    />
  ));
}

export default JobCardList;
