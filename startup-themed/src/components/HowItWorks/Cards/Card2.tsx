import React from "react";
import background from "../../../../public/img/HowItWork/Background.png";
import card3 from "../../../../public/img/HowItWork/Card3.png";
import card4 from "../../../../public/img/HowItWork/Card4.png";
import card5 from "../../../../public/img/HowItWork/Card5.png";
import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";

function Card2() {
  return (
    <div className="sm:w-[55%] w-full sm:mt-0 mt-10">
      <div
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "31px !important",
          paddingTop: 70,
          position: "relative",
        }}
      >
        <div className="absolute right-5 top-5">
          <Image
            src={card3}
            className={"object-cover flex justify-center"}
            alt="Hero Illustration"
            height={50}
            width={50}
            loading="eager"
            placeholder="blur"
          />
        </div>
        <div className="">
          <div className="flex justify-center">
            <Image
              src={card4}
              className={"object-cover flex justify-center"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
          <div className="flex justify-center mt-[-2rem]">
            <Image
              src={card5}
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
          <div>
            <h2 className="font-gilroy max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-[#3E4581] lg:leading-tight lg:text-4xl dark:text-white text-center">
              Marketing
            </h2>
            <div className=" flex justify-center">
              <p className="w-4/5 py-4 text-base leading-normal text-[#3E4581] dark:text-gray-300 text-center">
                {`Marketing Intelligence is necessary when entering a foreign market, determines the intelligence needed`}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
