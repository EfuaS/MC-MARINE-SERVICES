import { useEffect, useState } from "react";
import { Award, ArrowRight } from "lucide-react";
import loadingContainer from "../../../assets/images/hero-carousel/loading-container.jpeg";
import loadingContainer1 from "../../../assets/images/hero-carousel/loading-1.jpeg";
import loadingContainer2 from "../../../assets/images/hero-carousel/loading-2.jpeg";
import { Link } from "../../../router";

export default function ModernHomeHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      src: "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      alt: "Tema Port cargo operations with containers and cranes",
    },
    {
      src: loadingContainer,
      alt: "Takoradi Port vessel inspection activities",
    },
    {
      src: loadingContainer1,
      alt: "Ghana port surveying operations with maritime professionals",
    },
    {
      src: loadingContainer2,
      alt: "Ghana port surveying operations with maritime professionals",
    },
  ];

  // Auto switch background hero image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel with Modern Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Modern gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-maritime-authority/95 via-maritime-authority/85 to-maritime-growth/80"/>
          </div>
        ))}

        {/* Animated decorative elements */}
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-maritime-growth/10 rounded-full blur-3xl"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mt-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
            <Award size={16} className="text-maritime-energy" />
            <span className="text-white text-sm font-medium">
              Certified Marine Surveyors Since 2008
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ghana's{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-maritime-energy to-white bg-clip-text text-transparent">
                Premier
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-maritime-energy/30 -rotate-1"></span>
            </span>
            <br />
            <span className="text-maritime-energy">Marine Surveyors</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
            Trusted by P&I Clubs, international shipping companies, and cargo
            owners across Ghana's major ports. Delivering comprehensive marine
            surveying services with unwavering precision and regulatory
            expertise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/#contact-section"
              className="group bg-maritime-growth hover:bg-maritime-energy text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 maritime-hover-lift flex items-center justify-center gap-2"
            >
              <span>Request Survey Quote</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <Link
              to="/services"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-white/20 maritime-hover-lift"
            >
              View Our Services
            </Link>
          </div>

          {/* Compact Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-maritime-energy mb-1">
                20+
              </div>
              <div className="text-white/90 text-sm font-medium">
                Years Experience
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-maritime-energy mb-1">
                500+
              </div>
              <div className="text-white/90 text-sm font-medium">
                Surveys Complete
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-maritime-energy mb-1">
                100%
              </div>
              <div className="text-white/90 text-sm font-medium">
                Compliance
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-maritime-energy mb-1">
                24/7
              </div>
              <div className="text-white/90 text-sm font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-maritime-energy w-8"
                : "bg-white/30 w-4 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
