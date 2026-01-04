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
  return (
    <>
      <Hero />
      <ServiceGrid />
      <CertificationsCarousel/>
      <TestimonialsMarquee/>
      <AboutUs/>
      <ValuesSection/>
      <ContactUs/>
      <Footer/>

    </>
  );
}
