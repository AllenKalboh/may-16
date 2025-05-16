"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/app/store/AuthProvider/page";
import { useTheme } from "@/app/store/ThemeProvider/page";

const Login = () => {
  const { isDarkMode } = useTheme();

  const { login } = useAuth();
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  return (
    <div className="flex justify-center items-center">
      <div>{isDarkMode ? "Dark" : "Light"}</div>
      <div className="flex rounded shadow-2xl items-center">
        <div className="w-[400px] flex flex-col text-center p-10">
          <div className="text-6xl font-bold"> </div>
          <h2 className="text-6xl mb-5"> LOGOG </h2>
          <h2 className="text-2xl font-bold mb-5"> Welcome Back</h2>
          <div className="flex justify-center">
            <button className="shadow-md w-96 rounded-2xl p-2 mb-3 cursor-pointer">
              G Sign in with Google
            </button>
          </div>
          <div></div>

          <p className="text-sm mb-2"> Or, sign in with your email</p>
          <input
            type="text"
            className="bg-gray-100 m-1 p-2 rounded mb-2"
            placeholder="Email Address"
            required
            value={email ?? ""}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="bg-gray-100 m-1 p-2 rounded mb-2 "
            placeholder="Password"
            required
            value={password ?? ""}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="">
            <div className="flex justify-between mt-1 mb-4">
              <div className="flex">
                <input type="radio" />
                <p className="text-xs ml-1"> Keep me Signed in </p>
              </div>
              <p className="text-xs underline">
                <Link href="/"> Forgot Password? </Link>
              </p>
            </div>
          </div>
          <button
            className="bg-blue-300 rounded p-2"
            onClick={() => login(email ?? "", password ?? "")}
          >
            Sign in
          </button>
          <p className="text-xs mt-4 underline">
            <Link href="/pages/SignUp"> Sign Up</Link>
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

export default Login;
