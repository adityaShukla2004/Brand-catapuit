import React from "react";
import { ArrowUpRight } from "lucide-react";

import serviceImg1 from "../assets/HomeAssets/service.png";
import serviceImg2 from "../assets/HomeAssets/service.png";

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
   id="services"
  className="bg-[#0d0d0f] py-36 overflow-hidden"
 style={{
  clipPath: "polygon(0 0%, 100% 6%, 100% 100%, 0% 100%)",
}}
>
      <div className="w-full mx-auto">
        <div className=" relative  px-5 lg:px-16">

          {/* Heading */}
          <div className="mb-10">
            <p className="uppercase tracking-[5px] text-white text-xs">
              Our Services
            </p>

            <h3 className="text-red-500 text-2xl font-medium mt-2">
              PEOPLE
            </h3>
          </div>

          <div className="w-full flex items-center justify-between ">

            {/* LEFT SIDE */}
            <div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 mb-6 ${
                    service === "BRANDING & DESIGN"
                      ? "text-red-500"
                      : "text-white/25"
                  }`}
                >
                  {service === "BRANDING & DESIGN" && (
                    <span className="text-white text-sm">04</span>
                  )}
                  <h2
                    className={`font-light tracking-wide ${
                      service === "BRANDING & DESIGN"
                        ? "text-5xl"
                        : "text-4xl"
                    }`}
                  >
                    {service}  {service === "DIGITAL" ?  <span className="uppercase tracking-[4px] text-lg relative -top-6 left-32">
                <span className="text-red-500">REAL BRANDS.</span>{" "}
                <span className="text-white/40">REAL SHIFTS.</span>{" "}
                <span className="text-red-500">REAL RESULTS.</span>
              </span> : null} 
                  </h2>

                  {service === "BRANDING & DESIGN" && (
                    <button className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center ml-2">
                      <ArrowUpRight className="text-white" size={22} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className=" w-[30%] flex flex-col items-start justify-baseline">

              <div className="flex gap-4 mb-8">
                <img
                  src={serviceImg1}
                  alt=""
                  className="w-full h-[180px] object-cover"
                />

              
              </div>

             

              <ul className="space-y-2 text-white/75">
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