import Image from "next/image";

export default function Home() {
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
              className="opacity-70 object-cover"
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
        <section className="w-full">section 2</section>
      </center>
    </main>
  );
}
