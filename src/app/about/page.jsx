"use client";

import React from "react";
import Image from "next/image";
import Datacard from "@/components/DataCard/Datacard";
import useAxios from "../../customHook/useAxios";

const About = () => {
  const { response, error } = useAxios();

  if (error)
    return <div className="Title w-full text-center py-4">Error: {error}</div>;
  if (!response)
    return <div className="Title w-full text-center py-4">Loading...</div>;

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
              transforms your school's sports program. Partnering with us
              elevates your curriculum, fosters essential life skills, and
              improves student fitness. We create a positive, supportive
              environment where students thrive on and off the field.
              Specialized resources and collaboration with your staff further
              enhance the value we bring. Let's transform your sports program
              and empower your students!
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
              <div className="flex flex-col w-1/2 items-center justify-center space-y-8">
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
                  <div className=" text w-full leading-loose">
                    {Founder.achievements.map((achievement, index) => (
                      <p key={index}>- {achievement}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full h-fit px-12 my-16 flex flex-col items-center">
          <h1 className="Heading">Why Choose Us</h1>
          <div className="flex flex-row justify-start w-full overflow-x-auto overflow-y-hidden h-full no-scrollbar">
            {response.aboutUsList1.map((reasons, index) => (
              <Datacard Reasons={reasons} key={index} />
            ))}
          </div>
        </section>
      </center>
    </main>
  );
};

export default About;
