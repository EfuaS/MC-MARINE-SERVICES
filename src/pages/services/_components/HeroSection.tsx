import { FileText, Shield } from "lucide-react";
import Button from "../../_components/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-maritime-authority via-maritime-growth to-blue-800 text-white py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Shield size={16} />
            <span className="text-sm font-medium">
              Certified Maritime Excellence
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Comprehensive Maritime
            <span className="block text-maritime-energy">Solutions</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            From vessel inspections to cargo surveys, we deliver certified
            maritime services that ensure compliance with Ghana Maritime
            Authority regulations and international standards.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-maritime-energy mb-2">
                500+
              </div>
              <div className="text-sm text-white/80">Vessels Surveyed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-maritime-energy mb-2">
                24/7
              </div>
              <div className="text-sm text-white/80">Emergency Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-maritime-energy mb-2">
                17+
              </div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-maritime-energy mb-2">
                100%
              </div>
              <div className="text-sm text-white/80">Compliance Rate</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              size="lg"
              icon={FileText}
              iconPosition="left"
              iconSize={20}
              className="bg-white text-maritime-authority hover:bg-maritime-energy hover:text-maritime-authority transition-all duration-300"
            >
              Request Survey Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
