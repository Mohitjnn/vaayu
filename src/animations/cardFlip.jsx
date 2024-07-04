"use client";
import { motion } from "framer-motion";
import React from "react";

export default function CardFlip({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: "90deg" }}
      whileInView={{ opacity: 1, rotateY: "180deg" }}
      transition={{
        ease: "easeInOut",
        duration: 2.5,
        delayChildren: 1,
      }}
    >
      {children}
    </motion.div>
  );
}
