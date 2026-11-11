import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import TeamStores from "./pages/TeamStores";
import { Facebook, Instagram } from "lucide-react";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";





function FloatingQuoteButton() {
  const location = useLocation();

  // Hide button on Contact page
  if (location.pathname === "/contact") return null;

  return (
    <Link
      to="/contact"
      id="floating-quote"
      className="fixed bottom-6 right-6 z-50 bg-[#8C1515] text-white px-6 py-4 rounded-full shadow-2xl font-semibold text-lg transition-all hover:bg-black hover:scale-105"
    >
      Request a Quote
    </Link>
  );
}
function Footer() {
  return (
    <footer id="site-footer" className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/Threadsmagnet.jpg"
                alt="Threads TN Logo"
                className="h-10 w-auto"
              />
              <h2
                className="text-2xl text-[#8C1515]"
                style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
              >
                THREADS TN
              </h2>
            </div>
            <p className="text-gray-600">
              Custom embroidery, screen printing, and branded apparel for teams,
              schools, events, and businesses across Tennessee.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="tel:931-455-0079" className="hover:text-[#8C1515]">
                  📞 (931) 455-0079
                </a>
              </li>
              <li>
                <a href="mailto:orders@threadstn.com" className="hover:text-[#8C1515]">
                  ✉️ orders@threadstn.com
                </a>
              </li>
              <li className="text-gray-700">
                📍 106 W. Ogee Street, Tullahoma, TN
              </li>
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
  <h3 className="text-lg font-semibold text-gray-900 mb-3">Follow</h3>
  <div className="flex gap-3 mb-4">
    <a
      href="https://www.facebook.com/ThreadsTN"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-[#8C1515] hover:text-white transition"
      aria-label="Threads TN on Facebook"
    >
      <Facebook size={18} />
    </a>

    <a
      href="https://www.instagram.com/threads_tn"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-[#8C1515] hover:text-white transition"
      aria-label="Threads TN on Instagram"
    >
      <Instagram size={18} />
    </a>
  </div>

  <Link
    to="/contact"
    className="inline-block bg-[#8C1515] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-black transition"
  >
    Request a Quote
  </Link>
</div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500 flex flex-col md:flex-row gap-2 md:justify-between">
          <span>© {new Date().getFullYear()} Threads TN. All rights reserved.</span>
          <span>Locally owned • Screen Printing • Embroidery</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
        <ScrollToTop />
      <Header />

      {/* Routes */}
      <main id="main-content" tabIndex={-1} className="pt-20 bg-gray-100 min-h-screen outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team-stores" element={<TeamStores />} />

        </Routes>
      </main>
      <Footer />
      {/* Global Floating Request a Quote Button */}
<FloatingQuoteButton />

    </Router>
  );
}

export default App;
