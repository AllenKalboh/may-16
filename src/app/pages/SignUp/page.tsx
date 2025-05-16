"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/app/store/AuthProvider/page";

const SignUp = () => {
  const { isLoading, isLoggedIn, login, logout, signUp, error } = useAuth();

  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [age, setAge] = useState<number | null>(null);

  return (
    <div className="flex justify-center items-center">
      <div className="flex rounded shadow-2xl items-center">
        <div className="w-[400px] flex flex-col text-center p-10">
          <div className="text-6xl font-bold"> </div>
          <h2 className="text-6xl mb-5"> 0 </h2>
          <h2 className="text-2xl font-bold mb-5"> Register </h2>
          <div className="flex justify-center"></div>

          <input
            type="text"
            className="bg-gray-100 m-1 p-2 rounded mb-2"
            placeholder="Name"
            value={name ?? ""}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="number"
            className="bg-gray-100 m-1 p-2 rounded mb-2"
            placeholder="Age"
            value={age ?? ""}
            onChange={(e) => {
              setAge(Number(e.target.value));
            }}
          />
          <input
            type="text"
            className="bg-gray-100 m-1 p-2 rounded mb-2"
            placeholder="Email Address"
            value={email ?? ""}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            className="bg-gray-100 m-1 p-2 rounded mb-2 "
            placeholder="Password"
            value={password ?? ""}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="">
            <div className="flex justify-between mt-1 mb-2">
              <p className="text-xs underline"></p>
            </div>
          </div>
          <button
            className="bg-blue-300 rounded p-2 cursor-pointer"
            onClick={() => signUp(email ?? "", password ?? "", name ?? "", age)}
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
          <p className="text-xs mt-4 underline">
            <Link href="/pages/Login"> Log in </Link>
          </p>
        </div>

        <div className=" w-[400px]">
          <Image
            src={"/Checkap.jpg"}
            alt={"Something"}
            width={95}
            layout="responsive"
            height={95}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
