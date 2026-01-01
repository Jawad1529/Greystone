import Hero from "../components/Hero";
import ServiceGrid from "../components/ServiceGrid";
import WorldMapDemo from "../components/WorldMapDemo";
import AboutUs from "./about/page";
import ContactUs from "./contact/page";
import Footer from "../components/Footer";


export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </>
  );
}
