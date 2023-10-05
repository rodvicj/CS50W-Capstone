import React from "react";
import ProjectCard from "./ProjectCard";
// import Tags from "../components/Tags";
// import ColorTags from "../components/ColorTags";

const ProjectGallery = (props) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
      {props.projects?.map((project) => (
        <ProjectCard key={project.id}>{project}</ProjectCard>
      ))}
    </div>
  );
};

export default ProjectGallery;

// <Project key={project.id} url={`http://localhost:3000/project/${project.id}`}
//   timestamp={project.timestamp} imgSrc={project.img_src} imgAlt={project.img_alt}
//   title={project.name} description={project.description}/>
