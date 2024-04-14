"use client";
import { UserButton } from "@clerk/nextjs";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { RiMenu4Line } from "react-icons/ri";
import { usePathname } from "next/navigation";
import Button from "../components/Button";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineNotStarted } from "react-icons/md";

const Navbar = () => {
  const path = usePathname();
  const [showMenu, setShowMenu] = React.useState(false);
  const [showTopBanner, setShowTopBanner] = React.useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleTopBanner = () => {
    setShowTopBanner(!showTopBanner);
  };

  return (
    <>
      {/* mobile view */}
      <header className="md:hidden block cont py-4 relative">
        <div className="flex justify-between items-center">
          {/* left  */}
          <div>
            <Link href="/">
              <Image src="/logo.svg" width={150} height={30} alt="" />
            </Link>
          </div>

          {/* right */}
          <div className="flex gap-4 items-center">
            <Link
              href="/code-me"
              className="bg-[#1C1C2A] p-3 rounded-xl text-2xl"
            >
              <MdOutlineNotStarted />
            </Link>
            {!showMenu ? (
              <button className="text-2xl text-white " onClick={handleClick}>
                <RiMenu3Fill />
              </button>
            ) : (
              <button className="text-2xl text-white" onClick={handleClick}>
                <RxCross2 />
              </button>
            )}
            {showMenu === true ? (
              <div className="absolute left-0 top-20 bg-black w-full   py-1">
                <div className="    rounded-b-3xl    h-screen w-full text-2xl  p-10">
                  <div className="flex justify-start gap-y-8  w-full h-full flex-col">
                    <div className="text-center">
                      <Link
                        className={`brightness-200 ${
                          path == "/project"
                            ? "text-indigo-800 font-bold"
                            : "text-inherit"
                        }`}
                        href="/"
                      >
                        Home
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link
                        className={`brightness-200 ${
                          path == "/code-me"
                            ? "text-indigo-800 font-bold"
                            : "text-inherit"
                        }`}
                        href="/code-me"
                      >
                        Code Chat
                      </Link>
                    </div>
                    {/* icons */}
                    <div className="flex items-center justify-center gap-6 md:gap-8">
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      {/* ---------------------------------------------pc view------------------------------------------------------ */}
      <header className="hidden md:block cont py-6 relative">
        <div className="flex justify-between items-center">
          {/* left  */}
          <div>
            <Link href="/">
              <Image src="/logo.svg" width={150} height={30} alt="" />
            </Link>
          </div>

          {/* right */}
          <div className="flex gap-6 lg:gap-8 items-center">
            <Link href="/" className=" text-sm">
              How it Works
            </Link>
            <Link href="/" className=" text-sm">
              FAQ
            </Link>
            <Link
              href="/code-me"
              className="bg-[#1C1C2A] py-3 px-5 rounded-xl text-sm"
            >
              Get&apos;s Started
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

// <>
//   {showTopBanner ? (
//     <div className="transition-all duration-1000 text-[3.75vw] md:text-[14px] bg-[url(https://images.pexels.com/photos/10461974/pexels-photo-10461974.jpeg?auto=compress&cs=tinysrgb&w=6000)] bg-center bg-no-repeat px-10 py-4  tracking-wider bg-cover text-white relative">
//       <button
//         className="absolute lg:top-4 lg:right-10 hidden lg:inline-block"
//         onClick={handleTopBanner}
//       >
//         <AiOutlineClose />
//       </button>
//       <h6 className="text-center font-[400]">
//         80% OFF : If you want web services then its a best time!{" "}
//         <Link className="text-md font-bold underline" href="#">
//           Explore Services
//         </Link>
//       </h6>
//     </div>
//   ) : null}

//   <div className=" inline md:hidden  z-50 relative ">
//     {/* for mobile */}
//     <div className="cont pt-3 pb-3  w-full   backdrop-blur-sm">
//       {/* border-b border-gray-700 */}
//       <div className="  flex justify-between items-center gap-4  md:gap-44">
//         <div className="flex items-center  ">
//           <Link className="cursor-pointer " href="/">
//             <img src="/favicon.png" className="w-16" alt="" />
//           </Link>
//         </div>

//         <div className="ml-2 transition-all  duration-1000"></div>
//       </div>
//       <div className="mb-2 transition-all duration-1000 flex  items-center justify-between">
//         {/* <div> */}
//         {showMenu === true ? (
//           <div className="relative  w-full   py-1">
//             <div className="absolute    rounded-b-3xl  text-black bg-white  h-screen w-full text-2xl  p-10">
//               <div className="flex justify-start gap-y-8  w-full h-full flex-col">
//                 <div className="text-center">
//                   <Link
//                     className={`brightness-200 ${
//                       path == "/project"
//                         ? "text-indigo-800 font-bold"
//                         : "text-inherit"
//                     }`}
//                     href="/"
//                   >
//                     Home
//                   </Link>
//                 </div>
//                 <div className="text-center">
//                   <Link
//                     className={`brightness-200 ${
//                       path == "/code-me"
//                         ? "text-indigo-800 font-bold"
//                         : "text-inherit"
//                     }`}
//                     href="/code-me"
//                   >
//                     Code Chat
//                   </Link>
//                 </div>
//                 {/* icons */}
//                 <div className="flex items-center justify-center gap-6 md:gap-8">
//                   <UserButton afterSignOutUrl="/" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   </div>

//   {/* for pc */}
//   <div className="hidden  md:inline-block z-50 relative   backdrop-blur-md overflow-hidden	w-full xl:h-20 h-16 ">
//     <div className=" flex justify-between items-center  w-full h-full ">
//       <div className=" flex items-center  h-full ">
//         <Link className="cursor-pointer flex items-center gap-x-1" href="/">
//           <img src="/favicon.png" className="w-16" alt="" />
//           <small className="font-bold text-xl">
//             {/* <span className="text-[#642DF0]">Code </span>
//                 <span className="text-[#FD8029]">Chat</span> */}
//             {/* <span className="text-[#8C2DF9]">e</span>
//                 <span className="text-[#E72D81]">k</span>{" "}
//                 <span className="text-[#642DF0]">C</span>
//                 <span className="text-[#FBC93F]">o</span>
//                 <span className="text-[#34CFF8]">l</span>
//                 <span className="text-[#FD8029]">a</span>
//                 <span className="text-[#FBC93F]">b</span> */}
//           </small>
//         </Link>
//       </div>
//       <div className=" flex  items-center md:gap-x-7 h-full ">
//         {/* <Link
//               className={`brightness-200 flex items-center h-full text-xl  ${
//                 path == "/project"
//                   ? "text-indigo-600  brightness-200 border-b-2 border-indigo-700 font-semibold"
//                   : "text-inherit"
//               }`}
//               href="/project"
//             >
//               Projects
//             </Link>
//             <Link
//               className={`brightness-200 flex items-center h-full text-xl  ${
//                 path == "/blog"
//                   ? "text-indigo-600  brightness-200 border-b-2 border-indigo-700 font-semibold"
//                   : "text-inherit"
//               }`}
//               href="/blog"
//             >
//               Blog
//             </Link>
//             <Link
//               className={`brightness-200 flex items-center h-full text-xl   ${
//                 path == "/services"
//                   ? "text-indigo-600  brightness-200 border-b-2 border-indigo-700 font-semibold"
//                   : "text-inherit"
//               }`}
//               href="/services"
//             >
//               <span className="flex justify-center items-center">Services</span>
//             </Link>
//             <Link
//               className={`brightness-200 flex items-center  h-full text-xl  ${
//                 path == "/fun"
//                   ? "text-indigo-600  brightness-200 border-b-2 border-indigo-700 font-semibold"
//                   : "text-inherit"
//               }`}
//               href="/fun"
//             >
//               Chill Zone
//             </Link> */}
//       </div>
//       <div className="flex  items-center h-full md:gap-8  ">
//         {/* <Link href="/resume">Build Resume</Link> */}
//         <Link href="/" className="font-bold">
//           How it Works
//         </Link>
//         <Link href="/code-me">
//           <Button
//             text={`Get's Started`}
//             properties={`hover:bg-white hover:text-black`}
//           />
//         </Link>
//         <UserButton afterSignOutUrl="/" />
//       </div>
//     </div>
//   </div>
// </>;
