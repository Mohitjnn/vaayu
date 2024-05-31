import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="">
        <center className="w-full h-fit">
          <div
            className="relative w-full flex items-center"
            style={{ height: "110vh" }}
          >
            <Image
              fill={true}
              src="/homePageImage.png"
              className="opacity-70 object-fill"
            />
            <div
              className=" w-1/2 h-full text-left Title text-white z-20 px-14 pt-32"
              style={{ textShadow: "4px 2px 13px black" }}
            >
              <h1 className="leading-relaxed">
                EMPOWERING THE NEXT GENERATION OF ATHLETES: REVOLUTIONIZING
                SPORTS EDUCATION
              </h1>
            </div>
          </div>
        </center>
      </div>
    </main>
  );
}
