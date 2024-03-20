import React from "react";

function JobCard({ job }) {
  // TODO make pretty with react strap
  return (
    <div
      className="JobCard"
      key={job.id}>
      <h6>{job.title}</h6>
      <p>{job.company_handle}</p>
      <div>
        <small>{job.salary}</small>
      </div>
      <div>
        <small>{job.equity}</small>
      </div>
    </div>
  );
}

export default JobCard;
