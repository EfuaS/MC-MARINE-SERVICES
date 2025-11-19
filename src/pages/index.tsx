import Footer from "./_components/Footer";
import Header from "./_components/Header";
import CertificationDisplay from "./_components/home-sections/CertificationDisplay";
import ContactSection from "./_components/home-sections/ContactSection";
import ModernHomeHero from "./_components/home-sections/ModernHomeHero";
import ServicesPreview from "./_components/home-sections/ServicesPreview";
import TrustedByLeaders from "./_components/home-sections/TrustedByLeaders";

function Home() {
  return (
    <>
      <Header />

      <main>
        <ModernHomeHero/>
        <TrustedByLeaders />
        <ServicesPreview />
        <CertificationDisplay />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
