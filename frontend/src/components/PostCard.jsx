import { Link } from "react-router-dom";

const PostCard = (props) => {
  return (
    <Link to={props.url} className="hover:translate-y-1" >
      <div className="overflow-hidden rounded-md bg-slate-800">
        <div className="aspect-w-3 aspect-h-2">
          <img
            className="h-full w-full object-cover object-center"
            src={props.imgSrc}
            alt={props.imgAlt}
          />
        </div>

        <div className="px-3 pt-4 pb-6 text-center">
          <h2 className="text-xl font-semibold">{props.title}</h2>

          <div className="mt-1 text-xs text-gray-400">{props.timestamp}</div>

          <div className="mt-2 text-sm">{props.description}</div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
