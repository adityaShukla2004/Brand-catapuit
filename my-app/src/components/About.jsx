import React from "react";

import image1 from "../assets/HomeAssets/about1.png";
import image2 from "../assets/HomeAssets/about2.png";
import image3 from "../assets/HomeAssets/about3.png";

const About = () => {
  return (
    <section
 
      className="py-12 md:py-20 overflow-hidden mt-0 lg:-mt-72"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Row 1 */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-around gap-10 lg:gap-0">

          {/* Text */}
          <div className="text-center lg:text-left">
            <p className="text-[#5d5d5d] text-sm md:text-[12px] leading-7 md:leading-8 max-w-lg">
              We believe one size fits one, and only one! We work to become
              the right agency for our clients - researching, learning,
              experimenting and adapting tirelessly until we become the
              masters of their trade.
            </p>
          </div>

          {/* Image Circle */}
          <div className="relative flex items-center justify-center w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px]">
            <div className="absolute w-full h-full rounded-full bg-[#eef1f8]" />

            <div className="absolute w-[75%] h-[75%] rounded-full bg-[#e3e8f7]" />

            <div className="absolute w-[52%] h-[52%] rounded-full bg-[#d3dcf7]" />

            <div className="absolute w-[28%] h-[28%] rounded-full bg-[#b8c8f6]" />

            <img
              src={image1}
              alt="Plan"
              className="relative z-10 w-[150px] md:w-[190px] lg:w-[220px] object-contain"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row items-center justify-around gap-10 lg:gap-0 mt-12 lg:-mt-10">

          {/* Image Circle */}
          <div className="relative flex items-center justify-center w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px]">
            <div className="absolute w-full h-full rounded-full bg-[#F4EEDD]" />

            <div className="absolute w-[72%] h-[72%] rounded-full bg-[#F9EFD2]" />

            <img
              src={image2}
              alt="Cube"
              className="relative z-10 w-[170px] md:w-[220px] lg:w-[260px] object-contain"
            />
          </div>

          {/* Text */}
          <div className="text-center lg:text-left">
            <p className="text-[#5d5d5d] text-sm md:text-[12px] leading-7 md:leading-8 max-w-lg">
              Our clients think of us as an extension of their team.
              With an approach guided by empathy, flexibility and
              consistent communication we take ownership of our role
              as their partners.
            </p>

            <h3 className="mt-8 text-[#d7283c] uppercase tracking-[3px] text-2xl md:text-3xl font-medium">
              Globally Since 2015
            </h3>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-around gap-10 lg:gap-0 mt-12 lg:-mt-10">

          {/* Text */}
          <div className="text-center lg:text-left">
            <p className="text-[#5d5d5d] text-sm md:text-[12px] leading-7 md:leading-8 max-w-lg">
              We help brands transform faster than their consumers do.
              Every strategy, campaign or goal we set out is tied to
              concrete and measurable metrics. It's this reflection
              and evaluation that helps us create dynamic strategies
              and rock-solid processes.
            </p>

            <h3 className="mt-8 text-[#d7283c] uppercase tracking-[3px] text-2xl md:text-3xl font-medium">
              Projects
            </h3>
          </div>

          {/* Image Circle */}
          <div className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px]">
            <div className="absolute w-full h-full rounded-full bg-[#E6F0E2]" />

            <div className="absolute w-[72%] h-[72%] rounded-full bg-[#DDEDD8]" />

            <img
              src={image3}
              alt="Projects"
              className="relative z-10 w-[220px] md:w-[280px] lg:w-[340px] object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;