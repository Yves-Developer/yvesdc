/** @format */

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative py-20" id="Home">
      {/* Decorative Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10rem] left-10 w-32 h-32 bg-blue-600 blur-2xl opacity-30 rounded-full"></div>
        <div className="absolute top-[24rem] left-40 w-20 h-20 bg-pink-400 blur-2xl rounded-full"></div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center px-6 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-medium text-gray-700 mb-2">Hello,</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            I'm MUGISHA Yves.
          </h1>
          <p className="text-gray-600 mb-8">
            I specialize in web development with HTML, CSS, JavaScript, ReactJS,
            NextJS, TailwindCSS, NodeJS, and SQL. Let's create innovative
            digital experiences together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              className="group transition-all duration-300 hover:scale-105"
              size="lg"
            >
              Download CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative aspect-square w-full max-w-[500px] mx-auto">
          <Image
            src="/herox.png"
            alt="Hero illustration"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
