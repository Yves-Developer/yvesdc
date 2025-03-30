"use client";
import { CornerUpRight } from "lucide-react";
import { motion } from "framer-motion";
const WorkData = ({ company, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <h2 className="text-xl font-semibold flex items-center gap-1">
        {title} <span className="text-primary">@{company}</span>
      </h2>
      <p className="text-textDark text-sm font-medium">Jan - 2023</p>
      <ul className="mt-6">
        <li className="mt-1 flex items-center gap-4 text-textDark text-base">
          <CornerUpRight size="30px" className="text-primary" />
          Built and deployed full-stack web applications using MERN & PERN
          stacks.
        </li>
        <li className="mt-1 flex items-center gap-4 text-textDark text-base">
          <CornerUpRight size="30px" className="text-primary" />
          Developed custom landing pages with Next.js and MailerLite for lead
          generation.
        </li>
        <li className="mt-1 flex items-center gap-4 text-textDark text-base">
          <CornerUpRight size="30px" className="text-primary" />
          Created an Electron-based screen recording & video editing app.
        </li>
        <li className="mt-1 flex items-center gap-4 text-textDark text-base">
          <CornerUpRight size="30px" className="text-primary" />
          Next.js Blog with Strapi CMS – Optimized for SEO.
        </li>
      </ul>
    </motion.div>
  );
};

export default WorkData;
