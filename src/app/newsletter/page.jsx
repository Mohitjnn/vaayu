"use client";

import React from "react";
import NewsContent from "@/components/NewsLetterContent/newsContent";
import useAxios from "../../customHook/useAxios";

function Newsletter() {
  const { response, error } = useAxios();

  if (error) return <div>Error: {error}</div>;
  if (!response) return <div>Loading...</div>;

  return (
    <main className="w-full h-fit">
      <center className="w-full flex flex-col items-start mt-3 space-y-10 px-16">
        <h1 className="Heading font-medium">What we are Up To:</h1>
        <section className="w-full flex justify-between space-x-14">
          <div className="w-[25%] h-full flex flex-col space-y-8 items-center justify-between overflow-y-auto no-scrollbar">
            <NewsContent
              content={response.newsletterContent}
              section={"left"}
            />
          </div>
          <div className="w-[50%] h-full flex flex-col space-y-8 items-center justify-between overflow-y-auto overflow-x-hidden no-scrollbar">
            <NewsContent
              content={response.newsletterContent}
              section={"center"}
            />
          </div>
          <div className="w-[25%] h-full flex flex-col space-y-8 items-center justify-between overflow-y-auto overflow-x-hidden no-scrollbar">
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
