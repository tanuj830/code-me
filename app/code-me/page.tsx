"use client";
// import "./page.css";
import * as io from "socket.io-client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
// import { usePathname } from "next/navigation";
// import EditorNavbar from "@/components/EditorNavbar";
import { FiLoader } from "react-icons/fi";
import { RiMenu4Line } from "react-icons/ri";
// import { useRouter, useSearchParams } from "next/navigation";
import Avatar from "react-avatar";
import { FaArrowRightLong } from "react-icons/fa6";

import Link from "next/link";
import { FaUser } from "react-icons/fa";

import {
  BsFillChatHeartFill,
  BsFillPlayFill,
  BsSendFill,
} from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SiGoogleclassroom } from "react-icons/si";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import JoinRoomPC from "@/components/JoinRoomPC";
import JoinRoomMobile from "@/components/JoinRoomMobile";

// import CodeOutput from "@/components/CodeOutput";
const socket = io.connect("https://codeme-backend-socket-io.onrender.com");
const Page = () => {
  const [roomID, setRoomID] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [showOutputSection, setShowOutputSection] = useState(false);
  const [code, setCode] = useState(""); // code which user writes
  const [setLang, setSetLang] = useState(""); // language user select
  const [codeRes, setCodeRes] = useState({} as any); // code response after running code
  const [chats, setChats] = useState([] as any[]); // all chats incoming and outgoing
  const [openModel, setOpenModel] = useState(true);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chatBox, setChatBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);

  const messageEndRef = useRef<HTMLInputElement>(null);
  const codeOutputRef = useRef<HTMLInputElement>(null);

  const Languages = [
    "none",
    "c",
    "cpp",
    "cpp14",
    "cpp17",
    "go",
    "java",
    "javascript",
    "python2",
    "python3",
    "sql",
  ];

  // scrolling to bottom in chatbox
  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [chats]);

  const handleChatBox = () => {
    setChatBox(!chatBox);
  };

  const handleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const handleCode = (e: any) => {
    setCode(e.target.value);
  };
  const handleCustomInput = (e: any) => {
    setCustomInput(e.target.value);
  };
  const handleSetLanguage = (event: any) => {
    setSetLang(event.target.value);
  };

  const handleRunCode = async () => {
    setLoading(true);

    setShowOutputSection(true);

    const options = {
      method: "POST",
      url: "https://online-code-compiler.p.rapidapi.com/v1/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "b8fbf23572msh5937faec3ef7c60p1d7c92jsnfb7c9fddb975",
        "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
      },
      data: {
        language: setLang,
        version: "latest",
        code: code,
        input: customInput,
      },
    };

    try {
      const response = await axios.request(options);
      setLoading(false);
      setCodeRes(response.data);
    } catch (error) {
      console.error(error);
    }
    codeOutputRef.current?.scrollIntoView();
  };

  // Socket config
  const sendMessage = () => {
    window.scrollTo(0, document.body.scrollHeight);
    (document.getElementById("input_message") as HTMLInputElement).value = "";

    const newOutgoingChat = {
      username,
      message,
      type: "outgoing",
    };
    setChats((chats) => [...chats, newOutgoingChat]);
    if (message) socket.emit("send_message", { message, username, roomID });
    setMessage("");
  };

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomID);
    alert(
      "room id copied. Now you can share this id to your friends so that they can also join your room."
    );
  };

  const joinRoom = () => {
    if (roomID !== "") {
      socket.emit("join_room", roomID);
      setOpenModel(!openModel);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data: any) => {
      const newIngoingChat = {
        username: data.username,
        message: data.message,
        type: "ingoing",
      };
      setChats((chats) => [...chats, newIngoingChat]);
    });
  }, []);

  return (
    <div className={`relative page h-full w-full   `}>
      {openModel ? (
        <div className="relative">
          <div className="">
            {/* join room pc modal */}
            <JoinRoomPC
              setRoomID={setRoomID}
              setUsername={setUsername}
              joinRoom={joinRoom}
            />
            {/* join modal mobile view */}
            <JoinRoomMobile
              setRoomID={setRoomID}
              setUsername={setUsername}
              joinRoom={joinRoom}
            />
          </div>
        </div>
      ) : (
        <div className="relative  overflow-hidden ">
          {/* navbar */}

          <div className={`relative w-full px-6 md:px-10 py-4 `}>
            <div className="flex justify-between items-center w-full gap-2">
              <div className="inline lg:hidden">
                <Sheet>
                  <SheetTrigger className="text-2xl">
                    <RiMenu4Line />
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>
                        <Image
                          src="/logo.svg"
                          width={140}
                          height={140}
                          alt="logo"
                        />
                      </SheetTitle>
                      <div className="w-full py-20">
                        <div className="w-full flex flex-col justify-start gap-y-6">
                          <button
                            onClick={copyRoomId}
                            className={`flex items-center gap-1  py-1 rounded-full`}
                          >
                            <span className="text-2xl ">
                              <BiCopy />
                            </span>
                            <span className="text-xl">Room</span>
                          </button>

                          <button className="  flex" onClick={handleRunCode}>
                            <span className="text-2xl text-green-400">
                              <BsFillPlayFill />
                            </span>
                            <span className="text-xl">Run Code</span>
                          </button>

                          <select
                            onChange={handleSetLanguage}
                            className="border px-2 py-2"
                          >
                            {Languages.map((lg) => (
                              <option key={lg} className="bg-transparent">
                                {lg}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>

          <div className="h-screen w-full">
            <iframe
              frameBorder="0"
              height="100%"
              src="https://onecompiler.com/embed/"
              width="100%"
            ></iframe>
          </div>
          {/* Message section */}
          <section className="">
            <Sheet>
              <div className="fixed bottom-0 right-10 rounded-full shadow-inner">
                <SheetTrigger>
                  <Image src="/th.jpeg" width={40} height={40} alt="chat" />
                </SheetTrigger>
              </div>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Want to chat?</SheetTitle>
                  <SheetDescription>
                    To do this action first copy room id and share it with your
                    friends or members.
                  </SheetDescription>

                  <div className="w-full pt-5  ">
                    <div className=" w-full">
                      <div className=" w-full  ">
                        <div className="flex w-full  items-center space-x-2">
                          <Input
                            onChange={(event) => {
                              setMessage(event.target.value);
                            }}
                            className="w-full"
                            type="email"
                            placeholder="Message..."
                            id="input_message"
                          />

                          <Button
                            id="scrolltobottom"
                            onClick={sendMessage}
                            type="submit"
                          >
                            Send
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="  text-black h-screen w-full overflow-y-scroll  ">
                        {/* map recent chats */}
                        <div className=" md:px-4 gap-y-4 ">
                          {chats.length > 0
                            ? chats.map((cht) => (
                                <div
                                  key={cht.username}
                                  className={`md:px-4 py-2 ${
                                    cht.type == "outgoing"
                                      ? "flex justify-end"
                                      : "flex justify-start"
                                  }`}
                                >
                                  <div>
                                    <small
                                      className={`italic pl-2 ${
                                        darkTheme
                                          ? "text-slate-300 "
                                          : "text-gray-900"
                                      }`}
                                    >
                                      {cht.username}
                                    </small>
                                    <h6
                                      style={{ overflowWrap: "break-word" }}
                                      className={`  rounded-b-xl rounded-tl-xl px-5 py-2 ${
                                        cht.type == "outgoing"
                                          ? "bg-neutral-100 text-black"
                                          : "bg-black text-white"
                                      }`}
                                    >
                                      {cht.message}
                                    </h6>
                                    <div ref={messageEndRef} />
                                  </div>
                                </div>
                              ))
                            : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </section>
        </div>
      )}
    </div>
  );
};

export default Page;
