import React from "react";

import { motion } from "framer-motion";

export default function Logo({
  width = 20,
  height = 20,
}: {
  width: number;
  height: number;
}) {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/motion.svg"
      // initial={{ pathLength: 0 }}
      // animate={{ pathLength: 1 }}
      // transition={{ duration: 4, staggerChildren: 0.3 }}
    >
      <motion.path
        d="M 5 0 C 0 0 0 0 0 5 C 0 10 0 10 5 10 C 10 10 10 10 10 5 C 10 0 10 0 5 0"
        strokeWidth="0.25"
        stroke="#000"
        fill="#E2F316"
      />
      <motion.path
        d="M 15 0 C 10 0 10 0 10 5 C 10 10 10 10 15 10 C 20 10 20 10 20 5 C 20 0 20 0 15 0"
        strokeWidth="0.25"
        stroke="#000"
        fill="#E2F316"
      />
      <motion.path
        d="M 5 10 C 0 10 0 10 0 15 C 0 20 0 20 5 20 C 10 20 10 20 10 15 C 10 10 10 10 5 10"
        strokeWidth="0.25"
        stroke="#000"
        fill="#E2F316"
      />
      <motion.path
        d="M 10 15 C 10 20 10 20 15 20 C 20 20 20 20 20 15 C 20 10 20 10 15 10 C 10 10 10 10 10 15"
        strokeWidth="0.25"
        stroke="#000"
        fill="#E2F316"
      />
      <motion.path
        d="M 10 5 C 5 5 5 5 5 10 C 5 15 5 15 10 15 C 15 15 15 15 15 10 C 15 5 15 5 10 5"
        strokeWidth="0.25"
        stroke="#000"
        fill="#58A5FF"
      />
    </motion.svg>
  );
}
