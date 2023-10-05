import PostCard from "./PostCard";

const PostGallery = (props) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {props.posts?.map((post) => (
        <PostCard
          key={post.id}
          url={`/post/${post.id}`}
          timestamp={post.timestamp}
          imgSrc={post.img_src}
          imgAlt={post.img_alt}
          title={post.title.charAt(0).toUpperCase() + post.title.slice(1)}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default PostGallery;
