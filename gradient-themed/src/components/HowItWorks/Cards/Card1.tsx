import React from "react";
import background from "../../../../public/img/HowItWork/background.png";
import card1 from "../../../../public/img/HowItWork/card-1.png";
import card2 from "../../../../public/img/HowItWork/card-2.png";
import Image from "next/image";

function Card1() {
  return (
    <div className="sm:w-[55%] w-full">
      <div>
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight bg-gradient-to-r from-[#AE67FA]  to-[#F49867] inline-block text-transparent bg-clip-text lg:leading-tight lg:text-4xl dark:text-white">
          How it Works?
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-[#3E4581] lg:text-xl xl:text-xl dark:text-gray-300">
          Resolving neglected sir tolerably but existence conveying for. Day his
          put off unaffected literature partiallity inhabiting.
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "31px !important",
          paddingTop: 70,
        }}
      >
        <div className="">
          <div className="flex justify-center">
            <Image
              src={card2}
              className={"object-cover flex justify-center"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
          <div className="flex justify-center mt-5">
            <Image
              src={card1}
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
          <div>
            <h2 className="font-gilroy max-w-2xl mt-10 text-3xl font-bold leading-snug tracking-tight text-[#3E4581] lg:leading-tight lg:text-4xl dark:text-white text-center">
              Intelligence
            </h2>
            <div className=" flex justify-center">
              <p className="sm:w-3/5 w-full py-4 text-sm leading-normal text-[#3E4581] lg:text-xl xl:text-xl dark:text-gray-300 text-center">
                {`Marketing Intelligence (MI) is the everyday information relevant to a company's markets`}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
