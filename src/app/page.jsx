"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const newslist = [
  {
    id: 1,
    title: "Yoga Competition",
  },
  {
    id: 2,
    title: "Art & Craft Competition",
  },
  {
    id: 3,
    title: "Handball Competition",
  },
  {
    id: 4,
    title: "BasketBall Competition",
  },
  {
    id: 5,
    title: "Football Competition",
  },
  {
    id: 6,
    title: "Creeda Handball League",
  },
];

const achievements = [
  {
    title: "Junior Girls Team Representing India In Sweden (Partille Cup)",
    description:
      "Our junior girls team showcased their talent on an international stage at the Partille Cup in Sweden.",
  },
  {
    title: "Boys Team Winning CBSE Zonals & Qualified For Nationals",
    description:
      "Our boys team emerged victorious in the CBSE Zonals, earning a spot in the National competition.",
  },
  {
    title:
      "Winners Of Multiple Handball Tournaments (U/10 & U/12 Boys & Girls)",
    description:
      "Our U/10 and U/12 boys and girls teams clinched multiple handball tournament titles.",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <center className="w-full h-fit">
        <section>
          <div
            className="relative w-full flex items-center"
            style={{ height: "110vh" }}
          >
            <Image
              fill={true}
              priority={true}
              src="/homePageImage.png"
              objectFit="fill"
              className="opacity-70"
              alt="sportImage"
            />
            <div
              className=" w-1/2 h-full flex justify-start flex-col z-20 px-14 pt-32"
              style={{ textShadow: "4px 2px 13px black" }}
            >
              <h1 className="leading-relaxed text-left Title text-white">
                EMPOWERING THE NEXT GENERATION OF ATHLETES: REVOLUTIONIZING
                SPORTS EDUCATION
              </h1>
              <button className="Btnlight subHeading mt-2">EXPLORE</button>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-full px-20 mt-14">
          <h1 className="Heading my-14">ABOUT US</h1>
          <div className="flex w-full flex-row h-fit justify-center space-x-[5%]">
            <div className="w-[50%] relative h-[58vh]">
              <Image src="/AboutUsPicture.png" fill={true} />
            </div>
            <div className="flex flex-col w-2/3 justify-left text-pretty text-left">
              <p className="text-xl leading-loose font-medium">
                <span className="font-semibold">VAAYUN</span> is a sports
                academy that aims to coach young children for a better dominated
                sports culture in our country. Our focus is to train children in
                various fields of sports and fitness programmes during and after
                school hours, as well as to prepare and guide them for
                participation in state and national competitions. The sole aim
                of our programme is to ensure that your school grows not only
                academically but also makes a remarkable growth in the field of
                sports and games, which can be acheived with our training.
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
        <section className="flex flex-col items-center w-full px-20 mt-14">
          <h1 className="Heading my-14">STAY UPDATED WITH ALL WE'RE DOING</h1>
          <div className="flex flex-row gap-6 w-full overflow-y-auto h-[50vh] py-4 no-scrollbar">
            {newslist.map((news) => (
              <div className="flex flex-col">
                <div className="w-[46vh] relative h-[50vh]">
                  <Image
                    src={`/newsletter${news.id}.png`}
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
        <section className="w-full mt-16 h-fit px-16 flex flex-col items-center">
          <h1 className="Heading font-bold mb-16">Achievements</h1>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-16 w-full my-8 h-fit gap-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-[60%] relative h-[48vh] overflow-visible group">
                <Image
                  src={`/Achievement${index + 1}.png`}
                  fill={true}
                  objectFit="contain"
                  alt="Achievement"
                  className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                />
              </div>
              <div className="w-fit space-y-8 flex flex-col">
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
