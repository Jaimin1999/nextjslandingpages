import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "./SectionTitle";

export const Cta = () => {
  return (
    <div className="bg-[#F8F3FF]  p-8 xl:px-0  mt-56">
      <div className="flex justify-center ">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 xl:px-10 px-0  xl:w-3/4 w-full ">
          {/* Starter Package */}
          <div className="flex flex-col items-center ">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#AE67FA]  to-[#F49867] inline-block text-transparent bg-clip-text ">
              25,356
            </h3>
            <p className="text-base text-black font-light mt-4">
              Projects Done
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#AE67FA]  to-[#F49867] inline-block text-transparent bg-clip-text ">
              1M+
            </h3>
            <p className="text-base text-black font-light mt-4">
              Projects Done
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-[#AE67FA]  to-[#F49867] inline-block text-transparent bg-clip-text ">
              95%
            </h3>
            <p className="text-base text-black font-light mt-4">
              Happy Customers
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10">
        <h2 className="font-gilroy text-center max-w-2xl mt-3 text-4xl font-bold leading-snug tracking-tight bg-gradient-to-r from-[#AE67FA]  to-[#F49867] inline-block text-transparent bg-clip-text">
          {"Want to start a Project With us?"}
        </h2>
        <p className="font-gilroy max-w-2xl sm:w-1/3 w-full text-center py-4 sm:text-base text-xs font-medium leading-normal text-[#3E4581]">
          {`Community devlopment is often linked with community work or community
        planning, and may involve stakeholders, foundations,`}
        </p>

        <a
          href="/"
          target="_blank"
          rel="noopener"
          className="sm:w-1/6 w-full px-8 py-4 text-base font-light text-center text-white bg-gradient-to-r from-[#AE67FA]  to-[#F49867] rounded-md"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};
