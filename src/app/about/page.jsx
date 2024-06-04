"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Datacard from "@/components/DataCard/Datacard";
import useAxios from "../../customHook/useAxios";

const About = () => {
  const formContainerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const { response, error } = useAxios();

  useEffect(() => {
    const updateCardWidth = () => {
      if (formContainerRef.current && formContainerRef.current.firstChild) {
        setCardWidth(formContainerRef.current.firstChild.offsetWidth);
      }
    };

    // Initial card width calculation
    updateCardWidth();

    // Recalculate card width on window resize
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, [response]);

  if (error)
    return <div className="Title w-full text-center py-4">Error: {error}</div>;
  if (!response)
    return <div className="Title w-full text-center py-4">Loading...</div>;

  const scrollRight = () => {
    if (formContainerRef.current) {
      const newScrollLeft = Math.min(
        formContainerRef.current.scrollLeft + cardWidth,
        formContainerRef.current.scrollWidth -
          formContainerRef.current.clientWidth
      );

      formContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (formContainerRef.current) {
      const newScrollLeft = Math.max(
        formContainerRef.current.scrollLeft - cardWidth,
        0
      );

      formContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="w-full h-fit">
      <center className="w-full h-fit">
        <section className="w-full flex flex-col mt-4 px-14">
          <div className="flex flex-row items-center w-full h-fit gap-8">
            <div className="w-[25%] h-fit flex flex-col justify-center items-start">
              <h1 className="Heading text-blue-500 font-bold pl-2">About Us</h1>
              <div className="flex flex-row justify-between items-center">
                <Image
                  src="/logo.png"
                  height={50}
                  width={50}
                  objectFit="cover"
                  alt="Logo"
                />
                <h1 className="subHeading font-black">VAAYUN INDIA</h1>
              </div>
            </div>
            <p className="text w-fit text-left leading-loose">
              <span className="font-semibold">VAAYUN INDIA </span>
              {response.desc.aboutUsPage}
            </p>
          </div>
          <div className="justify-center w-full relative h-[60vh] mt-4">
            <Image
              src="/AboutUsPicture2.jpg"
              fill={true}
              objectFit="contain"
              alt="About Us"
            />
          </div>
        </section>
        <section className="w-full h-fit px-16 my-16 flex flex-col items-center">
          <h1 className="Heading">Founders</h1>
          <div className="flex flex-row w-full h-fit my-16 justify-between items-start space-x-6">
            {response.Founders.map((Founder, index) => (
              <div
                className="flex flex-col w-1/2 items-center justify-center space-y-8"
                key={index}
              >
                <div className="w-[60vh] relative h-[70vh]">
                  <Image
                    src={`/Founder${index + 1}.png`}
                    priority={true}
                    fill={true}
                    objectFit="cover"
                    alt={Founder.name}
                  />
                </div>
                <div className="text-pretty w-full ">
                  <h1 className="subHeading mb-4">{Founder.name}</h1>
                  <h1 className="subHeading mb-4">{Founder.Title}</h1>
                  <div className="text w-full leading-loose">
                    {Founder.achievements.map((achievement, idx) => (
                      <p key={idx}>- {achievement}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full h-fit px-12 space-y-4  flex flex-col items-center ">
          <h1 className="Heading">Why Choose Us</h1>
          <div
            className="flex flex-row justify-start w-full overflow-x-hidden h-full no-scrollbar"
            ref={formContainerRef}
          >
            {response.aboutUsList1.map((reasons, index) => (
              <Datacard Reasons={reasons} key={index} />
            ))}
          </div>
          <div className="flex flex-row justify-center space-x-4 w-full h-fit">
            <button onClick={scrollLeft}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill="#3b82f6"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 10.75h-5.19l1.72 1.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-3-3a.754.754 0 010-1.06l3-3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.72 1.72h5.19c.41 0 .75.34.75.75s-.34.75-.75.75z"
                ></path>
              </svg>
            </button>
            <button onClick={scrollRight}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill="#3b82f6"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.03 10.53l-3 3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l1.72-1.72H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.19l-1.72-1.72a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3 3c.29.29.29.77 0 1.06z"
                ></path>
              </svg>
            </button>
          </div>
        </section>
      </center>
    </main>
  );
};

export default About;
