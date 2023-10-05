import React from "react";

const GradientText = (props) => {
  return (
    <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
      {props.children}
    </span>
  );
};

export default GradientText;
