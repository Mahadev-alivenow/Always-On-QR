import React, { useEffect, useRef } from "react";

export default function PriceCard({
  image,
  plans,
  usage,
  price,
  buttonText,
  defaultHover,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Center the middle card on page load
    if (containerRef.current) {
      const container = containerRef.current;
      const middleCardIndex = Math.floor(container.children.length / 2); // Get the middle card index
      const middleCard = container.children[middleCardIndex];

      // Calculate the scroll position to center the middle card
      const scrollPosition =
        middleCard.offsetLeft -
        container.offsetWidth / 2 +
        middleCard.offsetWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth", // Optional, adds smooth scrolling
      });
    }
  }, []);
  return (
    // <div className="flex w-full">
    // <div
    //   ref={containerRef}
    //   className="flex overflow-x-scroll w-full scrollbar-hide" // Add your custom scrollbar styles if necessary
    //   style={{ scrollBehavior: "smooth" }} // Smooth scrolling behavior
    // >
      <div
        className=" rounded-lg  backdrop-filter bg-white/10 w-[250px]  shadow-md backdrop-blur-md m-4 p-6"
        style={{
          border: "2px solid rgba(255, 255, 255, 1)", // White stroke
          boxShadow: "inset 0 0 20px rgba(255, 255, 255, .8)", // Inner white glow
        }}
      >
        <div className="flex-col text-white  text-left font-customR   ">
          <img src={image} alt="placeholder image" width={70} />
          <h2 className="text-5xl font-bold font-customB">{plans}</h2>
          <div className="text-xl w-[80%] font-customR">{usage}</div>
          <div className="flex items-end">
            <p
              className={`text-5xl font-extrabold font-customL ${
                price === "0" ? "pt-4" : "pt-11"
              }`}
            >
              ${price}
            </p>
            <p className="text-xs font-light font-customL">
              {price === "0" ? "" : "/Month"}
            </p>
          </div>
          <button
            className={`${
              defaultHover ? "bg-white text-customBlue" : "none"
            } border-spacing-2 border hover:text-customBlue font-customL text-2xl rounded-lg  mb-4 w-full mt-4 py-2`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    // </div>
  );
}
