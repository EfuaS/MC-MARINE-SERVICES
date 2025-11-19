import { Target, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import teamwork from "../../../assets/images/teamwork.png";
import inspection1 from "../../../assets/images/inspection2.png";
import inspection3 from "../../../assets/images/inspection3.png";
import inspection4 from "../../../assets/images/inspection4.png";
import inspection5 from "../../../assets/images/inspection5.png";

export default function CommitmentSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: teamwork,
      alt: "Team collaboration and commitment",
    },
    {
      src: inspection1,
      alt: "Marine surveyor conducting inspection",
    },
    {
      src: inspection3,
      alt: "Port operations and vessel inspection",
    },
    {
      src: inspection4,
      alt: "Cargo operations at port",
    },
    {
      src: inspection5,
      alt: "Caterpillars at port",
    },
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden maritime-card-shadow group">
              {/* Images */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-maritime-authority rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity maritime-card-shadow"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-maritime-authority rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity maritime-card-shadow"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-6">
              <Target size={40} className="text-maritime-growth mr-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-maritime-authority">
                Our Commitment
              </h2>
            </div>
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                MC Marine Services has consistently handled all her assignments
                with due diligence in consonance with Local Regulations and the
                Relevant International Protocols governing the marine industry.
              </p>
              <p>
                MC Marine Services has also gained considerable experience in
                cargo and marine survey and is among the leading surveyors in
                the Ghana Institute of Marine Surveyors, providing unparalleled
                expertise and reliability to our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
