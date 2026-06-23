import React from "react";
import LogoSlider from "./LogoSlider";

import logo1 from "../assets/HomeAssets/slogo1.webp";
import logo2 from "../assets/HomeAssets/slogo2.webp";
import logo3 from "../assets/HomeAssets/slogo3.webp";
import logo4 from "../assets/HomeAssets/slogo4.webp";
import logo5 from "../assets/HomeAssets/slogo5.webp";

const logos = [logo1, logo2, logo3, logo4, logo5,logo1,logo2,logo3];

const LogoSliderMain = () => {
  return (
    <section className="bg-[#f7f7f7] py-20 space-y-16 max-full m-auto">
      
      {/* Left Moving */}
      <LogoSlider
        logos={logos}
        direction="left"
      />

      {/* Right Moving */}
      <LogoSlider
        logos={logos}
        direction="right"
      />

      {/* Left Moving */}
      <LogoSlider
        logos={logos}
        direction="left"
      />

    </section>
  );
};

export default LogoSliderMain;