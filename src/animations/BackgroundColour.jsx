"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useFeatureDetection } from "@/customHook/versionCheck";

export default function BgColour({ children }) {
  const ref = useRef(null);
  const isSupported = useFeatureDetection();
  const [offset, setOffset] = useState(["0 1", "0.5 1"]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setOffset(["0 1", "0.5 1"]);
      } else {
        setOffset(["0 1", "1.13 1"]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
