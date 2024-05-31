import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="">
        <center className="w-full h-fit">
          <div className="relative w-full" style={{ height: "140vh" }}>
            <Image
              fill={true}
              src="/homePageImage.png"
              className="opacity-80"
            ></Image>
          </div>
        </center>
      </div>
    </main>
  );
}
