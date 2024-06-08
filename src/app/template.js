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
// "use client";
// import pageswitchanimations from "@/animations/pageswitchanimations";
// import React, { useEffect } from "react";

// export default function Template({ children }) {
//   useEffect(() => {
//     pageswitchanimations(); // Call the function
//   }, []);

//   return (
//     <div>
//       <div
//         style={{ backgroundColor: "#2196f3" }}
//         id="circle"
//         className="min-h-[20vh] z-30  rounded-full fixed bottom-1/3 left-1/2 w-[20vh]"
//       />
//       {children}
//     </div>
//   );
// }
