"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "ERP Solutions",
    description: "Design, implementation, and optimization of ERP systems aligned with your business processes. We help you integrate finance, operations, and reporting into a single, reliable platform—improving efficiency, control, and real-time decision-making while reducing manual work and operational risk.",
  },
  {
    title: "Accounting Services",
    description: "Reliable day-to-day accounting support designed to keep your financial records accurate and up to date. Our services include professional bookkeeping, payroll processing, and routine financial reporting ensuring compliance, consistency, and clear visibility over your business finances.",
  },
  {
    title: "Tax Services",
    description: "Comprehensive UK tax compliance and advisory services to ensure your business and personal tax obligations are met accurately and on time. We support clients with Corporation Tax, VAT compliance, payroll tax filings, and self-assessment returns, while providing practical guidance to manage liabilities and remain fully compliant with HMRC requirements.",
  },
  {
    title: "Business Advisory",
    description: "Strategic and forward-looking business advisory services to help organisations progress with confidence in an evolving environment. We support clients through data-driven research and financial analysis, assisting them in navigating risks, identifying opportunities, and strengthening decision-making. Our services include cash flow management, forecasting, budgeting, performance reporting, and process streamlining. We also work with startups to establish sound business foundations, governance-ready financial structures, and reporting frameworks that support sustainable growth.",
  },
];

// Motion container for stagger effect
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Slightly faster stagger for better flow
      ease: [0.16, 1, 0.3, 1], // Your signature easing curve
    },
  },
};

// Motion for each card with your animation style
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Your signature easing
    }
  },
};

export default function ServicesGrid() {
  const handleServiceClick = () => {
    // Smooth scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-gradient-to-r from-[#233B6C]/5 to-blue-600/5">
            <div className="w-2 h-2 bg-gradient-to-r from-[#233B6C] to-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[#233B6C]">Our Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#233B6C] to-blue-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From bookkeeping to advisory, we turn numbers into insight. Expert services designed 
            to simplify your finances and empower your decisions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }
              }}
              className="group relative cursor-pointer"
              onClick={handleServiceClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleServiceClick();
                }
              }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#233B6C] to-blue-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
              
              {/* Card Content */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 h-full transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl overflow-hidden">
                {/* Gradient Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#233B6C] to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                {/* Service Icon/Number with Gradient */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#233B6C]/10 to-blue-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#233B6C] to-blue-600 bg-clip-text text-transparent">
                      {i + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#233B6C] mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Call to Action with Gradient */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between group-hover:translate-x-2 transition-transform duration-300">
                    <span className="font-semibold bg-gradient-to-r from-[#233B6C] to-blue-600 bg-clip-text text-transparent">
                      Get Started
                    </span>
                    <div className="relative overflow-hidden">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#233B6C] to-blue-600 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-45 transition-all duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
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
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#233B6C]/5 to-blue-600/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={handleServiceClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#233B6C] to-blue-600 px-8 py-4 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#233B6C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative">View All Services</span>
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
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}