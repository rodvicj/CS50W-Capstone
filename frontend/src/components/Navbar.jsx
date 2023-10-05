import React, { useState } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import { Header } from "./Header.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Section>
      <div className="top-0 left-0">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
          <Link onClick={() => setOpen(false)} to="/">
            <div className="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent">
              Home
            </div>
          </Link>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-9 top-11 md:hidden cursor-pointer text-gray-200"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`text-gray-200 md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 bg-slate-900" : "top-[-490px]"
            }`}
          >
            {Header.map((header) => (
              <li key={header.name} className="md:ml-8 text-xl md:my-0 my-5">
                {header.name === "Github" ? (
                  <a
                    href={header.link}
                    className="hover:text-white duration-500"
                  >
                    {header.name}
                  </a>
                ) : (
                  <Link
                    onClick={() => setOpen(false)}
                    to={header.link}
                    className="hover:text-white duration-500"
                  >
                    {header.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Navbar;
