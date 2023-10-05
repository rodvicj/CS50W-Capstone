import React from "react";

const PostHeader = (props) => {
  return (
    <>
      <h1
        className={`${
          props?.content === undefined
            ? "hidden"
            : "text-center text-3xl font-bold"
        }`}
      >
        {props.content?.title === undefined
          ? props.content?.name
          : props.content?.title}
      </h1>

      <div className="mt-2 text-center text-sm text-gray-400">
        By {props.content?.author} on {props.content?.timestamp}
      </div>
    </>
  );
};

export default PostHeader;
