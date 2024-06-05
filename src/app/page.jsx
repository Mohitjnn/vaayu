"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import useAxios from "../customHook/useAxios";

export default function Home() {
  const { response, error } = useAxios();

  if (error)
    return <div className="Title w-full text-center py-4">Error: {error}</div>;
  if (!response)
    return <div className="Title w-full text-center py-4">Loading...</div>;

  const router = useRouter();

  return (
    <main>
      <center className="w-full h-fit">
        <section>
          <div className="relative lg:w-full w-screen flex items-center lg:h-[110vh] h-[80vh]">
            <Image
              fill={true}
              priority={true}
              src="/homePageImage.png"
              objectFit="cover"
              className="opacity-70"
              alt="sportImage"
            />
            <div
              className=" w-full lg:w-1/2 h-full flex justify-evenly lg:justify-start items-start flex-col z-20 py-10 px-4 lg:px-14 "
              style={{ textShadow: "4px 2px 13px black" }}
            >
              <h1 className="leading-relaxed text-pretty lg:text-left Title text-white">
                EMPOWERING THE NEXT GENERATION OF ATHLETES: REVOLUTIONIZING
                SPORTS EDUCATION
              </h1>
              <button className="Btnlight subHeading mt-2">EXPLORE</button>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-full lg:px-10 xl:px-20 lg:mt-14">
          <h1 className="Title lg:Heading my-14">ABOUT US</h1>
          <div className="flex w-full lg:flex-row flex-col h-fit justify-center lg:space-x-[5%]">
            <div className="lg:w-[50%] px-4 relative h-[40vh] lg:h-[58vh]">
              <Image
                src="/AboutUsPicture.png"
                fill={true}
                className="px-4 lg:px-0"
              />
            </div>
            <div className="flex flex-col px-4 my-10 lg:my-0 lg:p-0 lg:w-2/3 justify-between items-center lg:items-start lg:justify-left text-justify lg:text-left">
              <p className="text-lg md:text-xl leading-relaxed md:leading-loose font-medium">
                <span className="font-semibold">VAAYUN</span>
                {response.desc.homePage}
              </p>
              <button
                className="Btnlight text mt-4"
                onClick={() => router.push("/about")}
              >
                More
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center w-full px-5 lg:px-20 mt-14">
          <h1 className="Title lg:Heading my-14">
            STAY UPDATED WITH ALL WE'RE DOING
          </h1>
          <div className="flex flex-row gap-6 w-full overflow-y-auto h-full py-4 no-scrollbar">
            {response.newsletterContent.map((news) => (
              <div className="flex flex-col">
                <div className="w-[46vh] relative h-[46vh]">
                  <Image
                    src={`${news.imageSrc}`}
                    priority={true}
                    fill={true}
                    objectFit="cover"
                  />
                </div>
                <p className="subHeading mt-4">{news.title}</p>
              </div>
            ))}
          </div>
          <button
            className="Btnlight text mt-4"
            onClick={() => router.push("/newsletter")}
          >
            BROWSE NEWSLETTER
          </button>
        </section>
        <section className="w-full mt-16 h-full lg:h-fit px-4 lg:px-0 xl:px-16 flex flex-col items-center">
          <h1 className="Title lg:Heading font-bold mb-16">Achievements</h1>
          {response.achievements.map((achievement, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-between lg:px-16 w-full lg:my-8 h-fit gap-8 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="w-full xl:w-[65%] relative h-[40vh] lg:h-[48vh] overflow-visible group">
                <Image
                  src={`/Achievement${index + 1}.png`}
                  fill={true}
                  objectFit="contain"
                  alt="Achievement"
                  className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
              </div>
              <div className="w-fit mb-8 lg:mb-0 space-y-8 flex flex-col">
                <h1 className="Heading ">{achievement.title}</h1>
                <p className="subHeading font-normal ">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      </center>
    </main>
  );
}
