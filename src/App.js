import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import TeamStores from "./pages/TeamStores";


function FloatingQuoteButton() {
  const location = useLocation();

  // Hide button on Contact page
  if (location.pathname === "/contact") return null;

  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 z-50 bg-[#8C1515] text-white px-6 py-4 rounded-full shadow-2xl font-semibold text-lg transition-all hover:bg-black hover:scale-105"
    >
      Request a Quote
    </Link>
  );
}

function App() {
  return (
    <Router>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
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

          {/* Nav Links */}
          <nav className="flex space-x-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-[#8C1515] transition">
              Home
            </Link>
            <Link to="/services" className="hover:text-[#8C1515] transition">
              Services
            </Link>
            <Link to="/about" className="hover:text-[#8C1515] transition">
              About
            </Link>
            <Link to="/products" className="hover:text-[#8C1515] transition">
              Products
            </Link>
            <Link to="/team-stores" className="hover:text-[#8C1515] transition">
            Team Stores
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-md bg-[#8C1515] text-white hover:bg-gray-800 transition"
            >
              Quote
            </Link>
            

          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex flex-col items-end text-right text-sm text-gray-600">
            <a href="tel:931-455-0079" className="hover:text-[#8C1515]">
              📞 (931) 455-0079
            </a>
            <a href="mailto:orders@threadstn.com" className="hover:text-[#8C1515]">
              ✉️ orders@threadstn.com
            </a>
            <p className="text-gray-500">
              📍106 W. Ogee Street, Tullahoma, TN
            </p>
          </div>
        </div>
      </header>

      {/* Routes */}
      <main className="pt-24 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team-stores" element={<TeamStores />} />

        </Routes>
      </main>
      {/* Global Floating Request a Quote Button */}
<FloatingQuoteButton />

    </Router>
  );
}

export default App;
