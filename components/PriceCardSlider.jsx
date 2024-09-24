import React from "react";

export default function PriceCardSlider({
  image,
  plans,
  usage,
  price,
  buttonText,
}) {
  return (
    <div className=" rounded-lg  backdrop-filter bg-white/10 w-full shadow-md backdrop-blur-md">
      <div className="flex-col text-white  text-left py-8 px-12   ">
        <img src={image} alt="placeholder image" width={70} />
        <h2 className="text-5xl font-bold pt-4">{plans}</h2>
        <p className="text-xl">{usage}</p>
        <div className="flex items-end pb-4">
          <p
            className={`text-5xl font-extrabold  ${
              price === "0" ? "pt-4" : "pt-11"
            }`}
          >
            ${price}
          </p>
          <p className="text-xs font-light">{price === "0" ? "" : "/Month"}</p>
        </div>
        <button className="hover:bg-white border-spacing-2 border py-3 hover:text-blue-800  text-2xl rounded-lg w-[100%]">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
