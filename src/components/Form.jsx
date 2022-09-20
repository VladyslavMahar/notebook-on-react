import React, { useState } from "react";
import MyButton from "./UI/MyButton/MyButton";
import MyTextarea from "./UI/MyTextarea/MyTextarea";

const Form = (props) => {
  const [body, setBody] = useState("");

  const newTask = (e) => {
    e.preventDefault();
    props.taskHendler(body);
    setBody("");
  };
  return (
    <form>
      <MyTextarea value={body} onChange={(e) => setBody(e.target.value)} />
      <MyButton onClick={(e) => newTask(e)}>New Task</MyButton>
    </form>
  );
};

export default Form;
