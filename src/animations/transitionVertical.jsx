"use client";
import { motion } from "framer-motion";
import React from "react";

export default function TransitionVertical({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delayChildren: 1,
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
