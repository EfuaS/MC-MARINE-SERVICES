import { CheckCircle, Globe, Shield, Users } from "lucide-react";
import GIMS from "../../../assets/images/GIMS.jpg";
import GMA from "../../../assets/images/GMA.jpg";

// TODO: Replace with actual company certifications
const certifications = [
  {
    name: "Ghana Maritime Authority",
    type: "Primary Certification",
    logo: GMA,
  },
  {
    name: "Ghana Institute of Marine Surveyors",
    type: "Local Membership",
    logo: GIMS,
  },
];

export default function CertificationDisplay() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-maritime-authority mb-6">
            Certified Excellence & Recognition
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
            Our certifications and memberships with leading maritime
            organizations ensure the highest standards of professional
            competence and regulatory compliance in all surveying activities.
          </p>
          <div className="w-24 h-1 bg-maritime-growth mx-auto rounded-full"></div>
        </div>

        {/* Certifications Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-maritime-surface rounded-xl w-full md:w-[450px] p-6 maritime-card-shadow maritime-hover-lift group cursor-pointer"
            >
              {/* Certification Logo */}
              <div className="flex items-center mb-4">
                <div className="size-16 rounded-lg overflow-hidden bg-white shadow-md mr-4 flex-shrink-0">
                  <img
                    src={cert.logo}
                    alt={`${cert.name} logo`}
                    className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-maritime-growth bg-maritime-energy px-2 py-1 rounded-full">
                      {cert.type}
                    </span>
                      <CheckCircle
                        size={16}
                        color="var(--color-maritime-growth)"
                      />
                  </div>
                </div>
              </div>

              {/* Certification Details */}
              <h3 className="text-lg font-bold text-maritime-authority mb-2 leading-tight">
                {cert.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-maritime-growth rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} color="white" />
              </div>
              <h4 className="text-xl font-bold text-maritime-authority mb-2">
                20+ Years
              </h4>
              <p className="text-text-secondary">
                Professional maritime surveying experience
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-maritime-authority rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe name="Globe" size={32} color="white" />
              </div>
              <h4 className="text-xl font-bold text-maritime-authority mb-2">
                International
              </h4>
              <p className="text-text-secondary">
                Recognition and compliance standards
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-maritime-emergency rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield name="Shield" size={32} color="white" />
              </div>
              <h4 className="text-xl font-bold text-maritime-authority mb-2">
                100%
              </h4>
              <p className="text-text-secondary">
                Regulatory compliance record
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
