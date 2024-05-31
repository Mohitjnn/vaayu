"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      className="w-full flex justify-between items-center px-14 sticky top-0 z-30 h-fit bg-white" // Ensure height and z-index
    >
      <div className="flex justify-evenly items-center w-fit h-fit py-2 ">
        <Image src="/logo.png" height={70} width={70} />
        <Link
          href="/"
          className="subHeading font-black"
          onClick={() => setActiveLink("/")}
        >
          VAAYUN INDIA
        </Link>
      </div>
      <div className="flex space-x-20">
        {Links.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className={`subHeading font-extralight hover:underline underline-offset-4 ${
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
