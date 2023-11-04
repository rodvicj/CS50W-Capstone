// import Tags from "../components/Tags";
// import ColorTags from "../components/ColorTags";
import GradientText from "../components/GradientText";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const ProjectsRecent = () => {
  const getProjects = async () => {
    const response = await fetch(`http://localhost:8000/projects`);

    if (response.status !== 200) {
      const message = await response.json();
      return {
        status: response.status,
        message: message.message,
      };
    }

    return response.json();
  };

  const { isLoading, data } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return (
    <Section
      title={
        <div className="flex items-baseline justify-between">
          <div>
            Recent <GradientText>Projects</GradientText>
          </div>
          <div className="text-sm">
            <Link to="/projects">View all Projects</Link>
          </div>
        </div>
      }
    >
      {isLoading ? "Loading..." : <></>}
      <div className="flex flex-col gap-6">
        {data?.results.slice(0, 3)?.map((project) => {
          return <ProjectCard key={project.id}>{project}</ProjectCard>;
        })}
      </div>
    </Section>
  );
};

export default ProjectsRecent;
