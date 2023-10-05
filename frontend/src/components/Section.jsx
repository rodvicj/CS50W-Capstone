import React from "react";

const Section = (props) => {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      {props.title && (
        <div className="mb-6 text-2xl font-bold">{props.title}</div>
      )}

      {props.children}
    </div>
  );
};

export default Section;
