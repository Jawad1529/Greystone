"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "ERP Solutions",
    description:
      "Streamline your business processes with our modern ERP implementations. Optimize efficiency, reduce costs, and automate workflows with our tailored ERP solutions.",
  },
  {
    title: "Accounting Services",
    description:
      "Accurate and efficient accounting solutions tailored for your business. From bookkeeping to tax compliance, we’ve got you covered.",
  },
  {
    title: "Data Modeling",
    description:
      "Build reliable data structures for analytics and business intelligence. Make data-driven decisions with confidence.",
  },
  {
    title: "Consulting",
    description:
      "Expert guidance to optimize your workflows and systems. Get actionable insights from industry experts.",
  },
];

// Motion container for stagger effect
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delay between each card
    },
  },
};

// Motion for each card
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#233B6C]">
          Our Services
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                borderColor: "#233B6C",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="bg-white rounded-lg border-2 border-transparent cursor-pointer h-72 flex flex-col transition-all duration-300"
            >
              <div className="p-6 flex flex-col justify-start h-full">
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "#233B6C" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg mt-2">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
