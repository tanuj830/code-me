import Link from "next/link";
import React from "react";
import { FaFileCode } from "react-icons/fa";
import { VscMultipleWindows } from "react-icons/vsc";

const Tools = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mt-40">
        <h1 className="text-sm font-bold text-indigo-500">FEATURES</h1>
        <h1 className="text-black text-3xl font-extrabold py-3">
          Experience ML-Powered Features
        </h1>
        <div className="container px-5 py-10 mx-auto">
          <div className="flex items-center lg:px-20 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <span className="text-5xl">
                <FaFileCode />
              </span>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Code Chat
              </h2>
              <p className="leading-relaxed text-base">
                Unlock your coding potential with our highly secured and
                potienal platform for coding and chatting in relatime.
              </p>
              <Link
                href="/code-me"
                className="mt-3 text-indigo-500 inline-flex items-center"
              >
                Get&apos;s Started
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:px-20  mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Languages
              </h2>
              <p className="leading-relaxed text-base">
                Get seamless support for all major programming languages(C, C++,
                Java, Python, Go, Javascript, SQL) here.
              </p>
              <Link
                href="/code-me"
                className="mt-3 text-indigo-500 inline-flex items-center"
              >
                Get&apos;s Started
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <span className="text-5xl">
                <VscMultipleWindows />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
