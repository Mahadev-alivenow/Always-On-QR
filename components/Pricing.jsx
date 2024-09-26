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
        <p className="text-4xl font-extrabold sm:text-6xl text-center text-white py-8 font-customB">
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
          defaultHover={false}
        />
        <PriceCard
          image="/images/Icon02.png"
          plans="Plus"
          usage="10 QR Codes"
          price="4.95"
          buttonText="Start"
          defaultHover={true}
        />
        <PriceCard
          image="/images/Icon03.png"
          plans="Pro"
          usage="50 QR Codes"
          price="9.95"
          buttonText="Start"
          defaultHover={false}
        />
      </div>
      <div className="hidden md:flex space-x-6">
        <PriceCardSlider
          image="/images/Icon01.png"
          plans="Starter"
          usage="5 QR Codes (Lifetime)"
          price="0"
          buttonText="Try Now"
          defaultHover={false}
        />
        <PriceCardSlider
          image="/images/Icon02.png"
          plans="Plus"
          usage="10 QR Codes"
          price="4.95"
          buttonText="Start"
          defaultHover={true}
        />
        <PriceCardSlider
          image="/images/Icon03.png"
          plans="Pro"
          usage="50 QR Codes"
          price="9.95"
          buttonText="Start"
          defaultHover={false}
        />
      </div>

      <div className="allplansinclude py-8">
        <h2 className="text-4xl pt-8 text-white font-medium font-customR">
          All plans include:
        </h2>
      </div>

      <div className="larger-screen hidden md:flex">
        <div className="flex flex-wrap justify-between sm:justify-center lg:justify-between text-xl font-bold text-white">
          {/* Each card as a flex container */}
          <div className="flex flex-col relative w-[250px] mb-4 sm:mx-2">
            <img
              src="/images/PriceBG.png"
              alt="PriceBG"
              className="w-full h-[160px] object-cover"
            />
            <div className="absolute left-[30px] top-[30px] flex items-center">
              <img
                src="/images/Icon04.png"
                alt="Icon04"
                width={60}
                className=""
              />
              <p className="w-[50%] text-left font-customR">
                Unlimited QR Scans
              </p>
            </div>
          </div>

          <div className="flex flex-col relative w-[250px] mb-4 sm:mx-2">
            <img
              src="/images/PriceBG.png"
              alt="PriceBG"
              className="w-full h-[160px] object-cover"
            />
            <div className="absolute left-[30px] top-[30px] flex items-center">
              <img
                src="/images/Icon04.png"
                alt="Icon04"
                width={60}
                className=""
              />
              <p className="w-[50%] text-left font-customR">
                SVG & PNG Formats
              </p>
            </div>
          </div>

          <div className="flex flex-col relative w-[250px] mb-4 sm:mx-2">
            <img
              src="/images/PriceBG.png"
              alt="PriceBG"
              className="w-full h-[160px] object-cover"
            />
            <div className="absolute left-[30px] top-[30px] flex items-center">
              <img
                src="/images/Icon04.png"
                alt="Icon04"
                width={60}
                className=""
              />
              <p className="w-[50%] text-left font-customR">Dynamic QR Codes</p>
            </div>
          </div>

          <div className="flex flex-col relative w-[250px] mb-4 sm:mx-2">
            <img
              src="/images/PriceBG.png"
              alt="PriceBG"
              className="w-full h-[160px] object-cover"
            />
            <div className="absolute left-[30px] top-[30px] flex items-center">
              <img
                src="/images/Icon04.png"
                alt="Icon04"
                width={60}
                className=""
              />
              <p className="w-[50%] text-left font-customR">
                QR Scan Analytics
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="small-screen flex md:hidden">
        <div className="flex flex-wrap justify-center  text-sm font-bold text-white">
          {/* Each card as a flex item */}

          <div className="flex flex-col relative w-[180px] ">
            {" "}
            {/* Adjust width for 2x2 layout */}
            <img
              src="/images/PriceBG.png"
              alt="PriceBG"
              className="w-full h-[80px] object-cover" // Reduced height for small screens
            />
            <div className="absolute left-[33px] top-[10px] flex items-center">
              <img
                src="/images/Icon04.png"
                alt="Icon04"
                width={30} // Reduced icon size for small screens
              />
              <p className="w-[60%] text-left font-customR text-[15px]">
                Unlimited QR Scans
              </p>
            </div>
          </div>

          <div className="flex flex-col relative w-[180px] ">
            <img
              src="/images/PriceBG.png"
              alt="PriceBG"
              className="w-full h-[80px] object-cover"
            />
            <div className="absolute left-[33px] top-[10px] flex items-center">
              <img src="/images/Icon04.png" alt="Icon04" width={30} />
              <p className="w-[60%] text-left font-customR text-[15px]">
                SVG & PNG Formats
              </p>
            </div>
          </div>

          <div className="flex flex-col relative w-[180px] ">
            <img
              src="/images/PriceBG.png"
              alt="PriceBG"
              className="w-full h-[80px] object-cover"
            />
            <div className="absolute left-[33px] top-[10px] flex items-center">
              <img src="/images/Icon04.png" alt="Icon04" width={30} />
              <p className="w-[60%] text-left font-customR text-[15px]">
                Dynamic QR Codes
              </p>
            </div>
          </div>

          <div className="flex flex-col relative w-[180px] ">
            <img
              src="/images/PriceBG.png"
              alt="PriceBG"
              className="w-full h-[80px] object-cover"
            />
            <div className="absolute left-[33px] top-[10px] flex items-center">
              <img src="/images/Icon04.png" alt="Icon04" width={30} />
              <p className="w-[60%] text-left font-customR text-[15px]">
                QR Scan Analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
