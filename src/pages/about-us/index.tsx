import Footer from "../_components/Footer";
import Header from "../_components/Header";
import MissionSection from "./_components/MissionSection";
import CommitmentSection from "./_components/CommitmentSection";
import CoreValuesSection from "./_components/CoreValuesSection";
import TeamSection from "./_components/TeamSection";
import RecognitionSection from "./_components/RecognitionSection";

export default function AboutUs() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-maritime-authority via-blue-900 to-maritime-growth">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-maritime-authority/10 via-maritime-authority/20 to-transparent"></div>
            {/* Decorative geometric shapes */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-maritime-energy/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 left-20 w-96 h-96 bg-maritime-growth/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              About{" "}
              <span className="relative inline-block">
                <span className="relative z-10">MC Marine Services</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-maritime-energy/30 -rotate-1"></span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Ghana's trusted partner in marine surveying excellence since 2008
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-maritime-energy mb-2">
                  20+
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-maritime-energy mb-2">
                  500+
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wider">
                  Surveys Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-maritime-energy mb-2">
                  24/7
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wider">
                  Available
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Wave Decoration */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" className="w-full h-auto text-white">
              <path
                fill="currentColor"
                d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              ></path>
            </svg>
          </div>
        </section>

        <MissionSection />
        <CommitmentSection />
        <CoreValuesSection />
        <TeamSection />
        <RecognitionSection />
      </main>

      <Footer />
    </>
  );
}
