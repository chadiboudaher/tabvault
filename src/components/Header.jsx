import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";

const Header = () => {
  const [currentNav, setCurrentNav] = useState("1");

  useGSAP(() => {
    gsap.from("#header-tab", {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power1.out",
    });
  });

  const navTitles = [
    {
      id: "1",
      title: "Home",
    },
    {
      id: "2",
      title: "About",
    },
    {
      id: "3",
      title: "Explore",
    },
    {
      id: "4",
      title: "Features",
    },
  ];

  function handleClickedNav(id) {
    setCurrentNav(id);
    console.log(currentNav);
  }

  return (
    <header
      id="header-tab"
      className="flex justify-between items-center pl-8 pr-3 py-3 bg-onyx-900 text-seaweed-400 rounded-[50px] my-4 mx-4"
    >
      <h1 className="text-2xl font-bold tracking-wider  font-aldrich">
        TabVault
      </h1>

      <nav className="rounded-full">
        <ul className="flex items-center gap-4 text-xm sm:text-xm text-gray-200 font-jetbrains">
          {navTitles.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.title.toLowerCase()}`}
                onClick={() => handleClickedNav(nav.id)}
                className={`block px-4 py-2 rounded-full transition-all duration-400 ${
                  currentNav === nav.id
                    ? "bg-seaweed-500 text-white"
                    : "hover:bg-seaweed-800"
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button className="py-3 px-4 bg-neon-chartreuse-400 text-onyx-800 rounded-[40px] hover:bg-neon-chartreuse-300 cursor-pointer">
        Get Started
      </button>
    </header>
  );
};

export default Header;
