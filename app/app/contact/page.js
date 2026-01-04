"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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

  // Basic validation function
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

    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (!phone.trim()) {
      toast.error("Please enter your phone number.");
      return false;
    }

    // Simple phone regex (allow numbers, +, -)
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

    if (!validateForm()) return; // stop if validation fails

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

  const message = "We’re here to help! Feel free to contact us.";

  return (
    <section id="contact" className="py-20 bg-[#F8F8F8]">
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

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Animated Text */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#233B6C]">
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
          </h2>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="w-full md:w-1/2 bg-white rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#233B6C]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#233B6C]"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#233B6C]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#233B6C]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#233B6C]"
            ></textarea>

            <button
              type="submit"
              className="bg-[#233B6C] text-white py-3 rounded font-semibold hover:bg-[#14938E] transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
