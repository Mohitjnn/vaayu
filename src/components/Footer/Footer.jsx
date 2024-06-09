import React from "react";

import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className="w-full bg-blue-500 mt-8  py-10 h-full xl:px-14 bottom-0 flex flex-col lg:flex-row justify-between items-center">
      <div className="flex flex-col items-center justify-between w-fit h-fit space-y-6 lg:space-y-3 lg:px-16">
        <Image src="/static/images/logoWhite.png" height={10} width={60} />
        <h1 className="Heading md:Title font-semibold lg:subHeading text-center">
          VAAYUN
        </h1>
        <div className="subHeading lg:text text-center font-normal opacity-65 px-4 md:space-y-4 lg:space-y-2 lg:py-2 py-4">
          <p>Designed and Developed by</p>
          <p>Mohit Jain</p>
          <p className="md:subHeading lg:text-lg font-normal text-center">
            @2024|Vaayun|All Rights Reserved
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start lg:mt-16 w-fit h-full space-y-6 lg:space-y-3 py-8">
        <h1 className="Heading lg:subHeading">Contact</h1>
        <div className="subHeading font-normal lg:text text-center lg:text-start space-y-6 lg:space-y-1 opacity-65">
          <p>Creedaindiasports@gmail.com</p>
          <p>+91 8689890988</p>
          <p>+91 8291724184</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly w-fit h-fit my-4 lg:my-2 space-y-3 px-16">
        <h1 className="Heading lg:subHeading">Socials</h1>
        <div className="flex items-center space-x-4 opacity-65">
          <Link
            href="https://www.instagram.com/creedaindia?igsh=YnhzcGNkcWdlandn"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88c-2.14 0-3.88-1.74-3.88-3.88 0-2.14 1.74-3.88 3.88-3.88 2.14 0 3.88 1.74 3.88 3.88 0 2.14-1.74 3.88-3.88 3.88Zm5.92-9c-.05.12-.12.23-.21.33-.1.09-.21.16-.33.21a.995.995 0 0 1-1.09-.21c-.09-.1-.16-.21-.21-.33A.995.995 0 0 1 16 6.5c0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.23-.23.58-.34.9-.27.07.01.13.03.19.06.06.02.12.05.18.09.05.03.1.08.15.12.09.1.16.2.21.33.05.12.08.25.08.38s-.03.26-.08.38Z"
                fill="#000000"
              ></path>
            </svg>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill="#000000"
              d="M22 16.19c0 3.64-2.17 5.81-5.81 5.81H15c-.55 0-1-.45-1-1v-5.77c0-.27.22-.5.49-.5l1.76-.03c.14-.01.26-.11.29-.25l.35-1.91a.303.303 0 00-.3-.35l-2.13.03c-.28 0-.5-.22-.51-.49l-.04-2.45c0-.16.13-.3.3-.3l2.4-.04c.17 0 .3-.13.3-.3l-.04-2.4c0-.17-.13-.3-.3-.3l-2.7.04a2.996 2.996 0 00-2.95 3.05l.05 2.75c.01.28-.21.5-.49.51l-1.2.02c-.17 0-.3.13-.3.3l.03 1.9c0 .17.13.3.3.3l1.2-.02c.28 0 .5.22.51.49l.09 5.7c.01.56-.44 1.02-1 1.02h-2.3C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81v8.38z"
            ></path>
          </svg>
          <Link
            href="https://m.youtube.com/@creeda_india?si=Hh0SCSejCzwhYHL5&fbclid=PAZXh0bgNhZW0CMTEAAaZjNDilczwnhtUNx7Zvote2ii7gK-pzPBdTnFuloHD5xk11mKoLp6hInoo_aem_AQNBleSoW9RF9JJvLMGHi5E6O7wYUn1DgVarQ_1W7SErLZxx6p2rKVhol48fzmM6aSEJi9MRHlDnzvcwEAkunQh8"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="#000000"
                d="M17 4H7C4 4 2 6 2 9v6c0 3 2 5 5 5h10c3 0 5-2 5-5V9c0-3-2-5-5-5zm-3.11 9.03l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.17.82-1.63 1.82-1.03l2.47 1.48c.95.58.95 1.5 0 2.07z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
