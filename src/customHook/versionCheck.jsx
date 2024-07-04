"use client";
import { useState, useEffect } from "react";

export function useFeatureDetection() {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const checkSupport = () => {
      // Example check for CSS variables support (adjust as needed)
      const supportsCSSVariables =
        window.CSS &&
        window.CSS.supports &&
        window.CSS.supports("--fake-var", 0);
      setIsSupported(supportsCSSVariables);
    };

    checkSupport();
  }, []);

  return isSupported;
}
