import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Pricing = () => {
  const pricingData1 = [
    "Feedback Categorization",
    "Features Prioritization",
    "Real-Time Collaboration",
    "Feedback Loop Notifications",
    "Essential Dev Tools Integrations",
  ];

  const pricingData3 = [
    "Feedback Categorization",
    "Feedback Loop Notifications",
    "Essential Dev Tools Integrations",
  ];

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 xl:gap-24 lg:gap-4 sm:gap-10 gap-4 xl:px-40 px-10 py-10">
      {/* Starter Package */}
      <div className="border border-gray-200 p-6 rounded-lg shadow-lg w-full bg-white flex flex-col items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-700">For Starter</h3>
          <p className="text-4xl font-bold bg-gradient-to-r from-[#AE67FA]  to-[#F49867] inline-block text-transparent bg-clip-text mt-4">
            $59
          </p>
        </div>

        <ul className="mt-6 space-y-2 text-gray-600">
          {pricingData1.map((item) => {
            return (
              <li key={item}>
                <div className="flex items-center">
                  <span className="mr-2">
                    <CheckCircleIcon className="size-4 text-gray-500" />
                  </span>{" "}
                  {item}
                </div>
              </li>
            );
          })}
        </ul>
        <button className="text-xs mt-8 border border-purple-600 text-purple-600 px-6 py-2 rounded hover:bg-purple-100 transition w-full">
          Contact Us
        </button>
      </div>
      {/* Teams Package */}
      <div className="text-xs border border-purple-600 p-6 rounded-lg shadow-lg w-full bg-[#481177] text-white flex flex-col items-center justify-between">
        <h3 className="text-xl font-semibold">For Teams</h3>
        <p className="text-4xl font-bold bg-gradient-to-r from-[#AE67FA]  to-[#F49867] inline-block text-transparent bg-clip-text mt-4">
          $99
        </p>
        <ul className="mt-6 space-y-2 text-white">
          {pricingData1.map((item) => {
            return (
              <li key={item}>
                <div className="flex items-center">
                  <span className="mr-2">
                    <CheckCircleIcon className="size-4 text-white" />
                  </span>{" "}
                  {item}
                </div>
              </li>
            );
          })}
        </ul>
        <button className="mt-8 bg-gradient-to-r from-purple-400 to-orange-400 text-white px-6 py-2 rounded hover:opacity-90 transition w-full">
          Purchase Package
        </button>
      </div>
      {/* Company Package */}
      <div className="text-xs border border-gray-200 p-6 rounded-lg shadow-lg w-full bg-white flex flex-col items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-700">For Company</h3>
          <p className="text-4xl font-bold bg-gradient-to-r from-[#AE67FA]  to-[#F49867] inline-block text-transparent bg-clip-text mt-4">
            Custom
          </p>
        </div>
        <div>
          <ul className="mt-6 space-y-2 text-gray-600">
            {pricingData3.map((item) => {
              return (
                <li key={item}>
                  <div className="flex items-center">
                    <span className="mr-2">
                      <CheckCircleIcon className="size-4 text-gray-500" />
                    </span>{" "}
                    {item}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <button className="mt-8 border border-purple-600 text-purple-600 px-6 py-2 rounded hover:bg-purple-100 transition w-full">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Pricing;
