import React from "react";
import PriceCard from "./PriceCard";
import SliderComponent from "./SliderComponent";
import ImageSlider from "./ImagesSlider";
import PriceCardSlider from "./PriceCardSlider";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-0   items-center flex flex-col justify-center text-center my-16 w-full"
    >
      <img
        src="/images/BG03.png"
        alt="BG03 image"
        className="bg-cover absolute z-[-1]  "
      />
      <div className="relative flex justify-center text-center ">
        <p className="text-4xl font-extrabold sm:text-6xl text-center text-white py-8">
          Plans & Prices
        </p>
      </div>
      <div className="slider-card  md:hidden">
        <PriceCard
          image="/images/Icon01.png"
          plans="Starter"
          usage="5 QR Codes (Lifetime)"
          price="0"
          buttonText="Try Now"
        />
        <PriceCard
          image="/images/Icon02.png"
          plans="Plus"
          usage="10 QR Codes"
          price="4.95"
          buttonText="Start"
        />
        <PriceCard
          image="/images/Icon03.png"
          plans="Pro"
          usage="50 QR Codes"
          price="9.95"
          buttonText="Start"
        />
      </div>
      <div className="hidden md:flex space-x-6">
        <PriceCardSlider
          image="/images/Icon01.png"
          plans="Starter"
          usage="5 QR Codes (Lifetime)"
          price="0"
          buttonText="Try Now"
        />
        <PriceCardSlider
          image="/images/Icon02.png"
          plans="Plus"
          usage="10 QR Codes"
          price="4.95"
          buttonText="Start"
        />
        <PriceCardSlider
          image="/images/Icon03.png"
          plans="Pro"
          usage="50 QR Codes"
          price="9.95"
          buttonText="Start"
        />
      </div>

      <div className="allplansinclude py-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-medium">
          All plans include:
        </h2>
      </div>
      <div className="grid md:w-[75%] lg:w-[70%] sm:w-[70%] grid-cols-[50%_50%] gap-2 md:gap-2 lg:gap-2 xl:gap-4 lg:grid-cols-[25%_25%_25%_25%] sm:grid-cols-[30%_30%_30%_30%] xl:w-[60%]  place-content-center  items-center">
        {/* <div className="flex flex-col sm:flex-row"> */}

        <div className="rounded-lg shadow-purple-900 border-purple-900  backdrop-filter bg-white/10 w-full shadow-md text-xs sm:text-xl  backdrop-blur-md flex items-center md:p-3 lg:py-2  p-1   lg:text-3xl md:px-2 lg:px-0 md:gap-2 lg:gap-4  md:font-medium ">
          <img
            src="/images/Icon04.png"
            alt="Icon04 image"
            width={40}
            className="lg:relative left-[10%]"
          />
          Unlimited QR Scans
        </div>

        <div className="rounded-lg shadow-purple-900 border-purple-900 backdrop-filter bg-white/10 w-full shadow-md text-xs sm:text-xl  backdrop-blur-md flex items-center  md:p-3 lg:py-2  p-1   lg:text-3xl md:px-2 lg:px-0 md:gap-2 lg:gap-4  md:font-medium ">
          <img
            src="/images/Icon04.png"
            alt="Icon04 image"
            width={40}
            className="lg:relative left-[10%]"
          />
          SVG & PNG Formats
        </div>
        {/* </div> */}
        {/* <div className="flex  flex-col sm:flex-col"> */}
        <div className="rounded-lg shadow-purple-900 border-purple-900 backdrop-filter bg-white/10 w-full shadow-md text-xs sm:text-xl  backdrop-blur-md flex items-center  md:p-3 lg:py-2  p-1   lg:text-3xl md:px-2 lg:px-0 md:gap-2 lg:gap-4  md:font-medium ">
          <img
            src="/images/Icon04.png"
            alt="Icon04 image"
            width={40}
            className="lg:relative left-[10%]"
          />
          Dynamic QR Codes
        </div>

        <div className="rounded-lg shadow-purple-900 border-purple-900 backdrop-filter bg-white/10 w-full shadow-md text-xs sm:text-xl  backdrop-blur-md flex items-center  md:p-3 lg:py-2  p-1   lg:text-3xl md:px-2 lg:px-0 md:gap-2 lg:gap-4  md:font-medium ">
          <img
            src="/images/Icon04.png"
            alt="Icon04 image"
            width={40}
            className="lg:relative left-[10%]"
          />
          QR Scan Analytics
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
