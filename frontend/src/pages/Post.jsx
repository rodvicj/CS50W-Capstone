import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Section from "../components/Section";
import React from "react";
import PostHeader from "../components/PostHeader";
import Content from "../components/Content";
import PageTitle from "../components/PageTitle";

// const img = "/demo/astro-boilerplate/assets/images/image-post.jpeg";

const Post = () => {
  const { id } = useParams();

  const getPost = async (postId) => {
    const response = await fetch(`http://localhost:8000/posts/${postId}`);
    // console.log("response", response.status);
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
    queryKey: ["posts", parseInt(id)],
    queryFn: () => getPost(id),
  });

  return (
    <>
      <PageTitle title={data?.title} />
      <Section>
        {isLoading ? "Loading..." : <></>}
        <PostHeader content={data} />

        {/* <h1 className={`${props.content === undefined ? "text-center text-3xl font-bold" : "hidden"}`}>{props.content?.title}</h1> */}

        <Content content={data}>
          {data?.status !== undefined ? data.message : data?.content}
        </Content>
      </Section>
    </>
  );
};

export default Post;
