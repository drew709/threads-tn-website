import React from "react";

const teamStores = [
  
  {
    name: "THS Baseball",
    image: "/teamstores/thsbaseball.png",
    link: "https://threads-tn.printavo.com/merch/ths-baseball",
  },
  {
    name: "Cooper Christian Academy",
    image: "/teamstores/cooperchristian.png",
    link: "https://threads-tn.printavo.com/merch/cooper-christian-academy-spirit-store",
  },
  {
    name: "Stan McNNabb Company Store",
    image: "/teamstores/stanmcnabb.png",
    link: "https://threads-tn.printavo.com/merch/stan-mcnabb-automotive-group",
  },
  {
    name: "THS Softball",
    image: "/teamstores/thssoftball.png",
    link: "https://threads-tn.printavo.com/merch/ths-softball-fall-2026-online-store",
  },

];

export default function TeamStores() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1
          className="text-5xl mb-4 text-[#8C1515]"
          style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
        >
          Team Stores
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Shop official apparel for your school, team, or organization.
          Each store is custom-built and managed by Threads TN.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamStores.map((team, index) => (
          <a
            key={index}
            href={team.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={team.name}
            className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={team.image}
                alt={team.name}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition"></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

