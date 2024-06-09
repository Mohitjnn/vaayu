import React from "react";
import Image from "next/image";
import Transition from "@/animations/transition";

const NewsContent = ({ content, section }) => {
  return content
    .filter((item) => item.section === section)
    .map((item) => (
      <>
        <div
          key={item.title}
          className={`w-full lg:w-[50%] xl:w-full h-[40vh] relative ${
            section === "center" ? "xl:h-[75vh]" : "xl:h-[45vh] "
          }`}
        >
          <Image
            src={item.imageSrc}
            fill={true}
            alt={item.Title}
            className="object-contain xl:object-cover"
          />
        </div>
        <Transition>
          <h1 className="Title Heading text-center ">{item.Title}</h1>
          <p className="text lg:text-m lg:px-12 xl:px-0 mt-2 text-justify leading-2">
            {item.description}
          </p>
        </Transition>
        <hr className="w-full border-2 border-gray-400 mt-4" />
      </>
    ));
};

export default NewsContent;
