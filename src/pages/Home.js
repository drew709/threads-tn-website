import React, { useEffect } from "react";


function Home() {
  useEffect(() => {
  // Load Elfsight script once
  if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) return;

  const script = document.createElement("script");
  script.src = "https://elfsightcdn.com/platform.js";
  script.async = true;
  document.body.appendChild(script);
}, []);

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
    Real reviews from our Google Business Profile — updated automatically.
  </p>

  <div className="mx-auto max-w-4xl px-6">
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 sm:p-6">
      <div
        className="elfsight-app-7852b421-f557-483d-a93d-027c757f0fa0"
        data-elfsight-app-lazy
      ></div>
    </div>
  </div>

  <a
    href="https://www.google.com/search?q=Threads+TN+Reviews"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-10 bg-[#8C1515] text-white px-6 py-3 rounded-md font-medium transition-all hover:bg-black hover:shadow-lg"
  >
    Read More Reviews on Google
  </a>
</section>

    </div>
  );
}

export default Home;