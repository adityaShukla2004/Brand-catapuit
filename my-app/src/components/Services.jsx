import React from "react";
import { ArrowUpRight } from "lucide-react";

import serviceImg1 from "../assets/HomeAssets/service.png";

const Services = () => {
  const services = [
    "STRATEGY & CONSULTING",
    "PUBLIC RELATIONS",
    "DIGITAL",
    "BRANDING & DESIGN",
    "BTL & ADVERTISING",
    "PHOTOGRAPHY",
    "TECHNOLOGY",
    "CGI / VFX",
  ];

  return (
    <section
     
      className="bg-[#0d0d0f] py-20 lg:py-36 overflow-hidden"
      style={{
        clipPath: "polygon(0 0%, 100% 6%, 100% 100%, 0% 100%)",
      }}
    >
      <div className="w-full mx-auto">
        <div className="relative px-4 md:px-8 lg:px-16">
          
          {/* Heading */}
          <div className="mb-10">
            <p className="uppercase tracking-[4px] lg:tracking-[5px] text-white text-[10px] lg:text-xs">
              Our Services
            </p>

            <h3 className="text-red-500 text-xl lg:text-2xl font-medium mt-2">
              PEOPLE
            </h3>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            
            {/* LEFT SIDE */}
            <div className="w-full lg:w-[65%]">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`mb-5 lg:mb-6 ${
                    service === "BRANDING & DESIGN"
                      ? "text-red-500"
                      : "text-white/25"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 lg:gap-4">
                    
                    {/* Number */}
                    {service === "BRANDING & DESIGN" && (
                      <span className="text-white text-sm">04</span>
                    )}

                    {/* Service Title */}
                    <h2
                      className={`font-light tracking-wide leading-tight ${
                        service === "BRANDING & DESIGN"
                          ? "text-2xl md:text-4xl lg:text-5xl"
                          : "text-xl md:text-3xl lg:text-4xl"
                      }`}
                    >
                      {service}
                    </h2>

                    {/* Arrow */}
                    {service === "BRANDING & DESIGN" && (
                      <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-red-500 flex items-center justify-center">
                        <ArrowUpRight
                          className="text-white"
                          size={20}
                        />
                      </button>
                    )}
                  </div>

                  {/* DIGITAL TAGLINE */}
                  {service === "DIGITAL" && (
                    <div className="mt-2 lg:mt-0 lg:ml-20 lg:relative lg:-top-12 lg:-right-24">
                      <span className="block uppercase tracking-[2px] lg:tracking-[4px] text-[10px] md:text-sm lg:text-lg">
                        <span className="text-red-500">
                          REAL BRANDS.
                        </span>{" "}
                        <span className="text-white/40">
                          REAL SHIFTS.
                        </span>{" "}
                        <span className="text-red-500">
                          REAL RESULTS.
                        </span>
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-[30%] flex flex-col">
              
              {/* Image */}
              <div className="mb-6 lg:mb-8 overflow-hidden rounded-xl">
                <img
                  src={serviceImg1}
                  alt="Service"
                  className="w-full h-[220px] md:h-[300px] lg:h-[180px] object-cover"
                />
              </div>

              {/* List */}
              <ul className="space-y-3 text-sm md:text-base text-white/75">
                <li>• Brand Identity Development</li>
                <li>• Re-Branding</li>
                <li>• Brand Communications</li>
                <li>• Brand Collaterals</li>
                <li>• Packaging Design</li>
                <li>• Marketing Collaterals</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;