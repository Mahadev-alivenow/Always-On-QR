import React, { useState } from "react";

export default function Buttons({ p, image, id, isSelected, onClick }) {
  const [buttonClicked, setButtonClicked] = useState(0);
  //   console.log(isSelected);
  return (
    <button
      className={` rounded-lg  ${p} md:p-4  ${
        isSelected ? "  buttonSelected" : " bg-white border-0 "
      }`}
      onClick={onClick}
    >
      <img src={image} width={40} alt="" />
    </button>
  );
}
