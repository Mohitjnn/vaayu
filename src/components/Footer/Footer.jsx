import React from "react";

import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className="w-full bg-blue-500 mt-8  py-8  h-full xl:px-14 bottom-0 flex flex-col lg:flex-row justify-between items-center text-white">
      <div className="flex flex-col items-center w-full h-fit space-y-2 lg:space-y-1 lg:px-16">
        <Image
          src="/static/images/VaayunImage-removebg-preview.png"
          height={100}
          width={100}
          className="object-fill scale-[1.75]"
        />
        <h1 className="Heading md:Title font-semibold lg:subHeading text-center">
          VAAYUN
        </h1>
        <div className="text text-center font-normal opacity-65 px-4 md:space-y-4 lg:space-y-0 pb-2">
          <Link
            Developed
            by
            href="https://www.linkedin.com/in/mohit-jain-197515254/"
            target="_blank"
          >
            Developed By Mohit Jain
          </Link>
          <p className="text font-normal text-center ">
            @2024 | Vaayun | All Rights Reserved
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start lg:mt-16 w-full px-8 h-full space-y-1 py-8">
        <h1 className="Heading lg:subHeading">Contact</h1>
        <div className=" font-normal text text-start space-y-1 opacity-65">
          <div className="flex w-full space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejion="round"
              ></path>
              <path
                d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejion="round"
              ></path>
            </svg>
            <p>Creedaindiasports@gmail.com</p>
          </div>
          <div className="w-full flex space-x-4 my-2 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M18.5 9c0-.6-.47-1.52-1.17-2.27-.64-.69-1.49-1.23-2.33-1.23M22 9c0-3.87-3.13-7-7-7"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejion="round"
              ></path>
            </svg>
            <div className="w-full flex-col justify-start text-left">
              <p>+91 8689890988</p>
              <p>+91 8291724184</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full lg:w-fit h-fit my-4 lg:my-2 space-y-3 px-8 lg:px-16">
        <h1 className="Heading lg:subHeading w-full text-left">Socials</h1>
        <div className="flex justify-start w-full items-center space-x-4 opacity-65">
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
                fill="#ffffff"
              ></path>
            </svg>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            width="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill="#ffffff"
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
                fill="#ffffff "
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
