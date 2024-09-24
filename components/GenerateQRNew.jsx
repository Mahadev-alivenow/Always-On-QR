"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import { InputContext } from "@/app/page";

// Create a default QR code instance for display
const displayQRCode = new QRCodeStyling({
  width: 300,
  height: 300,
  image: "",
  dotsOptions: {
    type: "rounded",
  },
  imageOptions: {
    crossOrigin: "anonymous",
  },
  cornersSquareOptions: {
    type: "square",
  },
});

// Create a QR code instance for downloading
const downloadQRCode = new QRCodeStyling({
  width: 300, // Initial values, will be updated before download
  height: 300, // Initial values, will be updated before download
  image: "",
  dotsOptions: {
    type: "rounded",
  },
  imageOptions: {
    crossOrigin: "anonymous",
  },
  cornersSquareOptions: {
    type: "square",
  },
});

export default function QRGenerator() {
  const { InputValue, setInputValue } = useContext(InputContext);
  const dots = ["square", "extra-rounded", "rounded", "classy"];
  const corners = ["square", "extra-rounded", "dot"];
  const [canvasWidth, setCanvasWidth] = useState(300);
  const [fileExt, setFileExt] = useState("png");

  const ref = useRef(null);

  useEffect(() => {
    // Initialize display QR code
    displayQRCode.append(ref.current);
    displayQRCode.update({
      width: canvasWidth,
      height: canvasWidth,
      image: InputValue.customLogo,
      data: InputValue.url,
      dotsOptions: {
        type: dots[InputValue.dotStyle],
      },
      cornersSquareOptions: {
        type: corners[InputValue.cornerStyle],
      },
    });
  }, [InputValue, canvasWidth]);

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    console.log(InputValue);
    // Update download QR code instance before download
    downloadQRCode.update({
      width: InputValue.sliderValue, // Set the width based on the slider value
      height: InputValue.sliderValue, // Set the height based on the slider value
      image: InputValue.customLogo,
      data: InputValue.url,
      dotsOptions: {
        type: dots[InputValue.dotStyle],
      },
      cornersSquareOptions: {
        type: corners[InputValue.cornerStyle],
      },
    });

    downloadQRCode.download({
      extension: fileExt,
    });
  };

  useEffect(() => {
    const checkScreenSize = () => {
      const isMedium = window.innerWidth >= 768;

      if (isMedium) setCanvasWidth(250);
      else setCanvasWidth(200);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="pt-0 mt-0 p-4 flex flex-col items-center">
      <div className="flex items-center space-x-4 mb-4">
        <select
          onChange={onExtensionChange}
          value={fileExt}
          className="p-2 border rounded-md"
        >
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
          <option value="svg">SVG</option>
        </select>
        <button
          onClick={onDownloadClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Download
        </button>
      </div>
      <div ref={ref}></div>
    </div>
  );
}
