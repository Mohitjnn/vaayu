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
            <div className="flex lg:flex-row flex-col w-full h-fit justify-between items-start space-y-16 lg:space-y-0 xl:space-x-6">
              {response.Founders.map((Founder, index) => (
                <div
                  className="flex flex-col w-full lg:w-1/2 px-8 lg:px-0 items-center justify-center space-y-8"
                  key={index}
                >
                  <CardFlip>
                    <div className="w-[80vw] lg:w-[60vh] relative h-[70vh] lg:h-[80vh] px-6 ">
                      <Image
                        src={`/static/images/Founder${index + 1}.png`}
                        priority={true}
                        fill={true}
                        alt={Founder.name}
                        className="lg:rounded-xl object-cover"
                      />
                    </div>
                  </CardFlip>
                  <TransitionVertical>
                    <div className="text-pretty w-full ">
                      <h1 className="Heading lg:subHeading mb-4">
                        {Founder.name}
                      </h1>
                      <h1 className="Heading lg:subHeading mb-4">
                        {Founder.Title}
                      </h1>
                      <div className="font-normal leading-relaxed text text-center w-full xl:px-16 ">
                        <TransitionVertical>
                          {Founder.achievements.map((achievement, idx) => (
                            <p key={idx} className="my-2">
                              {achievement}
                            </p>
                          ))}
                        </TransitionVertical>
                      </div>
                    </div>
                  </TransitionVertical>
                </div>
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
