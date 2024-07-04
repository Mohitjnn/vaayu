"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const DotCarousel = ({ Reasons = [] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      // Adjust the speed for smooth transitions
    },
    [AutoScroll({ speed: 2.5, stopOnInteraction: false })]
  );
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.slideNodes(); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="w-full h-full space-y-6">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {Reasons.map((Reason, index) => (
            <div
              className="flex-none h-fit w-[90vw] lg:w-[65vh] mx-6 rounded-xl"
              key={index}
            >
              <div className="w-[80vw] h-[50vh] lg:w-[50vh] relative lg:h-[60vh]">
                <Image
                  src={`${Reason.imageSrc}`}
                  priority={true}
                  fill={true}
                  alt={Reason.Title}
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl text-center w-full font-bold mt-4 ">
                {Reason.Title}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-start py-4">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`embla__dot ${
              index === selectedIndex ? "border-2 border-blue-950" : ""
            }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default DotCarousel;
