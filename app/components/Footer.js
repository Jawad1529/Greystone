"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#233B6C] to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo, Address & Socials */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4">
            Greystone Hyde Advisory Ltd.
          </h2>

          {/* Address */}
          <p className="text-sm text-gray-200 mb-6 leading-relaxed">
            61 Bridge Street, Kington
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { href: "https://facebook.com", src: "/facebook.svg", alt: "Facebook" },
              { href: "https://www.linkedin.com/company/greystone-hyde/", src: "/linkedin.svg", alt: "LinkedIn" },
              { href: "https://www.instagram.com/greystonehyde?igsh=N3pldnFoZ2tqNnJl", src: "/instagram.svg", alt: "Instagram" },
              { href: "https://wa.me/+447453592896", src: "/whatsapp.svg", alt: "WhatsApp" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <img
                  src={social.src}
                  alt={social.alt}
                  className="w-5 h-5"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-200">
            {[
              { href: "#home", label: "Home" },
              { href: "#services", label: "Services" },
              { href: "#certifications", label: "Certifications" },
              { href: "#testimonials", label: "Testimonials" },
              { href: "#about", label: "About Us" },
              { href: "#contact", label: "Contact" },
            ].map((link, i) => (
              <li key={i}>
                <a 
                  href={link.href} 
                  className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Location & Map */}
        <div className="flex flex-col md:items-end">
          <h3 className="text-lg font-semibold mb-4">Our Location</h3>

          <div className="w-full rounded-xl overflow-hidden shadow-2xl mb-4">
            <iframe
              className="w-full h-48"
              src="https://www.google.com/maps?q=61+Bridge+Street,+Kington&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="text-right space-y-2">
            <p className="text-sm text-gray-200">
              61 Bridge Street, Kington
            </p>
            <p className="text-sm text-gray-200">
              Contact:{" "}
              <a
                href="https://wa.me/+447453592896"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                +44 7453 592896
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-6 border-t border-white/10 w-full text-center">
            <p className="text-xs text-gray-300">
              © {new Date().getFullYear()} Greystone Hyde Advisory Ltd.  
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}