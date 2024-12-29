import React from "react";
import background from "../../../../public/img/HowItWork/background.png";
import card6 from "../../../../public/img/HowItWork/card-6.png";
import card7 from "../../../../public/img/HowItWork/card-7.png";
import Image from "next/image";

function Card3() {
  return (
    <div className=" w-full sm:mt-0 mt-10 ">
      <div
        className="min-w-[18rem] lg:min-w-[24rem]"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "31px !important",
          paddingTop: 70,
          position: "relative",
          minHeight: "22rem",
        }}
      >
        <div className="absolute sm:top-[-2rem] top-[-4rem] sm:right-[4.7rem] right-[2.4rem]">
          <Image
            src={card6}
            className={
              "object-cover flex justify-center sm:w-[226px] w-[220px]"
            }
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
        <div className="absolute right-0 sm:bottom-[5.4rem] bottom-[7.4rem]">
          <Image
            src={card7}
            className={"object-cover flex justify-center"}
            alt="Hero Illustration"
            height={100}
            width={100}
            loading="eager"
            placeholder="blur"
          />
        </div>

        <div className="absolute sm:left-[-6rem] left-0 sm:bottom-[-1.2rem] bottom-0 bg-white w-8/12">
          <h2 className="font-gilroy mt-3 text-3xl font-bold tracking-tight text-[#3E4581] text-center">
            External data
          </h2>
          <div className="flex justify-center mt-4">
            <p className="sm:w-4/5 w-full text-sm leading-normal text-[#3E4581] text-center">
              {`This allows them to see current key performance ..`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;
