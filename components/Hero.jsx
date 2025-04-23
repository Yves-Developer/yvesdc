/** @format */
"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import CountUp from "react-countup";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
const Analytics = [
  { label: "Projects completed", number: 30 },
  { label: "Code Commits", number: 350 },
  { label: "Years Of Experience", number: 3 },
  { label: "Technology Mastered", number: 15 },
];
const Hero = () => {
  return (
    <section className="relative mx-auto max-w-[1140px]" id="Home">
      {/* Decorative Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10rem] left-10 w-32 h-32 bg-blue-600 blur-2xl opacity-30 rounded-full"></div>
        <div className="absolute top-[24rem] left-40 w-20 h-20 bg-primary blur-[100px] rounded-full"></div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center px-6 gap-12">
        {/* Left Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="max-sm:text-center text-lg font-medium text-primary mb-2"
          >
            Hello,
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-sm:text-center text-4xl md:text-5xl font-bold mb-6"
          >
            I'm MUGISHA Yves.
          </motion.h1>
          <Badge
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            FullStack Web & Mobile Developer
          </Badge>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-sm:text-center md:max-w-[650px] font-medium text-base text-textDark mt-4 mb-8"
          >
            I&apos;m a full-stack developer specializing in React, Next.js,
            Node.js, and React Native. I build fast, modern web and mobile
            experiences — from pixel-perfect UI to powerful backend systems.
            Whether it's a SaaS app, mobile Apps, or custom API — I make ideas
            come to life with clean, production-ready code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button
              size="lg"
              className="group transition-all duration-300 hover:scale-105"
            >
              <a href="/Resume.pdf" download="MUGISHA_Yves_Resume.pdf">
                Download CV
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </motion.div>
          {/* Count-up Section */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="py-10 flex gap-5 sm:gap-10"
            id="counter"
          >
            {Analytics.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center">
                  <p className="text-xl font-bold text-primary">
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={3}
                      separator=","
                      suffix=""
                    />
                  </p>
                </div>
                <h3 className="text-md text-center font-semibold text-textDark">
                  {item.label}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="mt-16 flow-root relative w-full max-w-[500px]">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-primary/10"
          >
            <Image
              src="/Herox.jpg"
              alt="Hero illustration"
              width={1280}
              height={720}
              className="object-cover shadow rounded-lg ring-1 ring-primary/10"
              quality="100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
