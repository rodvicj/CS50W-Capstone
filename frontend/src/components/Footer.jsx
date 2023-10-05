import Section from "../components/Section";

const Footer = () => {
  return (
    <Section>
      <div className="border-gray-600 p-3 absolute bottom-0">
        <div className="text-sm text-cyan-400">
          @ Rodvicj {new Date().getFullYear()}
        </div>
      </div>
    </Section>
  );
};

export default Footer;
