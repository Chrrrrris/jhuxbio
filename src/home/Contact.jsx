import React from "react";

export default function Contact({ id }) {
  return (
    <section id={id} className="bg-gray-50 py-16 w-screen">
      <div className="flex flex-col md:flex-row w-full">
        
        {/* LEFT COLUMN: Contact Info (Centered) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-8 py-6">
          <h2 className="text-4xl md:text-7xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-4">
            Have questions or want to learn more about JHUxBIO? Reach out to us:
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-3">
            <strong>Email:</strong>{" "}
            <a
              className="text-blue-600 hover:underline"
              href="mailto:jhuxbio@gmail.com"
            >
              jhuxbio@gmail.com
            </a>
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-3">
            <strong>Instagram:</strong>{" "}
            <a
              className="text-blue-600 hover:underline"
              href="https://www.instagram.com/jhuxbio?igsh=MWk0NjB1ZTJrNjVncw=="
              target="_blank"
              rel="noreferrer"
            >
              @jhuxbio
            </a>
          </p>
        </div>

        {/* RIGHT COLUMN: Smaller Contact Form */}
        <div className="w-full md:w-1/2 p-8 flex justify-center">
          <div className="w-full max-w-md">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">Leave Us a Message</h3>
            <form
              action="https://formspree.io/f/your-form-id" // Replace with your Formspree (or other) URL
              method="POST"
              className="space-y-4"
            >
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required
                  className="flex-1 p-3 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  className="flex-1 p-3 border border-gray-300 rounded mt-4 md:mt-0"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-3 border border-gray-300 rounded"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full p-3 border border-gray-300 rounded h-32"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
