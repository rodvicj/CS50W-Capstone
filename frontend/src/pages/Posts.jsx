import PageTitle from "../components/PageTitle";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Section from "../components/Section";
import GalleryHeader from "../components/GalleryHeader";
import PostGallery from "../components/PostGallery";
import Pagination from "../components/Pagination";

const Posts = () => {
  // let { page } = useParams();
  // page ||= 1;

  const getPosts = async () => {
    const response = await fetch(`http://localhost:8000/posts`);

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
    queryKey: ["posts", { page }],
    keepPreviousData: true,
    queryFn: () => getPosts(),
  });

  return (
    <>
      <PageTitle title="Posts" />
      <Section>
        <GalleryHeader
          title="My development workflow"
          description="Backup and documentation of my personal development workflow"
        />
      </Section>

      <Section>
        {data?.status !== undefined ? (
          data.message
        ) : (
          <PostGallery posts={data?.posts} />
        )}

        {isLoading ? "Loading..." : <></>}
      </Section>

      <Section>
        <Pagination pageData={data?.page} pageNumber={page} />
      </Section>
    </>
  );
};

export default Posts;
