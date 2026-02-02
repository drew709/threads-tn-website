import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

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
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
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
            <Link
              to="/contact"
              className="px-4 py-2 rounded-md bg-[#8C1515] text-white hover:bg-gray-800 transition"
            >
              Contact
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
        </Routes>
      </main>
    </Router>
  );
}

export default App;
