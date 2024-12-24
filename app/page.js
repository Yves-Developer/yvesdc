/** @format */

import Contact from "@/components/contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import CareerRoadmap from "@/components/Roadmap";

const Home = () => {
  return (
    <main className="w-full max-w-screen-xl mx-auto py-8 px-4">
      <Hero />
      <Projects />
      <CareerRoadmap />
      <Contact />
    </main>
  );
};

export default Home;
