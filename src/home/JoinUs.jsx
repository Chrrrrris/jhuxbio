import React from "react";

export default function JoinUsSectionWhite() {
  return (
    <section id="joinus" className="flex bg-white">
      {/* Left Column: Text */}
      <div className="w-1/2 flex flex-col justify-center items-center text-center px-16 py-10 overflow-y-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-7xl font-bold text-gray-800 mb-4">
          Join Us Now
        </h2>
        
        {/* Text Content */}
        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-4">
          Ready to join our community and take part in groundbreaking synthetic biology
          research? Fill out our membership survey to get started.
        </p>

        {/* Button or additional text/forms as needed */}
        <div className="mb-8">
          <a
            href="https://forms.gle/your-form-link" // TODO: Replace with actual form link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg md:text-2xl  py-3 px-6 rounded transition duration-300 leading-relaxed mb-4"
          >
            Submit Your Membership Survey
          </a>
        </div>

        {/* (Optional) Additional content like contact form or mailing list sign-up */}
      </div>

      {/* Right Column: Image (QR Code) */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <img
          src="/assets/joinus.jpg" 
          alt="Join Us"
          className="max-w-xs object-contain"
        />
      </div>
    </section>
  );
}
