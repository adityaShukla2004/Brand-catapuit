import React from "react";

import img1 from "../assets/HomeAssets/socail1.png";
import img2 from "../assets/HomeAssets/socail2.png";
import img3 from "../assets/HomeAssets/socail3.png";
import img4 from "../assets/HomeAssets/socail1.png";
import img5 from "../assets/HomeAssets/socail2.png";
import img6 from "../assets/HomeAssets/socail3.png";

const Stack = ({
  height = "h-[240px]",
  image,
  halo = "#fde68a",
  small = false,
}) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Halo */}
      {!small && (
        <>
          <div
            className="absolute -top-10 w-32 h-32 rounded-full opacity-20"
            style={{ background: halo }}
          />
          <div
            className="absolute -top-5 w-24 h-24 rounded-full opacity-30"
            style={{ background: halo }}
          />
        </>
      )}

      {/* Image */}
      <div className="relative z-10 w-16 h-16 rounded-full overflow-hidden border-2 border-white">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Red Top */}
      <div className="w-24 h-6 bg-[#d91f32] rounded-t-full -mt-3 z-0" />

      {/* Cylinder */}
      <div
        className={`w-24 ${height} rounded-b-[10px] bg-white border border-gray-700`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom,#fff 0px,#fff 5px,#888 6px,#fff 7px)",
        }}
      />
    </div>
  );
};

const CultureSection = () => {
  return (
    <section  id="culture"
    className="w-full">
      {/* TOP */}
      <div className="bg-[#f7f7f7] py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6">

          {/* LEFT STACKS */}
          <div className="flex items-end gap-6 justify-center">

            <Stack image={img1} halo="#bfdbfe" height="h-[230px]" />

            <Stack image={img2} halo="#fde68a" height="h-[280px]" />

            <Stack image={img3} halo="#fecaca" height="h-[220px]" />

          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="uppercase tracking-[6px] text-xs text-red-500 mb-4">
              Culture
            </p>

            <h2 className="text-6xl font-light leading-none text-gray-700">
              RITUALS
              <br />
              THAT ECHO
              <br />
              THE ENERGY
            </h2>

            <button className="mt-4 bg-[#d91f32] text-white px-5 py-2 rounded-full text-xs uppercase tracking-wider">
              Our Culture
            </button>

            <p className="mt-6 text-gray-500 max-w-md">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-[#eef0fb] py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6">

          {/* LEFT */}
          <div className="flex items-end justify-center gap-8">

            <Stack image={img4} small height="h-[140px]" />

            <Stack image={img5} small height="h-[190px]" />

            <Stack image={img6} small height="h-[90px]" />

          </div>

          {/* RIGHT */}
          <div>
            <h2 className="text-6xl font-light leading-none text-gray-700">
              AND FOLKS
              <br />
              WHO MAKE
              <br />
              IT HAPPEN
            </h2>

            <button className="mt-4 bg-[#d91f32] text-white px-5 py-2 rounded-full text-xs uppercase tracking-wider">
              Join The Team
            </button>

            <p className="mt-6 text-gray-500 max-w-md">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Red Line */}
      <div className="h-1 bg-[#d91f32]" />
    </section>
  );
};

export default CultureSection;