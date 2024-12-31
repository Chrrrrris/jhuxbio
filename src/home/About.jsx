import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-blue-100 flex flex-col md:flex-row">
      {/* IMAGE COLUMN */}
      <div className="w-full md:w-1/2">
        <img
          src="/assets/lab.jpg"  
          alt="Microscope in lab"
          className="w-full object-cover"
        />
      </div>

      {/* TEXT COLUMN */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 md:pr-20 py-6 md:py-0">
        <h2 className="text-4xl md:text-7xl font-bold text-gray-800 mb-4">
          Synthetic Biology Society
        </h2>
        <p className="text-xl md:text-3xl font-medium text-gray-600 mb-4">
          at Johns Hopkins University
        </p>
        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-4">
          We set up the society to give more undergraduate students interested
          in researching and applying synthetic biology the opportunity to be
          exposed to cutting-edge ideas and technologies.
        </p>
        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
        We have created this society out of passion for our common dream and a 
        deep desire that the society may endure for the greater good, and not 
        out of any private interest. We hope that our joint efforts will make a difference 
        for the undergraduate community of Johns Hopkins University and beyond, and that the 
        society will pass down our dream. 
        </p>
      </div>
    </section>
  );
}
