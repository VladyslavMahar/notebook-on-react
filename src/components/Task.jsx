import React, { useState } from "react";
import "../styles/Task.css";
import { FiDelete } from "react-icons/fi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Task = (props) => {
  const [update, setUpdate] = useState(false);
  const [updateBody, setUpdateBody] = useState(props.task.body);

  const deleteTask = () => {
    props.dropTask(props.task.id);
  };

  const updateTask = () => {
    setUpdate(true);
  };

  if (!update) {
    return (
      <div onClick={updateTask} className="task">
        <div className="content">
          <div>{props.task.body}</div>
          <FiDelete onClick={deleteTask} />
        </div>
        <span>{props.task.create}</span>
      </div>
    );
  } else {
    return (
      <div className="task">
        <div className="content">
          <textarea
            autoFocus
            value={updateBody}
            onChange={(e) => setUpdateBody(e.target.value)}
            className="updatedTask"
          ></textarea>
          <IoCheckmarkCircleOutline
            onClick={() => {
              props.taskHendler(updateBody, props.task.id);
              setUpdate(false);
            }}
          />
        </div>
      </div>
    );
  }
};

export default Task;
