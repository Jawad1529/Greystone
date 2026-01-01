"use client";

export default function Footer() {
  return (
    <footer className="bg-[#233B6C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Socials */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4">GrayStone</h2>
          <div className="flex gap-4 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.svg" alt="Facebook" className="w-6 h-6 hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" className="w-6 h-6 hover:opacity-80 transition-opacity" />
            </a>

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/923367312010"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6"
            >
              <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6 hover:opacity-80 transition-opacity" />
            </a>
          </div>
        </div>

        {/* SPA Links */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#home" className="hover:text-[#1BB0A5] transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-[#1BB0A5] transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-[#1BB0A5] transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-[#1BB0A5] transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Map */}
        <div className="flex flex-col md:items-end">
          <h3 className="text-lg font-semibold mb-4">Our Location</h3>
          <div className="w-full h-48 rounded overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19815.85406274572!2d-0.1277582!3d51.5073505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333f3f5b01%3A0x123456789abcdef!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-sm text-gray-200 mt-4">
            © {new Date().getFullYear()} GrayStone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
