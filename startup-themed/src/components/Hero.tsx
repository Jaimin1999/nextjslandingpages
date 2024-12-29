import Image from "next/image";
import heroImg from "../../public/img/frame-1.png";
import tinyCircle from "../../public/img/circle/tiny-orange-circle.png";
import SmallCircle from "../../public/img/circle/small-purple-circle.png";

export const Hero = () => {
  return (
    <div className=" flex justify-center relative">
      <div className=" flex lg:flex-row flex-col-reverse justify-center xl:my-32 mt-44 sm:px-20 px-8 relative  w-11/12F">
        <div className="flex items-center">
          <div className="max-w-2xl mb-8">
            <h1 className="font-gilroy text-4xl font-bold leading-snug tracking-tight  lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              The{" "}
              <span className="text-[#3E73FF] dark:text-[#356DFF]">
                template
              </span>{" "}
              your startup needed
            </h1>
            <p className="py-5 font-semibold text-lg leading-normal text-[#0B0D39] dark:text-white">
              A startup or start-up is a company or project undertaken by an
              entrepreneur to seek, devlop, and validate a scalable business
              model.
            </p>

            <div className="flex flex-col sm:items-center sm:flex-row">
              <a
                href="/"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-[#356DFF] dark:bg-[#3E73FF] rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px]"
              >
                Let's Discuss
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center sm:ml-10 ml-0 sm:mt-0 mt-4 border-2 border-[black] dark:border-[white] bg-transparent rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px]"
              >
                <span className="text-black dark:text-white">Learn More</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:mt-0 -mt-32">
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
        <div className="absolute sm:bottom-0 left-14 sm:block hidden">
          <Image
            src={SmallCircle}
            width="35"
            height="35"
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
          />
        </div>
      </div>{" "}
      <div className="absolute sm:top-40 top-20 left-10">
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
