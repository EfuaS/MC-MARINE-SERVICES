import { useEffect, useState, useMemo } from "react";

const majorClients = [
  {
    id: 1,
    name: "Maersk Line",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=200&h=100",
    description: "Global shipping leader",
  },
  {
    id: 2,
    name: "MSC Mediterranean",
    logo: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
    description: "Container shipping excellence",
  },
  {
    id: 3,
    name: "CMA CGM Group",
    logo: "https://images.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg?auto=format&fit=crop&w=200&h=100",
    description: "French shipping giant",
  },
  {
    id: 4,
    name: "Hapag-Lloyd",
    logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=200&h=100",
    description: "German maritime expertise",
  },
  {
    id: 5,
    name: "COSCO Shipping",
    logo: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
    description: "Chinese shipping powerhouse",
  },
  {
    id: 6,
    name: "Evergreen Marine",
    logo: "https://images.pixabay.com/photo/2016/11/29/05/45/container-1867340_1920.jpg?auto=format&fit=crop&w=200&h=100",
    description: "Taiwanese container line",
  },
  {
    id: 7,
    name: "ONE Ocean Network",
    logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=200&h=100",
    description: "Japanese alliance",
  },
  {
    id: 8,
    name: "Yang Ming Marine",
    logo: "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
    description: "Taiwan-based carrier",
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
    figure: "17",
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
                      key={client.id}
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
