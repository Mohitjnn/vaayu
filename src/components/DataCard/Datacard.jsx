import React from "react";
import Image from "next/image";

function Datacard({ Reasons }) {
  return (
    <div className="flex flex-col items-center h-full w-full m-16 transition-transform duration-300 ease-in-out transform hover:scale-110 overflow-visible">
      <div className="w-[50vh] h-[50vh] relative ">
        <Image
          src={`/whyUs${Reasons.id}.png`}
          fill={true}
          objectFit="fill"
          alt={Reasons.Title}
        />
      </div>
      <h2 className="text-xl font-bold mt-4">{Reasons.Title}</h2>
      <p className="text-m mt-2 pb-6 h-full text-center">
        {Reasons.Description}
      </p>
    </div>
  );
}

export default Datacard;
