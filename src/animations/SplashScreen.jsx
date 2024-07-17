"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ finishLoading }) {
  const controls = useAnimation();
  const parentControls = useAnimation();
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    controls
      .start({
        opacity: [0, 1],
        transition: {
          duration: 1.5,
          ease: "easeInOut",
        },
      })
      .then(() =>
        parentControls
          .start({
            opacity: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          })
          .then(() => finishLoading())
      );
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    if (isMounted) {
      animate();
    }
    return () => clearTimeout(timeout);
  }, [isMounted]);

  return (
    <motion.div
      className="w-screen h-screen flex items-center justify-center "
      initial={{ opacity: 1 }}
      animate={parentControls}
    >
      {isMounted && (
        <motion.div
          id="logo"
          initial={{ opacity: 0 }}
          animate={controls}
          className="flex items-center justify-center flex-col p-4"
        >
          <h1 className="Heading lg:Title font-black text-blue-900">
            VAAYUNSPORTS.COM
          </h1>
          <h1 className="subHeading lg:Heading font-normal text-blue-900">
            Enhancing physical education
          </h1>
        </motion.div>
      )}
    </motion.div>
  );
}
