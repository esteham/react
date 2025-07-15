import React, { useState } from "react";

const ListRendering = () => {
  const [task, setTasks] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Build Project" },
  ]);

  const addTask = () => {
    const newTask = { id: Date.now(), title: "New Task" };
    setTasks([...task, newTask]);
  };

  const removeTask = (id) => {
    setTasks(task.filter((task) => task.id !== id));
  };

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {task.map(task =>(
            <li key={task.id}>
                {task.title}
                <button onClick={()=>removeTask}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRendering;