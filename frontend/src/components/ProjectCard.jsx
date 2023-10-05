import { Tags, ColorTags } from "./Tags";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <Link to={`/project/${props.children.id}`}>
      <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
        <div className="shrink-0">
          <img
            className="h-36 w-36 hover:translate-y-1"
            src={props.children.img_src}
            alt={props.children.img_alt}
          />
        </div>

        <div>
          <div className="flex flex-col items-center gap-y-2 md:flex-row">
            <div className="hover:text-cyan-400">
              <div className="text-xl font-semibold">
                {props.children.name.charAt(0).toUpperCase() +
                  props.children.name.slice(1)}
              </div>
            </div>
          </div>

          <p className="my-3 text-gray-400 ">{props.children.description}</p>
          <div className="flex flex-wrap gap-2">
            {props.children.stacks.map((technology) => {
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
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

//   <>
//     {project.technology_stacks.map((technology) => {
//       return (
//         <Tags
//           key={technology.id}
//           color={ColorTags[`${technology.color}`]}
//         >
//           {technology.name}
//         </Tags>
//       );
//     })}
//   </>
