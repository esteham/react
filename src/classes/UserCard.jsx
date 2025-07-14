import React from "react";
import "./css/UserCard.css";

const UserCard = (props) => {
  return (
    <div className="user-card-container">
      <div className="user-card">
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Country: {props.country}</p>
        <p>Email : {props.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
