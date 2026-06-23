import React from "react";
import { FaBehance, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/HomeAssets/logoWhite.png"; 

const Footer = () => {
  return (
    <footer className="bg-[#161616] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16">
        
        {/* Left Side */}
        <div className="flex flex-col justify-between">
          <div>
            <img
              src={logo}
              alt="Brand Catapult"
              className="w-[180px] object-contain"
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-16">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition"
            >
              <FaBehance size={14} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition"
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition"
            >
              <FaInstagram size={14} />
            </a>

            <span className="text-sm text-gray-400 ml-2">
              Follow Us
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col sm:flex-row gap-16 lg:gap-28">
          
          {/* Case Studies */}
          <div>
            <h3 className="text-xs uppercase tracking-[3px] font-semibold mb-6">
              Case Studies
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Strategy & Consulting
              </li>
              <li className="hover:text-white cursor-pointer">
                Branding & Design
              </li>
              <li className="hover:text-white cursor-pointer">
                Digital
              </li>
              <li className="hover:text-white cursor-pointer">
                Public Relations
              </li>
              <li className="hover:text-white cursor-pointer">
                BTL & Advertising
              </li>
              <li className="hover:text-white cursor-pointer">
                Photography
              </li>
              <li className="hover:text-white cursor-pointer">
                Technology
              </li>
              <li className="hover:text-white cursor-pointer">
                CGI / VFX
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[3px] font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Work</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Culture</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;