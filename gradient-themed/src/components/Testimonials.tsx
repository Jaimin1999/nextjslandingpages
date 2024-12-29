"use client";

import React, { useRef, useState } from "react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

export const Testimonials = () => {
  const swiperRef = useRef<any>(null); // Create a reference for the Swiper instance
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active index

  const testimonialData = [
    {
      review: `Up maids me an ample stood given. Certainty say suffering his him collected intention promotion`,
      name: "Chris Evans",
      position: "Client from USA",
    },
    {
      review: `Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too`,
      name: "Andrew Chris",
      position: "Client from Uganda",
    },
    {
      review: `Up maids me an ample stood given. Certainty say suffering his him collected intention promotion`,
      name: "Chris Evans",
      position: "Client from USA",
    },
    {
      review: `Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too`,
      name: "Andrew Chris",
      position: "Client from Uganda",
    },
  ];

  return (
    <div className="py-8 xl:px-20 px-10">
      <div className="py-5 sm:bg-transparent  px-2">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true} // Enable looping
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex); // Update active index on slide change
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {testimonialData.map((item, index) => {
            const { position, name, review } = item;
            const isActive = activeIndex === index; // Check if the current slide is active

            return (
              <SwiperSlide key={index}>
                <div
                  className={`sm:border-none border-[1px] border-black  shadow-xl sm:h-[300px] h-[250px] rounded-2xl bg-white ${
                    isActive ? "opacity-100" : "opacity-35"
                  } transition duration-300`} // Set a fixed height for consistency
                >
                  <div className="flex flex-col justify-between w-full h-full sm:px-10 px-6 sm:py-10 py-5">
                    <p className="text-xl leading-normal text-center">
                      ⭐⭐⭐⭐⭐
                    </p>
                    <p className="sm:text-xl text-base leading-normal text-center">
                      {review}
                    </p>
                    <Avatar name={name} title={position} />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>{" "}
      </div>

      {/* Custom Navigation Buttons */}
      <div className="flex items-center justify-center mt-14">
        <div className="flex items-center justify-between bg-white rounded-[30px] shadow-lg p-1 sm:w-[7%] w-2/5">
          <ArrowLongLeftIcon
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="cursor-pointer h-8 w-8 text-[#AE67FA] transition-transform transform"
          />
          <div className="bg-gradient-to-r from-[#AE67FA] to-[#F49867] rounded-full w-12 h-12 flex items-center justify-center">
            <ArrowLongRightIcon
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="cursor-pointer h-8 w-8 text-white transition-transform transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface AvatarProps {
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex justify-center items-center mt-8 space-x-3">
      <div>
        <div className="text-lg font-medium text-center">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400 text-center">
          {props.title}
        </div>
      </div>
    </div>
  );
}
