import React from "react";
import { Link } from "react-router-dom";

const Pagination = (props) => {
  const pageNumber = parseInt(props.pageNumber);
  // console.log("props", props.pageData);
  // const hasPrev = props.pageData.has_previous;
  // console.log("hasPrev", hasPrev);
  return (
    <div className="flex justify-center gap-8">
      {props.pageData?.has_previous === true ? (
        <Link to={`/posts/${pageNumber - 1}`}>
          ← Newer Posts
        </Link>
      ) : (
        <></>
      )}

      {props.pageData?.has_next === true ? (
        <Link to={`/posts/${pageNumber + 1}`}>
          Older Posts →
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Pagination;

// {props.page.url.prev && <a href={props.page.url.prev}>← Newer Posts</a>}
// {props.page.url.next && <a href={props.page.url.next}>Older Posts →</a>}
