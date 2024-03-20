import React, { useContext } from "react";
import userContext from "./userContext";

function JobCard({ job }) {
  const { apply, validUser } = useContext(userContext);
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
      <button
        onClick={() => {
          apply(validUser.username, job.id);
        }}>
        Apply Now
      </button>
    </div>
  );
}

export default JobCard;
