import React from "react";
import "./_gradiantbutton.scss";

const GradiantButton = ({ text }) => {
  return (
    <button className="gradient-btn">
      <span className="arrow left"></span>
      <span className="text">{text}</span>
      <span className="arrow right"></span>
    </button>
  );
};

export default GradiantButton;
