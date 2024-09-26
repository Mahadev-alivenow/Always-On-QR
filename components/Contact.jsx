import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-gray-100">
      <div className="bg-gray-100 flex justify-around items-center py-8 sm:p-8 md:p-2 mt-16">
        <div className="grid md:grid-cols-2 md:w-[80%] gap-2 sm:gap-4 justify-center place-content-center items-center m-12">
          <div className="space-y-4">
            <img src="/images/Contact.png" alt="contact image" width={150} />
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-wider font-customL">
              We simplify the bussiness of life
            </h2>
            <p className="text-3xl font-thin font-customL ">Mail Now</p>
            <a
              href="#"
              className="text-2xl lg:text-4xl font-extrabold text-customBlue font-customB"
            >
              contact@alwaysonqr.com
            </a>
          </div>
          <div className="bg-white rounded-2xl backdrop-filter shadow-[0_4px_6px_rgba(0,0,0,0.12)] p-6 md:p-8 lg:p-16">
            <form action="">
              <div className="flex flex-col space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold font-customB">
                  Want to know more?
                </h2>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-white rounded-2xl w-full p-4 shadow-[0_2px_3px_rgba(0,0,0,0.12)] border focus:border-black font-customL pl-8"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white rounded-2xl w-full p-4 shadow-[0_2px_3px_rgba(0,0,0,0.12)] border focus:border-black font-customL pl-8"
                />
                <input
                  type="number"
                  placeholder="Mobile"
                  className="bg-white rounded-2xl w-full p-4 shadow-[0_2px_3px_rgba(0,0,0,0.12)] border focus:border-black font-customL pl-8"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="bg-white rounded-2xl w-full p-4 shadow-[0_2px_3px_rgba(0,0,0,0.12)] border focus:border-black font-customL pl-8"
                />
              </div>
              <button className="bg-custom-gradient text-white hover:bg-blue-400 rounded-2xl py-3 px-12 mt-4 lg:py-5 lg:px-24 font-customL">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
