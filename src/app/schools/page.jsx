import Image from "next/image";
import getData from "@/customHook/datafetch";
import Link from "next/link";
import Transition from "@/animations/transition";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";

export default async function School() {
  const response = await getData();

  if (!response)
    return <div className="Title w-full text-center py-4">Loading...</div>;

  return (
    <main>
      <center className="w-full h-fit">
        <section className="relative w-full h-[50vh] lg:h-[80vh] flex items-center">
          <div className="absolute w-full h-fit z-0">
            <div className="relative w-full h-[50vh] lg:h-[80vh]">
              <ImageCarousel images={response.schoolPageImages.Carousel} />
            </div>
          </div>
          <div
            className="relative w-full h-full flex justify-center xl:justify-evenly items-center flex-col z-20 xl:space-y-8 py-10 xl:py-40 px-4 xl:px-60"
            style={{ textShadow: "4px 2px 13px black" }}
          >
            <Transition>
              <h1 className="text-pretty xl:text-center Title text-white xl:leading-relaxed xl:my-4">
                GOOD NEWS
              </h1>
              <p className="subHeading text-white">
                WE NOW PROVIDE COACHES TO SCHOOLS AS WELL
              </p>
            </Transition>
          </div>
        </section>
        <section className="relative flex flex-col-reverse items-center justify-center h-fit lg:flex-col w-full xl:px-20 lg:px-10 lg:mt- mt-10">
          <div className="flex w-full lg:flex-col flex-col h-fit justify-between">
            <h1 className="Heading lg:Title text-blue-900  ">Our Coaches</h1>
            <div className="flex w-full justify-around lg:px-14">
              <div className="px-4 relative w-full lg:w-[40%] h-[40vh] lg:h-[60vh] mt-10">
                <Image
                  src={response.schoolPageImages.coachImage1.Url}
                  fill={true}
                  priority={true}
                  objectFit="cover"
                  alt="coaches picture1"
                />
              </div>
              <div className="relative hidden lg:block px-4 w-[40%] h-[40vh] lg:h-[60vh] mt-10">
                <Image
                  src={response.schoolPageImages.coachImage2.Url}
                  fill={true}
                  priority={true}
                  objectFit="cover"
                  alt="coaches picture2"
                />
              </div>
            </div>
            <Transition>
              <div className="flex flex-col space-y-8 px-8 lg:px-4 mt-10 justify-between items-center text-justify">
                {response.schoolPageData.map((schoolData, index) => (
                  <p
                    key={index}
                    className="text-sm lg:text-lg xl:text-xl leading-relaxed font-medium pl-4 my-4 w-full"
                  >
                    <span className="text-xl font-bold mr-2">{index + 1}.</span>
                    {schoolData}
                  </p>
                ))}
                <p className="subHeading my-2 text-left ">
                  For more information or enquiries:
                  <Link
                    href="/contact"
                    className="subHeading px-3 font-extralight hover:underline underline-offset-4"
                  >
                    Contact Us
                  </Link>
                </p>
              </div>
            </Transition>
          </div>
        </section>
      </center>
    </main>
  );
}
