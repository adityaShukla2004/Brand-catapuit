import React from "react";
import { ArrowUpRight } from "lucide-react";
import projectImage from "../assets/HomeAssets/bannerBoy.jpg";

const FeaturedProject = () => {
  return (
    <section className="relative h-[160vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={projectImage}
        alt="Project"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />

      {/* Featured Projects */}
      <p className="absolute top-[120px] left-[70px] z-20 text-[11px] tracking-[6px] uppercase text-white/70">
        Featured Projects
      </p>

      {/* Left Content */}
      <div className="absolute left-[70px] top-[52%] -translate-y-1/2 z-20">
        <div className="flex items-center gap-6">
          <span className="text-[#d9253a] text-xl tracking-widest">
            ( 01 )
          </span>

          <h2 className="text-white font-black text-6xl lg:text-7xl lowercase">
            accato
          </h2>
        </div>

        {/* Faded Text */}
        <h3 className="mt-24 text-[55px] font-light uppercase text-white/5">
          WE ADAPT FOR YOU
        </h3>

        {/* Arrow */}
        <button className="mt-6 ml-60 flex h-14 w-14 items-center justify-center rounded-full bg-[#d9253a] transition hover:scale-105">
          <ArrowUpRight size={24} className="text-white" />
        </button>
      </div>

      {/* Right Content */}
      <div className="absolute right-[80px] top-[55%] -translate-y-1/2 z-20 max-w-md">
        <h3 className="mb-6 text-4xl font-medium uppercase tracking-wide text-[#d9253a]">
          Our Approach
        </h3>

        <div className="mb-6 flex gap-3">
          <span className="rounded-full border border-white/40 px-4 py-1 text-[11px] uppercase text-white">
            Branding
          </span>

          <span className="rounded-full bg-white px-4 py-1 text-[11px] font-semibold uppercase text-[#d9253a]">
            Strategy
          </span>
        </div>

        <p className="text-sm leading-6 text-white/85">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type.
        </p>
      </div>
    </section>
  );
};

export default FeaturedProject;