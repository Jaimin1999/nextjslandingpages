"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const navigation = ["Home", "About Us", "Services", "Contact Us"];

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full sm:px-24 px-0 fixed top-0 z-50 transition-all duration-300  
      }`}
    >
      <nav className="lg:mt-5 mt-2 flex flex-wrap items-center justify-between p-6 lg:justify-between xl:px-5  rounded-r-full rounded-l-full shadow-xl bg-white dark:bg-[#2B2D5B]">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium">
            <span>
              <Image
                src="/img/logo.png"
                width="24"
                alt="N"
                height="32"
                className="w-8"
              />
            </span>
            <span className="text-black dark:text-white">
              Start
              <span className="text-[#3E73FF] dark:text-[#356DFF]">up</span>
            </span>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="https://google.com"
              target="_blank"
              className="px-6 py-2 text-[#0B0D39] dark:text-white rounded-full md:ml-5 border-2 border-gray-300 hover:border-gray-400"
            >
              Download App
            </Link>
            <Link
              href="https://google.com"
              target="_blank"
              className="px-6 py-2 text-white bg-[#0B0D39] rounded-full md:ml-5 hover:bg-[#1A1C5B]"
            >
              Let's Discuss
            </Link>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href="/"
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      {item}
                    </Link>
                  ))}

                  <Link
                    href="https://google.com"
                    target="_blank"
                    className="w-full px-6 py-2 mt-3 text-center text-[#0B0D39] dark:text-white rounded-md lg:ml-5 border-2 border-[#D2D4D7] dark:border-[#D2D4D7]"
                  >
                    Download App
                  </Link>
                  <Link
                    href="https://google.com"
                    target="_blank"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-[#0B0D39] rounded-md lg:ml-5"
                  >
                    Let's Discuss
                  </Link>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href="/"
                  className="px-4 py-2 text-lg font-normal no-underline rounded-md text-black dark:text-white hover:text-[#3E73FF] hover:dark:text-[#356DFF]"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
