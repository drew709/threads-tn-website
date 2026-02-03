import React from "react";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center text-center text-white py-16 md:py-10 overflow-hidden"
        style={{
          backgroundColor: "#8C1515",
          backgroundImage: `
            url('/fabric-texture.png'),
            url('https://images.unsplash.com/photo-1616690710400-3d0f5b3a5d3a?auto=format&fit=crop&w=1400&q=80')
          `,
          backgroundSize: "400px, cover",
          backgroundBlendMode: "overlay",
          backgroundPosition: "center",
          animation: "moveTexture 40s linear infinite",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
          >
            Custom Apparel That Represents Your Brand
          </h1>

          <p className="text-gray-200 text-lg mb-8">
            Threads TN delivers top-quality embroidery, screen printing, and
            branding for teams, events, and businesses.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.facebook.com/ThreadsTN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#8C1515] transition text-3xl"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/threads_tn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#8C1515] transition text-3xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-[#8C1515] px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
            >
              Get a Quote
            </a>
            {/*<a
              href="#services"
              className="border border-white px-6 py-3 rounded-md text-white font-medium hover:bg-white hover:text-[#8C1515] transition"
            >
              See Services
            </a>*/}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white text-center">
        <h2
          className="text-4xl mb-6 text-[#8C1515]"
          style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
        >
          Our Services
        </h2>
        <p className="text-gray-600 mb-12">
          Explore our wide range of customizable apparel and branding materials.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="embroidery.png"
              alt="Custom Embroidered Shirts"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Embroidery
            </h3>
            
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="tullys.jpg"
              alt="Screen Printing"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Screen Printing</h3>
           
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="hats.png"
              alt="Hats & Headwear"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Hats & Headwear</h3>
           
          </div>
        </div>
      </section>
      {/* Quote CTA */}
<div className="bg-gray-100 py-16 text-center">
  <h2
    className="text-4xl mb-6 text-[#8C1515]"
    style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
  >
    Ready to Get Started?
  </h2>

  <p className="text-gray-600 mb-8 max-w-xl mx-auto">
    Tell us what you need and we’ll send you a fast, custom quote for your
    apparel, embroidery, or screen printing project.
  </p>

  <a
    href="/contact"
    className="inline-block bg-[#8C1515] text-white px-12 py-5 rounded-xl text-lg font-semibold shadow-lg transition-all hover:bg-black hover:scale-105"
  >
    Request a Quote
  </a>
</div>


      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50 text-center">
        <h3
          className="text-4xl mb-6 text-[#8C1515]"
          style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
        >
          What Our Customers Say
        </h3>
        <p className="mb-10 text-gray-600">
          We’re proud to serve Tennessee businesses with quality embroidery and screen printing.
        </p>

        <div className="flex justify-center mb-10">
          <iframe
            title="Threads TN Google Reviews"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.1901535972297!2d-86.21809400000001!3d35.370484999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8861631519789b9d%3A0xe4ce2c2c51156d5b!2sThreads%20TN!5e1!3m2!1sen!2sus!4v1760525553457!5m2!1sen!2sus"
            width="450"
            height="337"
            loading="lazy"
            allowFullScreen
            className="rounded-lg shadow-md border border-gray-200"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <a
          href="https://www.google.com/search?q=Threads+TN+Reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#8C1515] text-white px-6 py-3 rounded-md font-medium transition-all hover:bg-black hover:shadow-lg"
        >
          Read More Reviews on Google
        </a>
      </section>
    </div>
  );
}

export default Home;