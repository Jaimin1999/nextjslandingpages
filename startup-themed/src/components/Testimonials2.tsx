"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import AvatarGroup1Img from "../../public/img/testimonials/avatargroup/Group 1.png";
import AvatarGroup2Img from "../../public/img/testimonials/avatargroup/Group 2.png";
import AvatarGroup3Img from "../../public/img/testimonials/avatargroup/Group 3.png";
import ProfileImg1 from "../../public/img/testimonials/profile-pic-1.png";
import ProfileImg2 from "../../public/img/testimonials/profile-pic-2.png";
import ProfileImg3 from "../../public/img/testimonials/profile-pic-3.png";
import YellowCircle from "../../public/img/circle/green-circle.png";
import OrangeCircle from "../../public/img/circle/tiny-orange-circle.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

const Testimonials2 = () => {
  const swiperRef = useRef<any>(null); // Create a reference for the Swiper instance

  const swiperRefMobile = useRef<any>(null);

  const testimonialData = [
    {
      review: `There's no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch.`,
      name: "Anna Gates",
      position: "Web Designer",
      feedback: "Super Helpful !!!",
      src: ProfileImg1,
    },
    {
      review: `There's no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch.`,
      name: "Anna Gates",
      position: "Web Designer",
      feedback: "Awesome !!!",
      src: ProfileImg2,
    },
    {
      review: `There's no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch.`,
      name: "Anna Gates",
      position: "Web Designer",
      feedback: "Great Support !!!",
      src: ProfileImg3,
    },
    {
      review: `There's no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch.`,
      name: "Anna Gates",
      position: "Web Designer",
      feedback: "Awesome !!!",
      src: ProfileImg2,
    },
    {
      review: `There's no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch.`,
      name: "Anna Gates",
      position: "Web Designer",
      feedback: "Super Helpful !!!",
      src: ProfileImg1,
    },
    {
      review: `There's no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch.`,
      name: "Anna Gates",
      position: "Web Designer",
      feedback: "Awesome !!!",
      src: ProfileImg2,
    },
    {
      review: `There's no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch.`,
      name: "Anna Gates",
      position: "Web Designer",
      feedback: "Great Support !!!",
      src: ProfileImg3,
    },
    {
      review: `There's no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch.`,
      name: "Anna Gates",
      position: "Web Designer",
      feedback: "Awesome !!!",
      src: ProfileImg2,
    },
  ];

  return (
    <div className="flex justify-center relative">
      <div className="bg-[#F2FBFC] dark:bg-[#1A1C46] w-4/5 rounded-[30px] lg:p-14 py-6 px-10 relative lg:min-h-[45rem] min-h-auto">
        <div className="flex justify-center">
          <div className="px-12 py-2 text-lg font-medium text-[#FF9100] bg-[#F5E6CA] dark:bg-[#483338] rounded-[30px]">
            Testimonials
          </div>
        </div>
        {/*  */}
        <div className="flex justify-center">
          <div className="flex justify-center">
            <h3 className="dark:text-white my-4 text-2xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight">
              <span className="text-[#3E73FF] dark:text-[#356DFF]">
                Trusted{" "}
              </span>
              by 100's of client{" "}
            </h3>

            <div className="flex sm:items-center items-end sm:mb-0 mb-4 ">
              <div className="relative z-30">
                <Image
                  src={AvatarGroup1Img}
                  alt="Avatar 1"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <div className="relative z-20 -ml-4 ">
                <Image
                  src={AvatarGroup2Img}
                  alt="Avatar 2"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <div className="relative z-10 -ml-4">
                <Image
                  src={AvatarGroup3Img}
                  alt="Avatar 3"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="block sm:hidden">
          <div className="py-5 sm:bg-transparent px-2">
            <Swiper
              ref={swiperRefMobile}
              spaceBetween={30}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              loop={true} // Enable looping
              freeMode={true} // Enable freemode
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 4 },
              }}
            >
              {testimonialData.map((item, index) => {
                const { position, name, review, feedback, src } = item;

                return (
                  <SwiperSlide key={index}>
                    <div
                      className={`sm:border-none border-[1px] border-black shadow-xl rounded-2xl bg-white dark:bg-[#2B2D5B] transition duration-300`}
                    >
                      <div className="flex flex-col justify-between  sm:px-10 px-6  py-5">
                        <strong className="text-base leading-normal text-start">
                          {feedback}
                        </strong>
                        <p className="sm:text-sm text-xs leading-normal text-start mt-2">
                          {review}
                        </p>
                        <Avatar name={name} title={position} image={src} />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="flex items-center justify-center mt-14 space-x-2">
            <div className="bg-[#fff] dark:bg-[#0B0D39] rounded-full w-12 h-12 flex items-center justify-center">
              <ArrowLongLeftIcon
                onClick={() => swiperRefMobile.current.swiper.slidePrev()}
                className="cursor-pointer h-8 w-8 text-[#000] dark:text-[#fff] transition-transform transform"
              />
            </div>
            <div className="bg-[#0B0D39] dark:bg-[#3E73FF] rounded-full w-12 h-12 flex items-center justify-center">
              <ArrowLongRightIcon
                onClick={() => swiperRefMobile.current.swiper.slideNext()}
                className="cursor-pointer h-8 w-8 text-white transition-transform transform"
              />
            </div>
          </div>
        </div>

        <div className="absolute top-14 -left-5">
          <Image
            src={YellowCircle}
            width="40"
            height="40"
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
        <div className="absolute -bottom-2 right-14">
          <Image
            src={OrangeCircle}
            width="20"
            height="20"
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>

      <div className="absolute top-1/3 w-[100%] sm:block hidden">
        <div className="py-5 sm:bg-transparent px-2">
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            loop={true} // Enable looping
            freeMode={true} // Enable freemode
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 4 },
            }}
          >
            {testimonialData.map((item, index) => {
              const { position, name, review, feedback, src } = item;

              return (
                <SwiperSlide key={index}>
                  <div
                    className={`sm:border-none border-[1px] border-black shadow-xl rounded-2xl bg-white dark:bg-[#2B2D5B] transition duration-300`}
                  >
                    <div className="flex flex-col justify-between  sm:px-10 px-6  py-5">
                      <strong className="text-base leading-normal text-start">
                        {feedback}
                      </strong>
                      <p className="sm:text-sm text-xs leading-normal text-start mt-2">
                        {review}
                      </p>
                      <Avatar name={name} title={position} image={src} />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="flex items-center justify-center mt-14  space-x-2">
          <div className="bg-[#fff] dark:bg-[#0B0D39] rounded-full w-12 h-12 flex items-center justify-center">
            <ArrowLongLeftIcon
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="cursor-pointer h-8 w-8 text-[#000] dark:text-[#fff] transition-transform transform"
            />
          </div>
          <div className="bg-[#0B0D39] dark:bg-[#3E73FF] rounded-full w-12 h-12 flex items-center justify-center">
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

export default Testimonials2;

interface AvatarProps {
  name: string;
  title: string;
  image?: string | StaticImageData;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex justify-start items-center mt-8 space-x-3 pl-2">
      {props.image && (
        <Image
          src={props.image}
          alt={props.name}
          width={40}
          height={40}
          className="rounded-full border-2 border-white"
        />
      )}
      <div>
        <div className="lg:text-lg text-sm font-medium text-start">
          {props.name}
        </div>
        <div className="lg:text-base text-xs text-gray-600 dark:text-gray-400 text-start">
          {props.title}
        </div>
      </div>
    </div>
  );
}
