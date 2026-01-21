"use client";
import { motion } from "framer-motion";

const values = [
  {
    title: "Continuous Learning",
    description:
      "We believe in always improving and staying ahead. Our team embraces new technologies and methodologies to ensure our solutions remain cutting-edge and effective.",
    icon: "/icons/learning.svg",
  },
  {
    title: "Respect for All",
    description:
      "Every individual, client, and partner is treated with dignity and respect. Collaboration and mutual understanding are at the core of everything we do.",
    icon: "/icons/respect.svg",
  },
  {
    title: "Self Competition",
    description:
      "We focus on outperforming ourselves, striving for excellence with each project. Our benchmark is always our previous best, not others.",
    icon: "/icons/competition.svg",
  },
  {
    title: "Transparency",
    description:
      "Clear communication and honesty guide our work. We ensure clients and team members are fully informed and confident in every step of the process.",
    icon: "/icons/transparency.svg",
  },
];

export default function ValuesSection() {
  return (
    <section id="values" className="pt-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-gradient-to-r from-[#233B6C]/5 to-blue-600/5">
            <div className="w-2 h-2 bg-gradient-to-r from-[#233B6C] to-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[#233B6C]">Our Principles</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#233B6C] to-blue-600 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            The guiding principles that shape everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }
              }}
              className="group relative"
            >
              {/* Gradient Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#233B6C] to-blue-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
              
              {/* Card Content */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 flex flex-col items-center text-center h-full transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl">
                {/* Icon Container with Gradient Background */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#233B6C]/10 to-blue-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={value.icon} 
                    alt={value.title} 
                    className="w-10 h-10 text-[#233B6C]" 
                  />
                </div>

                {/* Title with Gradient Text */}
                <h3 className="text-xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#233B6C] to-blue-600 bg-clip-text text-transparent">
                    {value.title}
                  </span>
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed">
                  {value.description}
                </p>
                
                {/* Gradient Decorative Line */}
                <div className="w-16 h-1 bg-gradient-to-r from-[#233B6C] to-blue-600 rounded-full mt-8 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 text-gray-600 mb-8">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1" />
            <span className="text-sm font-medium">Ready to experience our values in action?</span>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1" />
          </div>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#233B6C] to-blue-600 px-8 py-4 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#233B6C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative">Work With Us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 relative group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}