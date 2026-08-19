import Image from "next/image";
import getData from "@/customHook/datafetch";
import DataCarousel from "@/components/Carousel/DataCarousel";
import CardFlip from "@/animations/cardFlip";
import TransitionVertical from "@/animations/transitionVertical";
import ParallaxScroll from "@/animations/ParallaxScroll";

export const metadata = {
  title: "About us",
};

const About = async () => {
  const response = await getData();

  if (!response)
    return <div className="Title w-full text-center py-4">Loading...</div>;

  return (
    <main>
      <center className="w-full h-fit">
        <section className="hidden w-full lg:flex flex-col mt-4 md:px-14">
          <div className="flex flex-col items-center justify-center w-full h-fit gap-8">
            <TransitionVertical>
              <div className="w-full h-fit flex flex-col justify-center items-center text-justify space-y-4">
                <h1 className="subHeading font-semibold text-blue-500">
                  Know Everything...About Us
                </h1>
                <h1 className="Title font-black text-blue-800">ABOUT VAAYUN</h1>
              </div>
            </TransitionVertical>
            <TransitionVertical>
              <p className="text-m xl:text  px-4 xl:mx-20 w-fit text-justify leading-8 xl:leading-9">
                <span className=" font-semibold">VAAYUN </span>
                {response.desc.aboutUsPage}
              </p>
            </TransitionVertical>
          </div>
          <div className="justify-center hidden lg:flex items-center w-full lg:relative h-[65vh] lg:mt-4">
            <Image
              src="/static/images/AboutUsPicture2.jpg"
              fill={true}
              alt="About Us"
              className="object-contain"
            />
          </div>
        </section>
        <section className=" flex relative w-full h-[50vh] lg:h-[80vh] lg:hidden items-center">
          <div className="absolute w-full h-fit z-0">
            <div className="relative w-full h-[50vh] lg:h-[80vh]">
              <ParallaxScroll>
                <div className="justify-center flex items-center w-full h-[50vh] lg:h-[80vh]">
                  <Image
                    src="/static/images/AboutUsPicture2.jpg"
                    fill={true}
                    alt="About Us"
                    className="object-cover"
                  />
                </div>
              </ParallaxScroll>
            </div>
          </div>
          <div
            className="relative w-full h-full flex justify-center xl:justify-evenly items-center flex-col z-20 py-10 xl:py-40 px-4 xl:px-60"
            style={{ textShadow: "4px 2px 13px black" }}
          >
            <TransitionVertical>
              <p className="subHeading text-white">Know Everything About Us</p>
              <h1 className="text-pretty xl:text-center Title text-white xl:leading-relaxed xl:my-4">
                About Vaayun
              </h1>
            </TransitionVertical>
          </div>
        </section>
        <TransitionVertical>
          <section className=" relative w-full bg-white h-fit space-y-6 xl:px-16 py-16 flex flex-col items-center z-20">
            <h1 className="Title text-blue-900">Founders</h1>
            <div className="flex flex-col w-full h-fit gap-16 lg:gap-8">
              {response.Founders.map((Founder, index) => (
                <TransitionVertical key={index}>
                  <div
                    className={`flex flex-col w-full items-center gap-8 lg:gap-4 px-4 lg:px-8 ${
                      index % 2 === 0
                        ? "lg:flex-row"
                        : "lg:flex-row-reverse"
                    }`}
                  >
                    <CardFlip>
                      <div className="w-[80vw] lg:w-[50vh] shrink-0 relative h-[70vh] lg:h-[70vh]">
                        <Image
                          src={Founder.image}
                          priority={true}
                          fill={true}
                          alt={Founder.name}
                          className="rounded-xl object-cover"
                        />
                      </div>
                    </CardFlip>
                    <div
                      className={`text-pretty w-full lg:w-auto flex-1 ${
                        index % 2 === 0 ? "lg:text-left" : "lg:text-right"
                      } text-center`}
                    >
                      <h1 className="Heading lg:subHeading mb-2">
                        {Founder.name}
                      </h1>
                      <h1 className="Heading lg:subHeading mb-4 text-blue-600">
                        {Founder.Title}
                      </h1>
                      <div className="font-normal leading-relaxed text space-y-2">
                        {Founder.achievements.map((achievement, idx) => (
                          <p key={idx}>{achievement}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </TransitionVertical>
              ))}
            </div>
          </section>
        </TransitionVertical>
        <TransitionVertical>
          <section className="w-full h-fit px-4 lg:px-12 space-y-4 flex flex-col items-center ">
            <h1 className=" Title  text-blue-900">Why Choose Us</h1>
            <DataCarousel Reasons={response.aboutUsList1} />
          </section>
        </TransitionVertical>
      </center>
    </main>
  );
};

export default About;
