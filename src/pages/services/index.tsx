import Footer from "../_components/Footer";
import Header from "../_components/Header";
import ModernHeroSection from "./_components/ModernHeroSection";
import PortOperationsBanner from "./_components/PortOperationsBanner";
import ServiceSelector from "./_components/ServiceSelector";

export default function Services() {
  return (
    <>
      <Header />
      <main>
        <ModernHeroSection />
        {/* Interactive Service Selector */}
        <ServiceSelector />

        <PortOperationsBanner />
      </main>
      <Footer />
    </>
  );
}
