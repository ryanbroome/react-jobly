import React from "react";
import { Link } from "react-router-dom";

import { Card, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem, CardText } from "reactstrap";

function CompanyCard({ company }) {
  return (
    <Card
      color="light"
      body
      className="text-center">
      <CardBody>
        <CardTitle tag="h3">
          <Link to={`companies/${company.handle}`}>{company.handle}</Link>
        </CardTitle>
        <CardSubtitle>{company.name}</CardSubtitle>
        <CardText>{company.description}</CardText>
        <ListGroup flush>
          <ListGroupItem>Employees: {company.numEmployees}</ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
}

export default CompanyCard;
