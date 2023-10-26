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
import Link from "next/link";
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
    <div  className={`relative page h-full w-screen  -scroll `}>
      {openModel ? (
        <div className="relative">
          <div className="backdrop-blur-md h-screen flex justify-center items-center px-10  overflow-hidden lg:px-0">
            <div className="flex flex-col border bg-neutral-50/40 shadow-sm gap-y-6 sm:scale-125 lg:scale-150 w-full sm:w-[50vw] lg:w-[22vw]  p-6 sm:p-10 rounded-2xl">
              <div className="mb-2">
                <h1 className="text-2xl font-bold">Join Room </h1>
                <p className="text-[10px] text-justify">
                  Enter room id and if there will not any room id matching to
                  your input then new room will be created.{" "}
                </p>
              </div>

              <div>
                <input
                  className="bg-transparent outline-none border-b w-full"
                  placeholder="Room ID"
                  onChange={(event) => {
                    setRoomID(event.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  className="bg-transparent outline-none border-b w-full"
                  placeholder="Username"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>

              <div className="mt-2">
                <button
                  className="w-full bg-inherit border  hover:bg-white hover:text-black transition-all duration-400 rounded-full py-2"
                  onClick={joinRoom}
                >
                  Join Room
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative  overflow-hidden " >
          {/* navbar */}

          <div className={`relative w-full px-6 md:px-10 py-4 `}>
            <div className="flex justify-between items-center w-full gap-2">
              <div>
                <Image src="/logo.svg" width={140} height={140} alt="logo" />
              </div>
              <div className="inline lg:hidden">
                <Sheet>
                  <SheetTrigger className="text-2xl">
                    <RiMenu4Line />
                  </SheetTrigger>
                  <SheetContent >
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
              <div className="hidden lg:flex items-center justify-center gap-1 md:gap-4">
                <div>
                  <button
                    onClick={copyRoomId}
                    className={`flex items-center gap-1  py-1 rounded-full ${
                      darkTheme ? "lighttheme" : "darktheme"
                    }`}
                  >
                    <span className="text-lg md:text-2xl ">
                      <BiCopy />
                    </span>
                    <span className="text-sm">Room</span>
                  </button>
                </div>

                <button
                  className=" border border-gray-500 rounded-full px-1 py-1 md:px-3 md:py-2 flex"
                  onClick={handleRunCode}
                >
                  <span className="text-2xl text-green-400">
                    <BsFillPlayFill />
                  </span>
                  <span>Run</span>
                </button>

                <select
                  onChange={handleSetLanguage}
                  className="bg-inherit border border-gray-500 rounded-full py-1 md:px-3 md:py-2  outline-none"
                >
                  {Languages.map((lg) => (
                    <option key={lg} className="bg-transparent">
                      {lg}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row px-5 md:px-10 gap-10 pt-3">
            <div
              className={` overflow-hidden w-full h-[80vh] rounded-3xl bg-neutral-100`}
            >
              <div className={`relative h-full p-5`}>
                {/* editor */}
                {loading ? (
                  <div
                    className={`  overflow-hidden w-full h-full  ${
                      loading ? "absolute" : "hidden"
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="flex items-center gap-1  cursor-wait">
                        <span className="text-white animate-spin">
                          <FiLoader />
                        </span>
                        <span className="text-white ">Executing</span>
                      </div>
                    </div>
                  </div>
                ) : null}
                <textarea
                  onChange={handleCode}
                  className="	 bg-transparent outline-none w-full h-full"
                  name="code"
                  id=""
                  style={{ resize: "none" }}
                />
              </div>
            </div>
            {/* <div className={`w-full lg:w-[15vw]  rounded-3xl ${darkTheme ? 'bg-gray-900 text-white' : 'bg-neutral-100 text-black'}`}>
              <div className="py-2">
                <h2 className="text-xl text-center font-bold">Joined Users</h2>
              </div>
              <div className="flex justify-center items-center">
                <div className="grid grid-cols-2 p-4 gap-4 overflow-hidden">
                  <Avatar name={"Y O U"} size="70px" round="100px" />
                  <Avatar name="Tanuj Bhatt" size="70px" round="100px" />
                  <Avatar name="Anuj Bhatt" size="70px" round="100px" />
                  <Avatar name="Rekha Bhatt" size="70px" round="100px" />
                  <Avatar name="Lalit Mohan" size="70px" round="100px" />
                  <Avatar name="Sandeep BHatt" size="70px" round="100px" />
                </div>
              </div>
            </div> */}
            <div className={`w-full lg:w-[15vw]  rounded-3xl bg-neutral-100`}>
              <div className="py-2">
                <h2 className="text-xl text-center font-bold">Custom Input</h2>
              </div>
              <div className="flex justify-center items-center h-full overflow-hidden p-1">
                <textarea
                  onChange={handleCustomInput}
                  className="h-full border-t border-gray-500 bg-transparent outline-none w-full"
                  name=""
                  id=""
                  style={{ resize: "none" }}
                />
              </div>
            </div>
          </div>
          {/* code output */}
          {showOutputSection ? (
            <div className=" p-20 h-screen">
              <div className="py-10">
                <h2 className="text-2xl font-bold">Code Output</h2>
              </div>
              <div>
                {codeRes != undefined ? (
                  <div className="flex flex-col gap-y-10">
                    <div className="text-gray-500">
                      Output
                      <h6 className="">{codeRes.output}</h6>
                    </div>
                    <div className="text-gray-500">
                      CPU Time
                      <h6 className="">{codeRes.cpuTime} ms</h6>
                    </div>
                    <div className="text-gray-500">
                      Memory
                      <h6 className=""> {codeRes.memory * 0.001} kb</h6>
                      <div ref={codeOutputRef} />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
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
                        <div className=" px-4 gap-y-4 ">
                          {chats.length > 0
                            ? chats.map((cht) => (
                                <div
                                  key={cht.username}
                                  className={`px-4 py-2 ${
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
                                      className={`w-40   rounded-b-xl rounded-tl-xl px-5 py-2 ${
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
