import React from "react";
import Task from "./Task";
import "../styles/Tasks.css";

const Tasks = (props) => {
  return (
    <main>
      {props.tasks.map((task) => (
        <Task
          taskHendler={props.taskHendler}
          key={task.id}
          dropTask={props.dropTask}
          task={task}
        >
          {task.body}
        </Task>
      ))}
    </main>
  );
};

export default Tasks;
