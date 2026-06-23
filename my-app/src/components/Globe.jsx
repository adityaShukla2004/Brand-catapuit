import React from "react";
import globeImage from "../assets/HomeAssets/Globe.png"; // replace later

const Globe = () => {
  return (
    <section className="bg-[#f7f7f7] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Floating Dots */}
        <div className="absolute top-8 left-16 w-6 h-6 rounded-full bg-[#9D84D8]" />
        <div className="absolute top-2 left-52 w-2 h-2 rounded-full bg-[#F2C94C]" />
        <div className="absolute top-0 right-44 w-3 h-3 rounded-full bg-[#D7263D]" />
        <div className="absolute top-20 right-16 w-4 h-4 rounded-full bg-[#7ED957]" />
        <div className="absolute top-56 left-28 w-3 h-3 rounded-full bg-[#79D6F9]" />
        <div className="absolute top-60 right-52 w-2 h-2 rounded-full bg-[#7EA7FF]" />

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-[42px] md:text-[56px] font-light uppercase text-[#666] leading-tight">
            <span className="block">
              We Partner
            </span>

            <span className="flex justify-center items-center gap-4">
              With People
              <span className="w-20 h-[3px] bg-[#F2C94C] text-justify" />
            </span>

            <span className="flex justify-center items-center gap-4 text-justify">
              <span className="w-20 h-[3px] bg-[#AFC0FF]" />
              In Motion
            </span>
          </h2>

          <p className="mt-8 text-gray-500 text-sm max-w-md mx-auto">
            Founders with conviction, teams willing to stretch,
            ideas too big to stay small.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-36">

          {/* Left Stats */}
          <div className="space-y-20 lg:px-24">

            <div className="flex gap-6">
              <h3 className="text-[#D7263D] text-6xl font-extralight min-w-[120px]">
                30K+
              </h3>

              <p className="text-gray-500 text-sm max-w-[220px]">
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>

            <div className="flex gap-6">
              <h3 className="text-[#D7263D] text-6xl font-extralight min-w-[120px]">
                2K+
              </h3>

              <p className="text-gray-500 text-sm max-w-[220px]">
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>

            <div className="flex gap-6">
              <h3 className="text-[#D7263D] text-6xl font-extralight min-w-[120px]">
                100+
              </h3>

              <p className="text-gray-500 text-sm max-w-[220px]">
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.
              </p>
            </div>

          </div>

          {/* Right Globe */}
          <div className="relative flex justify-center">

            <img
              src={globeImage}
              alt="Globe"
              className="w-[400px] max-w-md object-center"
            />

            {/* Country Tag */}
            <div className="absolute right-15 top-1/2 -translate-y-1/2">
              <span className="bg-[#222] text-white text-xs px-4 py-2 rounded-full tracking-wider">
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