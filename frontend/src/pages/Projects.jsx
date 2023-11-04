import PageTitle from "../components/PageTitle";
import GalleryHeader from "../components/GalleryHeader";
// import NewerOlderPagination from "../components/NewerOlderPagination";
import { useQuery } from "@tanstack/react-query";
import ProjectGallery from "../components/ProjectGallery";
import Section from "../components/Section";

const Projects = () => {
  const getProjects = async () => {
    const response = await fetch(`http://localhost:8000/projects`);
    return response.json();
  };

  const { isLoading, data } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  // const { pathname } = useLocation();

  return (
    <>
      <PageTitle title="Projects" />
      <Section>
        <GalleryHeader
          title="CS50W Projects"
          description="CS50’s Web Programming with Python and JavaScript"
        />
      </Section>

      <Section>
        <ProjectGallery projects={data?.results} />
        {isLoading ? "Loading..." : <></>}
      </Section>

      <Section>
        {/* <NewerOlderPagination pageData={data.page} pageNumber={page} /> */}
      </Section>
    </>
  );
};

export default Projects;
// {/* <Tags color={ColorTags.LIME}>Web design</Tags> */}
// {/* <Tags color={ColorTags.SKY}>Tailwind.css</Tags> */}
// {/* <Tags color={ColorTags.ROSE}>TypeScript</Tags> */}
// {/* <Tags color={ColorTags.VIOLET}>Next.js</Tags> */}
// {/* <Tags color={ColorTags.EMERALD}>Blog</Tags> */}
// {/* <Tags color={ColorTags.YELLOW}>JavaScript</Tags> */}
// {/* <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags> */}
// {/* <Tags color={ColorTags.INDIGO}>Bootstrap</Tags> */}
