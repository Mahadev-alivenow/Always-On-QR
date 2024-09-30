import React from "react";
import CreateQR from "./CreateQR";

export default function Features() {
  return (
    <>
      <section
        id="features"
        className="sec1 show-animate mx-0 mt-2 mb-8  items-center flex flex-col justify-center text-center relative w-full  "
      >
        <div className="bgimage top-[200px] left-[0px] w-[100%] h-[130vh] absolute overflow-hidden">
          <img
            src="/images/BG01.png"
            alt="BG01 image"
            className="  z-[-10]   bg-no-repeat overflow-hidden bg-cover fixed  md:visible   md:absolute md:left-[250px] md:w-full md:h-[120%] md:top-[0px] "
            // style={{ backgroundImage: "url('/images/BG01.png')",left:300 }}
            // style={{
            //   position: "absolute",
            //   left: "250px",
            //   width: "100%",
            //   height: "120%",
            //   top: "0px",
            // }}
          />
        </div>
        <img
          src="/images/BG01.png"
          alt="BG01 image"
          className="  z-[-10] absolute object-cover bg-contain h-[500vh] w-[400%] left-[0%]   md:hidden"
          // style={{ backgroundImage: "url('/images/BG01.png')",left:300 }}
          // style={{
          //   position: "absolute",
          //   left: "250px",
          //   width: "100%",
          //   height: "120%",
          //   top: "0px",
          // }}
        ></img>
        <div className="animate text-6xl font-extrabold flex flex-col md:flex-row md:text-7xl md:space-x-2 font-customB">
          <p className="animate">Generate</p>
          <p className="animate">& Publish</p>
        </div>
        <div className="animate flex py-2">
          <img
            src="/images/Bracket.png"
            alt="Bracket image"
            className="w-7 h-22  md:w-4 md:h-13"
          ></img>
          <div className="text-6xl font-extrabold py-2 flex flex-col md:flex-row md:text-7xl  md:space-x-2 text-customBlue font-customB">
            <p className="animate">Dynamic</p>
            <p className="animate">QR Codes</p>
          </div>
          <img
            src="/images/Bracket.png"
            alt="Bracket image"
            className="scale-[-1] w-7 h-22  md:w-4 md:h-13"
          ></img>
        </div>
        <div className="text-2xl  text-gray-800 flex flex-col md:flex-row md:space-x-2 font-customL">
          <p className="animate">Change your QR code&apos;s</p>
          <p className="animate">destination on-the-fly!</p>
        </div>
      </section>
      <CreateQR />
    </>
  );
}
