"use client";
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useFeatureDetection } from "@/customHook/versionCheck";

export default function BgColour({ children }) {
  const ref = useRef(null);
  const isSupported = useFeatureDetection();

  // Call hooks unconditionally
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.13 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    if (ref.current) {
      console.log("BgColour component mounted", ref.current);
    }
  }, []);

  // Conditionally return based on `isSupported`
  if (!isSupported) {
    return (
      <div className="w-full my-4 rounded-xl p-4 lg:p-0 bg-blue-50 lg:bg-transparent">
        {children}
      </div>
    );
  }

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
