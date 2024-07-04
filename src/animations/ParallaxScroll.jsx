"use client";
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useFeatureDetection } from "@/customHook/versionCheck";

export default function ParallaxScroll({ children }) {
  const ref = useRef(null);
  const isSupported = useFeatureDetection();

  // Call hooks unconditionally
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    if (ref.current) {
      console.log("ParallaxScroll component mounted", ref.current);
    }
  }, []);

  // Conditionally return based on `isSupported`
  if (!isSupported) {
    return <div className="z-0">{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y: backgroundY }} className="relative z-10">
      {children}
    </motion.div>
  );
}
