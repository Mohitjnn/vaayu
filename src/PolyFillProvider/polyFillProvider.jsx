// components/PolyfillProvider.js
"use client";

import { useEffect } from "react";
import "@/helper/polyfill";

const PolyfillProvider = ({ children }) => {
  useEffect(() => {
    // Ensure polyfill is applied on client-side
    require("@/helper/polyfill");
  }, []);

  return <>{children}</>;
};

export default PolyfillProvider;
