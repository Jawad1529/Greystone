"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const headline = "Experts in Accounting, Taxation, Advisory and ERP";

  const [clients, setClients] = useState(0);
  const [years, setYears] = useState(0);
  const [cas, setCas] = useState(0);

  useEffect(() => {
    const animateCounter = (setFn, end) => {
      let current = 0;
      const duration = 1000;
      const interval = 20;
      const step = Math.ceil(end / (duration / interval));

      const timer = setInterval(() => {
        current += step;
        if (current >= end) {
          setFn(end);
          clearInterval(timer);
        } else {
          setFn(current);
        }
      }, interval);
    };

    animateCounter(setClients, 50);
    animateCounter(setYears, 2);
    animateCounter(setCas, 7);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover"
          src="/london.mkv"
           poster="/logo.svg"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Animated Headline */}
        <h1 className="font-bold text-white  ">
          {headline.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              className="inline-block text-2xl sm:text-4xl md:text-5xl lg:text-5xl"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <p className="mt-6 text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
          Modern Accounting, Taxation, Advisory and ERP solutions for your business.
        </p>

        {/* Counters (numbers animate only) */}
        <div className="mt-10 flex flex-wrap justify-center gap-10 text-white">
          <div className="text-center">
            <span className="text-3xl sm:text-4xl font-bold">
              {clients}+
            </span>
            <p className="text-sm opacity-80 mt-1">Clients</p>
          </div>

          <div className="text-center">
            <span className="text-3xl sm:text-4xl font-bold">
              {years}+
            </span>
            <p className="text-sm opacity-80 mt-1">Years in Operation</p>
          </div>

          <div className="text-center">
            <span className="text-3xl sm:text-4xl font-bold">
              {cas}+
            </span>
            <p className="text-sm opacity-80 mt-1">CAs / ACCAs</p>
          </div>
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="mt-10 inline-block rounded-full bg-[#233B6C] px-6 py-3 text-white font-semibold text-sm sm:text-base hover:bg-[#149289] transition-colors duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
