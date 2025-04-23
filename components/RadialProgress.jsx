"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const RadialProgress = ({ percent }) => {
  const [offset, setOffset] = useState(226.19); // full circle

  useEffect(() => {
    const circumference = 2 * Math.PI * 36;
    const newOffset = circumference * (1 - percent / 100);
    setTimeout(() => setOffset(newOffset), 100); // trigger transition
  }, [percent]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-24 h-24 relative"
    >
      <svg className="w-full h-full rotate-[-90deg]">
        <circle
          cx="50%"
          cy="50%"
          r="36"
          stroke="#112240"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="50%"
          cy="50%"
          r="36"
          stroke="#66ffdb"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="226.19"
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-textLight text-md font-semibold">
        <span>{percent || 75}%</span>
      </div>
    </motion.div>
  );
};

export default RadialProgress;
