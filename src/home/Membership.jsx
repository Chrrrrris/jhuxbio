import React from "react";
import JoinUsSection from './JoinUs';


export default function Membership() {
  return (
    <div>
    <section id="membership" className="bg-blue-100 flex flex-col md:flex-row">
      {/* Left Column: Text & Forms */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 md:pr-20 py-6 md:py-0">
        {/* Title */}
        <h2 className="text-4xl md:text-7xl font-bold text-gray-800 mb-4">
          Membership
        </h2>
        {/* Membership Information */}
        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-4">
        Members at JHUxBIO will be able to communicate with people from academia and industry on the topics of advanced bio technology, applications of synthetic biology, science-industry transformation, and the social impact of synthetic biology. At the same time, our society will integrate and share research resources on campus to provide space for members who want to practice synthetic biology. These benefits will greatly help our members  to better understand synthetic biology and its impact on humans.
        </p>
        
        {/* Eligibility & Commitments */}
        <h3 className="text-xl md:text-3xl text-gray-700 font-semibold leading-relaxed mb-4">
          Eligibility & Commitments
        </h3>
        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-4">
        All undergraduate students at Johns Hopkins University are eligible for membership in the Undergraduate Synthetic Biology Society At Johns HopkinsUniversity (JHUxBIO) general body after filling out an application survey provided below. We highly appreciate and embrace the involvement of people of all backgrounds.
        </p>

        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-4">

        Members of the JHUxBIO general body must attend at least one General Body

        Meeting (GBM) per semester and are allowed to participate in event planning.


        </p>

      </div>
    {/* Right Column: Image */}
    <div className="w-full md:w-1/2">
        <img
          src="/assets/lecture.jpg" 
          alt="Lab"
          className="w-full object-cover"
        />
      </div>
      </section>
      <JoinUsSection />

    </div>

  );
}

        // {/* Contact Form */}
        // <h3 className="text-3xl font-semibold text-gray-800 mb-4">
        //   Contact Us
        // </h3>
        // <form
        //   action="https://formspree.io/f/your-form-id" // Replace with your Formspree link
        //   method="POST"
        //   className="space-y-4 mb-8"
        // >
        //   <div className="flex flex-col md:flex-row md:space-x-4">
        //     <input
        //       type="text"
        //       name="first_name"
        //       placeholder="First Name"
        //       required
        //       className="flex-1 p-3 border border-gray-300 rounded"
        //     />
        //     <input
        //       type="text"
        //       name="last_name"
        //       placeholder="Last Name"
        //       required
        //       className="flex-1 p-3 border border-gray-300 rounded"
        //     />
        //   </div>
        //   <input
        //     type="email"
        //     name="email"
        //     placeholder="Email Address"
        //     required
        //     className="w-full p-3 border border-gray-300 rounded"
        //   />
        //   <input
        //     type="text"
        //     name="subject"
        //     placeholder="Subject"
        //     required
        //     className="w-full p-3 border border-gray-300 rounded"
        //   />
        //   <textarea
        //     name="message"
        //     placeholder="Leave your message here..."
        //     required
        //     className="w-full p-3 border border-gray-300 rounded h-32"
        //   ></textarea>
        //   <button
        //     type="submit"
        //     className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition duration-300"
        //   >
        //     Submit
        //   </button>
        // </form>

            //     {/* Join Us Button */}
            //     <div className="mb-8">
            //     <a
            //       href="https://forms.gle/your-form-link" // Replace with your actual form link
            //       target="_blank"
            //       rel="noopener noreferrer"
            //       className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300"
            //     >
            //       Submit Your Membership Survey
            //     </a>
            //   </div>

    //                 {/* Mailing List Sign-up */}
    //     <h3 className="text-3xl font-semibold text-gray-800 mb-4">
    //     Join Our Mailing List!
    //   </h3>
    //   <p className="text-2xl text-gray-700 mb-4">
    //     Get updates on our latest events and progress in synthetic biology.
    //   </p>
    //   <form
    //     action="https://formspree.io/f/your-form-id" 
    //     method="POST"
    //     className="flex flex-col md:flex-row md:items-center md:space-x-4"
    //   >
    //     <input
    //       type="email"
    //       name="email"
    //       placeholder="Enter your email here"
    //       required
    //       className="p-3 border border-gray-300 rounded mb-4 md:mb-0"
    //     />
    //     <button
    //       type="submit"
    //       className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300"
    //     >
    //       Sign Up
    //     </button>
    //   </form>