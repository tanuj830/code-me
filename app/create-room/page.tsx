"use client";
// import "./Home.css";
import * as io from "socket.io-client";
import { useEffect, useState } from "react";
import Link from "next/link";
import uniqid from 'uniqid';
import { useRouter } from "next/navigation";
const socket = io.connect("http://localhost:8000");
function Home() {
    

    const [username, setUsername] = useState("");
    const [roomID, setRoomID] = useState("");
    const router = useRouter()

    
    // useEffect (() =>{
     
      // }
        // setRoomID(uniqid())
    // },[])

    const createRoom = () =>{
        // console.log(roomID)
        // router.push({
        // pathname:'/code-me',
        // query:{name: username, 
        //     id:roomID}    
        // })
        setRoomID(uniqid())
        if (roomID !== "") {
          socket.emit("join_room", roomID);
        router.push(`/code-me?username=${username}&roomID=${roomID}`)
        }  
    }

    return (
    <div className="Home h-screen flex justify-center items-center">
      <div className="flex flex-col gap-y-6 scale-150 bg-gray-800 w-full lg:w-[22vw]  p-10 rounded-2xl">
        <div className="mb-2">
          <h1 className="text-2xl font-bold">Create Room </h1>
          <p className="text-[10px] break-normal">After creating room you will be directly redirected  to the main page and from there you can share your room id to other users. </p>
        </div>
        <div>
          <input
            className="bg-transparent outline-none border-b w-full"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          {roomID}
        </div>
        <div className="">
          <button
              className="w-full bg-black rounded-full py-2"
              onClick={createRoom}
          >
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
