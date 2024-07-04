"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function BgColour({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.13 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scale,
        opacity: opacity,
      }}
      className="w-full my-4 rounded-xl p-4 lg:p-0 bg-blue-50 lg:bg-transparent"
    >
      {children}
    </motion.div>
  );
}
