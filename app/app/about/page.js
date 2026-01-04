"use client";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/aboutus.jpg"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#233B6C" }}>
            About GreyStone Hyde Advisory Ltd.
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            At GreyStone Hyde Advisory Ltd., we are committed to delivering innovative ERP, Accounting, and Data Modeling solutions that empower businesses to thrive in an increasingly competitive and data-driven world. Our team of experienced professionals combines industry knowledge with cutting-edge technology to optimize processes, reduce operational costs, and drive actionable insights across every facet of your organization.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            From small startups to established enterprises, GreyStone Hyde Advisory Ltd. provides tailored solutions that align perfectly with your unique business goals. We understand that no two businesses are alike, which is why our approach emphasizes personalization, scalability, and adaptability. By leveraging our expertise in ERP systems, financial management, and data analytics, we help companies streamline workflows, enhance collaboration, and make informed decisions with confidence.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Our commitment goes beyond software implementation. We partner closely with our clients to offer continuous support, strategic consultation, and innovative solutions that evolve with your business. By integrating modern technologies, industry best practices, and a client-centric approach, GreyStone ensures your organization is equipped to handle the challenges of today and seize the opportunities of tomorrow.
          </p>
          <p className="text-gray-700 text-lg">
            At GreyStone, success is measured by the value we create for our clients. Our goal is to build long-lasting relationships based on trust, transparency, and measurable results. When you choose GreyStone, you choose a partner dedicated to your growth, efficiency, and long-term success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
