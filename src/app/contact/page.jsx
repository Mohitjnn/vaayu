"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Form1 from "@/components/Forms/Form1";
import Form2 from "@/components/Forms/Form2";

function Contact() {
  const formContainerRef = useRef(null);

  const scrollToBottom = () => {
    formContainerRef.current.scrollTo({
      top: formContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    formContainerRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="w-full h-full">
      <center className="w-full h-full px-16">
        <section className="flex flex-row w-full h-full justify-between items-start space-x-6">
          <div className="w-[45%] relative h-[90vh] bg-custom-gradient rounded-br-[20%] my-5  ">
            <Image
              src="/contactUsimg.png"
              fill={true}
              objectFit="fill"
              quality={100}
              priority={true}
            />
          </div>
          <div
            className="flex flex-col w-[50%] h-[93vh] space-y-4 items-start justify-start overflow-hidden"
            ref={formContainerRef}
          >
            <div className="flex w-full justify-between">
              <h1 className="Title text-blue-500">Contact Us</h1>
              <button
                onClick={scrollToBottom}
                className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full mt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12l-7.5 7.5L4.5 12m15-7.5l-7.5 7.5L4.5 4.5"
                  />
                </svg>
              </button>
            </div>
            <Form1 />

            <div className="flex w-full justify-between">
              <h1 className="Title text-blue-500">Join Us</h1>
              <button
                onClick={scrollToTop}
                className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full mt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12l7.5-7.5 7.5 7.5m-15 7.5l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </button>
            </div>
            <Form2 />
          </div>
        </section>
      </center>
    </main>
  );
}

export default Contact;
