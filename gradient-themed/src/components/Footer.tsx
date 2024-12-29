"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Icon from "../../public/img/watch-video.png";
import star3 from "../../public/img/star3.png";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const navigation = ["Home", "About Us", "Services", "Contact Us"];

  return (
    <div className="  p-8 xl:px-0 relative">
      <div className="flex flex-col items-center">
        <h2 className="font-gilroy text-center xl:w-[28%] lg:w-2/4 sm:3/4 w-full max-w-2xl mt-3 text-4xl font-bold leading-snug tracking-tight bg-gradient-to-r from-[#AE67FA]  to-[#F49867] inline-block text-transparent bg-clip-text">
          {"Social Media Its Ways Of Our Excellence."}
        </h2>
        <div className="mt-10 lg:w-1/4 sm:w-3/4 w-full">
          <form className="inputGroup " onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="emailInput"
            />
            {
              /* <button
            type="submit"
            className="claimButton"
            onClick={() => console.log("KK")}
          >
            Get Started
          </button> */
              <button className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-[#AE67FA]  to-[#F49867] text-white font-semibold rounded-md w-[66%]">
                <span>Get started</span>
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
            }
          </form>
        </div>

        <div
          className="mt-10 w-auto flex items-center justify-center py-2 cursor-pointer"
          onClick={() => console.log("add your link so it can go to youtube")}
        >
          <Image src={Icon} width="60" alt="N" height="60" />
          <p className="font-gilroy ml-4 underline text-base font-medium text-[#3E4581]">
            {"Watch our video"}
          </p>
        </div>

        <div className="mt-10 w-[85%] flex sm:flex-row flex-col items-center justify-between pt-2 pb-10  border-b-2 border-black">
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500">
              <span>
                <Image
                  src="/img/logo.png"
                  width="24"
                  alt="N"
                  height="32"
                  className="w-8"
                />
              </span>
              <span className="bg-gradient-to-r from-[#AE67FA]  to-[#F49867] inline-block text-transparent bg-clip-text">
                Brands.io
              </span>
            </span>
          </Link>
          <ul className="items-center justify-center flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href="/"
                  className="font-gilroy px-4 py-2 text-lg font-normal no-underline rounded-md bg-gradient-to-r from-[#AE67FA]  to-[#F49867] inline-block hover:text-transparent bg-clip-text"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-5 text-gray-400 sm:mt-0 mt-4">
            <a href="https://facebook.com/" target="_blank" rel="noopener">
              <Facebook />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener">
              <Instagram />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener">
              <Twitter />
            </a>
          </div>
        </div>
      </div>

      <div className="my-10 text-sm text-center text-gray-400">
        Copyright © {new Date().getFullYear()}.{"Brands.io creative"}
      </div>

      <div className="absolute sm:top-56 top-64 sm:right-[0.5rem] right-0 z-[-10] sm:w-auto w-1/5">
        <Image
          src={star3}
          width="250"
          height="250"
          className={"object-cover"}
          alt="Hero Illustration"
          loading="eager"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);
