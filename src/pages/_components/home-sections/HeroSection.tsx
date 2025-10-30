import { useEffect, useState } from "react";
import Button from "../Button";
import { FileText, Phone, Shield } from "lucide-react";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      src: "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      alt: "Tema Port cargo operations with containers and cranes",
    },
    {
      src: "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      alt: "Takoradi Port vessel inspection activities",
    },
    {
      src: "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
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
      {/* Background Image Carousel */}
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
            <div className="absolute inset-0 maritime-hero-bg"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ghana's Premier
          <span className="block text-maritime-energy">Marine Surveyors</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-white/90 mb-8 font-medium">
          Certified Excellence in Maritime Compliance Since 2008
        </p>

        {/* Description */}
        <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Trusted by Protective and Indemnity Clubs ( P&I Clubs), International
          Shipping Companies and Cargo Owners across Ghana's major ports. We
          deliver comprehensive marine surveying services with unwavering
          precision and regulatory expertise.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            icon={FileText}
            iconPosition="left"
            className="bg-maritime-growth hover:bg-maritime-authority maritime-hover-lift"
          >
            Request Survey Quote
          </Button>
          <Button
            className="maritime-hover-lift"
            size="lg"
            variant="destructive"
            icon={Phone}
          >
            Emergency Contact
          </Button>
        </div>

        {/* Live Port Activity Indicators */}
        <div className="flex justify-center items-center space-x-8 text-white/70">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-maritime-energy rounded-full animate-maritime-pulse"></div>
            <span className="text-sm font-medium">Tema Port Active</span>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className="w-3 h-3 bg-maritime-energy rounded-full animate-maritime-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <span className="text-sm font-medium">Takoradi Port Active</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield size={16} />
            <span className="text-sm font-medium">24/7 Response Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
