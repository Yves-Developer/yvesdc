/** @format */

"use client";
import {
  GraduationCap,
  Briefcase,
  Trophy,
  Lightbulb,
  Code,
  CalendarIcon,
  Check,
} from "lucide-react";
import TimelineLayout from "./timeline-layout";
import Header from "./Header";

// const roadmapSteps = [
//   {
//     title: "Early Start",
//     description: "Began learning coding in 2018 during Senior 1.",
//     icon: Lightbulb,
//     color: "bg-blue-500",
//   },
//   {
//     title: "Advanced Study",
//     description: "Studied MPC at GS Mater Dei, enhancing technical skills.",
//     icon: GraduationCap,
//     color: "bg-green-500",
//   },
//   {
//     title: "Project Work",
//     description: "Gained experience by building web apps and systems.",
//     icon: Code,
//     color: "bg-yellow-500",
//   },
//   {
//     title: "First Job",
//     description: "Plan to join a company and apply development skills.",
//     icon: Briefcase,
//     color: "bg-red-500",
//   },
//   {
//     title: "Expert Level",
//     description: "Master web development and lead innovative projects.",
//     icon: Trophy,
//     color: "bg-purple-500",
//   },
// ];
const roadmapSteps = [
  {
    id: 1,
    title: "Started Learning HTML, CSS, and Web Development",
    date: "2018-01-01",
    description:
      "Began learning web development in Senior 1 despite having no laptop or internet at home. Focused on HTML and CSS basics.",
    status: "completed",
  },
  {
    id: 2,
    title: "Advanced in JavaScript and Web Development",
    date: "2020-06-01",
    description:
      "Gained advanced knowledge in JavaScript. Started learning frontend frameworks like ReactJS and backend technologies like NodeJS.",
    status: "completed",
  },
  {
    id: 3,
    title: "Full-Stack Development & SQL Mastery",
    date: "2022-03-01",
    description:
      "Became proficient in full-stack development, mastering NextJS, ExpressJS, and SQL. Built REST APIs and explored authentication techniques.",
    status: "completed",
  },
  {
    id: 4,
    title: "Real-Time Applications",
    date: "2023-08-01",
    description:
      "Integrated coding skills with trading strategies. Built real-time applications using Socket.io, WebSockets, and APIs.",
    status: "completed",
  },
  {
    id: 5,
    title: "AI and Machine Learning Exploration",
    date: "2024-02-01",
    description:
      "Began working with AI models, fine-tuning GPT-4-O Mini, implementing TTS and STT models, and building AI-powered educational tools.",
    status: "in-progress",
  },
  {
    id: 6,
    title: "Scaling AI Projects & Monetization",
    date: "2025-01-01",
    description:
      "Aiming to build and scale AI-powered platforms like IshuriGPT while generating revenue through content marketing and selling source code.",
    status: "pending",
  },
];

export default function CareerRoadmap() {
  return (
    <div className="w-full max-w-[756px] mx-auto px-4 py-8" id="About">
      <Header title="My Journey" />
      <TimelineLayout
        items={roadmapSteps}
        size="sm"
        iconColor="primary"
        customIcon={<Check />}
      />
    </div>
  );
}
