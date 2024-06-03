// Newsletter.jsx
import React from "react";
import NewsContent from "@/components/NewsLetterContent/newsContent";

const newsletterContent = [
  {
    section: "left",
    imageSrc: "/newsletter1.png",
    title: "Yoga Competition",
    description:
      "Witness the dedication of young yogis to the ancient practice! Competitors showcase their flexibility, balance, and inner strength in a display of yogic mastery. This event fosters a spirit of competition and inspires others on their yogic journeys.",
  },
  {
    section: "left",
    imageSrc: "/newsletter2.png",
    title: "Art & Craft Competition",
    description:
      "Budding artists take center stage! Students compete across various mediums, showcasing their creativity in painting, drawing, sculpture, and digital art. This event celebrates artistic vision and provides a platform for students to impress the judges with their unique talents.",
  },
  {
    section: "center",
    imageSrc: "/newsletter6.png",
    title: "Creeda Handball League",
    description:
      "The Creeda Handball League elevates your game to the national stage! This prestigious league features talented players from across India, competing in a series of thrilling matches. Witness the pinnacle of handball skills as teams strategize, showcase their athleticism, and vie for the championship title. The league boasts nationwide broadcast coverage, allowing handball enthusiasts across the country to witness the action and cheer for their favorites. This is your chance to be part of history and leave your mark on Indian handball!",
  },
  {
    section: "center",
    imageSrc: "/newsletter3.png",
    title: "Interschool Handball Competition",
    description:
      "Witness the future stars of handball! This fast-paced, action-packed tournament puts teamwork, agility, and shooting skills to the test. Teams from across schools compete in strategic plays, showcasing quick reflexes and electrifying moments on the court. Don't miss this thrilling display of athleticism and passion for handball!",
  },
  {
    section: "right",
    imageSrc: "/newsletter4.png",
    title: "Basketball Competition",
    description:
      "Basketball prowess takes center stage! Students showcase their dribbling, passing, and shooting talents on a competitive stage. This event highlights teamwork, strategic plays, and the excitement of basketball competition.",
  },
  {
    section: "right",
    imageSrc: "/newsletter5.png",
    title: "Football Competition",
    description:
      "Football fanatics unite! This action-packed tournament showcases students' control, passing, and scoring abilities. Witness displays of team spirit, strategic plays, and the beautiful game come alive with passion and competition.",
  },
];

function Newsletter() {
  return (
    <main className="w-full h-fit">
      <center className="w-full flex flex-col items-start mt-3 space-y-10 px-16">
        <h1 className="Heading font-medium">What we are Up To:</h1>
        <section className="w-full flex justify-between space-x-14">
          <div className="w-[25%] h-full flex flex-col space-y-8 items-center justify-between overflow-y-auto no-scrollbar">
            <NewsContent content={newsletterContent} section={"left"} />
          </div>
          <div className="w-[50%] h-full flex flex-col space-y-8 items-center justify-between overflow-y-auto overflow-x-hidden no-scrollbar">
            <NewsContent content={newsletterContent} section={"center"} />
          </div>
          <div className="w-[25%] h-full flex flex-col space-y-8 items-center justify-between overflow-y-auto overflow-x-hidden no-scrollbar">
            <NewsContent content={newsletterContent} section={"right"} />
          </div>
        </section>
      </center>
    </main>
  );
}

export default Newsletter;
