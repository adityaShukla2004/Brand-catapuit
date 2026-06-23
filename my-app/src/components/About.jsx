import React from "react";

import image1 from "../assets/HomeAssets/about1.png";
import image2 from "../assets/HomeAssets/about2.png";
import image3 from "../assets/HomeAssets/about3.png";

const About = () => {
    return (
        <section id="about" className=" py-20 overflow-hidden -mt-72">
            <div className="max-w-7xl mx-auto px-6">

                {/* Row 1 */}
                <div className="flex items-center justify-around flex-wrap">
                    <div> 
                        <p className="text-[#5d5d5d] text-[12px] leading-8 max-w-lg">
                            We believe one size fits one, and only one! We work to become
                            the right agency for our clients - researching, learning,
                            experimenting and adapting tirelessly until we become the
                            masters of their trade.
                        </p>
                    </div>

                    <div className="relative flex items-center justify-center w-[420px] h-[420px]">

                        {/* Circle 1 */}
                        <div className="absolute w-[420px] h-[420px] rounded-full bg-[#eef1f8]"></div>

                        {/* Circle 2 */}
                        <div className="absolute w-[320px] h-[320px] rounded-full bg-[#e3e8f7]"></div>

                        {/* Circle 3 */}
                        <div className="absolute w-[220px] h-[220px] rounded-full bg-[#d3dcf7]"></div>

                        {/* Circle 4 */}
                        <div className="absolute w-[120px] h-[120px] rounded-full bg-[#b8c8f6]"></div>

                        {/* Center Image */}
                        <img
                            src={image1}
                            alt="Plan"
                            className="relative z-10 w-[220px] object-contain"
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-around flex-wrap -mt-10">
                    <div className="relative flex items-center justify-center w-[420px] h-[420px]">

                        {/* Outer Circle */}
                        <div className="absolute w-[420px] h-[420px] rounded-full bg-[#F4EEDD]"></div>

                        {/* Inner Circle */}
                        <div className="absolute w-[300px] h-[300px] rounded-full bg-[#F9EFD2]"></div>

                        {/* Image */}
                        <img
                            src={image2}
                            alt="Cube"
                            className="relative z-10 w-[260px] h-[260px] object-contain"
                        />
                    </div>

                    <div>
                        <p className="text-[#5d5d5d] text-[12px] leading-8 max-w-lg">
                            Our clients think of us as an extension of their team.
                            With an approach guided by empathy, flexibility and
                            consistent communication we take ownership of our role
                            as their partners.
                        </p>

                        <h3 className="mt-8 text-[#d7283c] uppercase tracking-[3px] text-3xl font-medium">
                            Globally Since 2015
                        </h3>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-around flex-wrap -mt-10">
                    <div>
                        <p className="text-[#5d5d5d] text-[12px] leading-8 max-w-lg">
                            We help brands transform faster than their consumers do.
                            Every strategy, campaign or goal we set out is tied to
                            concrete and measurable metrics. It's this reflection
                            and evaluation that helps us create dynamic strategies
                            and rock-solid processes.
                        </p>

                        <h3 className="mt-8 text-[#d7283c] uppercase tracking-[3px] text-3xl font-medium">
                            Projects
                        </h3>
                    </div>

                    <div className="relative flex items-center justify-center w-[450px] h-[450px]">

                        {/* Outer Circle */}
                        <div className="absolute w-[450px] h-[450px] rounded-full bg-[#E6F0E2]"></div>

                        {/* Inner Circle */}
                        <div className="absolute w-[320px] h-[320px] rounded-full bg-[#DDEDD8]"></div>

                        {/* Image */}
                        <img
                            src={image3}
                            alt="Projects"
                            className="relative z-10 w-[340px] h-[340px] object-center"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;