import { Link } from "react-router-dom";
import PostGallery from "../components/PostGallery";
import GradientText from "../components/GradientText";
import Section from "../components/Section";



import { useQuery } from "@tanstack/react-query";

const PostsRecent = () => {

  const getRecentPosts = async () => {
    const response = await fetch(`http://localhost:8000/posts`);
    return response.json();
  };


  const {isLoading, data} = useQuery({
    queryKey: ["posts"],
    queryFn: getRecentPosts,
  });

  return (
    <Section
      title={
        <div className="flex items-baseline justify-between">
          <div>
            Recent <GradientText>Posts</GradientText>
          </div>

          <div className="text-sm">
            <Link to="/posts">View all Posts</Link>
          </div>
        </div>
      }
    >

      {isLoading ? "Loading..." : <></>}
      <PostGallery posts={data?.results?.slice(0, 3)} />
    </Section>
  );
};

export default PostsRecent;
