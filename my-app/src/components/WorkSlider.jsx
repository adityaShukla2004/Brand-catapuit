// import React from "react";
// import WorkCard from "./WorkCard";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import product1 from "../assets/HomeAssets/product1.png";
// import product2 from "../assets/HomeAssets/product2.png";
// import product3 from "../assets/HomeAssets/product3.png";
// import bottomImage from "../assets/HomeAssets/redBanner.png";

// import "swiper/css";
// import "swiper/css/pagination";

// const works = [
//   {
//     title: "Nest",
//     image: product1 ,
//     tags: [
//       { label: "Branding" },
//       { label: "Strategy" },
//       { label: "PR" },
//     ],
//   },
//   {
//     title: "Happinest",
//     image:product1 ,
//     tags: [
//       { label: "Branding" },
//       { label: "Packaging" },
//       { label: "PR", active: true },
//     ],
//   },
//   {
//     title: "Shishu",
//     image: product3 ,
//     tags: [
//       { label: "Branding" },
//       { label: "Packaging" },
//       { label: "Social Media" },
//     ],
//   },
//   {
//     title: "Another",
//     image: product1 ,
//     tags: [
//       { label: "Branding" },
//       { label: "Digital" },
//     ],
//   },
// ];

// const WorkSlider = () => {
//   return (
//     <>
//     <section id="work" className="relative overflow-hidden bg-[#080808] py-10 pb-96">
      
//       {/* Top Controls */}
//       <div className="mx-auto mb-5 flex max-w-7xl items-center justify-between px-6">
//         <div className="flex gap-2">
//           <span className="h-2 w-2 rounded-full bg-white/40"></span>
//           <span className="h-2 w-2 rounded-full bg-white/40"></span>
//           <span className="h-2 w-2 rounded-full bg-red-500"></span>
//           <span className="h-2 w-2 rounded-full bg-white/40"></span>
//         </div>

//         <div className="flex items-center gap-4 text-white">
//           <span className="tracking-[8px] uppercase text-sm">
//             We Curate
//           </span>

//           <select className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-red-500 outline-none">
//             <option>Branding</option>
//             <option>Strategy</option>
//           </select>

//           <span className="tracking-[8px] uppercase text-sm">
//             For
//           </span>

//           <select className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-red-500 outline-none">
//             <option>D2C Brands</option>
//             <option>Startups</option>
//           </select>
//         </div>
//       </div>

//       {/* Background Text */}
//       <h2 className="relative top-0 left-1/2  text-[50px] font-light uppercase text-white/[0.03]">
//         We Stand With You
//       </h2>

//       {/* Slider */}
//       <div className="mx-auto max-w-7xl px-6">
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={20}
//           autoplay={{
//             delay: 3000,
//           }}
//           breakpoints={{
//             320: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             1200: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {works.map((item, index) => (
//             <SwiperSlide key={index}>
//               <WorkCard {...item} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Bottom Line */}
//       <div className="mx-auto mt-14 flex max-w-xs items-center">
//         <div className="h-[1px] flex-1 bg-white/20"></div>
//         <div className="mx-3 h-[3px] w-20 bg-red-500"></div>
//         <div className="h-[1px] flex-1 bg-white/20"></div>
//       </div>

//       {/* Button */}
//       <div className="mt-10 text-center">
//         <button className="rounded-full bg-red-500 px-8 py-3 text-sm font-semibold uppercase text-white transition hover:bg-red-600">
//           More Of Work
//         </button>
//       </div>

//       <h2 className="absolute bottom-96 left-10 text-[50px] uppercase text-white/[0.03]">
//         We Transform You
//       </h2>
//     </section>

//     {/* Bottom Showcase Image */}
//     <div className="relative -top-[300px] mt-20 px-6">
//   <div className="max-w-7xl mx-auto overflow-hidden rounded-2xl">
//     <img
//       src={bottomImage}
//       alt="Showcase"
//       className="w-full h-auto object-cover"
//     />
//   </div>
// </div>
// </>
//   );
// };

