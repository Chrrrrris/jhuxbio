import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Hero({ id }) {
  return (
    <section
      id={id}
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'url("/assets/DNA.gif")', // Path to your GIF
        backgroundSize: "cover", // Ensures the GIF covers the entire area
        backgroundPosition: "center", // Centers the GIF
        backgroundRepeat: "no-repeat", // Prevents tiling
      }}
    >
    {/* Dark Overlay */}
    {/* <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-white text-center max-w-2xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Welcome to JHUxBIO
        </h1>
        <p className="text-2xl md:text-2xl mb-6">
        Synthetic Biology Society at Johns Hopkins University
        </p>
        <ScrollLink
          to="about"
          smooth={true}
          offset={-70}
          duration={500}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded cursor-pointer font-semibold"
        >
          Learn More
        </ScrollLink>
      </div>
    </section>
  );
}
