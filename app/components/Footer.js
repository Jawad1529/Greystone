"use client";

export default function Footer() {
  return (
    <footer className="bg-[#233B6C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo, Address & Socials */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-2">
            Greystone Hyde Advisory Ltd.
          </h2>

          {/* Address */}
          <p className="text-sm text-gray-200 mb-5 leading-relaxed">
            61 Bridge Street,Kington
            
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/facebook.svg"
                alt="Facebook"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/greystone-hyde/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </a>

            <a
              href="https://www.instagram.com/greystonehyde?igsh=N3pldnFoZ2tqNnJl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/instagram.svg"
                alt="Instagram"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </a>

            <a
              href="https://wa.me/+447453592896"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/whatsapp.svg"
                alt="WhatsApp"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <a href="#home" className="hover:text-[#1BB0A5] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#1BB0A5] transition-colors">
                Services
              </a>
            </li>
             <li>
              <a href="#certifications" className="hover:text-[#1BB0A5] transition-colors">
                Certifications
              </a>
            </li>
             <li>
              <a href="#testimonials" className="hover:text-[#1BB0A5] transition-colors">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#1BB0A5] transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#1BB0A5] transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Location & Map */}
        <div className="flex flex-col md:items-end">
          <h3 className="text-lg font-semibold mb-4">Our Location</h3>

          <div className="w-full h-48 rounded overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps?q=61+Bridge+Street,+Kington&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Address repeated for clarity */}
          <p className="text-sm text-gray-200 mt-4 text-right">
            61 Bridge Street, Kington
          </p>
           <p className="text-sm text-gray-200 mt-4 text-right">
           Contact Us:   <a
              href="https://wa.me/+447453592896"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >+447453592896</a>
          </p>

          <p className="text-xs text-gray-300 mt-4">
            © {new Date().getFullYear()} GreyStone Hyde Advisory Ltd.  
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
