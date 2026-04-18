import React from "react";

const Hero = () => {
  return (
    <section className="h-[640px] bg-neutral-950 text-white rounded-[40px] mx-4">
      <div className="absolute pl-16 pt-[6rem]">
        <h1 className="text-5xl md:text-7xl font-bold font-aldrich leading-tight">
          Organize Your <br />
          <span className="text-seaweed-500">Learning.</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg md:text-xl">
          Group tabs, links, and notes into topics. <br /> Track your progress
          and never lose context again.
        </p>

        <button className="mt-10 px-8 py-4 text-onyx-900 bg-neon-chartreuse-400 rounded-[30px]">
          Start Organizing
        </button>
      </div>
    </section>
  );
};

export default Hero;
