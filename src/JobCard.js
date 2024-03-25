import React, { useContext } from "react";
import userContext from "./userContext";
import "./JobCard.css";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, ListGroup, ListGroupItem } from "reactstrap";

function JobCard({ job }) {
  const { handleApply, validUser, userDetails } = useContext(userContext);
  const jobIds = userDetails.jobs ? [...userDetails.jobs] : [];

  const hasApplied = (id) => {
    return jobIds.includes(id);
  };

  if (hasApplied(job.id)) {
    return (
      <Card
        color="success"
        body
        className="text-center">
        <CardBody>
          <CardTitle tag="h4">{job.company_handle}</CardTitle>
          <CardSubtitle>Thank you for applying to </CardSubtitle>
          <CardText>{job.title}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return (
      <Card
        color="light"
        body
        className="text-center">
        <CardBody>
          <CardTitle tag="h4">{job.title}</CardTitle>
          <CardSubtitle>{job.company_handle}</CardSubtitle>
          <ListGroup flush>
            <ListGroupItem>Salary: {job.salary}</ListGroupItem>
            <ListGroupItem>Equity: {job.equity}</ListGroupItem>
          </ListGroup>
          <Button
            color="primary"
            onClick={() => {
              handleApply(validUser.username, +job.id);
            }}>
            Apply Now
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default JobCard;
