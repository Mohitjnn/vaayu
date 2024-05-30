import Link from "next/link";
import React from "react";

const Links = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
  { name: "Contact Us", url: "/contact" },
  { name: "NewsLetter", url: "/newsletter" },
  { name: "Schools", url: "/schools" },
];

function Navbar() {
  return (
    <div className={"w-full flex justify-between px-7"}>
      <div>Vaayu India</div>
      <div>
        {Links.map((link) => (
          <Link href={link.url}>{link.name}</Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
