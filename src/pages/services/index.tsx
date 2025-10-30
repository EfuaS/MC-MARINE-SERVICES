import Footer from "../_components/Footer";
import Header from "../_components/Header";
import HeroSection from "./_components/HeroSection";
import PortOperationsBanner from "./_components/PortOperationsBanner";
import ServiceSelector from "./_components/ServiceSelector";

export default function Services() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        {/* Interactive Service Selector */}
        <ServiceSelector />

        <PortOperationsBanner />
      </main>
      <Footer />
    </>
  );
}
