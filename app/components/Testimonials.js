"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Smith",
    role: "CFO, TechCorp",
    text: "GreyStone's ERP solution transformed our financial processes. Truly professional and reliable!",
  },
  {
    name: "Sara Khan",
    role: "Founder, Innovate Ltd.",
    text: "The team is knowledgeable and attentive. Highly recommended for accounting automation.",
  },
  {
    name: "David Lee",
    role: "Managing Director, FinSolutions",
    text: "Their expertise in data modeling saved us weeks of work. Excellent support throughout.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-[#F8F8F8]">
      
      {/* Heading centered at top */}
      <motion.h2
        className="text-3xl font-bold text-[#233B6C] text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-12">
        
        {/* Left side: testimonial cards */}
        <motion.div
          className="flex-1 flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between"
            >
              <p className="text-gray-700 text-sm md:text-base mb-4">{t.text}</p>
              <div>
                <h3 className="text-[#233B6C] font-semibold">{t.name}</h3>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right side: illustration */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end hidden lg:flex"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/testimonials.svg"
            alt="Testimonials Illustration"
            className="w-full max-w-md"
          />
        </motion.div>

      </div>
    </section>
  );
}
