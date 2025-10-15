import React from "react";
import { motion } from "framer-motion";
import { Menu, Mail, Phone, MapPin } from "lucide-react";

export default function App() {
  const businessName = "Threads TN";
  const primaryColor = "bg-indigo-600";

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-bold">T</div>
          <div>
            <div className="text-lg font-semibold">{businessName}</div>
            <div className="text-xs text-slate-500">Custom Apparel & Branding</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
<a href="#contact" className={`px-4 py-2 rounded-md text-white ${primaryColor}`}>Contact</a>        </nav>
      </header>

      <main className="px-6">
        <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center py-16">
          <div>
            <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-extrabold leading-tight">
              Grow your brand with custom apparel from Threads TN
            </motion.h1>
            <p className="mt-6 text-lg text-slate-600">
              Threads TN delivers high-quality, customized apparel and branding for teams, events, and businesses. Stand out with our premium designs.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#contact" className={`inline-block px-6 py-3 rounded-md text-white ${primaryColor}font-medium`}>Get a quote</a>
              <a href="#services" className="inline-block px-6 py-3 rounded-md border text-sm">See services</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
