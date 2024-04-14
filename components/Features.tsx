import Link from "next/link";
import React from "react";
import Footer from "./Footer";

const Features = () => {
  return (
    <>
      <div className="cont">
        <section className="">
          <h2 className="text-[2rem] font-semibold py-3 text-center">
            Experience ML-Powered Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center py-10">
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
                  Get seamless support for all major programming languages(C,
                  C++, Java, Python, Go, Javascript, SQL) here.
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
                  Get seamless support for all major programming languages(C,
                  C++, Java, Python, Go, Javascript, SQL) here.
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

      {/* ------------------------------------------------------------------------------ */}
      <div className="my-20 md:my-32 text-white">
        <h2 className="text-3xl font-extrabold py-3">
          Experience ML-Powered Features
        </h2>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          <div className="bg-neutral-50 shadow-sm rounded-3xl p-10">
            <h2 className="font-bold text-2xl py-3 text-gray-800">Code Chat</h2>
            <p className="text-md text-gray-600 pb-10 ">
              Unlock your coding potential with our highly secured and potienal
              platform for coding and chatting in relatime.
            </p>
            <img src="https://www.askcodi.com/features/chat.png" alt="" />
          </div>
          <div className="bg-neutral-50 shadow-sm rounded-3xl p-10">
            <h2 className="font-bold text-2xl py-3 text-gray-800">Languages</h2>
            <p className="text-md text-gray-600 pb-10 ">
              Get seamless support for all major programming languages(C, C++,
              Java, Python, Go, Javascript, SQL) here.
            </p>
            <img src="https://www.askcodi.com/features/languages.png" alt="" />
          </div>
          <div className="bg-neutral-50 shadow-sm rounded-3xl p-10">
            <h2 className="font-bold text-2xl py-3 text-gray-800">
              Build & Analyis Resume
            </h2>
            <p className="text-md text-gray-600 pb-10 ">
              After gaining coding skills now it&apos;s time to build your
              resume and get a high chance of shortlist.
            </p>
            <img src="https://www.askcodi.com/features/workbooks.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
