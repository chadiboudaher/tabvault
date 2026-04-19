import React from "react";
import { TiLocationArrow } from "react-icons/ti";
import {
  SiYoutube,
  SiGoogledocs,
  SiNotion,
  SiGithub,
  SiMedium,
  SiArxiv,
  SiWikipedia,
  SiSubstack,
} from "react-icons/si";
import { FaNewspaper, FaBookOpen, FaLink } from "react-icons/fa";

const ITEMS = [
  { icon: <SiYoutube />, color: "bg-red-500/10    text-red-400" },
  { icon: <FaBookOpen />, color: "bg-blue-500/10   text-blue-400" },
  { icon: <SiArxiv />, color: "bg-orange-500/10 text-orange-400" },
  { icon: <SiNotion />, color: "bg-white/10      text-white" },
  { icon: <FaNewspaper />, color: "bg-green-500/10  text-green-400" },
  { icon: <SiMedium />, color: "bg-white/10      text-white" },
  { icon: <SiGithub />, color: "bg-purple-500/10 text-purple-400" },
  { icon: <SiSubstack />, color: "bg-orange-500/10 text-orange-400" },
  { icon: <SiWikipedia />, color: "bg-white/10      text-white" },
  { icon: <SiGoogledocs />, color: "bg-blue-500/10   text-blue-400" },
  { icon: <FaLink />, color: "bg-green-500/10  text-green-400" },
];

const COLUMN_A = [...ITEMS, ...ITEMS];
const COLUMN_B = [...ITEMS.slice(4), ...ITEMS, ...ITEMS.slice(0, 4)];

const IconCard = ({ icon, color }) => (
  <div
    className={`flex items-center justify-center w-12 h-12 rounded-full border border-white/[0.06] ${color}`}
  >
    <span className="text-xl">{icon}</span>
  </div>
);

const FloatingColumn = ({ items, duration, reverse = false }) => (
  <div className="flex flex-col gap-3 overflow-hidden h-full">
    <div
      className="flex flex-col gap-3"
      style={{
        animation: `${reverse ? "scrollDown" : "scrollUp"} ${duration}s linear infinite`,
      }}
    >
      {items.map((item, i) => (
        <IconCard key={i} {...item} />
      ))}
    </div>
  </div>
);

const Hero = () => {
  return (
    <>
      <style>{`
        @keyframes scrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0%   { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      <section className="h-[640px] bg-neutral-950 text-white rounded-[40px] mx-4 overflow-hidden">
        <div className="grid grid-cols-2 h-full">
          {/* Left: copy */}
          <div className="pl-16 pt-[6rem]">
            <h1 className="text-5xl md:text-7xl font-bold font-aldrich leading-tight">
              Organize Your <br />
              <span className="text-seaweed-500">Learning.</span>
            </h1>
            <p className="mt-6 text-gray-400 text-lg md:text-xl">
              Group tabs, links, and notes into topics. <br />
              Track your progress and never lose context again.
            </p>
            <button className="flex items-center gap-2 mt-10 px-6 py-4 text-onyx-900 bg-neon-chartreuse-400 rounded-[30px]">
              <TiLocationArrow />
              Start Organizing
            </button>
          </div>

          {/* Right: floating circle columns */}
          <div className="relative flex justify-end gap-5 items-start pt-8 pr-24 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-neutral-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent z-10 pointer-events-none" />

            <FloatingColumn items={COLUMN_A} duration={18} />
            <FloatingColumn items={COLUMN_B} duration={22} reverse />
            <FloatingColumn items={COLUMN_B} duration={26} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
