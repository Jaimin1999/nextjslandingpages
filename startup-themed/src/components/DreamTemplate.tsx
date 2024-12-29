import React from "react";
import Image from "next/image";
import img1 from "../../public/img/DreamTemplate/frame-1.png";
import img2 from "../../public/img/DreamTemplate/frame-2.png";
import img3 from "../../public/img/DreamTemplate/frame-3.png";
import img4 from "../../public/img/DreamTemplate/frame-4.png";
import YellowCircle from "../../public/img/circle/yellow-circle.png";

const DreamTemplate = () => {
  const features = [
    {
      img: img1,
      title: "Product Design",
      description:
        "Startups typically begin by a founder (solo-founder) or co-founders who",
    },
    {
      img: img2,
      title: "Branding",
      description:
        "Startups typically begin by a founder (solo-founder) or co-founders who",
    },
    {
      img: img3,
      title: "Coding & Programming",
      description:
        "Startups typically begin by a founder (solo-founder) or co-founders who",
    },
    {
      img: img4,
      title: "Online Marketing",
      description:
        "Startups typically begin by a founder (solo-founder) or co-founders who",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="bg-[#F2FBFC] dark:bg-[#1A1C46] w-4/5 flex flex-col items-center rounded-[30px] p-14 relative">
        <div className="px-12 py-2 text-lg font-medium text-center text-[#FF9100] bg-[#F5E6CA] dark:bg-[#483338] rounded-[30px]">
          Features
        </div>
        <h3 className="my-4 text-2xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white text-center">
          Your Dream{" "}
          <span className="text-[#3E73FF] dark:text-[#356DFF]">Template</span>
        </h3>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
          {/* */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between"
            >
              <Image
                src={feature.img}
                alt={feature.title}
                width={100}
                height={100}
                className="p-2 rounded-full bg-white dark:bg-[#2B2D5B]"
              />
              <h4 className="mt-4 text-xl font-bold dark:text-white text-center">
                {feature.title}
              </h4>
              <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute top-[-1.2rem] right-10">
          <Image
            src={YellowCircle}
            width="50"
            height="50"
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default DreamTemplate;
