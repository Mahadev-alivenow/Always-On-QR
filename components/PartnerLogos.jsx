import React from "react";
import Marquee from "react-fast-marquee";

export default function PartnerLogos() {
  return (
    <div className="w-full pt-8">
      <div className="flex justify-around items-center bg-white h-28 sm:h-40">
        <Marquee
          direction="left" // Move from left to right
          pauseOnHover={true} // Pause on hover
          speed={125}
          gradient
          className="w-full"
        >
          <div className="flex items-center space-x-8 sm:space-x-12 md:space-x-20 lg:space-x-32 xl:space-x-40">
            {/* Add more images here and the gaps will stay responsive */}
            <div></div>
            <img
              src="/images/partner1.jpg"
              alt="partner 1 image"
              className="object-cover"
              width={120}
            />
            <img
              src="/images/partner2.jpg"
              alt="partner 2 image"
              className="object-cover"
              width={120}
            />
            <img
              src="/images/partner3.jpg"
              alt="partner 3 image"
              className="object-cover"
              width={120}
            />
            <img
              src="/images/partner4.jpg"
              alt="partner 4 image"
              className="object-cover"
              width={120}
            />
            <img
              src="/images/partner1.jpg"
              alt="partner 1 image"
              className="object-cover"
              width={120}
            />
            <img
              src="/images/partner2.jpg"
              alt="partner 2 image"
              className="object-cover"
              width={120}
            />
            <img
              src="/images/partner3.jpg"
              alt="partner 3 image"
              className="object-cover"
              width={120}
            />
            <img
              src="/images/partner4.jpg"
              alt="partner 4 image"
              className="object-cover"
              width={120}
            />
          </div>
        </Marquee>
      </div>

      <div className="relative flex justify-center text-center">
        <img
          src="/images/BG02.png"
          alt="BG02 image"
          className="bg-cover absolute z-[-1]"
        />
        <div className="flex items-center text-center flex-col py-14 m-12 font-customB">
          <div className="text-[32px]  leading-[32px] md:leading-normal  sm:text-6xl font-bold  text-white flex flex-col md:flex-row md:text-5xl lg:text-7xl md:space-x-2">
            <p>Create, Edit,</p>
            <p>Track & Manage</p>
          </div>
          <div className="text-[32px] leading-[32px] md:leading-normal sm:text-6xl font-bold  text-white flex flex-col md:flex-row md:text-5xl lg:text-7xl md:space-x-2">
            <p>alwaysOnQR</p>
            <p>Codes with Ease</p>
          </div>
        </div>
      </div>
    </div>
  );
}
