import Image from "next/image";
// import axios from "axios";
import getData from "@/customHook/datafetch";
import Link from "next/link";

export default async function Home() {
  const response = await getData();

  if (!response)
    return <div className="Title w-full text-center py-4">Loading...</div>;

  return (
    <main>
      <center className="w-full h-fit">
        <section>
          <div className="relative w-full flex items-center xl:h-[110vh] h-[80vh]">
            <Image
              fill={true}
              priority={true}
              objectFit="cover"
              src="/static/images/homePageImage.png"
              className="opacity-70"
              alt="sportImage"
            />
            <div
              className=" w-full xl:w-1/2 h-full flex justify-evenly xl:justify-start items-start flex-col z-20 py-10 px-4 xl:px-14 "
              style={{ textShadow: "4px 2px 13px black" }}
            >
              <h1 className="leading-relaxed text-pretty xl:text-left Title text-white">
                EMPOWERING THE NEXT GENERATION OF ATHLETES: REVOLUTIONIZING
                SPORTS EDUCATION
              </h1>
              <button className="Btnlight subHeading mt-2">EXPLORE</button>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-full xl:px-20 xl:mt-14">
          <h1 className="Title xl:Heading my-14">ABOUT US</h1>
          <div className="flex w-full xl:flex-row flex-col h-fit justify-center xl:space-x-[5%]">
            <div className="xl:w-[50%] px-4 relative h-[40vh] xl:h-[58vh]">
              <Image
                src="/static/images/AboutUsPicture.png"
                objectFit="contain"
                fill={true}
                className="px-4 xl:px-0"
                alt="about us picture"
              />
            </div>
            <div className="flex flex-col px-4 my-10 xl:my-0 xl:p-0 xl:w-2/3 justify-between items-center xl:items-start xl:justify-left text-justify xl:text-left">
              <p className="text-xl md:text-xl leading-relaxed md:leading-loose font-medium">
                <span className="font-semibold">VAAYUN</span>
                {response?.desc.homePage}
              </p>
              <button className="Btnlight text mt-4">
                <Link href="/about">More</Link>
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center w-full px-5 xl:px-20 mt-14">
          <h1 className="Title xl:Heading my-14">
            STAY UPDATED WITH ALL WE ARE DOING
          </h1>
          <div className="flex flex-row gap-6 w-full overflow-x-auto h-full py-4 no-scrollbar">
            {response?.newsletterContent.map((news, index) => (
              <div className="flex flex-col m-4" key={index}>
                <div className="w-[46vh] relative h-[46vh]">
                  <Image
                    src={`${news.imageSrc}`}
                    priority={true}
                    fill={true}
                    objectFit="cover"
                    alt={news.title}
                  />
                </div>
                <p className="subHeading mt-4">{news.title}</p>
              </div>
            ))}
          </div>
          <button className="Btnlight text mt-4">
            <Link href="/newsletter">BROWSE NEWSLETTER</Link>
          </button>
        </section>
        <section className="w-full mt-16 h-full xl:h-fit px-4 xl:px-16 flex flex-col items-center">
          <h1 className="Title xl:Heading font-bold mb-16">Achievements</h1>
          {response?.achievements.map((achievement, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-between xl:px-16 w-full xl:my-8 h-fit gap-8 ${
                index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
              }`}
            >
              <div className="w-full xl:w-[65%] relative h-[40vh] xl:h-[48vh] overflow-visible group">
                <Image
                  src={`/static/images/Achievement${index + 1}.png`}
                  fill={true}
                  objectFit="contain"
                  alt="Achievement"
                  className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
              </div>
              <div className="w-fit mb-8 xl:mb-0 space-y-8 flex flex-col">
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
