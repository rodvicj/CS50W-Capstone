import { Routes, Route } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Posts from "./Posts";
import Projects from "./Projects";
import Navbar from "../components/Navbar";
import PostsRecent from "../components/PostsRecent";
import ProjectsRecent from "../components/ProjectsRecent";
import Post from "./Post";
import Project from "./Project";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageTitle title="CS50W Capstone" />
              <Intro />
              <ProjectsRecent />
              <PostsRecent />
            </>
          }
        />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:page" element={<Posts />} />
        <Route path="/project/:projectID" element={<Project />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
