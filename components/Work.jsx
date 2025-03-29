"use client";
import { useState } from "react";
import Header from "./Header";
import Google from "./WorkData";
import WorkData from "./WorkData";

const Work = () => {
  const [isGoogle, setIsGoogle] = useState(true);
  const [isPixel, setIsPixel] = useState(false);
  const [isUpstash, setIsUpstash] = useState(false);
  return (
    <section id="Work" className=" w-full max-w-[756px] mx-auto px-4 py-20">
      <Header title="Where I Worked" />
      <div className="mt-10 w-full flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col gap-4">
          <li
            onClick={() => {
              setIsGoogle(true);
              setIsPixel(false);
              setIsUpstash(false);
            }}
            className="border-l-2 border-l-primary bg-transparent hover:bg-[#112264] text-sm font-medium cursor-pointer text-textDark duration-300 px-8 py-3"
            style={isGoogle ? { backgroundColor: "#112264" } : {}}
          >
            Google
          </li>
          <li
            onClick={() => {
              setIsGoogle(false);
              setIsPixel(true);
              setIsUpstash(false);
            }}
            style={isPixel ? { backgroundColor: "#112264" } : {}}
            className="border-l-2 border-l-primary bg-transparent hover:bg-[#112264] text-sm font-medium cursor-pointer text-textDark duration-300 px-8 py-3"
          >
            Pixel
          </li>
          <li
            onClick={() => {
              setIsGoogle(false);
              setIsPixel(false);
              setIsUpstash(true);
            }}
            style={isUpstash ? { backgroundColor: "#112264" } : {}}
            className="border-l-2 border-l-primary bg-transparent hover:bg-[#112264] text-sm font-medium cursor-pointer text-textDark duration-300 px-8 py-3"
          >
            Upstash
          </li>
        </ul>
        {isGoogle && <WorkData title="Software Engineer" company="Google" />}
        {isPixel && <WorkData title="FullStack developer" company="pixel" />}
        {isUpstash && <WorkData title="Software Engineer" company="Upstash" />}
      </div>
    </section>
  );
};

export default Work;
