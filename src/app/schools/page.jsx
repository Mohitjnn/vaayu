import Image from "next/image";
import getData from "@/customHook/datafetch";
import Link from "next/link";
import TransitionVertical from "@/animations/transitionVertical";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import ParallaxScroll from "@/animations/ParallaxScroll";

export const metadata = {
  title:
    "School Coach Hire | Professional athlete provider only at https://www.vaayunsports.com/schools",
  keywords: [
    "coaches for schools",
    "best provider coaches",
    "best trainers for soccer",
    "coaches for school",
    "best coach hiring website",
    "football coaches for school",
    "best coaches for volleyball",
    "coaches provider for sports",
    "school coaches provider",
    "school coaches provider",
    "best coaches provider near me",
    "best coaches near me",
    "best hiring websites for coaches",
    "best provider coaches for football",
    "best coaches provider website",
    "coaches for professional training",
    "best coaches for school",
    "school coaches providers",
    "school coach provider",
    "trainers of professional training",
  ],
  robots: "index,follow",
  canonical: "",
};

export default async function School() {
  const response = await getData();

  if (!response)
    return <div className="Title w-full text-center py-4">Loading...</div>;

  const { during, after, why } = response.schoolPageData;

  return (
    <main>
      <center className="w-full h-fit">

        {/* Hero Banner Carousel */}
        <section className="relative w-full h-[50vh] lg:h-[80vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <ParallaxScroll>
              <div className="relative w-full h-[50vh] lg:h-[80vh]">
                <ImageCarousel images={response.schoolPageImages.Carousel} />
              </div>
            </ParallaxScroll>
          </div>
          <div
            className="relative w-full h-full flex justify-center items-center flex-col z-20 py-10 px-4 xl:px-60"
            style={{ textShadow: "4px 2px 13px black" }}
          >
            <TransitionVertical>
              <h1 className="text-pretty text-center Title text-white xl:leading-relaxed xl:my-4">
                WE OFFER TOP-TIER COACHING
              </h1>
              <h2 className="subHeading text-white">
                WE EMPOWER CHILDREN TO REALISE THEIR FULL POTENTIAL
              </h2>
            </TransitionVertical>
          </div>
        </section>

        {/* During School Program */}
        <section className="relative z-20 bg-white w-full px-6 lg:px-16 xl:px-24 py-16 lg:py-24">
          <TransitionVertical>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              {/* Text */}
              <div className="flex-1 text-left space-y-6">
                <p className="subHeading text-blue-500 font-semibold uppercase tracking-wide">
                  {during.title}
                </p>
                <h2 className="Heading lg:subHeading font-black text-blue-900 leading-tight">
                  {during.subtitle}
                </h2>
                <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-gray-700">
                  {during.intro}
                </p>
                <div>
                  <p className="font-bold text-blue-800 mb-3 text-base lg:text-lg">
                    {during.sectionHeading}
                  </p>
                  <ul className="space-y-2">
                    {during.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm lg:text-base text-gray-800">
                        <span className="text-blue-500 font-bold mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-semibold text-blue-900 italic text-base lg:text-lg border-l-4 border-blue-500 pl-4">
                  {during.closing}
                </p>
              </div>
              {/* Image Grid */}
              <div className="flex-1 grid grid-cols-2 gap-3 w-full max-w-lg">
                <div className="relative col-span-2 h-48 lg:h-64 rounded-xl overflow-hidden">
                  <Image src={during.images[0]} fill alt="During school program" className="object-cover" />
                </div>
                <div className="relative h-40 lg:h-52 rounded-xl overflow-hidden">
                  <Image src={during.images[1]} fill alt="During school coaching" className="object-cover" />
                </div>
                <div className="relative h-40 lg:h-52 rounded-xl overflow-hidden">
                  <Image src={during.images[2]} fill alt="School sports activity" className="object-cover" />
                </div>
              </div>
            </div>
          </TransitionVertical>
        </section>

        {/* After School Program */}
        <section className="relative z-20 bg-blue-50 w-full px-6 lg:px-16 xl:px-24 py-16 lg:py-24">
          <TransitionVertical>
            <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center">
              {/* Text */}
              <div className="flex-1 text-left space-y-6">
                <p className="subHeading text-blue-500 font-semibold uppercase tracking-wide">
                  {after.title}
                </p>
                <h2 className="Heading lg:subHeading font-black text-blue-900 leading-tight">
                  {after.subtitle}
                </h2>
                <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-gray-700">
                  {after.intro}
                </p>
                <div>
                  <p className="font-bold text-blue-800 mb-3 text-base lg:text-lg">
                    {after.sectionHeading}
                  </p>
                  <ul className="space-y-2">
                    {after.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm lg:text-base text-gray-800">
                        <span className="text-green-600 font-bold mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-semibold text-blue-900 italic text-base lg:text-lg border-l-4 border-blue-500 pl-4">
                  {after.closing}
                </p>
              </div>
              {/* Image Grid */}
              <div className="flex-1 grid grid-cols-2 gap-3 w-full max-w-lg">
                <div className="relative col-span-2 h-48 lg:h-64 rounded-xl overflow-hidden">
                  <Image src={after.images[0]} fill alt="After school program" className="object-cover" />
                </div>
                <div className="relative h-40 lg:h-52 rounded-xl overflow-hidden">
                  <Image src={after.images[1]} fill alt="After school coaching" className="object-cover" />
                </div>
                <div className="relative h-40 lg:h-52 rounded-xl overflow-hidden">
                  <Image src={after.images[2]} fill alt="After school training" className="object-cover" />
                </div>
              </div>
            </div>
          </TransitionVertical>
        </section>

        {/* Why Vaayun */}
        <section className="relative z-20 bg-white w-full px-6 lg:px-16 xl:px-24 py-16 lg:py-24">
          <TransitionVertical>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              <div className="relative flex-1 h-64 lg:h-96 rounded-xl overflow-hidden w-full">
                <Image src={why.image} fill alt="Why Vaayun" className="object-cover" />
              </div>
              <div className="flex-1 text-left space-y-6">
                <p className="subHeading text-blue-500 font-semibold uppercase tracking-wide">
                  {why.title}
                </p>
                <h2 className="Heading lg:subHeading font-black text-blue-900 leading-tight">
                  {why.subtitle}
                </h2>
                <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-gray-700">
                  {why.body}
                </p>
                <p className="font-black text-blue-800 text-lg lg:text-xl xl:text-2xl">
                  {why.tagline}
                </p>
                <p className="subHeading text-center lg:text-left">
                  For more information or enquiries:{" "}
                  <Link
                    href="/contact"
                    className="subHeading px-2 font-extralight hover:underline underline-offset-4 text-blue-600"
                  >
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </TransitionVertical>
        </section>

      </center>
    </main>
  );
}
