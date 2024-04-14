"use client";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
// const axios = require("axios");
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Working from "@/components/Services";
import Tools from "@/components/Tools";
import { UserButton } from "@clerk/nextjs";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   // const axios = require("axios");

  //   const options = {
  //     method: "POST",
  //     url: "https://paraphrasing-and-rewriter-api.p.rapidapi.com/rewrite-light",
  //     headers: {
  //       "content-type": "application/json",
  //       "X-RapidAPI-Key": "b8fbf23572msh5937faec3ef7c60p1d7c92jsnfb7c9fddb975",
  //       "X-RapidAPI-Host": "paraphrasing-and-rewriter-api.p.rapidapi.com",
  //     },
  //     data: {
  //       from: "en",
  //       text: "New York, often called New York City or NYC, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is the most densely populated major city in the United States and more than twice as populous as Los Angeles, the nation's second-largest city.",
  //     },
  //   };

  //   try {
  //     const response = axios.request(options);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  return (
    <>
      <div
        className=" "
        // style={{
        //   backgroundImage:
        //     " radial-gradient(circle at 5% -30%, #232e4e 2%, rgba(105, 120, 182, 0) 55%)",
        // }}
      >
        <Navbar />
        <Hero />
        {/* <Features /> */}
        <Tools />
      </div>
    </>
  );
}
