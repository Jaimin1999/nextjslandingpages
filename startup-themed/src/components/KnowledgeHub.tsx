"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../public/img/khub-1.png";
import img2 from "../../public/img/khub-2.png";
import img3 from "../../public/img/khub-3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import tinyImgCircle from "../../public/img/circle/tiny-orange-circle.png";
import SmallCircle from "../../public/img/circle/blue-circle.png";
import YellowCircle from "../../public/img/circle/yellow-circle.png";

const KnowledgeHub = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // This ensures the component is mounted before rendering (for server-side rendering)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoids mismatch between server and client rendering

  const blogs = [
    {
      img: img1,
      category: "Business",
      categoryColor: "#4074FF",
      title: "How A Website Growths your Business",
      readTime: "7 min read",
      date: "September 12",
    },
    {
      img: img2,
      category: "Branding",
      categoryColor: "#43D281",
      title: "How A Website Growths your Business",
      readTime: "7 min read",
      date: "September 12",
    },
    {
      img: img3,
      category: "Product Design",
      categoryColor: "#FF9100",
      title: "How A Website Growths your Business",
      readTime: "7 min read",
      date: "September 12",
    },
  ];

  return (
    <div className="flex justify-center relative lg:mt-0 mt-20">
      <div className="w-4/5 flex flex-col items-center rounded-[30px] lg:p-14 p-5 relative">
        <div className="px-12 py-2 text-lg font-medium text-center text-[#FF9100] bg-[#F5E6CA] dark:bg-[#483338] rounded-[30px]">
          Blog
        </div>
        <h3 className="my-4 text-2xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
          <span className="text-[#3E73FF] dark:text-[#356DFF]">Knowledge</span>{" "}
          Hub{" "}
        </h3>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 w-full">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 relative"
            >
              <Image
                src={blog.img}
                alt={blog.category}
                className="rounded-t-lg object-cover"
                width={300}
                height={200}
              />
              <div
                className="absolute top-8 left-8 text-sm font-semibold px-3 py-1 rounded-full shadow"
                style={{
                  color: theme === "light" ? blog.categoryColor : "#ffffff",
                  backgroundColor: theme === "dark" ? "#1f2937" : "#ffffff", // dark:bg-gray-800, bg-white
                }}
              >
                {blog.category}
              </div>
              <h4 className="mt-6 text-xl font-semibold dark:text-white">
                {blog.title}
              </h4>
              <div className="flex justify-between items-center">
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                  {blog.readTime} • {blog.date}
                </p>

                <button
                  className={`${
                    index % 2 == 0
                      ? "border border-gray-300 dark:border-gray-700"
                      : "bg-blue-600 text-white"
                  } p-3 rounded-full`}
                >
                  <FaArrowRightLong size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <a
          href="/"
          target="_blank"
          rel="noopener"
          className="px-8 py-4 text-lg font-medium text-center sm:ml-10 ml-0  mt-8 border-2 border-[black] dark:border-[white] bg-transparent rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px]"
        >
          <span className="text-black dark:text-white">View More</span>
        </a>

        <div className="absolute sm:top-10 left-10">
          <Image
            src={SmallCircle}
            width="20"
            height="20"
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
          />
        </div>
      </div>

      <div className="absolute sm:top-1/2 top-1/3 left-7">
        <Image
          src={tinyImgCircle}
          width="20"
          height="20"
          className={"object-cover"}
          alt="Hero Illustration"
          loading="eager"
        />
      </div>

      <div className="absolute sm:bottom-[26%] bottom-1/4 sm:right-32 right-4">
        <Image
          src={YellowCircle}
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

export default KnowledgeHub;
