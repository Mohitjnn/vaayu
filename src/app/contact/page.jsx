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
          <div className="hidden md:block md:w-full xl:w-[45%] relative md:h-[45vh] xl:h-[85vh] bg-custom-gradient xl:rounded-br-[20%] xl:my-5">
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
            className="flex flex-col w-full xl:w-[50%] h-full items-start my-4 px-4 justify-start"
            ref={formContainerRef}
          >
            <h1 className="Title text-blue-900 text-center w-full">
              {isForm1Visible ? "Contact Us" : "Join Us"}
            </h1>
            <p className="text-m w-full text-center">
              {isForm1Visible
                ? "We're here to help and answer any questions you may have."
                : "Fill out this form to become a part of our esteemed organization."}
            </p>
            {isForm1Visible ? (
              <Form1 scrollToForm={scrollToForm} />
            ) : (
              <Form2 scrollToForm={scrollToForm} />
            )}
          </div>
        </section>
      </center>
    </main>
  );
}

export default Contact;
