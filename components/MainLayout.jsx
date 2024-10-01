"use client";
import React, { createContext, useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { AlignJustify, X } from "lucide-react";
import { QRCodeContext } from "@/store/QRCodeContext";

function MainLayout({ children }) {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle menu click toggle
  const handleMenuClick = () => {
    setToggle(!toggle);
  };

  // Scroll detection to add/remove classes
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed w-full flex items-center justify-between px-8 md:px:12 h-20 z-50 ${
          scrolled
            ? "bg-white/85 backdrop-filter backdrop-blur-sm shadow-xl"
            : "bg-transparent"
        } transition-all duration-300`}
      >
        <Logo />
        <nav className="">
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
            className={`absolute left-0 top-20 right-0 bg-white text-black min-h-screen space-y-4 p-8 font-customR md:font-customL text-xl font-light text-center transform translate-x-0 md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-3  md:p-0 md:translate-x-0 md:bg-transparent md:text-black   md:top-0 md:justify-center md:items-center ${
              toggle ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <a href="#features" className="">
              <li
                className="w-full md:w-fit hover:bg-customBlue hover:rounded-xl hover:text-black md:hover:rounded-xl  md:hover:text-white md:hover:bg-customBlue py-3 px-3  "
                onClick={handleMenuClick}
              >
                Features
              </li>
            </a>
            <a href="#pricing" className="">
              <li
                className="w-full md:w-fit hover:bg-customBlue hover:rounded-xl hover:text-black md:hover:rounded-xl  md:hover:text-white md:hover:bg-customBlue py-3 px-3 text-xl "
                onClick={handleMenuClick}
              >
                Pricing
              </li>
            </a>
            <a href="#contact" className="">
              <li
                className="w-full md:w-fit hover:bg-customBlue hover:rounded-xl hover:text-black md:hover:rounded-xl  md:hover:text-white md:hover:bg-customBlue py-3 px-3 text-xl "
                onClick={handleMenuClick}
              >
                Contact Us
              </li>
            </a>
            <ul className="md:hidden flex flex-col w-full justify-evenly items-center font-customB">
              <li className="w-full" onClick={handleMenuClick}>
                <button className="w-full text-customBlue hover:bg-customBlue hover:text-white hover:rounded-xl px-4 py-3  text-xl">
                  Sign In
                </button>
              </li>
              <li className="w-full" onClick={handleMenuClick}>
                <button className="w-full rounded-xl text-white bg-customBlue hover:text-white hover:rounded-xl px-4 py-3 text-xl ">
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
        <div className="hidden md:flex md:justify-between md:space-x-1 md:w-fit md:mx-0 font-customB font-bold ">
          <button className="text-customBlue  hover:text-neutral-700 hover:rounded-xl px-6  py-3  text-xl">
            Sign In
          </button>
          <button className="text-white bg-customBlue rounded-xl px-6  py-3 text-xl ">
            Sign Up
          </button>
        </div>
      </header>

      {/* <main>{children}</main> */}
    </>
  );
}

export default MainLayout;
