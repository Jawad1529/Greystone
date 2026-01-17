"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const headline = "Experts in Accounting, Taxation, Advisory and ERP";
  const [clients, setClients] = useState(0);
  const [years, setYears] = useState(0);
  const [cas, setCas] = useState(0);

  useEffect(() => {
    const animate = (setFn, end, duration = 1200) => {
      let start = 0;
      const startTime = Date.now();
      
      const updateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * end);
        
        setFn(current);
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setFn(end);
        }
      };
      
      requestAnimationFrame(updateCount);
    };

    const timer = setTimeout(() => {
      animate(setClients, 50);
      animate(setYears, 2);
      animate(setCas, 7);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#F8F8F8] flex items-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="pl-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              >
                <div className="w-2 h-2 bg-[#233B6C] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#233B6C]">Trusted by 50+ Businesses</span>
              </motion.div>

              <h1 className="font-bold text-[#233B6C] leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                {headline.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: i * 0.05,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="inline-block mr-2 whitespace-nowrap"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed"
              >
                Modern financial solutions that drive growth, ensure compliance, 
                and transform your business operations through cutting-edge technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-12 grid grid-cols-3 gap-8 max-w-xl"
              >
                {[
                  { value: clients, label: "Clients", suffix: "+" },
                  { value: years, label: "Years Experience", suffix: "+" },
                  { value: cas, label: "Experts", suffix: "+" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#233B6C] to-blue-600 bg-clip-text text-transparent">
                      {item.value}{item.suffix}
                    </div>
                    <div className="mt-2 text-sm font-medium text-gray-500">
                      {item.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="mt-12 flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#233B6C] to-blue-600 px-8 py-4 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#233B6C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative">Get Free Consultation</span>
                  <ArrowDown size={18} className="relative -rotate-90 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full bg-white/80 backdrop-blur-sm px-8 py-4 text-[#233B6C] font-semibold border-2 border-gray-200 hover:border-[#233B6C]/30 hover:shadow-xl transition-all duration-300"
                >
                  Our Services
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-auto aspect-video object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#233B6C]/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}