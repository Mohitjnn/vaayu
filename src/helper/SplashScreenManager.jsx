"use client";
import SplashScreen from "@/animations/SplashScreen";
import { useEffect, useState } from "react";

export default function SplashScreenManager({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 2300);

    return () => clearTimeout(timeout);
  }, []);

  const finishLoading = () => {
    setShowSplash(false);
  };

  return showSplash ? <SplashScreen finishLoading={finishLoading} /> : children;
}
