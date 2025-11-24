import { useEffect, useState, useMemo } from "react";

const majorClients = [
  {
    name: "Wilmar International",
    logo: "https://mcmarineservices.com/images/wilmar.webp",
    description: "Asia's leading agribusiness group",
  },
  {
    name: "Dzata Cement Ltd",
    logo: "https://mcmarineservices.com/images/dzata-cement.webp",
    description: "Leading cement manufacturer in Ghana",
  },
  {
    name: "Mediterranean Shipping Company",
    logo: "https://mcmarineservices.com/images/msc.webp",
    description: "Global container shipping giant",
  },
  {
    name: "Cosco Shipping",
    logo: "https://mcmarineservices.com/images/cosco.webp",
    description: "Chinese shipping powerhouse",
  },
  {
    name: "Olam Grains",
    logo: "https://mcmarineservices.com/images/olam.webp",
    description:
      "Leader in food, feed and fibre in high-growth emerging markets",
  },
  {
    name: "Africa Cement Factory",
    logo: "https://mcmarineservices.com/images/africa_cement_factory_logo.webp",
    description: "Cement manufacturing leader in Africa",
  },
  {
    name: "PZ Cussons",
    logo: "https://mcmarineservices.com/images/pz-cussons-logo.webp",
    description: "British manufacturer of personal healthcare products",
  },
  {
    name: "Aalmar Surveys",
    logo: "https://mcmarineservices.com/images/aalmar.webp",
    description: "Specialized marine surveying services",
  },
];

const trustFigures = [
  {
    figure: "500+",
    title: "Vessels Surveyed",
    subTitle: "Across International ports",
  },
  {
    figure: "24/7",
    title: "Emergency Response",
    subTitle: "Round-the-clock availability",
  },
  {
    figure: "20+",
    title: "Years Experience",
    subTitle: "Ghana Institute of Marine Surveyors certified",
  },
];

export default function TrustedByLeaders() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clientsPerSlide = 4;
  const totalSlides = Math.ceil(majorClients.length / clientsPerSlide);

  // Memoize slides to avoid recalculating on each render
  const slides = useMemo(() => {
    return Array.from({ length: totalSlides }).map((_, slideIndex) =>
      majorClients.slice(
        slideIndex * clientsPerSlide,
        (slideIndex + 1) * clientsPerSlide,
      ),
    );
  }, [totalSlides, clientsPerSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-maritime-authority mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Ship owners, Major shipping companies/agencies and cargo owners
            across Ghana's ports rely on our certified marine surveying
            expertise for regulatory compliance and operational assurance.
          </p>
        </div>

        {/* Client Logos Carousel */}
        <div
          className="relative overflow-hidden"
          role="region"
          aria-label="Client logos carousel"
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            aria-live="polite"
          >
            {slides.map((slideClients, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {slideClients.map((client) => (
                    <div
                      key={client.name}
                      className="group flex flex-col items-center p-6 bg-maritime-surface rounded-lg maritime-hover-lift cursor-pointer"
                    >
                      <div className="w-24 h-16 mb-4 overflow-hidden rounded-lg bg-white shadow-md">
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-maritime-authority text-center mb-1">
                        {client.name}
                      </h3>
                      <p className="text-xs text-text-secondary text-center">
                        {client.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Figures */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {trustFigures.map(({ figure, subTitle, title }) => (
            <div key={title} className="p-6">
              <div className="text-3xl font-bold text-maritime-growth mb-2">
                {figure}
              </div>
              <div className="text-maritime-authority font-semibold mb-1">
                {title}
              </div>
              <div className="text-sm text-text-secondary">{subTitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
