import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/HomeAssets/logo.png";
import Colors from "../theme/colors";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

 
  const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Culture", href: "#culture" },
];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Brand Catapult"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  className="uppercase text-[14px] tracking-[2px] font-medium text-gray-700 hover:text-red-600 transition-colors duration-300"
                >
                  {link.name}
                </a>

                {index !== navLinks.length - 1 && (
                  <span className="mx-6 text-red-600 text-lg">•</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="flex items-center gap-2 px-6 py-3 cursor-pointer rounded-full bg-zinc-900 text-white text-sm font-semibold uppercase tracking-wide border border-red-500 hover:bg-black transition-all">
              Join The Team
              {/* <ArrowRight size={16} /> */}
            </button>

            <button   style={{ backgroundColor: Colors.red }} className={`px-6 py-3 rounded-full cursor-pointer text-white text-sm font-semibold uppercase tracking-wide hover:bg-red-700 transition-all`}>
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md"
          >
            {isOpen ? (
              <X size={28} className="text-gray-800 cursor-pointer" />
            ) : (
              <Menu size={28} className="text-gray-800 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen border-t border-gray-200" : "max-h-0"
        }`}
      >
        <div className="bg-white px-6 py-4">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="uppercase text-sm font-medium text-gray-700 hover:text-red-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 mt-6">
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white font-medium cursor-pointer">
              Join The Team
              {/* <ArrowRight size={16} /> */}
            </button>

            <button className="w-full px-6 py-3 rounded-full bg-red-600 text-white font-medium cursor-pointer">
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;