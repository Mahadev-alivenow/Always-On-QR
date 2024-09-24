import React from "react";

export default function WhyQR() {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center  ">
      <div className="text-4xl sm:text-5xl  lg:text-7xl font-bold  text-center p-8 w-[90%] sm:w-[80%] md:w-[70%] xl:w-[50%] mt-12">
        <p>Why you should use a dynamic QR Code?</p>
      </div>
      <div className="grid grid-cols-[30%_70%] gap-2 md:grid-cols-[15%_50%_15%_50%] md:gap-2 place-content-center items-center mb-12">
        {/* <div className="flex flex-col sm:flex-row"> */}
        <img src="/images/Switch.png" alt="Switch image" width={70} />
        <p>Always ON</p>

        <img src="/images/Switch.png" alt="Switch image" width={70} />
        <p>Edit live QR CODES</p>
        {/* </div> */}
        {/* <div className="flex  flex-col sm:flex-col"> */}
        <img src="/images/Switch.png" alt="Switch image" width={70} />
        <p>Unlimited SCANS</p>

        <img src="/images/Switch.png" alt="Switch image" width={70} />
        <p>Track PERFORMANCE</p>
        {/* </div> */}
      </div>
    </div>
  );
}
