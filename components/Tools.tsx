import Link from "next/link";
import React from "react";
import { FaFileCode } from "react-icons/fa";
import { VscMultipleWindows } from "react-icons/vsc";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Tools = () => {
  return (
    <div className="cont">
      <section className="">
        <h2 className="text-[2rem] font-semibold py-3 text-center">
          Code House comes with even more power
        </h2>
        <h3 className="text-center text-[1.3rem]">
          Full Code House multi-purpose tech features overview, experience
          ML-powered features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center pt-10 md:pt-20 ">
          <div className="bg-[#1C1C2A] px-8 pt-8 rounded-3xl">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className=" text-lg title-font font-semibold mb-2">
                Code Chat
              </h2>
              <p className="leading-relaxed text-base">
                Unlock your coding potential with our highly secured and
                potienal platform for coding and chatting in relatime.
              </p>
            </div>
            <img
              src="https://assets-global.website-files.com/6575a01fdf251088bb50b0ff/6576b20043a2ed2ff4e9ab3d_Pages.svg"
              alt=""
            />
          </div>
          <div className="bg-[#1C1C2A] px-8 pt-8 rounded-3xl">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className=" text-lg title-font font-semibold mb-2">
                Languages
              </h2>
              <p className="leading-relaxed text-base">
                Get seamless support for all major programming languages(C, C++,
                Java, Python, Go, Javascript, SQL) here.
              </p>
            </div>
            <img
              src="https://assets-global.website-files.com/6575a01fdf251088bb50b0ff/6576b201659c7fb855b2c47d_Sections.svg"
              alt=""
            />
          </div>
          <div className="bg-[#1C1C2A] px-8 pt-8 rounded-3xl">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className=" text-lg title-font font-semibold mb-2">
                Languages
              </h2>
              <p className="leading-relaxed text-base">
                Get seamless support for all major programming languages(C, C++,
                Java, Python, Go, Javascript, SQL) here.
              </p>
            </div>
            <img
              src="https://assets-global.website-files.com/6575a01fdf251088bb50b0ff/6576b20043a2ed2ff4e9ab3d_Pages.svg"
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Tools;
