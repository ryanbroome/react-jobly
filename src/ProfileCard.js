import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

const ProfileCard = ({ user }) => {
  return (
    <Card
      color="light"
      body
      className="text-center">
      <CardBody>
        <CardTitle tag="h4">{`${user.firstName} ${user.lastName}`}</CardTitle>
        <CardSubtitle>{user.username}</CardSubtitle>
        <CardText>Email : {user.email}</CardText>
        <CardText>First : {user.firstName}</CardText>
        <CardText>Last : {user.lastName}</CardText>
      </CardBody>
    </Card>
  );
};
export default ProfileCard;
