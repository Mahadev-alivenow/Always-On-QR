"use client";
import Features from "@/components/Features";
import MainLayout from "@/components/MainLayout";
import Pricing from "@/components/Pricing";
import React, { createContext, useEffect, useState } from "react";
import Contact from "@/components/Contact";
import PartnerLogos from "@/components/PartnerLogos";
import WhyQR from "@/components/WhyQR";
import "./globals.css";

// import QRCode from "@/components/GenerateQRcode";
// import QRGenerator from "@/components/GenerateQRNew";
// import GenerateQR from "@/components/GenerateQR";
import dynamic from "next/dynamic";


const QRCode = dynamic(() => import("@/components/GenerateQRcode"), {
  ssr: false,
});
const QRGenerator = dynamic(() => import("@/components/GenerateQRNew"), {
  ssr: false,
});

export const InputContext = createContext();
function HomePage() {
  const [InputValue, setInputValue] = useState({
    url: "",
    dotStyle: 0,
    cornerStyle: 0,
    customLogo: null,
    qrmode: true,
    file: null,
    sliderValue: 1024,
  });

  const value = {
    InputValue,
    setInputValue,
  };

  // UseEffect hook to ensure code runs on the client side
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      // You can now safely access 'self' (or 'window')
      if (typeof self !== "undefined") {
        // Example: setting a value on `self`
        self.__RSC_SERVER_MANIFEST = "Your server manifest value";
        console.log("self is available and has been modified", self);
      }
    }
  }, []); // Runs once after the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-side code here
      console.log("Client-side rendering only!");
    }
  }, []);
  useEffect(() => {
    // This will only run in the browser
    let sections = document.querySelectorAll("section");
    console.log(sections);
    window.onscroll = () => {
      sections.forEach((sec) => {
        let scrollDistance = window.scrollY;
        let secDistance = sec.offsetTop;

        if (scrollDistance >= secDistance) {
          sec.classList.add("show-animate");
        }
      });
    };
  }, []);

  return (
    <InputContext.Provider value={value}>
      {/* <MainLayout>
        
      </MainLayout> */}
      <div className="mt-0 pt-28 flex justify-center flex-col items-center  ">
        <Features />
        <PartnerLogos />
        <WhyQR />
        <Pricing />
        <Contact />
        {/* <QRGenerator /> */}
        {/* <GenerateQR /> */}
        {/* <QRCode data={"https://maha.com"} width={400} /> */}
      </div>
    </InputContext.Provider>
  );
}

export default HomePage;
