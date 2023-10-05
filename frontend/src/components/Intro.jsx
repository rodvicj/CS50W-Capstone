import Section from "../components/Section";
import Avatar from "../components/Avatar";
import SocMedIcons from "../components/SocMedIcons";
import GradientText from "../components/GradientText";

const Intro = () => (
  <Section>
    <Avatar
      title={
        <>
          Hi there, I'm <GradientText>Rodvicj</GradientText> 👋
        </>
      }
      description={
        <>
          An aspiring{" "}
          <a className="text-cyan-400 hover:underline" href="/">
            web developer
          </a>{" "}
          from philippines. Welcome to my{" "}
          <a className="text-cyan-400 hover:underline" href="/">
            CS50W
          </a>{" "}
          final project, a portfolio website to showcase my projects and my
          blogposts.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <SocMedIcons
              src="/assets/images/twitter-icon.png"
              alt="Github icon"
            />
          </a>
          <a href="/">
            <SocMedIcons
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <SocMedIcons
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <SocMedIcons
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export default Intro;
