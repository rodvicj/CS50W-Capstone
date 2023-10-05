import React from "react";

const GalleryHeader = (props) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">{props.title}</h1>

      <div className="mt-3 text-gray-200">{props.description}</div>
    </div>
  );
};

export default GalleryHeader;
