"use client";
import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div></div>
        <Image
          className="relative object-cover"
          src="/Hospatal.jpg"
          alt="Hospatal Pic"
          width={1150}
          height={1150}
        />
        <div className="flex flex-col absolute top-35 left-5 ">
          <h2 className="p-3 bg-gray-200 rounded-full w-55 flex justify-center ">
            🔥 #1 best medical center
          </h2>
          <h2 className="p-3 w-[600px] text-6xl text-white">
            The <span className="font-bold">Best Medical </span>and Treatment
            Center for You
          </h2>
          <h2 className=" p-3 w-[600px] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellat
            quibusdam illo doloribus? Quam sed, reprehenderit iste laudantium
            animi exercitationem.
          </h2>
          <button className="cursor-pointer hover:bg-white hover:text-black duration-200 p-3 w-[150px] text-white text-xs font-bold bg-black rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
