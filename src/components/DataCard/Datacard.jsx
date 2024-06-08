import React from "react";
import Image from "next/image";

function Datacard({ Reasons }) {
  return (
    <div className="flex flex-col h-fit w-full p-4 mx-4 lg:mx-8 my-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
      <div className="w-[40vh] lg:w-[50vh] h-[40vh] xl:h-[45vh]  relative ">
        <Image
          src={`${Reasons.imageSrc}`}
          fill={true}
          objectFit="contain"
          alt={Reasons.Title}
        />
      </div>
      <h2 className="text-xl font-bold mt-4">{Reasons.Title}</h2>
      <p className="text-m mt-2 pb-6 px-3 h-full text-center">
        {Reasons.Description}
      </p>
    </div>
  );
}

export default Datacard;
