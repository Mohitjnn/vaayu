import React from "react";
import Image from "next/image";

function Newsletter() {
  return (
    <main>
      <center className="w-full flex flex-col items-start my-20 space-y-10 px-16">
        <h1 className="Heading font-medium"> What we are Up To: </h1>
        <section className="w-full flex justify-between space-x-14">
          <div className="w-[25%] h-full flex flex-col space-y-4 items-center justify-between overflow-y-auto no-scrollbar">
            <div className="w-full h-[45vh] relative">
              <Image
                src="/newsletter1.png"
                fill={true}
                objectFit="cover"
              ></Image>
            </div>
            <h1 className="Heading text-center">Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dolor reiciendis vel nisi doloribus perspiciatis est velit qui
              magni quam quis placeat earum veritatis consequatur odit,
              voluptates unde esse dolore!
            </p>
            <div className="w-full h-[45vh] relative">
              <Image
                src="/newsletter2.png"
                fill={true}
                objectFit="cover"
              ></Image>
            </div>
            <h1 className="Heading text-center">Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dolor reiciendis vel nisi doloribus perspiciatis est velit qui
              magni quam quis placeat earum veritatis consequatur odit,
              voluptates unde esse dolore!
            </p>
          </div>
          <div className="w-[50%] h-full flex flex-col space-y-4 items-center justify-between  overflow-y-auto overflow-x-hidden no-scrollbar">
            <div className="w-full h-[65vh] relative">
              <Image
                src="/newsletter6.png"
                fill={true}
                objectFit="cover"
              ></Image>
            </div>
            <h1 className="Heading text-center">Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dolor reiciendis vel nisi doloribus perspiciatis est velit qui
              magni quam quis placeat earum veritatis consequatur odit,
              voluptates unde esse dolore!
            </p>
            <div className="w-full h-[65vh] relative">
              <Image
                src="/newsletter3.png"
                fill={true}
                objectFit="cover"
              ></Image>
            </div>
            <h1 className="Heading text-center">Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dolor reiciendis vel nisi doloribus perspiciatis est velit qui
              magni quam quis placeat earum veritatis consequatur odit,
              voluptates unde esse dolore!
            </p>
          </div>
          <div className="w-[25%] h-full flex flex-col space-y-4 items-center justify-between  overflow-y-auto overflow-x-hidden no-scrollbar">
            <div className="w-full h-[45vh] relative">
              <Image
                src="/newsletter4.png"
                fill={true}
                objectFit="cover"
              ></Image>
            </div>
            <h1 className="Heading text-center">Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dolor reiciendis vel nisi doloribus perspiciatis est velit qui
              magni quam quis placeat earum veritatis consequatur odit,
              voluptates unde esse dolore!
            </p>
            <div className="w-full h-[45vh] relative">
              <Image
                src="/newsletter5.png"
                fill={true}
                objectFit="cover"
              ></Image>
            </div>
            <h1 className="Heading text-center">Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dolor reiciendis vel nisi doloribus perspiciatis est velit qui
              magni quam quis placeat earum veritatis consequatur odit,
              voluptates unde esse dolore!
            </p>
          </div>
        </section>
      </center>
    </main>
  );
}

export default Newsletter;
