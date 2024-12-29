import Image from "next/image";
import heroImg from "../../public/img/section-3.png";
import tinyCircle from "../../public/img/circle/tiny-orange-circle.png";

export const Section3 = () => {
  return (
    <div className="relative sm:px-20 px-8 py-10 flex justify-center">
      <div className="flex lg:flex-row flex-col-reverse justify-between lg:w-4/5 w-full">
        <div className="flex items-center">
          <div className="max-w-2xl mb-8">
            <h1 className="font-gilroy text-4xl font-bold leading-snug tracking-tight  lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              From{" "}
              <span className="text-[#3E73FF] dark:text-[#356DFF]">design</span>{" "}
              to code and back
            </h1>
            <p className="py-5 font-semibold text-lg leading-normal text-[#0B0D39] dark:text-white">
              Startups typically begin by a founder (solo-founder) or
              co-founders who have a way to solve a problem. The founder of a
              startup will begin market validation by problem interview,
              solution interview, and building a minium viable product (MVP),
              i.e. a prototype, to develop and validate their business models.
            </p>

            <div className="flex flex-col sm:items-center sm:flex-row">
              <a
                href="/"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-[#0B0D39] dark:bg-[#3E73FF] rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px]"
              >
                Let's Discuss
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-8 left-10">
        <Image
          src={tinyCircle}
          width="20"
          height="20"
          className={"object-cover"}
          alt="Hero Illustration"
          loading="eager"
        />
      </div>
    </div>
  );
};
