import React from "react";
import globeImage from "../assets/HomeAssets/Globe.png";

const Globe = () => {
  return (
    <section className="bg-[#f7f7f7] py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">

        {/* Floating Dots - Hide some on mobile */}
        <div className="absolute top-8 left-4 md:left-16 w-4 md:w-6 h-4 md:h-6 rounded-full bg-[#9D84D8]" />
        <div className="absolute top-2 left-20 md:left-52 w-2 h-2 rounded-full bg-[#F2C94C]" />
        <div className="absolute top-0 right-10 md:right-44 w-3 h-3 rounded-full bg-[#D7263D]" />
        <div className="absolute top-16 md:top-20 right-4 md:right-16 w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#7ED957]" />

        <div className="hidden md:block absolute top-56 left-28 w-3 h-3 rounded-full bg-[#79D6F9]" />
        <div className="hidden md:block absolute top-60 right-52 w-2 h-2 rounded-full bg-[#7EA7FF]" />

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-[30px] md:text-[46px] lg:text-[56px] font-light uppercase text-[#666] leading-tight">

            <span className="block">
              We Partner
            </span>

            <span className="flex justify-center items-center gap-2 md:gap-4">
              With People
              <span className="w-10 md:w-20 h-[3px] bg-[#F2C94C]" />
            </span>

            <span className="flex justify-center items-center gap-2 md:gap-4">
              <span className="w-10 md:w-20 h-[3px] bg-[#AFC0FF]" />
              In Motion
            </span>

          </h2>

          <p className="mt-6 md:mt-8 text-gray-500 text-sm max-w-md mx-auto px-4">
            Founders with conviction, teams willing to stretch,
            ideas too big to stay small.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center mt-12 md:mt-20 lg:mt-36">

          {/* Left Stats */}
          <div className="space-y-10 md:space-y-14 lg:space-y-20 lg:px-24">

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center sm:text-left items-center sm:items-start">
              <h3 className="text-[#D7263D] text-4xl md:text-5xl lg:text-6xl font-extralight min-w-[120px]">
                30K+
              </h3>

              <p className="text-gray-500 text-sm max-w-[220px]">
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center sm:text-left items-center sm:items-start">
              <h3 className="text-[#D7263D] text-4xl md:text-5xl lg:text-6xl font-extralight min-w-[120px]">
                2K+
              </h3>

              <p className="text-gray-500 text-sm max-w-[220px]">
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center sm:text-left items-center sm:items-start">
              <h3 className="text-[#D7263D] text-4xl md:text-5xl lg:text-6xl font-extralight min-w-[120px]">
                100+
              </h3>

              <p className="text-gray-500 text-sm max-w-[220px]">
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>

          </div>

          {/* Right Globe */}
          <div className="relative flex justify-center mt-8 lg:mt-0">

            <img
              src={globeImage}
              alt="Globe"
              className="w-[260px] sm:w-[320px] md:w-[400px] max-w-full object-contain"
            />

            {/* Country Tag */}
            <div className="absolute right-0 md:right-10 lg:right-16 top-1/2 -translate-y-1/2">
              <span className="bg-[#222] text-white text-[10px] md:text-xs px-3 md:px-4 py-2 rounded-full tracking-wider">
                INDIA
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Globe;