import React from "react";
import Button from "@/components/Button";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-screen p-5 cont">
      <div className="flex justify-center items-center h-full">
        <div>
          <div className="flex justify-center">
            <Image
              className="hidden md:block"
              width={90}
              height={90}
              src="https://assets-global.website-files.com/6575a01fdf251088bb50b0ff/6575a01fdf251088bb50b10f_Symbol.svg"
              alt=""
            />
            <Image
              className=" md:hidden block"
              width={60}
              height={60}
              src="https://assets-global.website-files.com/6575a01fdf251088bb50b0ff/6575a01fdf251088bb50b10f_Symbol.svg"
              alt=""
            />
          </div>
          <h1 className="text-[2.5rem] md:text-[5rem] text-[#FFFFFF] font-semibold px-2 text-center leading-[40px] md:leading-[72px] py-4 lg:py-6">
            Code and connect <br /> in real time.
          </h1>
          <h6 className=" lg:px-[20%] md:px-[10%] text-center py-2 lg:py-4 text-[1.1rem] lg:text-[1.3rem] leading-8 lg:leading-9 text-[#FFFFFF]">
            Build Powerfull Apps with Code Chat. Whether you&apos;re seeking to
            enhance team collaboration, discussions, our platform offers the
            tools you need to succeed.
          </h6>
          <div className="flex justify-center items-center my-8">
            <Button
              text={`Gets, Started`}
              properties={`bg-[#424BD1] text-white`}
            />
            <button className="ml-2 text-md underline underline-offset-8 text-[#424BD1]">
              {" "}
              How it works?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

//  // bg-[url()] bg-no-repeat
//  <div className="cont">
//  <Navbar />
//  <div className="">
//    <section className="text-gray-600 body-font">
//      <div className="container mx-auto flex px-5 py-10 lg:py-24 md:flex-row flex-col items-center">
//        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-20 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//          <h1 className="xl:text-[45px] lg:text-[40px] text-[27px] text-black font-extrabold">
//            Build Powerfull <br className="hidden lg:inline" /> Interaction
//            Apps with <br className="hidden lg:inline" />
//            <h1 className="text-indigo-600 xl:text-[45px] xt-[41px] md:text-[30px]">
//              Code <span className="text-[#FD8029]">Chat</span>
//            </h1>
//          </h1>
//          <p className="mb-8 leading-relaxed text-xs md:text-sm text-justify">
//            Build Powerfull Interaction Apps with Code Chat & Real Time
//            Interaction. Whether you&apos;re seeking to enhance team
//            collaboration, or foster meaningful discussions, our platform
//            offers the tools you need to succeed.
//          </p>
//          <p className="text-sm mt-2 text-gray-500 mb-8 w-full hidden lg:inline-block text-justify">
//            Empower Your Conversations, Elevate Your Connections - Code,
//            Chat, and Connect in Real Time with Geek Lab.
//          </p>
//          <div className="flex lg:flex-row md:flex-col gap-2">
//            <Button className=" px-8 py-8">Start Building</Button>
//            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                fill="currentColor"
//                className="w-6 h-6"
//                viewBox="0 0 512 512"
//              >
//                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
//              </svg>
//              <span className="ml-4 flex items-start flex-col leading-none">
//                <span className="text-[8px] md:text-xs text-gray-600 ">
//                  COMMING SOON
//                </span>
//                <span className="title-font font-medium text-xs">
//                  Google Play
//                </span>
//              </span>
//            </button>
//          </div>
//        </div>
//        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
//          <img
//            className="object-cover object-center rounded "
//            alt="hero"
//            src="/chat_hero_libraries.png"
//          />
//        </div>
//      </div>
//    </section>

//    {/* <div className="relative h-[90vh] px-10 md:px-40  bg-black text-white bg-[url(https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8334.jpg?size=626&ext=jpg&ga=GA1.1.1744345052.1697731330&semt=ais)] bg-bottom bg-cover bg-no-repeat">
//    <div className="flex items-center justify-center h-full w-full ">
//    <div className="md:px-20 ">
//    <h1 className="text-[42px] font-extrabold">
//    Build Powerfull <br className="hidden lg:inline" /> Interaction
//          Apps with <br className="hidden lg:inline" />
//          <h1 className="text-blue-600">Code Chat.</h1>
//        </h1>
//        <h3 className="text-[20px] py-4">
//          Build Powerfull Interaction Apps{" "}
//          <br className="hidden md:inline" />
//          with Code Chat & Real Time Interaction.
//          </h3>
//          </div>
//          </div>
//        </div> */}
//  </div>
// </div>
