import React from "react";
import "./css/class1.css";

const Class1 = () => {
  const name = "Esteham H. Zihad Ansari";
  const age = 25;
  const country = "Bangladesh";
  const hobbies = ["Reading", "Traveling", "Coding"];
  const skills = ["JavaScript", "React", "Node.js"];
  const isLoggedIn = true;

  return (
    <div className="profile-container">
      <h1>Profile Information</h1>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>Country: {country}</p>
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <p>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
    </div>
  );
};

export default Class1;
