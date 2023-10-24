import React from "react";
import Image from "next/image";
const Hero2 = () => {
  return (
    <>
      <div className=" bg-[url(/curvesvg.svg)] bg-no-repea z-0 " />
      <div className="h-screen  text-white w-full mt-10">
        {/* <img src="/curvesvg.svg" className="transform " alt="" /> */}
        <div className="p-10 md:p-20 lg:px-40 lg:py-20">
          <h1 className="text-xl lg:text-3xl font-medium text-center">
            Experience the magic of <br className="inline md:hidden" />
            Code Chat
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-5 ">
            <div className=" gap-y-10 flex flex-col justify-center items-center">
              <div>
                <Image
                  className="  object-contain"
                  height={200}
                  width={200}
                  alt="Rocket"
                  src="/rocket.png"
                />
              </div>
              <div className="text-center ">
                <h2 className="font-semibold text-xl pb-2">
                  Realtime Collaboration
                </h2>
                <p className="text-gray-600 text-sm">
                  Build projects by coding with friends instantly and
                  efficently.
                </p>
              </div>
            </div>
            <div className=" gap-y-10 flex flex-col justify-center items-center">
              <div>
                <Image
                  className=" bg-yellow-50 object-contain"
                  height={200}
                  width={200}
                  alt="Security"
                  src="/security.avif"
                />
              </div>
              <div className="text-center ">
                <h2 className="font-semibold text-xl pb-2">
                  Realtime Collaboration
                </h2>
                <p className="text-gray-600 text-sm">
                  Build projects by coding with friends instantly and
                  efficently.
                </p>
              </div>
            </div>
            <div className=" gap-y-10 flex flex-col justify-center items-center">
              <div>
                <Image
                  className=" bg-yellow-50 object-contain"
                  height={200}
                  width={200}
                  alt="Communication
                "
                  src="/communication.avif"
                />
              </div>
              <div className="text-center ">
                <h2 className="font-semibold text-xl pb-2">
                  Realtime Collaboration
                </h2>
                <p className="text-gray-600 text-sm">
                  Build projects by coding with friends instantly and
                  efficently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
