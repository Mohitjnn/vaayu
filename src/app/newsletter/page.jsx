import React from "react";
import NewsContent from "@/components/NewsLetterContent/NewsContent";
import getData from "@/customHook/datafetch";

async function Newsletter() {
  const response = await getData();

  if (!response)
    return <div className="Title w-full text-center py-4">Loading...</div>;

  return (
    <main className="w-full h-full">
      <center className="w-full flex flex-col items-start mt-3 space-y-10 px-4 xl:px-16">
        <h1 className="Title md:Heading ">What we are Up To:</h1>
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
