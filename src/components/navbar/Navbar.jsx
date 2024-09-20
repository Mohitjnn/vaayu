"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
  { name: "NewsLetter", url: "/newsletter" },
  { name: "Schools", url: "/schools" },
  { name: "Contact Us", url: "/contact" },
];

function Navbar() {
  const pathname = usePathname();
  const [Open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(pathname);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`w-full flex flex-col xl:flex-row justify-between items-between xl:items-center px-4 lg:px-8 xl:px-14 z-30 h-fit bg-black/20 backdrop-blur-[10px] text-white 
        ${
          pathname === "/" ||
          pathname === "/schools" ||
          (pathname === "/about" && isMobile)
            ? "fixed "
            : "sticky top-0"
        }
      ${Open ? "rounded-b-3xl" : ""}`}
    >
      <div className="w-full flex flex-row-reverse xl:flex-row justify-between xl:items-center">
        <div className="flex xl:justify-evenly items-center w-fit xl:w-fit h-fit ">
          <Link
            href="/"
            className="text-2xl font-bold xl:font-black py-6"
            onClick={() => setActiveLink("/")}
          >
            VAAYUN
          </Link>
        </div>
        <div className="hidden xl:flex xl:flex-row xl:space-x-6">
          {Links.map((link) => (
            <Link
              href={link.url}
              key={link.url}
              className={`text-m font-extralight hover:underline underline-offset-4 ${
                activeLink === link.url ? "text-blue-500 underline" : ""
              }`}
              onClick={() => setActiveLink(link.url)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button
          className="xl:hidden absolute left-0 m-5"
          onClick={() => setOpen((prev) => !prev)}
        >
          {Open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 4.5h18M3 9.5h18M3 14.5h18M3 19.5h18"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          )}
        </button>
      </div>
      <div
        className={`flex flex-col items-center space-y-6 w-full pb-10 xl:hidden ${
          Open ? "" : "hidden"
        }`}
      >
        {Links.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className={`text-xl font-medium hover:underline underline-offset-4 ${
              activeLink === link.url ? "text-blue-400 underline" : ""
            }`}
            onClick={() => {
              setOpen((prev) => !prev);
              setActiveLink(link.url);
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
