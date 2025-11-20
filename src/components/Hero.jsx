import React from "react";
import hero_Image1 from "../assets/heroImage1.jpg";
import search_Icon from "../assets/search.png";
import useTypingEffect from "./UseTypingEffect";

const Hero = () => {
  const placeholder = useTypingEffect([
    "Search by model...",
    "Search by fuel type...",
    "Search by brand...",
  ]);

  return (
    <div className="relative h-[500px] overflow-hidden mb-10 ">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={hero_Image1}
          alt="Luxury Cars"
          className="w-full h-full object-cover"
        />
        {/* Fixed gradient class - was bg-linear-to-b, should be bg-gradient-to-b */}
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/80 to-transparent"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col mt-10 items-center justify-center h-full gap-6 text-white px-4">
        <div className="header-text space-y-5">
          <h1 className="font-bold text-5xl text-center">
            Your <span className="text-blue-400">Dream Car</span> Awaits
          </h1>
          <p className="text-center text-white font-semibold text-lg">
            Find Certified New & Used Cars
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-gray-600/60 backdrop-blur-sm p-6 rounded-xl w-full max-w-xl">
          {/* Tabs */}
          <div className="space-x-7 mb-5 text-lg font-semibold text-center cursor-pointer">
            <button className="underline hover:text-blue-300 transition-colors">
              Find a car
            </button>
            <button className="underline hover:text-blue-300 transition-colors">
              Sell my car
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full">
            <input
              type="text"
              className="w-full h-14 pl-6 pr-16 rounded-full text-lg font-medium bg-white text-gray-800 outline-none shadow-inner border-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50 transition-all placeholder:text-gray-400 placeholder:font-normal"
              placeholder={placeholder}
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center hover:opacity-80 transition-opacity">
              <img
                src={search_Icon}
                alt="search icon"
                className="h-full w-full object-contain"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
