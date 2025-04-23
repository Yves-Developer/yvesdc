/** @format */

import Certificates from "@/components/Certificates";
import Contact from "@/components/contact";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LeftSide from "@/components/LeftSide";
import Projects from "@/components/Projects";
import RightSide from "@/components/RightSide";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <main className="w-full h-[90vh] xl:flex justify-between items-center gap-20">
      <div className="w-32 h-full hidden xl:inline-flex fixed bottom-0 left-0">
        <LeftSide />
      </div>
      <div className="h-[90vh] mx-auto p-4">
        <Hero />
        <FeaturedProject />
        <Projects />
        <Certificates />
        <Skills />
        {/* <Work /> */}
        {/* <CareerRoadmap /> */}
        <Contact />
        <Footer />
      </div>
      <div className="w-32 h-full hidden xl:inline-flex fixed bottom-0 right-0">
        <RightSide />
      </div>
    </main>
  );
};

export default Home;