// export default WorkSlider;


import React from "react";
import WorkCard from "./WorkCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import product1 from "../assets/HomeAssets/product1.png";
import product3 from "../assets/HomeAssets/product3.png";
import bottomImage from "../assets/HomeAssets/redBanner.png";

import "swiper/css";
import "swiper/css/pagination";

const works = [
  {
    title: "Nest",
    image: product1,
    tags: [
      { label: "Branding" },
      { label: "Strategy" },
      { label: "PR" },
    ],
  },
  {
    title: "Happinest",
    image: product1,
    tags: [
      { label: "Branding" },
      { label: "Packaging" },
      { label: "PR", active: true },
    ],
  },
  {
    title: "Shishu",
    image: product3,
    tags: [
      { label: "Branding" },
      { label: "Packaging" },
      { label: "Social Media" },
    ],
  },
  {
    title: "Another",
    image: product1,
    tags: [
      { label: "Branding" },
      { label: "Digital" },
    ],
  },
];

const WorkSlider = () => {
  return (
    <>
      <section
       
        className="relative overflow-hidden bg-[#080808] py-10 pb-40 md:pb-56 lg:pb-96"
      >
        {/* Top Controls */}
        <div className="mx-auto mb-8 flex flex-col lg:flex-row max-w-7xl items-center justify-between gap-6 px-4 lg:px-6">
          
          {/* Dots */}
          <div className="flex gap-2">
            <span className="h-2 w-2 rounded-full bg-white/40"></span>
            <span className="h-2 w-2 rounded-full bg-white/40"></span>
            <span className="h-2 w-2 rounded-full bg-red-500"></span>
            <span className="h-2 w-2 rounded-full bg-white/40"></span>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-4 text-white">
            
            <span className="tracking-[4px] lg:tracking-[8px] uppercase text-xs lg:text-sm">
              We Curate
            </span>

            <select className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-red-500 outline-none">
              <option>Branding</option>
              <option>Strategy</option>
            </select>

            <span className="tracking-[4px] lg:tracking-[8px] uppercase text-xs lg:text-sm">
              For
            </span>

            <select className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-red-500 outline-none">
              <option>D2C Brands</option>
              <option>Startups</option>
            </select>
          </div>
        </div>

        {/* Background Text */}
        <h2 className="mb-8 text-center text-[28px] md:text-[40px] lg:text-[50px] font-light uppercase text-white/[0.03]">
          We Stand With You
        </h2>

        {/* Slider */}
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {works.map((item, index) => (
              <SwiperSlide key={index}>
                <WorkCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Line */}
        <div className="mx-auto mt-10 md:mt-14 flex max-w-xs items-center">
          <div className="h-[1px] flex-1 bg-white/20"></div>
          <div className="mx-3 h-[3px] w-20 bg-red-500"></div>
          <div className="h-[1px] flex-1 bg-white/20"></div>
        </div>

        {/* Button */}
        <div className="mt-8 md:mt-10 text-center">
          <button className="rounded-full bg-red-500 px-6 md:px-8 py-3 text-sm font-semibold uppercase text-white transition hover:bg-red-600">
            More Of Work
          </button>
        </div>

        {/* Bottom Background Text */}
        <h2 className="absolute bottom-32 md:bottom-56 lg:bottom-96 left-4 md:left-10 text-[28px] md:text-[40px] lg:text-[50px] uppercase text-white/[0.03]">
          We Transform You
        </h2>
      </section>

      {/* Bottom Showcase Image */}
      <div className="relative -top-[120px] md:-top-[180px] lg:-top-[300px] mt-10 lg:mt-20 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto overflow-hidden rounded-xl lg:rounded-2xl">
          <img
            src={bottomImage}
            alt="Showcase"
            className="w-full h-[180px] md:h-[300px] lg:h-auto object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default WorkSlider;