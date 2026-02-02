import React, { useState } from "react";
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
function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="md:hidden relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 transition"
        aria-label="Open menu"
      >
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-3 w-56 rounded-xl bg-white shadow-xl border border-gray-200 overflow-hidden z-50">
          <Link onClick={closeMenu} to="/" className="block px-5 py-3 hover:bg-gray-50">
            Home
          </Link>
          {/*<Link onClick={closeMenu} to="/services" className="block px-5 py-3 hover:bg-gray-50">
            Services
          </Link>*/}
          <Link onClick={closeMenu} to="/about" className="block px-5 py-3 hover:bg-gray-50">
            About
          </Link>
          <Link onClick={closeMenu} to="/products" className="block px-5 py-3 hover:bg-gray-50">
            Products
          </Link>
          <Link onClick={closeMenu} to="/team-stores" className="block px-5 py-3 hover:bg-gray-50">
            Team Stores
          </Link>
          <Link
            onClick={closeMenu}
            to="/contact"
            className="block px-5 py-3 bg-[#8C1515] text-white hover:bg-black transition"
          >
            Quote
          </Link>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
  <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
    {/* Logo + Brand */}
    <div className="flex items-center gap-3">
      <img src="/Threadsmagnet.jpg" alt="Threads TN Logo" className="h-10 w-auto" />
      <h1
        className="text-2xl text-[#8C1515]"
        style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
      >
        THREADS TN
      </h1>
    </div>

    {/* Desktop Nav */}
    <nav className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
      <Link to="/" className="hover:text-[#8C1515] transition">Home</Link>
      {/*<Link to="/services" className="hover:text-[#8C1515] transition">Services</Link>*/}
      <Link to="/about" className="hover:text-[#8C1515] transition">About</Link>
      <Link to="/products" className="hover:text-[#8C1515] transition">Products</Link>
      <Link to="/team-stores" className="hover:text-[#8C1515] transition">Team Stores</Link>
      <Link
        to="/contact"
        className="px-4 py-2 rounded-md bg-[#8C1515] text-white hover:bg-gray-800 transition"
      >
        Quote
      </Link>
    </nav>

    {/* Mobile Menu Button */}
    <MobileMenu />
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
