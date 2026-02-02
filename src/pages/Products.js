import React from "react";

export default function Products() {
  const vendors = [
    {
      name: "SanMar",
      image: "/vendors/Sanmar.png",
      link: "https://www.sanmar.com",
    },
    {
      name: "S&S Activewear",
      image: "/vendors/SS.jpg",
      link: "https://www.ssactivewear.com",
    },
    {
      name: "Momentec",
      image: "/vendors/momentec.png",
      link: "https://www.momentecbrands.com/",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1
          className="text-5xl mb-4 text-[#8C1515]"
          style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
        >
          Our Product Partners
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse our trusted apparel suppliers. Click a partner below to explore
          available styles, colors, and fits.
        </p>
      </div>

      {/* Vendor Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {vendors.map((vendor, index) => (
          <a
            key={index}
            href={vendor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden flex flex-col items-center justify-center p-8"
          >
            {/* Logo */}
            <img
              src={vendor.image}
              alt={`${vendor.name} Logo`}
              className="h-32 object-contain mb-6 group-hover:scale-105 transition-transform"
            />

            {/* Button Label */}
            <div className="bg-[#8C1515] text-white px-6 py-3 rounded-full text-lg font-medium group-hover:bg-black transition">
              Visit {vendor.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
