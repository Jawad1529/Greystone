"use client";
import { motion } from "framer-motion";

const certifications = [
  { title: "ACCA", logo: "/certifications/acca.png" },
  { title: "ICAP", logo: "/certifications/icap.jpg" },
  { title: "ORACLE", logo: "/certifications/oracle.png" },
  { title: "SAP", logo: "/certifications/sap.webp" },
  { title: "QuickBooks", logo: "/certifications/quickbooks.svg" },
  { title: "XERO", logo: "/certifications/xero.jpg" },
];

// Repeat array 3 times for seamless loop
const repeatedCerts = [...certifications, ...certifications, ...certifications];

export default function CertificationsMarquee() {
  return (
    <section
      id="certifications"
      className="w-full h-[250px] bg-[#F8F8F8] overflow-hidden flex flex-col items-center"
    >
      <div className="text-3xl font-bold text-center mb-12 text-[#233B6C] ">
        Our Certifications
      </div>

      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {repeatedCerts.map((cert, i) => (
            <div
              key={i}
              className="min-w-[200px] md:min-w-[250px] bg-white rounded-xl shadow-sm p-5 flex flex-col items-center justify-center"
            >
              <img
                src={cert.logo}
                alt={cert.title}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold text-[#233B6C] text-center">
                {cert.title}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
