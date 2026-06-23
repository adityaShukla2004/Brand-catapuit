import React from "react";
import heroBanner from "../assets/HomeAssets/heroBanner.png";

function HeroSection() {
  return (
    <section  className="relative w-full h-[90vh] overflow-hidden bg-white">
      {/* Background Image */}
      <img
        src={heroBanner}
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover z-50 "
      />

      {/* Text Overlay */}
      <div className=" absolute inset-0 flex flex-col items-center pt-16 md:pt-20 z-60">
        <p className="uppercase tracking-[5px] text-[#838383] text-xs md:text-sm mb-3">
          Market Strategies
        </p>

        <h1 className="text-center font-light uppercase leading-[0.9] text-[#838383]">
          <span className="block text-[40px] md:text-[70px] lg:text-[80px]">
            That Move
          </span>

         
        </h1>
          <div className=" w-[55%] lg:w-[40%] mx-auto flex items-center justify-between">
            <div>
             <p className="block text-[40px] md:text-[70px] lg:text-[80px] font-light uppercase leading-[0.9] text-[#838383]">
            With
          </p>
          </div>
          <div>
          <p className="block text-[40px] md:text-[70px] lg:text-[80px] font-light uppercase leading-[0.9] text-[#838383]">
           You
          </p>
          </div>
           </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-60">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
      </div>
    </section>
  );
}

export default HeroSection;