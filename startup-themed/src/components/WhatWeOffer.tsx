import React from "react";
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  ChatBubbleLeftEllipsisIcon,
  GlobeAltIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import imgIcon1 from "../../public/img/HowItWork/Group 194.png";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features = [
  {
    icon: (
      <ChatBubbleLeftEllipsisIcon className="w-14 h-14 bg-[#EADFFB] text-[#f67f56] rounded-[39px] p-2" />
    ),
    title: "Apps Support",
    description: "Apps keep work and information right at your fingertips.",
  },
  {
    icon: (
      <ShieldCheckIcon className="w-14 h-14 bg-[#EADFFB] text-[#f67f56] rounded-[39px] p-2" />
    ),
    title: "Security Connect",
    description: "Connect the tools you already use to get more from them.",
  },
  {
    icon: (
      <CheckCircleIcon className="w-14 h-14 bg-[#EADFFB] text-[#f67f56] rounded-[39px] p-2" />
    ),
    title: "24/7 Admin Support",
    description:
      "You can work with apps in channels, where they're a seamless part of the conversation.",
  },
  {
    icon: (
      <ShieldCheckIcon className="w-14 h-14 bg-[#EADFFB] text-[#f67f56] rounded-[39px] p-2" />
    ),
    title: "100+ Themes",
    description:
      "Spend less time tracking down the people needed to get work done.",
  },
  {
    icon: (
      <GlobeAltIcon className="w-14 h-14 bg-[#EADFFB] text-[#f67f56] rounded-[39px] p-[0.6rem]" />
    ),
    title: "Fully Integrated",
    description:
      "Skip the follow-ups and back-and-forth. Easily standardize how you collect data.",
  },
  {
    icon: (
      <PencilSquareIcon className="w-14 h-14 bg-[#EADFFB] text-[#f67f56] rounded-[39px] p-[0.8rem]" />
    ),
    title: "Monthly Update",
    description: "Take control of your work day, create a customized workflow.",
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start p-4 rounded-lg shadow-md bg-white">
      <div className="w-16 h-16 mb-4">{icon}</div>
      <h3 className="font-gilroy text-lg font-bold text-[#3E4581]">{title}</h3>
      <p className="font-gilroy text-sm font-normal text-[#3E4581]">
        {description}
      </p>
    </div>
  );
};

const WhatWeOffer: React.FC = () => {
  return (
    <div className="sm:px-24 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 p-6 xl:px-32 px-0">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>{" "}
    </div>
  );
};

export default WhatWeOffer;
