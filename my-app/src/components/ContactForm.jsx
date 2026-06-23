import React from "react";
import img1 from "../assets/HomeAssets/socail1.png";
import img2 from "../assets/HomeAssets/socail2.png";
import img3 from "../assets/HomeAssets/socail3.png";

const ContactForm = () => {
  return (
    <>
      {/* ================= CONTACT SECTION ================= */}

      <section className="bg-[#C62432]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24">

          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left */}
            <div>
              <h1 className="text-white font-extralight uppercase leading-[0.9] tracking-tight">
                <span className="block text-4xl md:text-5xl lg:text-6xl">
                  We Don't
                </span>

                <span className="block text-4xl md:text-5xl lg:text-6xl">
                  Chase.
                </span>

                <span className="block text-4xl md:text-5xl lg:text-6xl">
                  We Calibrate.
                </span>
              </h1>

              <p className="text-white/90 mt-8 max-w-sm text-sm md:text-base">
                If you're thinking big, thinking bold, or thinking finally —
                you're thinking like us.
              </p>
            </div>

            {/* Right */}
            <div>

              <div className="mb-12">
                <label className="block text-white uppercase tracking-[4px] text-xs mb-4">
                  Name
                </label>

                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/60 pb-3 text-white outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">

                <div>
                  <label className="block text-white uppercase tracking-[4px] text-xs mb-4">
                    Email
                  </label>

                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-white/60 pb-3 text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-white uppercase tracking-[4px] text-xs mb-4">
                    Phone
                  </label>

                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/60 pb-3 text-white outline-none"
                  />
                </div>

              </div>

              <div className="mb-12">
                <label className="block text-white uppercase tracking-[4px] text-xs mb-4">
                  Message
                </label>

                <textarea
                  rows={2}
                  className="w-full bg-transparent border-b border-white/60 text-white outline-none resize-none"
                />
              </div>

              <button className="w-full bg-[#191B20] hover:bg-black transition py-3 rounded-full text-white uppercase tracking-[2px] text-lg font-medium">
                Start A Conversation
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* ================= SOCIAL PRESENCE SECTION ================= */}

      <section className="bg-[#212121] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT ORBIT IMAGES */}

            <div className="relative flex justify-center">

              <div className="relative w-[420px] h-[420px]">

                {/* Orbit Rings */}
                <div className="absolute inset-0 rounded-full border border-white/30"></div>

                <div className="absolute inset-[40px] rounded-full border border-white/30"></div>

                <div className="absolute inset-[90px] rounded-full border border-white/30"></div>

                {/* Center Circle */}
                <div className="absolute left-1/2 top-1/2 w-10 h-10 rounded-full bg-[#AFC0FF] -translate-x-1/2 -translate-y-1/2"></div>

                {/* Replace with imported images */}

                <img
                  src={img1}
                  alt=""
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full object-cover"
                />

                <img
                  src={img2}
                  alt=""
                  className="absolute top-16 left-8 w-24 h-24 rounded-full object-cover"
                />

                <img
                  src={img3}
                  alt=""
                  className="absolute top-16 right-8 w-16 h-16 rounded-full object-cover"
                />

                <img
                  src={img2}
                  alt=""
                  className="absolute bottom-10 left-12 w-20 h-20 rounded-full object-cover"
                />

                <img
                  src={img1}
                  alt=""
                  className="absolute bottom-12 right-8 w-24 h-24 rounded-full object-cover"
                />

                <img
                  src={img3}
                  alt=""
                  className="absolute left-1/2 top-[45%] -translate-x-1/2 w-20 h-20 rounded-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div>

              <p className="uppercase tracking-[6px] text-[#E52A3D] text-xs mb-6">
                Social Presence
              </p>

              <h2 className="text-white font-extralight uppercase leading-[0.95]">
                <span className="block text-6xl lg:text-7xl">
                  Spam
                </span>

                <span className="block text-6xl lg:text-7xl">
                  The Gram
                </span>
              </h2>

              <button className="mt-10 bg-[#E52A3D] hover:bg-red-700 transition px-8 py-3 rounded-full text-white uppercase tracking-wide font-medium">
                Follow @brandcatapult
              </button>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default ContactForm;