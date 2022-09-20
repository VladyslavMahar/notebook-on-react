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
        <div>{props.task.body}</div>
        <div className="btnFunc">
          <FiDelete onClick={deleteTask} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="task">
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
    );
  }
};

export default Task;
