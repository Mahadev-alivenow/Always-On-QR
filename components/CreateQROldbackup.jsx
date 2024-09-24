"use client";
import { InputContext } from "@/app/page";
import Buttons from "@/utils/Buttons";
import { cornerStylesImages, dotStylesImages } from "@/utils/data";
import React, { useContext, useRef, useState, useEffect } from "react";
import QRCode from "./GenerateQRcode";
import QRGenerator from "./GenerateQRNew";
import isUrl from "is-url";
import validator from "validator";
import { LoadingAnimation } from "@/utils/LoadingAnimation";

export default function CreateQR() {
  const { InputValue, setInputValue } = useContext(InputContext);
  const [selectedDot, setSelectedDot] = useState(null);
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sliderValue, setSliderValue] = useState(1024);

  const [validURL, setValidURL] = useState("");
  const [generateQR, setGenerateQR] = useState(null);
  const [url, setUrl] = useState("");
  // console.log(sliderValue);
  // console.log(selectedDot);

  const [file, setFile] = useState(false);
  const [slider, setSlider] = useState(1024);
  const fileInputField = useRef(null);
  const pixels = [300, 500, 600, 900, 1024, 1200, 1800, 2000, 2400, 3600, 4800];

  const [errorMessage, setErrorMessage] = useState("");
  // useEffect(()=>{

  // },slider)
  const onChangeSliderValue = (e) => {
    const newValue = pixels[e.target.value]; // Get the new value based on the slider
    setSliderValue(newValue);
    setInputValue({ ...InputValue, sliderValue: newValue });
    // console.log("onChange slider : ", newValue);
  };
  // URL validation function using regex
  const validateURL = (url) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // Protocol (optional)
        '((([a-zA-Z0-9$-_@.&+!*"(),]|[a-zA-Z0-9-.]){1,}(:[0-9]{1,5})?)|([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}))' + // Domain name and optional port
        '(\\/[a-zA-Z0-9$-_@.&+!*"(),/:;?]*)?$' // Path and query string (optional)
    );
    return pattern.test(url);
  };

  // Handle URL input change
  const handleUrlChange = (e) => {
    const newUrl = e.target.value;
    setUrl(newUrl);

    if (validateURL(newUrl)) {
      setErrorMessage(""); // Clear error message if valid
      setValidURL(true);
    } else {
      setErrorMessage("Please enter a valid URL."); // Set error message if invalid
      setIsValid(false);
    }
  };

  // Handle form submission (if needed)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateURL(url)) {
      setErrorMessage("Please enter a valid URL.");
      return;
    }

    // Proceed with form submission or other actions
    console.log("Form submitted with URL:", url);
  };

  // const validateUrl = (url) => {
  //   const regEx =
  //     /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  //   return regEx.test(url);
  // };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0].name);
      // setInputValue({
      //   ...InputValue,
      //   customLogo: URL.createObjectURL(e.target.files[0]),
      // });
      // console.log(e.target.files[0].name);
    }
    if (e.target.files && e.target.files[0]) {
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
  // const handleValidation = () => {
  //   setValidURL(validator.isURL(InputValue.url));
  //   console.log(validURL);
  // };
  const handleInputChange = (e) => {
    setInputValue({ ...InputValue, url: e.target.value });
    let inputValue = e.target.value;
    if (!e.target.value.startsWith("https://")) {
      inputValue = "https://" + inputValue;
      // setInputValue({ ...InputValue, url: inputValue });
      console.log(inputValue);
      setValidURL(inputValue);

      // if (validateURL(inputValue)) {
      //   setErrorMessage(""); // Clear error message if valid
      // } else {
      //   setErrorMessage("Please enter a valid URL."); // Set error message if invalid
      // }
      // setUrl(inputValue);
    }
    // else{setInputValue({ ...InputValue, url: inputValue });}

    const newUrl = e.target.value;

    // setValidURL(isUrl({ ...InputValue, url: e.target.value }));
    // console.log("dynamic check - ", validator.isURL(e.target.value));
    // setUrl({ ...InputValue, url: e.target.value });
    // const isValid = validateUrl(url);
    // if (isValid) {
    //   setMessage("Valid");
    // } else {
    //   setMessage("Not Valid");
    // }
    // setIsValid(isValid);
  };
  const handleGenerateQR = (e) => {
    // handleValidation();
    // setGenerateQR({ ...validURL, validURL });
    e.preventDefault();
    if (isUrl(validURL)) {
      setLoading(true);
      console.log("loading :: ", loading);

      setTimeout(() => {
        setGenerateQR(true);
        setLoading(false);
        console.log("loading :: ", loading);
      }, 1500);
    } else {
      return;
    }

    // if (!validateURL(url)) {
    //   setErrorMessage("Please enter a valid URL.");
    //   return;
    // }

    // Proceed with form submission or other actions
    console.log("Form submitted with URL:", InputValue.url);
    // e.preventDefault();
  };
  // const handleQrMode = (e) => {
  //   // setInputValue({...InputValue, qrmode: e.target.value})
  //   console.log(e)
  // }

  return (
    // <>
    // <div className="relative sm:w-[60%] md:w-[90%] lg:w-[50%] ">
    //   <img
    //     src="/images/Mobile-QRBG.png"
    //     alt=""
    //     className="absolute  mx-0 z-[-1] max-h-full w-full   md:flex md:justify-center"
    //   />
    //   <div className="flex justify-center    ">
    //     <div className="flex flex-col-reverse pt-8 items-justify-between  md:flex-row md:justify-between md:pt-12 md:w-full ">
    //       <p className="text-4xl font-extrabold text-left  mx-0 py-4">
    //         Enter Content
    //       </p>
    //       <div className="bg-white rounded-full items-center   justify-evenly flex py-2 px-2  text-md ">
    //         <button className="hover:bg-blue-800 rounded-full hover:text-white px-10 py-2 text-blue-800">
    //           Dynamic QR
    //         </button>
    //         <button className="hover:bg-blue-800 rounded-full hover:text-white px-10 py-2 text-blue-800">
    //           Static QR
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex flex-col sm:flex-row  sm:items-center sm:justify-evenly">
    //     <div className="flex flex-col justify-center py-2 ">
    //       <input
    //         type="text"
    //         placeholder="Enter URL"
    //         className="rounded-lg px-2 py-3 w-full"
    //       />
    //       <p className="text-2xl">Dot Styles</p>
    //       <div className="flex justify-between gap-4 self-center items-center py-2">
    //         <button className="rounded-lg">
    //           <img src="/images/StyleIcon01.png" width={70} alt="" />
    //         </button>
    //         <button className="rounded-lg">
    //           <img src="/images/StyleIcon02.png" width={70} alt="" />
    //         </button>
    //         <button className="rounded-lg">
    //           <img src="/images/StyleIcon03.png" width={70} alt="" />
    //         </button>
    //         <button className="rounded-lg">
    //           <img src="/images/StyleIcon04.png" width={70} alt="" />
    //         </button>
    //       </div>
    //       <p className="text-2xl">Corner Styles</p>
    //       <div className="flex justify-between gap-4 self-start items-center py-2">
    // <button className="rounded-lg">
    //   <img src="/images/StyleIcon05.png" width={70} alt="" />
    // </button>
    // <button className="rounded-lg">
    //   <img src="/images/StyleIcon06.png" width={70} alt="" />
    // </button>
    // <button className="rounded-lg">
    //   <img src="/images/StyleIcon07.png" width={70} alt="" />
    // </button>
    //       </div>
    //       <p className="text-2xl">Custom Logo</p>
    // <div
    //   className="flex items-center justify-between bg-white rounded-lg px-4 py-2"
    //   onClick={() => fileInputField.current.click()}
    // >
    //   <input
    //     type="file"
    //     ref={fileInputField}
    //     onChange={handleFileChange}
    //     placeholder="Add your logo"
    //     className="rounded-lg px-2 py-3 w-full absolute"
    //     hidden
    //     // style={{display:"block"}}
    //   />
    //   <label htmlFor="file">{!file ? "Add your logo" : file}</label>
    //   <img src="/images/AddLogo.png" alt="" width={50} />
    // </div>
    //     </div>
    //     <div className="flex flex-col justify-center items-center py-2 sm:w-[50%] space-y-4 ">
    //       <div className="rounded-3xl bg-white w-[80%]">
    //         <img src="/images/Icon05.png" alt="" className="px-20 py-20" />
    //       </div>

    // <div className="flex flex-col w-[90%]">
    //   <input
    //     type="range"
    //     className="transparent h-1.5   cursor-pointer appearance-none rounded-lg border-transparent bg-white"
    //     min="0"
    //     max="10"
    //     id="customRange2"
    //   />
    //   <label
    //     htmlFor="customRange2"
    //     className="mb-2  text-neutral-700 dark:text-neutral-200 text-center "
    //   >
    //     {slider}x{slider} px
    //   </label>
    // </div>

    // <button className="w-full rounded-lg bg-blue-800 hover:bg-blue-400 text-xl font-medium text-white py-6">
    //   Generate
    // </button>
    //     </div>
    //   </div>
    // </div>
    // </>
    <div className="rounded-xl backdrop-filter bg-white/5   shadow-2xl backdrop-blur-3xl mx-4  p-6 lg:p-16">
      <div className="grid md:grid-cols-2 md:place-content-between gap-2 md:gap-2 md:space-x-0 ">
        <div className="leftQR-top order-2 text-3xl font-bold">
          Enter Content
        </div>
        <div className="rightQR-top md:order-2 rounded-3xl px-2 py-2 bg-white w-fit">
          <button
            className={`px-6 sm:px-8 lg:px-12 py-1 rounded-3xl ${
              InputValue.qrmode ? " bg-blue-800 text-white " : " "
            }  w-fit`}
            onClick={() => setInputValue({ ...InputValue, qrmode: true })}
          >
            Dynamic QR
          </button>
          <button
            className={`px-6 sm:px-8 lg:px-12 py-1 rounded-3xl ${
              !InputValue.qrmode ? " bg-blue-800 text-white " : " "
            }  w-fit`}
            onClick={() => setInputValue({ ...InputValue, qrmode: false })}
          >
            Static QR
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-2">
        <div className="leftQR-top text-3xl font-bold ">
          <div className=" mb-8 mt-4">
            <input
              type="url"
              value={InputValue.url}
              onChange={handleInputChange}
              placeholder="Enter URL"
              className="p-3 text-base font-normal shadow-lg rounded-xl w-full md:w-[70%]"
            />
            {!isUrl(validURL) && InputValue.url != "" && (
              <p className="text-red-800 font-medium  text-sm pt-2">
                Please enter valid URL
              </p>
            )}
          </div>
          <h2 className="font-medium text-lg py-2">Dot Style</h2>
          <div className="flex justify-start space-x-4 items-center md:justify-start sm:space-x-6 mb-8">
            {/* <Buttons p=" p-1 " /> */}
            {dotStylesImages.map((di, index) => (
              <Buttons
                key={index}
                id={index}
                image={di}
                p=" p-1 "
                isSelected={InputValue.dotStyle === index}
                // onClick={() => setSelectedDot(index)}
                onClick={() =>
                  setInputValue({ ...InputValue, dotStyle: index })
                }
              />
            ))}
            {/* <button className="rounded-lg bg-white p-1 md:p-4">
              <img src="/images/StyleIcon01.png" width={40} alt="" />
            </button>
            <button className="rounded-lg bg-white p-1 md:p-4">
              <img src="/images/StyleIcon02.png" width={40} alt="" />
            </button>
            <button className="rounded-lg bg-white p-1 md:p-4">
              <img src="/images/StyleIcon03.png" width={40} alt="" />
            </button>
            <button className="rounded-lg bg-white p-1 md:p-4">
              <img src="/images/StyleIcon04.png" width={40} alt="" />
            </button> */}
          </div>
          <h2 className="font-medium text-lg py-2">Corner Style</h2>
          <div className="flex justify-start space-x-4 items-center mb-8">
            {cornerStylesImages.map((di, index) => (
              <Buttons
                key={index}
                id={index}
                image={di}
                p=" p-2 "
                isSelected={InputValue.cornerStyle === index}
                // onClick={() => setSelectedDot(index)}
                onClick={() =>
                  setInputValue({ ...InputValue, cornerStyle: index })
                }
              />
            ))}
            {/* <button className="rounded-lg bg-white p-2 md:p-4">
              <img src="/images/StyleIcon05.png" width={40} alt="" />
            </button>
            <button className="rounded-lg bg-white p-2 md:p-4">
              <img src="/images/StyleIcon06.png" width={40} alt="" />
            </button>
            <button className="rounded-lg bg-white p-2 md:p-4">
              <img src="/images/StyleIcon07.png" width={40} alt="" />
            </button> */}
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
              className="rounded-lg px-2 py-2 w-full absolute font-normal "
              hidden
              // style={{display:"block"}}
            />
            <label
              htmlFor="file"
              className={`${file ? "text-blue-700 font-medium" : ""}`}
            >
              {/* <img src={InputValue.customLogo} /> */}
              {!file ? "Add your logo" : file}
            </label>
            <img src="/images/AddLogo.png" alt="AddLogo" width={50} />
          </div>
        </div>
        <div className="rightQR-top  px-6 py-2  w-[90%]">
          <div className="grid">
            <div className="bg-white rounded-3xl mt-2 w-[280px] md:w-[100%] ">
              <div className={`p-8`}>
                {loading && <LoadingAnimation />}
                {generateQR ? (
                  <QRGenerator />
                ) : (
                  //<QRCode data={InputValue.url} width={400} />
                  <img
                    src="/images/Icon05.png"
                    alt="Icon05"
                    // width={200}
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
                !isUrl(validURL) && "cursor-not-allowed"
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
