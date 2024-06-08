import Image from "next/image";
import Datacard from "@/components/DataCard/Datacard";
import getData from "@/customHook/datafetch";

const About = async () => {
  const response = await getData();

  if (!response)
    return <div className="Title w-full text-center py-4">Loading...</div>;

  return (
    <main className="w-full h-full">
      <center>
        <section className="w-full flex flex-col mt-4 md:px-14">
          <div className="flex flex-col items-center justify-center w-full h-fit gap-8">
            <div className="w-full h-fit flex flex-col justify-center items-center text-justify space-y-4">
              <h1 className="subHeading font-semibold text-blue-500">
                Know Everything...About Us
              </h1>
              <h1 className="Title font-black">ABOUT VAAYUN</h1>
            </div>
            <p className="text-m xl:text  px-8 xl:mx-20 w-fit xl:text-left text-justify leading-8 xl:leading-9">
              <span className=" font-semibold">VAAYUN INDIA </span>
              {response.desc.aboutUsPage}
            </p>
          </div>
          <div className="justify-center hidden xl:flex items-center w-full xl:relative h-[65vh] xl:mt-4">
            <Image
              src="/static/images/AboutUsPicture2.jpg"
              fill={true}
              alt="About Us"
              className="object-contain"
            />
          </div>
        </section>
        <section className="w-full h-fit xl:px-16 my-16 flex flex-col items-center">
          <h1 className="Heading xl:Title">Founders</h1>
          <div className="flex xl:flex-row flex-col w-full h-fit my-16 justify-between items-start space-y-0 xl:space-x-6">
            {response.Founders.map((Founder, index) => (
              <div
                className="flex flex-col w-screen xl:w-1/2 px-8 xl:px-0 items-center justify-center space-y-8"
                key={index}
              >
                <div className="w-full xl:w-[60vh] relative h-[70vh] px-6 ">
                  <Image
                    src={`/static/images/Founder${index + 1}.png`}
                    priority={true}
                    fill={true}
                    alt={Founder.name}
                    className="lg:rounded-xl object-contain xl:object-cover"
                  />
                </div>
                <div className="text-pretty w-full ">
                  <h1 className="Heading xl:subHeading mb-4">{Founder.name}</h1>
                  <h1 className="Heading xl:subHeading mb-4">
                    {Founder.Title}
                  </h1>
                  <div className="font-normal leading-loose text text-center w-full xl:px-20 ">
                    {Founder.achievements.map((achievement, idx) => (
                      <p key={idx}>- {achievement}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full h-fit px-4 lg:px-12 space-y-4 flex flex-col items-center ">
          <h1 className=" xl:Title Heading">Why Choose Us</h1>
          <div className=" flex lg:gap-10 w-full overflow-x-auto h-full py-4 no-scrollbar scroll-smooth">
            {response.aboutUsList1.map((reasons, index) => (
              <Datacard Reasons={reasons} key={index} />
            ))}
          </div>
        </section>
      </center>
    </main>
  );
};

export default About;
