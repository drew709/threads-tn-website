import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/Threadsmagnet.jpg"
              alt="Threads TN Logo"
              className="h-10 w-auto"
            />
            <h1
              className="text-2xl text-[#8C1515]"
              style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
            >
              THREADS TN
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#services" className="hover:text-[#8C1515] transition">
              Services
            </a>
            <a href="#about" className="hover:text-[#8C1515] transition">
              About
            </a>
            <a href="#testimonials" className="hover:text-[#8C1515] transition">
              Product Catalogs
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-md bg-[#8C1515] text-white hover:bg-gray-800 transition"
            >
              Contact
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex flex-col items-end text-right text-sm text-gray-600">
            <a href="tel:931-455-0079" className="hover:text-[#8C1515]">
              📞 (931) 455-0079
            </a>
            <a href="mailto:orders@threadstn.com" className="hover:text-[#8C1515]">
              ✉️ orders@threadstn.com
            </a>
            <p className="text-gray-500">📍106 W. Ogee Street, Tullahoma, TN</p>
          </div>
        </div>
      </header>

      <div className="pt-24"></div>

      {/* Hero Section with Animated Texture */}
<section
  id="hero"
  className="relative flex flex-col items-center justify-center text-center text-white py-20 md:py-28 overflow-hidden"
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
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  <div className="relative z-10 max-w-3xl px-6">
    <div className="flex justify-center items-center gap-4 mb-4">
     

      <h1
        className="text-5xl md:text-6xl"
        style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
      >
        Custom Apparel That Represents Your Brand
      </h1>
    </div>

    <p className="text-gray-200 text-lg mb-8">
      Threads TN delivers top-quality embroidery, screen printing, and branding for teams, events, and businesses.
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="#contact"
        className="bg-white text-[#8C1515] px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
      >
        Get a Quote
      </a>
      <a
        href="#services"
        className="border border-white px-6 py-3 rounded-md text-white font-medium hover:bg-white hover:text-[#8C1515] transition"
      >
        See Services
      </a>
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
    {/* Product 1 */}
    <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
      <img
        src="https://images.unsplash.com/photo-1520975918318-3f3c6fcd4165?auto=format&fit=crop&w=800&q=80"
        alt="Custom Embroidered Shirts"
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">Custom Embroidered Shirts</h3>
      <a
        href="#contact"
        className="text-[#8C1515] hover:underline font-medium"
      >
        Request a Quote →
      </a>
    </div>

    {/* Product 2 */}
    <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
      <img
        src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80"
        alt="Screen Printed Tees"
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">Screen Printed Tees</h3>
      <a
        href="#contact"
        className="text-[#8C1515] hover:underline font-medium"
      >
        Request a Quote →
      </a>
    </div>

    {/* Product 3 */}
    <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
      <img
        src="https://images.unsplash.com/photo-1629909613654-28e377c37c53?auto=format&fit=crop&w=800&q=80"
        alt="Hats & Headwear"
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">Hats & Headwear</h3>
      <a
        href="#contact"
        className="text-[#8C1515] hover:underline font-medium"
      >
        Request a Quote →
      </a>
    </div>
  </div>
</section>
      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50 text-center">
        <h3
          className="text-4xl mb-6 text-[#8C1515]"
          style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
        >
          What Our Customers Say
        </h3>
        <p className="mb-10 text-gray-600">
          We’re proud to serve Tennessee businesses with quality embroidery and printing.
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
          href="https://www.google.com/search?sca_esv=853236ac3d6bce34&si=AMgyJEuzsz2NflaaWzrzdpjxXXRaJ2hfdMsbe_mSWso6src8s5G3qyyBoZ8zuQzfBQhvTW1o8oWLukyv0PzIjBFQG_bTb4FTy08BA-DHZx5uOuvlFitUjMCHhV0pFJ-AcaXgm0f4pswd&q=Threads+TN+Reviews&sa=X&ved=2ahUKEwjF-taJ7qaQAxXjN0QIHcBHDYwQ0bkNegQIOBAE&biw=1536&bih=729&dpr=2.5"
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

export default App;