import React from "react";
import Image from "next/image";

function Datacard({ Reasons }) {
  return (
    <div className="flex flex-col h-fit w-full mx-10 ml-0 md:ml-16 lg:mx-16 my-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
      <div className="w-[50vh] h-[45vh] md:h-[50vh] relative ">
        <Image
          src={`/whyUs${Reasons.id}.png`}
          fill={true}
          objectFit="contain"
          alt={Reasons.Title}
        />
      </div>
      <h2 className="text-xl font-bold mt-4">{Reasons.Title}</h2>
      <p className="text-m mt-2 pb-6 px-4 h-full text-center">
        {Reasons.Description}
      </p>
    </div>
  );
}

export default Datacard;
