import React from "react";
import Image from "next/image";

const NewsContent = ({ content, section }) => {
  return content
    .filter((item) => item.section === section)
    .map((item, index) => (
      <>
        <div
          key={index}
          className={`w-full relative ${
            section === "center" ? "h-[75vh]" : "h-[45vh]"
          }`}
        >
          <Image
            src={item.imageSrc}
            fill={true}
            objectFit="cover"
            alt={item.title}
          />
        </div>
        <h1 className="Heading text-center ">{item.title}</h1>
        <p className=" text mt-2">{item.description}</p>
        <hr className="w-full border-2 border-gray-400 mt-4" />
      </>
    ));
};

export default NewsContent;
