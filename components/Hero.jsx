/** @format */
"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <section className="relative py-20 mx-auto container lg:max-w-5xl" id="Home">
      {/* Decorative Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10rem] left-10 w-32 h-32 bg-blue-600 blur-2xl opacity-30 rounded-full"></div>
        <div className="absolute top-[24rem] left-40 w-20 h-20 bg-pink-400 blur-2xl rounded-full"></div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center px-6 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-medium text-zinc-700 mb-2">Hello,</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-6">
            I'm MUGISHA Yves.
          </h1>
          <p className="pr-[100px] text-zinc-600 mb-8">
            I specialize in web development with HTML, CSS, JavaScript, ReactJS,
            NextJS, TailwindCSS, NodeJS, and SQL. Let's create innovative
            digital experiences together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/Resume.pdf"
              download="MUGISHA_Yves_Resume.pdf"
              className="group transition-all duration-300 hover:scale-105"
            >
              <Button size="lg">Download CV</Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="group transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
          {/* Count-up Section */}
          <div className="py-10 flex gap-10" id="counter">
            <div className="w-1/2 bg-transparent ring-1 ring-zinc-400 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-zinc-800">Projects</h3>
              <p className="text-3xl font-bold text-zinc-800">
                <CountUp
                  start={0}
                  end={20}
                  duration={2}
                  separator=","
                  suffix="+"
                />
              </p>
              <p className="text-sm text-zinc-600">Completed</p>
            </div>
            <div className="w-1/2 bg-transparent ring-1 ring-zinc-400 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-zinc-800">
                Github Commits
              </h3>
              <p className="text-3xl font-bold text-zinc-800">
                <CountUp
                  start={0}
                  end={250}
                  duration={2}
                  separator=","
                  suffix="+"
                />
              </p>
              <p className="text-sm text-zinc-600">Successfull</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-16 flow-root relative w-full max-w-[500px]">
          <div className="-m-2 rounded-xl bg-ray-900/5 p-2 ring-1 ring-inset ring-gray-900/10">
            <Image
              src="/Herox.jpg"
              alt="Hero illustration"
              width={1280}
              height={720}
              className="object-cover shadow rounded-lg ring-1 ring-gray-900/10"
              quality="100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
