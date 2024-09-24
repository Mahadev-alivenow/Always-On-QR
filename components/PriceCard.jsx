import React from "react";

export default function PriceCard({ image, plans, usage, price, buttonText }) {
  return (
    // <div className="flex w-full">
    <div className=" rounded-lg  backdrop-filter bg-white/10 w-[250px]  shadow-md backdrop-blur-md m-4 p-6">
      <div className="flex-col text-white  text-left    ">
        <img src={image} alt="placeholder image" width={70} />
        <h2 className="text-5xl font-bold">{plans}</h2>
        <div className="text-xl w-[80%]">{usage}</div>
        <div className="flex items-end">
          <p
            className={`text-5xl font-extrabold  ${
              price === "0" ? "pt-4" : "pt-11"
            }`}
          >
            ${price}
          </p>
          <p className="text-xs font-light">{price === "0" ? "" : "/Month"}</p>
        </div>
        <button className="hover:bg-white border-spacing-2 border hover:text-blue-800  text-2xl rounded-lg  mb-4 w-full mt-4 py-2">
          {buttonText}
        </button>
      </div>
    </div>
    // </div>
  );
}
