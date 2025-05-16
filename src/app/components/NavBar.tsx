"use client";
import Link from "next/link";
import React from "react";
import { useAuth } from "../store/AuthProvider/page";
import { useTheme } from "../store/ThemeProvider/page";
import { User } from "lucide-react";
const NavBar = () => {
  const { toggleTheme } = useTheme();

  const { isLoggedIn, logout } = useAuth();
  return (
    <div className="flex justify-between mx-5 p-2 items-center">
      <div> Doctors </div>
      <div className="flex list-none gap-x-10">
        <li>Home </li>
        <li>About</li>
        <li>Care Service</li>
      </div>
      <div className="flex gap-x-5">
        <button onClick={toggleTheme} className="cursor-pointer">
          <p> Set to Dark Mode</p>
        </button>
        <button className="rounded-full bg-black text-white  h-10 p-1 text-xs font-bold">
          <Link href={isLoggedIn ? "./pages/Profile" : "./pages/Login"}>
            {isLoggedIn ? <User className="w-10 h-6" /> : "Login"}{" "}
          </Link>
        </button>{" "}
        <button onClick={logout} className="cursor-pointer">
          {isLoggedIn && "Logout"}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
