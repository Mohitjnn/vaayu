import React from "react";
import Image from "next/image";

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
            alt={item.title}
            className="object-contain xl:object-cover"
          />
        </div>
        <h1 className="Title xl:Heading text-center ">{item.title}</h1>
        <p className="text mt-2">{item.description}</p>
        <hr className="w-full border-2 border-gray-400 mt-4" />
      </>
    ));
};

export default NewsContent;
