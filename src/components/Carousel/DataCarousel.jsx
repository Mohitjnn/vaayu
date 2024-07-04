"use client";
import Image from "next/image";
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const DataCarousel = ({ Reasons = [] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="lg:gap-10 w-full h-full ">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {Reasons.map((Reason, index) => (
            <div
              className="flex-none h-fit w-[45vh] mx-4 lg:mx-20 my-4 transitionVertical-transform duration-300 ease-in-out transform hover:scale-110 min-w-0"
              key={index}
            >
              <div className="w-[45vh] h-[40vh] relative ">
                <Image
                  src={`${Reason.imageSrc}`}
                  fill={true}
                  objectFit="contain"
                  alt={Reason.Title}
                />
              </div>
              <h2 className="text-xl text-center w-full font-bold mt-4">
                {Reason.Title}
              </h2>
              <p className="text-m mt-2 pb-6 px-3 h-full w-full text-center">
                {Reason.Description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <button className="inline mx-4" onClick={scrollPrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill="#3b82f6"
            d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm1.79 13c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22L9.2 12.53a.754.754 0 010-1.06l3.53-3.53c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3 3 3z"
          ></path>
        </svg>
      </button>
      <button className="inline  mx-4" onClick={scrollNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill="#3b82f6"
            d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm2.79 10.53l-3.53 3.53c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l3-3-3-3a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.53 3.53c.3.29.3.77 0 1.06z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default DataCarousel;
