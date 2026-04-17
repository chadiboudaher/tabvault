import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-3 bg-prussian-blue-400 text-alabaster-grey-50">
      <h1 className="text-2xl font-bold tracking-wider text-pumpkin-spice-500">
        TabVault
      </h1>

      <nav>
        <ul className="flex gap-4 text-xm sm:text-xm text-gray-200">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#explore">Explore</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
        </ul>
      </nav>

      <button className="py-2 px-3 bg-orange-500 rounded-lg">
        Get Started
      </button>
    </header>
  );
};

export default Header;
