import React from "react";
import Image from "next/image";
import heroImg from "../../public/img/rocket.png";
import YellowCircle from "../../public/img/circle/yellow-circle.png";
import GreenCircle from "../../public/img/circle/green-circle.png";
import OrangeCircle from "../../public/img/circle/tiny-orange-circle.png";

const LastSection = () => {
  return (
    <div className="flex justify-center relative py-10">
      <div className="bg-[#F2FBFC] dark:bg-[#1A1C46] w-4/5 rounded-[30px] relative flex lg:flex-row flex-col justify-around">
        <div className="flex items-center justify-center mt-[-3rem]">
          <Image
            src={heroImg}
            width="500"
            height="500"
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
        <div className="flex items-center lg:pr-10 p-2 lg:mt-0 mt-10">
          <div className="max-w-2xl mb-8">
            <h1 className="font-gilroy text-4xl font-bold leading-snug tracking-tight  lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Fire up your{" "}
              <span className="text-[#3E73FF] dark:text-[#356DFF]">Rocket</span>
              !
            </h1>
            <p className="py-5 font-semibold text-sm leading-normal text-[#0B0D39] dark:text-white">
              Startups typically begin by a founder (solo-founder) or
              co-founders
            </p>

            <div className="flex flex-col sm:items-center sm:flex-row">
              <a
                href="/"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-[#1A1C46] dark:bg-[#356DFF] rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px]"
              >
                Let's Discuss
              </a>
            </div>
          </div>
        </div>

        <div className="absolute top-[-1.2rem] left-24">
          <Image
            src={YellowCircle}
            width="40"
            height="40"
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
        <div className="absolute bottom-[20%] right-[-0.875rem]">
          <Image
            src={GreenCircle}
            width="30"
            height="30"
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-1/2">
        <Image
          src={OrangeCircle}
          width="20"
          height="20"
          className={"object-cover"}
          alt="Hero Illustration"
          loading="eager"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default LastSection;
