"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Ubuntu } from "next/font/google";

const roboto = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

const Links = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
  { name: "NewsLetter", url: "/newsletter" },
  { name: "Schools", url: "/schools" },
  { name: "Contact Us", url: "/contact" },
];

function Navbar() {
  const [activeLink, setActiveLink] = useState(""); // Track clicked link

  const handleClick = (url) => {
    setActiveLink(url);
  };

  return (
    <div
      className={` ${roboto.className} w-full flex justify-between items-center my-10 px-14`}
    >
      <Link
        href="/"
        className="text-3xl font-bold"
        onClick={() => setActiveLink("/")}
      >
        Vaayu India
      </Link>
      <div className="flex space-x-10">
        {Links.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className={`text-xl hover:underline underline-offset-4 ${
              activeLink === link.url ? "text-blue-500 underline" : ""
            }`}
            onClick={() => handleClick(link.url)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
