import React from "react";

const ExperienceSection = () => {
  return (
    <section className="relative bg-[#f7f7f7] py-24 overflow-hidden">
      
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[radial-gradient(circle,#d9d9d9_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-[radial-gradient(circle,#d9d9d9_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,#d9d9d9_1px,transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        <h2 className="text-[#b3b3b3] text-2xl md:text-3xl font-light leading-relaxed">
          A growing collective of thinkers, storytellers, designers,
          <br />
          and strategists,
          <span className="font-semibold text-[#9e9e9e]">
            {" "}60+ strong, across 9 countries,
          </span>
          <br />
          <span className="font-semibold text-[#9e9e9e]">
            grown steadily over 10+ years
          </span>
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          
          <div>
            <h3 className="text-5xl font-bold text-[#2b2b2b]">9+</h3>
            <p className="mt-2 text-gray-500 uppercase tracking-wider text-sm">
              Countries
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#2b2b2b]">10+</h3>
            <p className="mt-2 text-gray-500 uppercase tracking-wider text-sm">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#2b2b2b]">60+</h3>
            <p className="mt-2 text-gray-500 uppercase tracking-wider text-sm">
              Team Members
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;