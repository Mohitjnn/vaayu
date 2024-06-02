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

const Founders = [
  {
    name: "Dhananjay Thakur",
    Title: "CEO, CO-FOUNDER",
    achievements: [
      "Renowned player, coach, and mentor in handball.",
      "Represented the Indian national handball team with pride.",
      "Recognized with the India Sports Award for remarkable contributions.",
      "Led his Maharashtra team to CBSE West Zonal Handball victory.",
      "Known for exceptional leadership and strategic prowess.",
    ],
  },
  {
    name: "Abhishek Pandey",
    Title: "CFO, CO-FOUNDER",
    achievements: [
      "Renowned for representing the Indian handball team internationally.",
      "Known for speed, strategy, and agility in national championships.",
      "Recipient of the India Sports Award for handball excellence.",
      "Exemplifies excellence, dedication, and passion for sports.",
      "Inspires athletes, securing a place in Indian sports history.",
    ],
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
          <h1 className="Heading">Founders</h1>
          <div className="flex flex-row w-full h-fit my-16 justify-between items-start space-x-6">
            {Founders.map((Founder, index) => (
              <div className="flex flex-col w-1/2 items-center justify-center space-y-8">
                <div className="w-[60vh] relative h-[70vh]">
                  <Image
                    src={`/Founder${index + 1}.png`}
                    priority={true}
                    fill={true}
                    objectFit="cover"
                  />
                </div>
                <div className="text-pretty w-full ">
                  <h1 className="subHeading mb-4">{Founder.name}</h1>
                  <h1 className="subHeading mb-4">{Founder.Title}</h1>
                  <div className=" text w-full leading-loose">
                    {Founder.achievements.map((achievement, index) => (
                      <p key={index}>- {achievement}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full h-fit px-12 my-16 flex flex-col items-center">
          <h1 className="Heading">Why Choose Us</h1>
          <div className="flex flex-row justify-start w-full overflow-x-auto overflow-y-hidden h-full no-scrollbar">
            {aboutUsList1.map((reasons, index) => (
              <Datacard Reasons={reasons} key={index} />
            ))}
          </div>
        </section>
      </center>
    </main>
  );
};

export default About;
