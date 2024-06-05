import Link from "next/link";
import React from "react";

function schools() {
  return (
    <main className="w-full h-full ">
      <center className="w-full p-5 xl:p-16 flex flex-col items-start space-y-10 xl:space-y-6">
        <h1 className="Title">GOOD NEWS</h1>
        <p className="Heading">We now provide coaches to schools as well</p>
        <p className="Heading">
          For more information or enquiries:
          <Link
            href="/contact"
            className="Heading px-3 font-extralight hover:underline underline-offset-4"
          >
            Contact Us
          </Link>
        </p>
      </center>
    </main>
  );
}

export default schools;
