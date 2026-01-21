"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Certifications", href: "#certifications" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200/50 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <img src="/icons/logo.svg" className="w-6 h-6" alt="Logo" />
          <span className="text-xl font-bold bg-gradient-to-r from-[#233B6C] to-blue-600 bg-clip-text text-transparent">
            Greystone Hyde
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-[#233B6C] font-medium transition-all duration-300 hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="relative group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#233B6C] to-blue-600 px-6 py-2.5 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#233B6C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative text-sm">Get Started</span>
          </a>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col w-7 h-7 justify-between items-end"
          >
            <span
              className={`block h-0.5 bg-gradient-to-r from-[#233B6C] to-blue-600 transition-all ${
                isOpen ? "rotate-45 translate-y-3 w-7" : "w-7"
              }`}
            />
            <span
              className={`block h-0.5 bg-gradient-to-r from-[#233B6C] to-blue-600 transition-all ${
                isOpen ? "opacity-0" : "w-5"
              }`}
            />
            <span
              className={`block h-0.5 bg-gradient-to-r from-[#233B6C] to-blue-600 transition-all ${
                isOpen ? "-rotate-45 -translate-y-3 w-7" : "w-4"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200/50"
          >
            <div className="flex flex-col px-6 py-4 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-[#233B6C] font-medium transition-all duration-300 py-2 border-b border-gray-100 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              {/* Mobile CTA Button */}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="relative group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#233B6C] to-blue-600 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden mt-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#233B6C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative">Get Free Consultation</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}