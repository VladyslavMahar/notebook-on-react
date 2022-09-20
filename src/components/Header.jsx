import React from "react";
import "../styles/header.css";
import { IoAddSharp } from "react-icons/io5";

const Header = (props) => {
  return (
    <header>
      <h1>My Note</h1>
      <IoAddSharp className="addIcon" onClick={() => props.setVisible(true)} />
    </header>
  );
};

export default Header;
