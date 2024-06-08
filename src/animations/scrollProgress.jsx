"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress({ children }) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div
      ref={ref}
      className="relative w-full overflow-x-auto no-scrollbar py-4"
    >
      <div className="fixed top-4 right-4 z-50">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="stroke-gray-300 stroke-[4]"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="stroke-blue-500 stroke-[4]"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
      </div>
      <div className="flex gap-6">{children}</div>
    </div>
  );
}
