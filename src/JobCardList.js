import React from "react";
import JobCard from "./JobCard";

function JobCardList({ jobs }) {
  return (
    <div>
      {jobs ? (
        <div>
          {jobs.map((job) => (
            <JobCard job={job} />
          ))}
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default JobCardList;
