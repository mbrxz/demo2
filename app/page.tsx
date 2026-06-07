import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutSpecialist from "@/components/AboutSpecialist";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import CTABlock from "@/components/CTABlock";
import BeforeAfter from "@/components/BeforeAfter";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div id="hero-section">
          <Hero />
        </div>
        <TrustBar />
        <AboutSpecialist />
        <Services />
        <Benefits />
        <CTABlock />
        <BeforeAfter />
        <Pricing />
        <Reviews />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
