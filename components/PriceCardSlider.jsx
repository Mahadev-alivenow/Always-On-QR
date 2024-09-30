import React from "react";

export default function PriceCardSlider({
  image,
  plans,
  usage,
  price,
  buttonText,
  defaultHover,
}) {
  return (
    <div
      className=" rounded-lg  backdrop-filter bg-white/10 w-full shadow-md backdrop-blur-md"
      style={{
        border: "2px solid rgba(255, 255, 255, .7)", // White stroke
        boxShadow: "inset 0 0 20px rgba(255, 255, 255, .9)", // Inner white glow
      }}
    >
      {/* Overlay for white color with 30% opacity */}
      <div className="absolute inset-0 bg-white/10 opacity-30 z-[-10] pointer-events-none rounded-xl"></div>
      <div className="flex-col text-white  text-left py-8 px-12   ">
        <img src={image} alt="placeholder image" width={70} />
        <h2 className="text-5xl font-bold pt-4 font-customB">{plans}</h2>
        <p className="text-xl font-customL">{usage}</p>
        <div className="flex items-end pb-4">
          <p
            className={`text-5xl font-extrabold font-customB ${
              price === "0" ? "pt-4" : "pt-11"
            }`}
          >
            ${price}
          </p>
          <p className="text-xs font-light font-customL">{price === "0" ? "" : "/Month"}</p>
        </div>
        <button
          className={`${defaultHover ? "bg-white text-customBlue" : "none"} hover:bg-white border-spacing-2 border py-3 hover:text-blue-800  text-2xl rounded-lg w-[100%] font-customL`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
