import React from "react";
import NewsContent from "@/components/NewsLetterContent/NewsContent";
import getData from "@/customHook/datafetch";

export const metadata = {
  title:
    "The Newsletter | Daily Sports Email Newsletter & Latest only at https://www.vaayunsports.com/newsletter",

  description:
    "The Sportsletter is the Best Sports Newsletter Website for busy Sports Fans, offering Morning Emails including Recent Stories & Articles.",
  keywords: [
    "sports newsletter",
    "sports newsletter",
    "newsletter",
    "one stop newsletter",
    "best newsletter for sports",
    "newsletter sport",
    "newsletter design",
    "newsletter examples",
    "best newsletter website",
    "best website for newsletter",
    "sports newsletters",
    "newsletter email",
    "free newsletter service",
    "best sports newletter",
    "newsletters",
    "best sports newsletters",
    "newsletter examples",
    "newsletter design",
    "Vaayun sports newsletter",
    "best yoga newsletter",
    "daily sports newsletter",
    "free newsletter service",
    "newsletters related to sports",
    "yoga for weight loss",
    "best arts and crafts newsletter",
  ],
  robots: "index,follow",
  canonical: "",
};

async function Newsletter() {
  const response = await getData();

  if (!response)
    return <div className="Title w-full text-center py-4">Loading...</div>;

  return (
    <main className="w-full h-full">
      <center className="w-full flex flex-col items-start mt-3 space-y-10 px-4 xl:px-16">
        <h1 className="Title text-center w-full  text-blue-900 font-black">
          Vaayun Newsletter
        </h1>
        <section className="w-full flex flex-col xl:flex-row xl:justify-between space-y-14 xl:space-y-0 xl:space-x-14">
          <div className="w-full xl:w-[25%] h-full flex flex-col space-y-8 items-center justify-between xl:overflow-y-auto no-scrollbar">
            <NewsContent
              content={response.newsletterContent}
              section={"left"}
            />
          </div>
          <div className="w-full xl:w-[50%] h-full flex flex-col space-y-8 items-center justify-between xl:overflow-y-auto no-scrollbar">
            <NewsContent
              content={response.newsletterContent}
              section={"center"}
            />
          </div>
          <div className="w-full xl:w-[25%] h-full flex flex-col space-y-8 items-center justify-between xl:overflow-y-auto no-scrollbar">
            <NewsContent
              content={response.newsletterContent}
              section={"right"}
            />
          </div>
        </section>
      </center>
    </main>
  );
}

export default Newsletter;
