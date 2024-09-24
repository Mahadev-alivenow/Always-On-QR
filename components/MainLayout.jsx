"use client";
import React, { createContext, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { AlignJustify, X } from "lucide-react";
import { QRCodeContext } from "@/store/QRCodeContext";

function MainLayout({ children }) {
  const [toggle, setToggle] = useState(false);

  const handleMenuClick = () => {
    setToggle(!toggle);
    console.log("menu clicked", toggle);
  };

  return (
    <>
      <header className="fixed w-full flex items-center justify-between px-8 md:px:12 h-20 bg-white/50 z-50 backdrop-filter shadow-2xl backdrop-blur-sm ">
        <Logo />
        <nav>
          <button className="md:hidden" onClick={handleMenuClick}>
            {toggle ? (
              <X className="scale-150 static" />
            ) : (
              <AlignJustify className="scale-150 static" />
            )}
          </button>
          {/* className={`fixed left-0 right-0 bg-black text-white min-h-screen space-y-4 p-6 font-semibold text-2xl text-center transform translate-x-full md:relative md:flex md:min-h-0 md:space-y-0 md: space-x-6 md:p-0 md:translate-x-0 md:bg-transparent md:text-gray-500 md:font-normal md:text-base md:top-0 md:justify-center md:items-center ${
            toggle ? 'translate-x-full' : 'translate-x-0'
          }`} */}
          <ul
            className={`absolute left-0 top-20 right-0 bg-black text-white min-h-screen space-y-4 p-8 font-semibold text-2xl text-center transform translate-x-0 md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-3  md:p-0 md:translate-x-0 md:bg-transparent md:text-black md:font-normal md:text-base md:top-0 md:justify-center md:items-center ${
              toggle ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <li></li>
            <a href="#features" className="">
              <li
                className="w-full md:w-fit hover:bg-white hover:rounded-xl hover:text-black md:hover:rounded-xl  md:hover:text-white md:hover:bg-neutral-700 py-3 px-3 text-xl"
                onClick={handleMenuClick}
              >
                Features
              </li>
            </a>
            <a href="#pricing" className="">
              <li
                className="w-full md:w-fit hover:bg-white hover:rounded-xl hover:text-black md:hover:rounded-xl  md:hover:text-white md:hover:bg-neutral-700 py-3 px-3 text-xl"
                onClick={handleMenuClick}
              >
                Pricing
              </li>
            </a>
            <a href="#contact" className="">
              <li
                className="w-full md:w-fit hover:bg-white hover:rounded-xl hover:text-black md:hover:rounded-xl  md:hover:text-white md:hover:bg-neutral-700 py-3 px-3 text-xl"
                onClick={handleMenuClick}
              >
                Contact Us
              </li>
            </a>
            <ul className="md:hidden flex w-full justify-evenly items-center">
              <li className="w-full" onClick={handleMenuClick}>
                <button className="w-full text-blue-800 hover:bg-blue-800 hover:text-white hover:rounded-xl px-4 py-3  text-xl">
                  Sign In
                </button>
              </li>
              <li className="w-full" onClick={handleMenuClick}>
                <button className="w-full text-blue-800 hover:bg-blue-800 hover:text-white hover:rounded-xl px-4 py-3 text-xl ">
                  Sign Up
                </button>
              </li>
            </ul>
            {/* <div className=" absolute  md:hidden">
          <div className="flex w-full">

          <button className="text-blue-800 hover:bg-blue-800 hover:text-white hover:rounded-lg px-4 py-3  text-xl">
            Sign In
          </button>
          <button className="text-blue-800 hover:bg-blue-800 hover:text-white hover:rounded-lg px-4 py-3 text-xl ">
            Sign Up
          </button>
          </div>
        </div> */}
          </ul>
        </nav>
        <div className="hidden md:flex md:-space-x-2 md:mx-0 md:px-4 ">
          <button className="text-blue-800 hover:bg-blue-800 hover:text-white hover:rounded-xl px-4 py-3  text-xl">
            Sign In
          </button>
          <button className="text-blue-800 hover:bg-blue-800 hover:text-white hover:rounded-xl px-4 py-3 text-xl ">
            Sign Up
          </button>
        </div>
      </header>

      {/* <main>{children}</main> */}
    </>
  );
}

export default MainLayout;
