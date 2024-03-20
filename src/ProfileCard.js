import React from "react";

const ProfileCard = ({ user }) => {
  return (
    <div className="Profile-Container">
      <h3 className="Profile-User">Profile Card: {user.username}</h3>
      <ul className="Profile-List">
        <li className="Profile-ListItem">First: {user.firstName}</li>
        <li className="Profile-ListItem">Last: {user.lastName}</li>
        <li className="Profile-ListItem">EMail: {user.email}</li>
        <li className="Profile-ListItem">Admin: {user.isAdmin}</li>
      </ul>
    </div>
  );
};
export default ProfileCard;
