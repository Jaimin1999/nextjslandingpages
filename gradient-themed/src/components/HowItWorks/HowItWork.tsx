import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import star2 from "../../../public/img/star2.png";

export const HowItWork = () => {
  return (
    <Container className="flex relative justify-center xl:px-0 px-10">
      <div className={`flex sm:flex-row flex-col`}>
        <div className=" flex flex-col items-center justify-center">
          <Card1 />
        </div>
        <div className="flex flex-col items-center">
          <Card2 />
          <div className="flex justify-center mt-10">
            <Card3 />
          </div>
        </div>
      </div>
      <div className="absolute sm:bottom-[-7rem] bottom-[-4rem] left-0 sm:w-auto w-[5rem]">
        <Image
          src={star2}
          className={"object-cover flex justify-center sm:w-[226px] w-[220px]"}
          alt="Hero Illustration"
          loading="eager"
          placeholder="blur"
        />
      </div>
    </Container>
  );
};
