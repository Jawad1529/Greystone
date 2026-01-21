"use client";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#F8F8F8]">
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
            <span className="text-sm font-medium text-[#233B6C]">Our Story</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#233B6C] to-blue-600 bg-clip-text text-transparent">
              About Greystone Hyde Advisory Ltd.
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with innovative financial solutions since day one
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/aboutus.jpg"
                alt="About Us"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#233B6C]/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#233B6C] to-blue-600 bg-clip-text text-transparent mb-2">
                  2+
                </div>
                <div className="text-[#233B6C] font-semibold">Years of Excellence</div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              At <span className="font-semibold text-[#233B6C]">Greystone Hyde Advisory Ltd.</span>, we are committed to delivering innovative ERP, Accounting, and Data Modeling solutions that empower businesses to thrive in an increasingly competitive and data-driven world.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Our team of experienced professionals combines industry knowledge with cutting-edge technology to optimize processes, reduce operational costs, and drive actionable insights across every facet of your organization.
            </p>
            
            <div className="bg-gradient-to-r from-[#233B6C]/5 to-blue-600/5 rounded-2xl p-6 border border-gray-200/50">
              <p className="text-gray-600 text-lg leading-relaxed">
                From small startups to established enterprises, we provide tailored solutions that align perfectly with your unique business goals. We understand that no two businesses are alike, which is why our approach emphasizes personalization, scalability, and adaptability.
              </p>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              By leveraging our expertise in ERP systems, financial management, and data analytics, we help companies streamline workflows, enhance collaboration, and make informed decisions with confidence.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Our commitment goes beyond software implementation. We partner closely with our clients to offer continuous support, strategic consultation, and innovative solutions that evolve with your business.
            </p>
                        
            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block relative group mt-8"
            >
              <div className="relative group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#233B6C] to-blue-600 px-8 py-4 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#233B6C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative">Partner With Us</span>
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
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}