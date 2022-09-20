import React from "react";
import cl from "./MyTextarea.module.css";

const MyTextarea = (props) => {
  return <textarea className={cl.MyTextarea} {...props}></textarea>;
};

export default MyTextarea;
