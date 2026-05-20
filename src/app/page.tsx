import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import OracleModernization from "@/components/OracleModernization";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Technologies />
      <OracleModernization />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Industries />
      <Contact />
      <Footer />
    </main>
  );
}
