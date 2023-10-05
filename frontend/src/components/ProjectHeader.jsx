import { Tags, ColorTags } from "./Tags";

const ProjectHeader = (props) => {
  return (
    <>
      <h1
        className={`${
          props?.content === undefined
            ? "hidden"
            : "text-center my-3 text-3xl font-bold"
        }`}
      >
        {props.content?.title === undefined
          ? props.content?.name
          : props.content?.title}
      </h1>

      <div className="flex my-2 justify-center flex-wrap gap-2">
        {props.content?.stacks.map((technology) => {
          return (
            <Tags
              key={technology.id}
              color={ColorTags[`${technology.color.toUpperCase()}`]}
            >
              {technology.name.charAt(0).toUpperCase() +
                technology.name.slice(1)}
            </Tags>
          );
        })}
      </div>
      <div className="mt-2 text-center text-sm text-gray-400">
        By {props.content?.author} on {props.content?.timestamp}
      </div>
    </>
  );
};

export default ProjectHeader;
