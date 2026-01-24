"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ArrowDown } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, phone, subject, message } = formData;

    if (!name.trim()) {
      toast.error("Please enter your name.");
      return false;
    }

    if (!email.trim()) {
      toast.error("Please enter your email.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (!phone.trim()) {
      toast.error("Please enter your phone number.");
      return false;
    }

    const phoneRegex = /^[0-9+\- ]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid phone number.");
      return false;
    }

    if (!subject.trim()) {
      toast.error("Please enter a subject.");
      return false;
    }

    if (!message.trim()) {
      toast.error("Please enter a message.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const serviceID = "service_bccnuw8";
    const templateID = "template_hv4x48a";
    const publicKey = "zLeGwJUIh7RUCCJfF";

    const fullMessage = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    emailjs
      .send(
        serviceID,
        templateID,
        {
          title: formData.subject,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: fullMessage,
        },
        publicKey
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        toast.error("Oops! Something went wrong.");
      });
  };

  const message = "We're here to help! Feel free to contact us.";

  return (
    <section id="contact" className="py-24 bg-[#F8F8F8]">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simplified Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#233B6C] to-blue-600 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-3xl font-bold text-[#233B6C] mb-6">
              {message.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Ready to transform your financial operations? Let's start the conversation.
            </p>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#233B6C]/30"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#233B6C]/30"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#233B6C]/30"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#233B6C]/30"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#233B6C]/30"
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group w-full cursor-pointer inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#233B6C] to-blue-600 px-8 py-4 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#233B6C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative">Send Message</span>
                  <ArrowDown size={18} className="relative -rotate-90 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}