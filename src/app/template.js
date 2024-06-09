"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        x: { duration: 0.5 },
        delayChildren: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}
