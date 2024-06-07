"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Transition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        staggerChildren: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}
