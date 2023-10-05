import { useEffect } from "react";

const PageTitle = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return props.children;
};

export default PageTitle;

// const AppConfig = {
//   site_name: "Astro boilerplate",
//   title: "Astro boilerplate",
//   description: "Boilerplate built with Astro using React and Tailwind CSS",
//   author: "Emma",
//   locale_region: "en-us",
//   locale: "en",
// };

// export default AppConfig;

// // export default AppConfig = {
// //   site_name: 'Astro boilerplate',
// //   title: 'Astro boilerplate',
// //   description: 'Boilerplate built with Astro using React and Tailwind CSS',
// //   author: 'Emma',
// //   locale_region: 'en-us',
// //   locale: 'en',
// // };
