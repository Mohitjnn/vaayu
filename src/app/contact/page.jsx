"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Form1 from "@/components/Forms/Form1";
import Form2 from "@/components/Forms/Form2";

function Contact() {
  const formContainerRef = useRef(null);
  const [isForm1Visible, setIsForm1Visible] = useState(true);

  const scrollToForm = (form) => {
    if (formContainerRef.current) {
      formContainerRef.current.scrollTo({
        top: form === "form1" ? 0 : formContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
      setIsForm1Visible(form === "form1");
    }
  };

  return (
    <main className="w-full h-full">
      <center className="w-full h-full px-4 md:px-0 xl:px-16">
        <section className="flex flex-col xl:flex-row w-full h-full justify-between items-start xl:space-x-6 xl:space-y-0">
          <div className="hidden md:block md:w-full xl:w-[45%] relative md:h-[45vh] xl:h-[90vh] bg-custom-gradient  xl:rounded-br-[20%] xl:my-5">
            <Image
              src="/static/images/ContactUs.png"
              fill={true}
              objectFit="cover"
              quality={100}
              priority={true}
              alt="Contact Us"
            />
          </div>
          <div
            className="flex flex-col w-full xl:w-[50%] h-full space-y-4 items-start px-4 my-4 justify-start xl:justify-start overflow-y-auto"
            ref={formContainerRef}
          >
            <div className="flex w-full justify-between">
              <h1 className="Title text-blue-500">
                {isForm1Visible ? "Contact Us" : "Join Us"}
              </h1>
              <button
                onClick={() => scrollToForm(isForm1Visible ? "form2" : "form1")}
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
                    d={
                      isForm1Visible
                        ? "M19.5 12l-7.5 7.5L4.5 12m15-7.5l-7.5 7.5L4.5 4.5"
                        : "M4.5 12l7.5-7.5 7.5 7.5m-15 7.5l7.5-7.5 7.5 7.5"
                    }
                  />
                </svg>
              </button>
            </div>
            {isForm1Visible ? <Form1 /> : <Form2 />}
          </div>
        </section>
      </center>
    </main>
  );
}

export default Contact;
