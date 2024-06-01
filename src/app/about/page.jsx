import React from "react";
import Image from "next/image";

function About() {
  return (
    <main>
      <center className="w-full h-fit">
        <section className="w-full flex flex-col px-14">
          <div className=" flex flex-row  items-center w-full h-fit gap-8">
            <div className="w-[25%] h-fit flex flex-col justify-center items-start">
              <h1 className="Heading text-blue-500 font-bold pl-2">About Us</h1>
              <div className="flex flex-row justify-between items-center">
                <Image
                  src="/logo.png"
                  height={50}
                  width={50}
                  objectFit="cover"
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
              can be acheived with our training.
            </p>
          </div>
          <div className="justify-center w-[100%] relative h-[60vh] mt-4">
            <Image src="/AboutUsPicture2.jpg" fill={true} objectFit="contain" />
          </div>
        </section>
        <section></section>
      </center>
    </main>
  );
}

export default About;
