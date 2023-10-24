import Link from "next/link";
import React from "react";

const Features = () => {
  return (
    <>
      <div className="my-20 md:my-32">
        <h1 className="text-sm font-bold text-indigo-500">FEATURES</h1>
        <h1 className="text-3xl font-extrabold py-3">
          Experience ML-Powered Features
        </h1>
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
