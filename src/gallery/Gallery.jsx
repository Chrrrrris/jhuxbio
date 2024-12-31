import React from "react";

const galleryImages = [
  { src: "/assets/IMG_5713.jpg", alt: "First GBM Image 1" },
  { src: "/assets/IMG_5714.jpg", alt: "First GBM Image 2" },
  { src: "/assets/IMG_5711.jpg", alt: "First GBM Image 3" },
  { src: "/assets/IMG_5712.jpg", alt: "First GBM Image 4" },
  { src: "/assets/IMG_5707.jpg", alt: "First GBM Image 5" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Gallery
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          Our first GBM was held at Mudd 100 on Nov.29, 2022. We introduced our society to new members and held synthetic-bio-related ice breaker games.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
