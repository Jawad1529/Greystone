"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const headline = "ERP • Accounting • Data Modeling Experts";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover"
          src="/london.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Animated Text */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="font-bold text-white">
          {headline.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <p className="mt-6 text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
          Modern ERP, Accounting, and Data Modeling solutions for your business.
        </p>

        {/* Contact Button */}
        <a
          href="#contact"
          className="mt-8 inline-block rounded-full bg-[#233B6C] px-6 py-3 text-white font-semibold text-sm sm:text-base hover:bg-[#149289] transition-colors duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
