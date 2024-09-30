import React from "react";
import PriceCard from "./PriceCard";
import SliderComponent from "./SliderComponent";
import ImageSlider from "./ImagesSlider";
import PriceCardSlider from "./PriceCardSlider";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="sec5 mx-0   items-center flex flex-col justify-center text-center my-16 w-full"
    >
      <img
        src="/images/BG03.png"
        alt="BG03 image"
        className=" bg-cover absolute z-[-1]  "
      />
      <div className="relative flex justify-center text-center ">
        <p className="animate text-4xl font-extrabold sm:text-6xl text-center text-white py-8 font-customB">
          Plans & Prices
        </p>
      </div>
      <div className="animate slider-card  md:hidden">
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
      <div className="animate hidden md:flex space-x-6">
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
        <h2 className="animate text-4xl pt-8 text-white font-extrabold font-customB">
          All plans include:
        </h2>
      </div>

      <div className="larger-screen animate hidden md:flex md:-space-x-8">
        <div className="w-[280px] p-0 m-0 relative overflow-hidden">
          <img
            src="/images/PriceBG.png"
            alt="PriceBG"
            width={320}
            className=" p-0 m-0 object-cover absolute overflow-hidden"
          />
          <div className="left-0 top-[30px] absolute flex justify-center items-center w-full">
            <img
              src="/images/Icon04.png"
              alt="Icon04"
              width={60}
              className="  "
            />
            <p className="w-[40%] text-xl text-left font-customR  text-white">
              Unlimited QR Scans
            </p>
          </div>
        </div>
        <div className="w-[280px] p-0 m-0 relative overflow-hidden">
          <img
            src="/images/PriceBG.png"
            alt="PriceBG"
            className="w-full p-0 m-0 object-cover relative"
          />
          <div className="left-0 top-[30px] absolute flex justify-center items-center w-full">
            <img
              src="/images/Icon04.png"
              alt="Icon04"
              width={60}
              className="  "
            />
            <p className="w-[40%] text-xl text-left font-customR  text-white">
              SVG & PNG Formats
            </p>
          </div>
        </div>
        <div className="w-[280px] p-0 m-0 relative overflow-hidden">
          <img
            src="/images/PriceBG.png"
            alt="PriceBG"
            className="w-full p-0 m-0 object-cover relative"
          />
          <div className="left-0 top-[30px] absolute flex justify-center items-center w-full">
            <img
              src="/images/Icon04.png"
              alt="Icon04"
              width={60}
              className="  "
            />
            <p className="w-[40%] text-xl text-left font-customR  text-white">
              Dynamic QR Codes
            </p>
          </div>
        </div>
        <div className="w-[280px] p-0 m-0 relative overflow-hidden">
          <img
            src="/images/PriceBG.png"
            alt="PriceBG"
            className="w-full p-0 m-0 object-cover relative"
          />
          <div className="left-0 top-[30px] absolute flex justify-center items-center w-full">
            <img
              src="/images/Icon04.png"
              alt="Icon04"
              width={60}
              className="  "
            />
            <p className="w-[40%] text-xl text-left font-customR  text-white">
              QR Scan Analytics
            </p>
          </div>
        </div>
      </div>
      <div className="small-screen animate flex flex-col md:hidden  justify-center items-center -space-y-6">
        <div className="flex justify-center items-center -space-x-6">
          <div className="w-[180px]  p-0 m-0 relative overflow-hidden">
            <img
              src="/images/PriceBG.png"
              alt="PriceBG"
              className="w-full p-0 m-0 object-cover relative"
            />
            <div className="left-0 top-[20px] absolute flex justify-center items-center w-full">
              <img
                src="/images/Icon04.png"
                alt="Icon04"
                width={40}
                className="  "
              />
              <p className="w-[40%] text-xs text-left font-customR  text-white">
                Unlimited QR Scans
              </p>
            </div>
          </div>
          <div className="w-[180px] p-0 m-0 relative overflow-hidden">
            <img
              src="/images/PriceBG.png"
              alt="PriceBG"
              className="w-full p-0 m-0 object-cover relative"
            />
            <div className="left-0 top-[20px] absolute flex justify-center items-center w-full">
              <img
                src="/images/Icon04.png"
                alt="Icon04"
                width={40}
                className="  "
              />
              <p className="w-[40%] text-xs text-left font-customR  text-white">
                SVG & PNG Formats
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center -space-x-6">
          <div className="w-[180px]  p-0 m-0 relative overflow-hidden">
            <img
              src="/images/PriceBG.png"
              alt="PriceBG"
              className="w-full p-0 m-0 object-cover relative"
            />
            <div className="left-0 top-[20px] absolute flex justify-center items-center w-full">
              <img
                src="/images/Icon04.png"
                alt="Icon04"
                width={40}
                className="  "
              />
              <p className="w-[40%] text-xs text-left font-customR  text-white">
                Dynamic QR Codes
              </p>
            </div>
          </div>
          <div className="w-[180px] p-0 m-0 relative overflow-hidden">
            <img
              src="/images/PriceBG.png"
              alt="PriceBG"
              className="w-full p-0 m-0 object-cover relative"
            />
            <div className="left-0 top-[20px] absolute flex justify-center items-center w-full">
              <img
                src="/images/Icon04.png"
                alt="Icon04"
                width={40}
                className="  "
              />
              <p className="w-[40%] text-xs text-left font-customR  text-white">
                QR Scan Analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
