"use client";
import dynamic from "next/dynamic";

import { InputContext } from "@/app/page";
import Buttons from "@/utils/Buttons";
import { cornerStylesImages, dotStylesImages } from "@/utils/data";
import React, { useContext, useRef, useState } from "react";
// import QRCode from "./GenerateQRcode";
const QRCode = dynamic(() => import("./GenerateQRcode"), {
  ssr: false,
});

// import QRGenerator from "./GenerateQRNew";
const QRGenerator = dynamic(() => import("./GenerateQRNew"), {
  ssr: false,
});

import isUrl from "is-url";
import { LoadingAnimation } from "@/utils/LoadingAnimation";

export default function CreateQR() {
  const urlExample = "https://example.com";
  const { InputValue, setInputValue } = useContext(InputContext);
  const [selectedDot, setSelectedDot] = useState(null);
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sliderValue, setSliderValue] = useState(1024);

  const [validURL, setValidURL] = useState("");
  const [generateQR, setGenerateQR] = useState(null);
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(false);
  const [slider, setSlider] = useState(1024);
  const fileInputField = useRef(null);
  const pixels = [300, 500, 600, 900, 1024, 1200, 1800, 2000, 2400, 3600, 4800];

  const [errorMessage, setErrorMessage] = useState("");

  const normalizeURL = (url) => {
    // Ensure the URL starts with 'https://'
    if (!url.startsWith("https://")) {
      url = "https://" + url;
    }

    // Remove 'www.' if present
    url = url.replace(/^https:\/\/www\./, "https://");

    // Remove trailing slashes
    url = url.replace(/\/+$/, "");

    return url;
  };

  const validateURL = (url) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // Protocol (optional)
        '((([a-zA-Z0-9$-_@.&+!*"(),]|[a-zA-Z0-9-.]){1,}(:[0-9]{1,5})?)|([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}))' + // Domain name and optional port
        '(\\/[a-zA-Z0-9$-_@.&+!*"(),/:;?]*)?$' // Path and query string (optional)
    );
    return pattern.test(url);
  };

  const handleInputChange = (e) => {
    let newUrl = e.target.value;
    setUrl(newUrl);
    
    // // setInputValue({ url: value });
    
    // if (validateURL(newUrl)) {
    //   setValidURL(newUrl);
    //   setErrorMessage(""); // Clear error message if valid
    //   setIsValid(true);
    // } else {
    //   setErrorMessage("Please enter a valid URL."); // Set error message if invalid
    //   setIsValid(false);
    // }

    // setInputValue({ ...InputValue, url: newUrl });
    //URL validation using the URL constructor
    try {
      new URL(newUrl); // Will throw an error if the URL is invalid
      setIsValid(true);
      setValidURL(newUrl);
      setErrorMessage('');
    } catch {
      setIsValid(false);
      setErrorMessage('Please enter a valid URL.');
    }
    setInputValue({ ...InputValue, url: newUrl });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0].name);

      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = () => {
        setInputValue({
          ...InputValue,
          customLogo: reader.result,
          file: file,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const onChangeSliderValue = (e) => {
    const newValue = pixels[e.target.value]; // Get the new value based on the slider
    setSliderValue(newValue);
    setInputValue({ ...InputValue, sliderValue: newValue });
  };

  const handleGenerateQR = (e) => {
    e.preventDefault();
    let newUrl = e.target.value
    console.log("Generate btn clicked : ", isValid );
    console.log("Generate btn clicked : ",  validURL);
    if (isValid) {
      setLoading(true);

      setTimeout(() => {
        setGenerateQR(true);
        setLoading(false);
      }, 1500);
    }
        // setInputValue({ ...InputValue, url: newUrl });

  };

  return (
    <div className="rounded-xl backdrop-filter bg-white/5 shadow-2xl backdrop-blur-3xl mx-4  p-6 lg:p-16">
      <div className="grid md:grid-cols-2 md:place-content-between gap-2 md:gap-2 md:space-x-0">
        <div className="leftQR-top order-2 text-3xl font-bold">
          Enter Content
        </div>
        <div
          className="rightQR-top  md:order-2 w-[280px] md:w-[320px] justify-center rounded-3xl  px-2 py-2 bg-white "
          style={{ marginLeft: 24 }}
        >
          <button
            className={`px-6 sm:px-5 lg:px-5 py-1 rounded-3xl  ${
              InputValue.qrmode ? " bg-blue-800 text-white " : " "
            }  md:w-1/2`}
            onClick={() => setInputValue({ ...InputValue, qrmode: true })}
          >
            Dynamic QR
          </button>
          <button
            className={`px-6 sm:px-5 lg:px-5 py-1 rounded-3xl  ${
              !InputValue.qrmode ? " bg-blue-800 text-white " : " "
            }  md:w-1/2`}
            onClick={() => setInputValue({ ...InputValue, qrmode: false })}
          >
            Static QR
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-2">
        <div className="leftQR-top text-3xl font-bold">
          <div className="mb-8 mt-4">
            <input
              type="url"
              value={InputValue.url}
              onChange={handleInputChange}
              placeholder="Enter URL"
              className="p-3 text-base font-normal shadow-lg rounded-xl w-full md:w-[70%]"
            />
            {!isValid && InputValue.url !== "" && (
              <>
                <p className="text-red-800 font-medium text-sm pt-2">
                  {errorMessage}
                </p>
                {/* <p className="text-red-800 font-medium text-sm pt-0">
                  example: "{urlExample}"
                </p> */}
              </>
            )}
            {/* {!isValid && InputValue.url !== "" && (
              <p className="text-red-800 font-medium text-sm pt-2">
                {errorMessage}
              </p>
            )} */}
          </div>
          <h2 className="font-medium text-lg py-2">Dot Style</h2>
          <div className="flex justify-start space-x-4 items-center md:justify-start sm:space-x-6 mb-8">
            {dotStylesImages.map((di, index) => (
              <Buttons
                key={index}
                id={index}
                image={di}
                p="p-1"
                isSelected={InputValue.dotStyle === index}
                onClick={() =>
                  setInputValue({ ...InputValue, dotStyle: index })
                }
              />
            ))}
          </div>
          <h2 className="font-medium text-lg py-2">Corner Style</h2>
          <div className="flex justify-start space-x-4 items-center mb-8">
            {cornerStylesImages.map((di, index) => (
              <Buttons
                key={index}
                id={index}
                image={di}
                p="p-2"
                isSelected={InputValue.cornerStyle === index}
                onClick={() =>
                  setInputValue({ ...InputValue, cornerStyle: index })
                }
              />
            ))}
          </div>
          <h2 className="font-medium text-lg py-2">Custom Logo</h2>
          <div
            className="flex items-center justify-between bg-white rounded-lg px-4 py-2 lg:py-4 font-extralight text-lg md:w-[80%] mb-4"
            onClick={() => fileInputField.current.click()}
          >
            <input
              type="file"
              ref={fileInputField}
              accept="image/*"
              onChange={handleFileChange}
              placeholder="Add your logo"
              className="rounded-lg px-2 py-2 w-full absolute font-normal"
              hidden
            />
            <label
              htmlFor="file"
              className={`${file ? "text-blue-700 font-medium" : ""}`}
            >
              {!file ? "Add your logo" : file}
            </label>
            <img src="/images/AddLogo.png" alt="AddLogo" width={50} />
          </div>
        </div>
        <div className="rightQR-top px-6 py-2 w-[90%]">
          <div className="grid">
            <div className="bg-white rounded-3xl mt-2 w-[280px] md:w-[100%] md:h-[360px]">
              <div className={`p-8`}>
                {/* <div className="mt-2 w-[280px] md:w-[100%]">
                  <LoadingAnimation />
                </div> */}
                {loading && <LoadingAnimation />}
                {generateQR ? (
                  <QRGenerator />
                ) : (
                  <img
                    src="/images/Icon05.png"
                    alt="Icon05"
                    className={` ${loading && "hidden"}`}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col my-4">
              <input
                type="range"
                className="transparent h-1.5   cursor-pointer appearance-none rounded-lg border-transparent bg-white mt-4"
                min="0"
                max="10"
                id="customRange2"
                onChange={(e) => onChangeSliderValue(e)}
              />
              <label
                htmlFor="customRange2"
                className="mb-2  text-neutral-700 dark:text-neutral-200 text-center "
              >
                {sliderValue}x{sliderValue} px
              </label>
            </div>
            <button
              onClick={handleGenerateQR}
              className={`w-full rounded-lg bg-blue-800 hover:bg-blue-400 text-xl font-medium text-white py-6 ${
                !isValid && "cursor-not-allowed"
              }`}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
