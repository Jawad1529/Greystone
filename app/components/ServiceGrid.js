"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "ERP Solutions",
    description:
      "Design, implementation, and optimization of ERP systems aligned with your business processes. We help you integrate finance, operations, and reporting into a single, reliable platform—improving efficiency, control, and real-time decision-making while reducing manual work and operational risk.",
  },
  {
    title: "Accounting Services",
    description:
      "Reliable day-to-day accounting support designed to keep your financial records accurate and up to date. Our services include professional bookkeeping, payroll processing, and routine financial reporting ensuring compliance, consistency, and clear visibility over your business finances.",
  },
  {
    title: "Tax Services",
    description:
      "Comprehensive UK tax compliance and advisory services to ensure your business and personal tax obligations are met accurately and on time. We support clients with Corporation Tax, VAT compliance, payroll tax filings, and self-assessment returns, while providing practical guidance to manage liabilities and remain fully compliant with HMRC requirements.",
  },
  {
    title: "Business Advisory",
    description:
      "Strategic and forward-looking business advisory services to help organisations progress with confidence in an evolving environment. We support clients through data-driven research and financial analysis, assisting them in navigating risks, identifying opportunities, and strengthening decision-making. Our services include cash flow management, forecasting, budgeting, performance reporting, and process streamlining. We also work with startups to establish sound business foundations, governance-ready financial structures, and reporting frameworks that support sustainable growth.",
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
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
              className="bg-white rounded-lg border-2 border-transparent cursor-pointer flex flex-col transition-all duration-300"
            >
              <div className="p-6 flex flex-col h-full">
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
