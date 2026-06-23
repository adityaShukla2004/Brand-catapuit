import { useEffect, useState } from "react";
import Lenis from "lenis";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import logo from "./assets/HomeAssets/logo.png";

function App() {
  const [loading, setLoading] = useState(true);

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <img
            src={logo}
            alt="Brand Logo"
            className="w-52 animate-pulse"
          />

          {/* Loader Dots */}
          <div className="mt-6 flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-bounce"></span>

            <span
              className="w-3 h-3 rounded-full bg-red-500 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></span>

            <span
              className="w-3 h-3 rounded-full bg-red-500 animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;