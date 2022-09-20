import React from "react";
import cl from "./MyButton.module.css";

const MyButton = (props) => {
  return (
    <button className={cl.myBtn} {...props}>
      {props.children}
    </button>
  );
};

export default MyButton;
