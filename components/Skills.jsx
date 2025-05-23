"use client";
import React, { useState } from "react";
import Header from "./Header";
import RadialProgress from "./RadialProgress";
import { Button } from "./ui/button";
import { usePlausible } from "next-plausible";

const mainSkills = [
  { skill: "HTML", percent: 95 },
  { skill: "CSS", percent: 93 },
  { skill: "TailwindCSS", percent: 90 },
  { skill: "JavaScript", percent: 87 },
  { skill: "ReactJS", percent: 85 },
  { skill: "NextJS", percent: 85 },
  { skill: "NodeJS", percent: 86 },
  { skill: "ExpressJS", percent: 80 },
  { skill: "MongoDB", percent: 82 },
  { skill: "PostgreSQL", percent: 78 },
  { skill: "MySQL", percent: 84 },
  { skill: "Prisma", percent: 81 },
  { skill: "Sequelize", percent: 70 },
  { skill: "REST APIs", percent: 85 },
  { skill: "Git & GitHub", percent: 83 },
  { skill: "React Native", percent: 60 },
];
const Skills = () => {
  const plausible = usePlausible();
  const [numberPerPage, setNumberPerPage] = useState(8);
  return (
    <section
      id="Skills"
      className="py-20 px-4 max-w-[1140px] mx-auto md:px-6 lg:px-8"
    >
      {/* Header */}
      <Header title="My Skills" />
      <div className="mt-10 w-full grid gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mainSkills.slice(0, numberPerPage).map(({ skill, percent }) => (
          <div key={skill} className="flex flex-col gap-2 items-center">
            <RadialProgress percent={percent} />
            <h3 className="text-xl text-textLight font-semibold">{skill}</h3>
          </div>
        ))}
      </div>
      <div className="w-full justify-center flex items-center mt-10">
        {numberPerPage == mainSkills.length ? (
          <Button
            size="lg"
            variant="outline"
            onClick={() => setNumberPerPage((prevVisible) => prevVisible - 8)}
          >
            Show Less
          </Button>
        ) : (
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              setNumberPerPage((prevVisible) => prevVisible + 8);
              plausible("Load_More_Skills");
            }}
          >
            Load More
          </Button>
        )}
      </div>
    </section>
  );
};

export default Skills;
