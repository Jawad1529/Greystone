"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sandra Perez",
    role: "CFO, TechCorp",
    text: "Greystone's ERP solution transformed our financial processes. Truly professional and reliable!",
  },
  {
    name: "Sara Khan",
    role: "Founder, Innovate Ltd.",
    text: "The team is knowledgeable and attentive. Highly recommended for accounting automation.",
  },
  {
    name: "Dustin Nathaniel",
    role: "Managing Director, FinSolutions",
    text: "Their expertise in data modeling saved us weeks of work. Excellent support throughout.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#F8F8F8]">
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
            <span className="text-sm font-medium text-[#233B6C]">Client Feedback</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#233B6C] to-blue-600 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Hear from businesses we've helped transform their financial operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side: testimonial cards */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ 
                  y: -8,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }
                }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#233B6C] to-blue-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl" />
                
                {/* Quote Icon with Gradient */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#233B6C]/10 to-blue-600/10 flex items-center justify-center mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-[#233B6C]" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
                  "{t.text}"
                </p>

                {/* Client Info with Gradient Border */}
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-[#233B6C] mb-1">{t.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{t.role}</p>
                  
                  {/* Gradient Decorative Line */}
                  <div className="w-16 h-1 bg-gradient-to-r from-[#233B6C] to-blue-600 rounded-full mt-4 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side: illustration */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative max-w-lg">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/testimonials.svg"
                  alt="Testimonials Illustration"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#233B6C]/20 to-transparent" />
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#233B6C] to-blue-600 bg-clip-text text-transparent mb-2">
                    98%
                  </div>
                  <div className="text-[#233B6C] font-semibold">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#233B6C] to-blue-600 px-8 py-4 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#233B6C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative">Join Our Happy Clients</span>
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