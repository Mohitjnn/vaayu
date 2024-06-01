import React from "react";
import Image from "next/image";
import Datacard from "@/components/DataCard/Datacard";

const aboutUsList1 = [
  {
    id: 1,
    Title: "Needs Assessment",
    Description:
      "We conduct a thorough needs assessment to understand your school's specific requirements and goals.",
  },
  {
    id: 2,
    Title: "Tailored Curriculum",
    Description:
      "We design a customized curriculum that aligns with your school's objectives and students' needs.",
  },
  {
    id: 3,
    Title: "Age-Appropriate Programs",
    Description:
      "Our programs are designed to be age-appropriate, ensuring engagement and progress for all students.",
  },
  {
    id: 4,
    Title: "Skill Development",
    Description:
      "We focus on developing fundamental and advanced skills based on students' proficiency levels.",
  },
  {
    id: 5,
    Title: "Progress Monitoring",
    Description:
      "We monitor each student's progress through regular assessments and feedback sessions.",
  },
  {
    id: 6,
    Title: "Individualized Attention",
    Description:
      "Our program prioritizes individualized attention to provide personalized feedback and support.",
  },
  {
    id: 7,
    Title: "Flexibility & Adaptability",
    Description:
      "We offer a flexible program that adapts to changes in student needs, interests, and schedules.",
  },
  {
    id: 8,
    Title: "Inclusion and Diversity",
    Description:
      "Our program embraces inclusion and caters to students of various abilities and backgrounds.",
  },
  {
    id: 9,
    Title: "Collaboration with School Staff",
    Description:
      "We collaborate with your school's staff to ensure alignment with the overall curriculum.",
  },
  {
    id: 10,
    Title: "Progress Reporting",
    Description:
      "We provide periodic progress reports highlighting students' achievements and growth.",
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

const About = () => {
  return (
    <main className="w-full h-fit">
      <center className="w-full h-fit">
        <section className="w-full flex flex-col mt-4 px-14">
          <div className="flex flex-row items-center w-full h-fit gap-8">
            <div className="w-[25%] h-fit flex flex-col justify-center items-start">
              <h1 className="Heading text-blue-500 font-bold pl-2">About Us</h1>
              <div className="flex flex-row justify-between items-center">
                <Image
                  src="/logo.png"
                  height={50}
                  width={50}
                  objectFit="cover"
                  alt="Logo"
                />
                <h1 className="subHeading font-black">VAAYUN INDIA</h1>
              </div>
            </div>
            <p className="text w-fit text-left leading-loose">
              <span className="font-semibold">VAAYUN</span> is a sports academy
              that aims to coach young children for a better dominated sports
              culture in our country. Our focus is to train children in various
              fields of sports and fitness programmes during and after school
              hours, as well as to prepare and guide them for participation in
              state and national competitions. The sole aim of our programme is
              to ensure that your school grows not only academically but also
              makes a remarkable growth in the field of sports and games, which
              can be achieved with our training.
            </p>
          </div>
          <div className="justify-center w-full relative h-[60vh] mt-4">
            <Image
              src="/AboutUsPicture2.jpg"
              fill={true}
              objectFit="contain"
              alt="About Us"
            />
          </div>
        </section>
        <section className="w-full h-fit px-16 my-16 flex flex-col items-center">
          <h1 className="Heading">Why Choose Us</h1>
          <div className="flex flex-row justify-start w-full overflow-x-auto overflow-y-hidden h-full no-scrollbar">
            {aboutUsList1.map((reasons, index) => (
              <Datacard Reasons={reasons} key={index} />
            ))}
          </div>
        </section>
        <section className="w-full h-fit px-16 flex flex-col items-center">
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
};

export default About;
