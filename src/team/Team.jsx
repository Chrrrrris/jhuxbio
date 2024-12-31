import React from "react";

const teamMembers = [
  {
    name: "Maryam",
    position: "President",
    img: "/assets/maryam.jpg", // 
  },
  {
    name: "Gates",
    position: "Vice President",
    img: "/assets/gates.jpg", // 
  },
  {
    name: "William",
    position: "blabla",
    img: "/assets/william.jpg", //
  },
  {
    name: "Chris",
    position: "Tech",
    img: "/assets/chris.jpg", // 
  },
  {
    name: "Joey",
    position: "Tech",
    img: "/assets/joey.jpg", // 
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
          Meet the Team
        </h2>
        <p className="text-lg text-gray-700 text-center mb-16">
          Our executive board and active members bring together a diverse range
          of academic backgrounds to propel synthetic biology forward.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-gray-300 rounded-lg shadow-md text-center p-6"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
