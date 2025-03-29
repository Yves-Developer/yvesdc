/** @format */

import Contact from "@/components/contact";
import Hero from "@/components/Hero";
import LeftSide from "@/components/LeftSide";
import Projects from "@/components/Projects";
import RightSide from "@/components/RightSide";
import CareerRoadmap from "@/components/Roadmap";

const Home = () => {
  return (
    <main className="w-full h-[88vh] xl:flex justify-between items-center gap-20">
      <div className="w-32 h-full hidden xl:inline-flex fixed bottom-0 left-0">
        <LeftSide />
      </div>
      <div className="h-[88vh] mx-auto p-4">
        <Hero />
      </div>
      <div className="w-32 h-full hidden xl:inline-flex fixed bottom-0 right-0">
        <RightSide />
      </div>
      {/* 
      <Projects />
      <CareerRoadmap />
      <Contact /> */}
    </main>
  );
};

export default Home;
