import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Container } from "@/components/Container";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export function Footer() {
  const navigation = ["Home", "Journey", "Technology", "Team"];
  const Help = ["Vision", "Thinking", "Join us", "Connect"];

  const legal = ["Privacy & Terms", "Google", "Alphabet"];

  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="w-2/5 px-3 py-2 text-lg font-medium text-center text-[#FF9100] bg-[#F5E6CA] dark:bg-[#483338] rounded-[30px]">
              <strong className="w-full">contact us</strong>
            </div>
            <div className="mt-4 text-black dark:text-white flex justify-between w-[85%]">
              <p className="text-4xl font-medium">Hello@Startup.com</p>
              <button className=" text-white bg-[#3E73FF] dark:bg-[#356DFF] hover:bg-blue-600  p-3 rounded-full -rotate-45">
                <FaArrowRightLong size={20} />
              </button>
            </div>

            <div className="flex items-center space-x-4 mt-2">
              {/* Social Media Text */}
              <span className="text-gray-500 text-lg">Social Media</span>

              {/* Instagram */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                <FaInstagram className="text-2xl text-black dark:text-white" />
              </div>

              {/* Twitter */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                <FaTwitter className="text-2xl text-black dark:text-white" />
              </div>

              {/* Facebook */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                <FaFacebookF className="text-2xl text-black dark:text-white" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {Help.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-400">
          Copyright © {new Date().getFullYear()} Xtratheme. All rights reserved.
        </div>
      </Container>
    </div>
  );
}
