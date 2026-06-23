import React from "react";

const LogoSlider = ({ logos, direction = "left" }) => {
  return (
    <div className="relative overflow-hidden w-full">
      <div
        className={`flex w-max gap-20 ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[130px]"
          >
            <img
              src={logo}
              alt="logo"
              className="h-20 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;