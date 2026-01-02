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
    <section id="values" className="py-20 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#233B6C]">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {values.map((value, i) => (
       <motion.div
  key={i}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, delay: i * 0.2 }}
  whileHover={{
    scale: 1.05,
    borderColor: "#233B6C",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  }}
  className="bg-white rounded-xl p-8 border-2 border-transparent cursor-pointer flex flex-col items-center text-center transition-all duration-300"
>
  {/* SVG Icon */}
  <img src={value.icon} alt={value.title} className="w-16 h-16 mb-4" />

  <h3 className="text-xl md:text-2xl font-semibold text-[#233B6C] mb-4">
    {value.title}
  </h3>
  <p className="text-gray-700 text-base md:text-lg">{value.description}</p>
</motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}
