import PageTitle from "../components/PageTitle";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Section from "../components/Section";
import ProjectHeader from "../components/ProjectHeader";
import Content from "../components/Content";

// const img = "/demo/astro-boilerplate/assets/images/image-post.jpeg";

const Project = () => {
  const { projectID } = useParams();

  const getProject = async (id) => {
    const response = await fetch(
      `http://localhost:8000/projects/${id}`
    );
    if (response.status !== 200) {
      const message = await response.json();
      return {
        status: response.status,
        message: message.detail,
      };
    }
    return response.json();
  };

  const { isLoading, data } = useQuery({
    queryKey: ["projects", parseInt(projectID)],
    queryFn: () => getProject(projectID),
  });

  return (
    <>
      <PageTitle title={data?.name} />
      <Section>
        {isLoading ? "Loading..." : <></>}
        <ProjectHeader content={data} />

        <Content content={data}>
          {data?.status !== undefined ? data.message : data?.content}
        </Content>
      </Section>
    </>
  );
};

export default Project;
