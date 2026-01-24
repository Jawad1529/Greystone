'use client';
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ServiceGrid from "../components/ServiceGrid";
import WorldMapDemo from "../components/WorldMapDemo";
import AboutUs from "./about/page";
import ContactUs from "./contact/page";
import Footer from "../components/Footer";
import CertificationsCarousel from "../components/Cerifications";
import ValuesSection from "../components/Values";
import TestimonialsMarquee from "../components/Testimonials";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = "/icons/logo.svg";
    img.onload = () => setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-gray-900"></div>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <ServiceGrid />
      <CertificationsCarousel />
      <TestimonialsMarquee />
      <AboutUs />
      <ValuesSection />
      <ContactUs />
      <Footer />
    </>
  );
}
