import React from "react";
import Class1 from "./classes/class1";
import UserCard from "./classes/UserCard";
// import "./App.css";

function App() {
  return (
    <>
      <Class1 />
      <UserCard
        name="Esteham H. Zihad Ansari"
        age={25}
        country="Bangladesh"
        email="esteham@example.com"
      />
      <UserCard
        name="Mahbub Sufian"
        age={24}
        country="Bangladesh"
        email="mahbub@example.com"
      />
    </>
  );
}

export default App;
