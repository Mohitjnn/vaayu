import Image from "next/image";
import getData from "@/customHook/datafetch";
import Link from "next/link";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import DotCarousel from "@/components/Carousel/DotCarousel";
import BgColour from "@/animations/BackgroundColour";
import TransitionVertical from "@/animations/transitionVertical";
import ParallaxScroll from "@/animations/ParallaxScroll";

export default async function Home() {
  const response = await getData();

  if (!response)
    return <div className="Title w-full text-center py-4">Loading...</div>;

  return (
    <main>
      <center className="w-full h-fit">
        <ParallaxScroll>
          <section className="relative w-full h-[90vh] xl:h-[110vh] flex items-center">
            <div className="absolute w-full h-full z-0">
              <ImageCarousel images={response.homePageImages} />
            </div>
            <div
              className="relative w-full h-full flex justify-center xl:justify-evenly items-center flex-col z-20 xl:space-y-8 py-10 xl:py-40 px-4 xl:px-60 bg-opacity-50"
              style={{ textShadow: "4px 2px 13px black" }}
            >
              <TransitionVertical>
                <h1 className="text-pretty xl:text-center Title text-white xl:leading-relaxed xl:my-4">
                  EMPOWERING THE NEXT GENERATION OF ATHLETES
                </h1>
                <p className="text text-white">
                  REVOLUTIONIZING SPORTS EDUCATION
                </p>
              </TransitionVertical>
            </div>
          </section>
        </ParallaxScroll>
        <section className="relative z-20 bg-white w-full flex flex-col-reverse items-center justify-center h-fit lg:flex-row xl:px-20 pt-16 xl:py-24 lg:px-10 lg:my-20">
          <div className="flex w-full lg:flex-row-reverse flex-col h-fit justify-between">
            <h1 className="lg:hidden Title text-blue-900 pb-4 ">ABOUT US</h1>
            <div className="lg:w-[50%] xl:w-[40%] px-4 relative h-[40vh] lg:h-[75vh] xl:h-[75vh] ">
              <Image
                src="/static/images/AboutUsPicture.png"
                layout="fill"
                className="px-4 xl:px-0 object-cover"
                alt="about us picture"
              />
            </div>
            <div className="flex flex-col space-y-8 px-8 lg:px-4 mt-10 lg:my-0 lg:w-[45%] xl:w-[45%] justify-between items-center lg:items-start xl:justify-left text-justify">
              <TransitionVertical>
                <h1 className="hidden lg:block Title text-blue-900">
                  ABOUT US
                </h1>
              </TransitionVertical>
              <TransitionVertical>
                <p className="lg:text-lg xl:text-xl text-sm leading-relaxed font-medium">
                  <span className="font-semibold">VAAYUN </span>
                  {response.desc.homePage1}
                </p>
              </TransitionVertical>
              <TransitionVertical>
                <p className="text-sm lg:text-lg xl:text-xl leading-relaxed font-medium pl-4 xl:pl-10 xl:w-[110%] border-l-4">
                  {response.desc.homePage2}
                </p>
              </TransitionVertical>
              <TransitionVertical>
                <button className="Btnlight text mt-4">
                  <Link href="/about">More</Link>
                </button>
              </TransitionVertical>
            </div>
          </div>
        </section>
        <TransitionVertical>
          <section className="flex flex-col items-center w-full px-4 xl:px-16 lg:mt-14 space-y-4 xl:space-y-10">
            <h1 className="Title mt-10 text-blue-900">
              WE CAPTURE EVERY MOMENT.
            </h1>
            <p className="lg:text-xl Text lg:w-1/2 xl:w-1/3">
              Know more about Vaayun and Stay updated in every possible way!
            </p>
            <div className="flex lg:gap-14 w-full overflow-x-auto h-full py-4 no-scrollbar">
              <DotCarousel Reasons={response?.newsletterContent} />
            </div>
            <button className="Btnlight text">
              <Link href="/newsletter">BROWSE NEWSLETTER</Link>
            </button>
          </section>
        </TransitionVertical>
        <section className="w-full mt-16 h-full xl:h-fit px-4 xl:px-16 flex flex-col items-center">
          <h1 className="Title mb-10 xl:mb-16 text-blue-900">Achievements</h1>
          {response?.achievements.map((achievement, index) => (
            <BgColour key={index}>
              <div
                className={`flex flex-col items-center justify-between xl:px-16 w-full lg:my-8 h-fit ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="w-full lg:w-[50%] relative h-[40vh] xl:h-[48vh] overflow-visible group">
                  <Image
                    src={`/static/images/Achievement${index + 1}.png`}
                    layout="fill"
                    alt="Achievement"
                    className="object-contain lg:object-fill"
                  />
                </div>
                <div className="w-full lg:w-[40%] xl:my-0 text-left space-y-4 lg:space-y-8 flex flex-col">
                  <h1 className="subHeading xl:Heading">{achievement.title}</h1>
                  <p className="text xl:subHeading xl:font-normal ">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </BgColour>
          ))}
        </section>
      </center>
    </main>
  );
}
