import { ArrowRight, Check, Package, Shield, Ship } from "lucide-react";
import { useState } from "react";
import Button from "../Button";
import { Link, useNavigate } from "../../../router";
import { cn } from "@sglara/cn";

const services = [
  {
    id: "vessel",
    title: "Vessel Services",
    icon: Ship,
    description: "Comprehensive vessel inspections and maritime compliance",
    shortDesc: "Hull inspections, P&I surveys, and vessel certifications",
    features: [
      "Hull and Structural Inspections",
      "P&I Club Surveys",
      "Pre-Purchase Inspections",
      "Damage Assessments",
      "Classification Surveys",
      "Port State Control Support",
    ],
    color: "maritime-authority",
    themeBgColor: "bg-maritime-authority",
    bgColor: "bg-blue-50",
    hoverColor: "hover:bg-blue-100",
    buttonStyle:
      "border-maritime-authority text-maritime-authority hover:bg-maritime-authority hover:text-white w-full",
  },
  {
    id: "cargo",
    title: "Cargo Services",
    icon: Package,
    description: "Expert cargo inspection and condition assessments",
    shortDesc: "Tally surveys, condition assessments, and cargo documentation",
    features: [
      "Cargo Tally Surveys",
      "Condition Assessments",
      "Loading/Discharge Supervision",
      "Container Inspections",
      "Bulk Cargo Surveys",
      "Damage Documentation",
    ],
    color: "maritime-growth",
    themeBgColor: "bg-maritime-growth",
    bgColor: "bg-green-50",
    hoverColor: "hover:bg-green-100",
    buttonStyle:
      "border-maritime-growth text-maritime-growth hover:bg-maritime-growth hover:text-white w-full",
  },
  {
    id: "specialized",
    title: "Specialized Inspections",
    icon: Shield,
    description: "Regulatory compliance and specialized maritime surveys",
    shortDesc: "Ghana Shipping Act compliance and international standards",
    features: [
      "Ghana Shipping Act Compliance",
      "ISM Code Audits",
      "ISPS Security Assessments",
      "Environmental Surveys",
      "Insurance Surveys",
      "Expert Witness Services",
    ],
    color: "maritime-emergency",
    themeBgColor: "bg-maritime-emergency",
    bgColor: "bg-red-50",
    hoverColor: "hover:bg-red-100",
    buttonStyle:
      "border-maritime-emergency text-maritime-emergency hover:bg-maritime-emergency hover:text-white w-full",
  },
];

export default function ServicesPreview() {
  const [hoveredService, setHoveredService] = useState("");
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-maritime-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-maritime-authority mb-6">
            Comprehensive Maritime Solutions
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
            From vessel inspections to cargo assessments, we provide the full
            spectrum of marine surveying services required for safe and
            compliant maritime operations in Ghana's ports.
          </p>
          <div className="w-24 h-1 bg-maritime-growth mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const { icon: Icon } = service;
            return (
              <div
                key={service.id}
                className={`relative group ${service.bgColor} ${service.hoverColor} rounded-xl p-8 maritime-card-shadow transition-all duration-300 cursor-pointer maritime-hover-lift`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService("")}
              >
                {/* Service Icon */}
                <div
                  className={`w-16 h-16 ${service.themeBgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={32} color="white" strokeWidth={2} />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-maritime-authority mb-4">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {hoveredService === service.id
                    ? service.description
                    : service.shortDesc}
                </p>

                {/* Expandable Features */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    hoveredService === service.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <h4 className="text-sm font-semibold text-maritime-authority mb-3">
                      Key Services Include:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-text-secondary"
                        >
                          <Check
                            size={14}
                            color="var(--color-maritime-growth)"
                            className="mr-2 flex-shrink-0"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div
                  className={`transition-all duration-300 ${
                    hoveredService === service.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    iconPosition="right"
                    iconSize={16}
                    className={service.buttonStyle}
                    onClick={()=> navigate('/services')}
                  >
                    Learn More
                  </Button>
                </div>

                {/* Hover Indicator */}
                <div
                  className={cn(
                    "absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-300",
                    hoveredService === service.id
                      ? service.themeBgColor
                      : "bg-gray-300",
                  )}
                />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/services">
            <Button
              size="lg"
              iconPosition="right"
              iconSize={20}
              icon={ArrowRight}
              className="bg-maritime-authority hover:bg-maritime-growth text-white px-8 py-4 text-lg font-semibold maritime-hover-lift"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
