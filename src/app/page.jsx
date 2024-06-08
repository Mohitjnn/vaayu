import Image from "next/image";
import getData from "@/customHook/datafetch";
import Link from "next/link";
import Transition from "@/animations/transition";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";

export default async function Home() {
  const response = await getData();

  if (!response)
    return <div className="Title w-full text-center py-4">Loading...</div>;

  return (
    <main>
      <center className="w-full h-fit">
        <section className="relative w-full h-[90vh] xl:h-[110vh] flex items-center">
          <div className="absolute w-full h-full z-0">
            <ImageCarousel />
          </div>
          <div
            className="relative w-full h-full flex justify-center xl:justify-evenly items-center flex-col z-20 xl:space-y-8 py-10 xl:py-40 px-4 xl:px-60"
            style={{ textShadow: "4px 2px 13px black" }}
          >
            <Transition>
              <h1 className="text-pretty xl:text-center Title text-white xl:leading-relaxed xl:my-4">
                EMPOWERING THE NEXT GENERATION OF ATHLETES
              </h1>
              <p className="text text-white">
                REVOLUTIONIZING SPORTS EDUCATION
              </p>
            </Transition>
            <button className="Btnlight subHeading mt-2">EXPLORE</button>
          </div>
        </section>
        <section className="flex flex-col-reverse items-center justify-center h-fit lg:flex-row w-full xl:px-20 lg:px-10 lg:my-20">
          <div className="flex w-full lg:flex-row-reverse flex-col h-fit justify-between">
            <div className="lg:w-[50%] xl:w-[40%] px-4 relative h-[40vh] lg:h-[75vh] xl:h-[75vh] ">
              <Image
                src="/static/images/AboutUsPicture.png"
                layout="fill"
                className="px-4 xl:px-0 object-cover"
                alt="about us picture"
              />
            </div>
            <div className="flex flex-col space-y-8 px-8 lg:px-4 mt-10 lg:my-0  lg:w-[45%] xl:w-[45%] justify-between items-center lg:items-start xl:justify-left text-justify">
              <h1 className="Heading lg:Title">ABOUT US</h1>
              <p className="lg:text-lg xl:text-xl text-sm leading-relaxed font-medium">
                <span className="font-semibold">VAAYUN </span>
                {/* {response.desc.homePage1} */}
                is a sports academy that aims to coach young children for a
                better dominated sports culture in our country. Our focus is to
                train children in various fields of sports and fitness
                programmes during and after school hours, as well as to prepare
                and guide them for participation in state and national
                competitions.
              </p>
              <p className="text-sm lg:text-lg xl:text-xl leading-relaxed font-medium pl-4 xl:pl-10 w-[110%] border-l-4">
                {/* {response.desc.homePage2} */}
                The sole aim of our programme is to ensure that your school
                grows not only academically but also makes a remarkable growth
                in the field of sports and games, which can be achieved with our
                training.
              </p>
              <button className="Btnlight text mt-4">
                <Link href="/about">More</Link>
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center w-full px-5 xl:px-20 lg:mt-14 space-y-4">
          <h1 className="lg:Title Heading mt-10">WE CAPTURE EVERY MOMENT.</h1>
          <p className="lg:text-xl Text lg:w-1/2 xl:w-1/3">
            Know more about Vaayun and Stay updated in every possible way!
          </p>
          <div className=" flex space-x-5 lg:gap-14 w-full overflow-x-auto h-full py-4 no-scrollbar">
            {response?.newsletterContent.map((news, index) => (
              <div
                className="flex flex-col mx-2 lg:mx-12 h-full w-full "
                key={index}
              >
                <div className="w-[90vw] h-[50vh] lg:w-[50vh] relative lg:h-[60vh]">
                  <Image
                    src={`${news.imageSrc}`}
                    priority={true}
                    layout="fill"
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
          <h1 className="xl:Title Heading font-bold mb-16">Achievements</h1>
          {response?.achievements.map((achievement, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-between xl:px-16 w-full xl:my-8 h-fit ${
                index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
              }`}
            >
              <div className="w-full xl:w-[50%] relative h-[40vh] xl:h-[48vh] overflow-visible group">
                <Image
                  src={`/static/images/Achievement${index + 1}.png`}
                  layout="fill"
                  alt="Achievement"
                  className="transition-transform duration-500 ease-in-out transform group-hover:scale-110 object-cover lg:object-fill"
                />
              </div>
              <div className="w-full lg:w-[40%] mb-8 xl:mb-0 text-left space-y-4 lg:space-y-8 flex flex-col">
                <h1 className="Heading">{achievement.title}</h1>
                <p className="subHeading font-normal">
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
