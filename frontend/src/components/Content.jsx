import ReactMarkdown from "react-markdown";

const Content = (props) => {
  return (
    <div className="mx-auto mt-5 max-w-prose">
      <div
        className={`${
          props.content === 404
        } ? "hidden" : "aspect-w-3 aspect-h-2"`}
      >
        <img
          className="h-full w-full rounded-lg object-cover object-center"
          src={props.content?.img_src}
          alt={props.content?.img_alt}
        />
      </div>

      <div className="prose prose-invert mt-8 prose-img:rounded-lg">
        <ReactMarkdown>{props?.children}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Content;
