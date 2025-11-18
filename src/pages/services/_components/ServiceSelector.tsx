import { CheckCircle, Package, Shield, Ship } from "lucide-react";
import { useState } from "react";

// Constants for category IDs
const CATEGORY_IDS = {
  VESSEL: "vessel",
  CARGO: "cargo",
  SPECIALIZED: "specialized",
} as const;

// Static data moved outside component for performance
const CATEGORIES = [
  {
    id: CATEGORY_IDS.VESSEL,
    name: "Vessel Services",
    icon: Ship,
    description: "Comprehensive vessel inspections and surveys",
  },
  {
    id: CATEGORY_IDS.CARGO,
    name: "Cargo Services",
    icon: Package,
    description: "Cargo condition and tally surveys",
  },
  {
    id: CATEGORY_IDS.SPECIALIZED,
    name: "Specialized Inspections",
    icon: Shield,
    description: "Regulatory compliance and specialized surveys",
  },
];

const VESSEL_TYPES = [
  {
    id: "bulk",
    name: "Bulk Carriers",
    services: ["Pre-purchase Survey", "Condition Assessment", "P&I Survey"],
  },
  {
    id: "container",
    name: "Container Ships",
    services: ["Flag State Inspection", "Damage Survey", "Insurance Survey"],
  },
  {
    id: "tanker",
    name: "Tankers",
    services: [
      "Fuel Sampling",
      "Condition Survey",
      "Cargo Tank Survey",
      "On High Bunker Surveying",
      "Off High Bunker Surveying",
    ],
  },
  {
    id: "general",
    name: "General Cargo",
    services: ["Tally Survey", "Cargo Condition", "Condition Assessment", "Loading Survey", "Cargo Damage Survey", " Sealing and Unsealing of Cargo Holds"],
  },
];

const CARGO_TYPES = [
  {
    id: "dry-bulk",
    name: "Dry Bulk Cargo",
    services: ["Tally Survey", "Condition Survey", "Loading Supervision","Draft Survey"],
  },
  {
    id: "containerized",
    name: "Containerized Cargo",
    services: [
      "Container Inspection",
      "Seal Verification",
      "Damage Assessment",
    ],
  },
  {
    id: "liquid-bulk",
    name: "Liquid Bulk",
    services: ["Tank Inspection", "Quality Survey", "Quantity Survey","Bunker Quantity Survey","Fuel Sampling","On High Bunker Surveying", "Off High Bunker Surveying"],
  },
  {
    id: "project",
    name: "Project Cargo",
    services: ["Pre-shipment Survey", "Loading Survey", "Securing Survey"],
  },
];

const SPECIALIZED_SERVICES = [
  {
    id: "compliance",
    name: "Ghana Shipping Act Compliance",
    description: "Ensure full compliance with local regulations",
  },
  {
    id: "flag-state",
    name: "Vessel Condition Inspections",
    description: "International maritime compliance surveys",
  },
  {
    id: "insurance",
    name: "Insurance Surveys",
    description: "Risk assessment and claim investigations",
  },
  {
    id: "emergency",
    name: "Emergency Response",
    description: "24/7 urgent survey and inspection services",
  },
  {
    id:"brick-cargo",
    name: "Brick Cargo Inspection",
    description: "Inspection and assessment services for brick cargo",
  },
  {
    id:"heavy-lift-inspection",
    name: "Heavy Lift Inspection",
    description: "Specialized inspections for heavy lift cargo operations",
  },{
    id:"hull-and-machinery-survey",
    name: "Hull and Machinery Survey",
    description: "Comprehensive surveys of vessel hull and machinery conditions",
  }
];

export default function ServiceSelector() {
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof CATEGORY_IDS)[keyof typeof CATEGORY_IDS]
  >(CATEGORY_IDS.VESSEL);
  const [selectedVesselType, setSelectedVesselType] = useState("");
  const [selectedCargoType, setSelectedCargoType] = useState("");


  const getRecommendedServices = () => {
    if (selectedCategory === CATEGORY_IDS.VESSEL && selectedVesselType) {
      const vessel = VESSEL_TYPES.find((v) => v.id === selectedVesselType);
      return vessel ? vessel.services : [];
    }
    if (selectedCategory === CATEGORY_IDS.CARGO && selectedCargoType) {
      const cargo = CARGO_TYPES.find((c) => c.id === selectedCargoType);
      return cargo ? cargo.services : [];
    }
    return [];
  };


  return (
    <section className="py-16 bg-maritime-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-maritime-authority">
              Find Your Required Service
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Use our interactive service finder to identify the exact maritime
            services you need
          </p>
        </div>

        {/* Service Category Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSelectedVesselType("");
                  setSelectedCargoType("");
                }}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  isSelected
                    ? "border-maritime-growth bg-white shadow-maritime"
                    : "border-slate-200 bg-white hover:border-maritime-growth hover:shadow-md"
                }`}
                aria-pressed={isSelected}
                aria-label={`Select ${category.name}: ${category.description}`}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div
                    className={`p-3 rounded-lg ${
                      isSelected
                        ? "bg-maritime-growth text-white"
                        : "bg-maritime-surface text-maritime-authority"
                    }`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-maritime-authority">
                    {category.name}
                  </h3>
                </div>
                <p className="text-text-secondary">{category.description}</p>
              </button>
            );
          })}
        </div>

        {/* Vessel Type Selection */}
        {selectedCategory === CATEGORY_IDS.VESSEL && (
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-maritime-authority mb-6">
              Select Vessel Type
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {VESSEL_TYPES.map((vessel) => {
                const isSelected = selectedVesselType === vessel.id;
                return (
                  <button
                    key={vessel.id}
                    onClick={() => setSelectedVesselType(vessel.id)}
                    className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                      isSelected
                        ? "border-maritime-growth bg-maritime-growth text-white"
                        : "border-slate-200 bg-white hover:border-maritime-growth"
                    }`}
                    aria-pressed={isSelected}
                    aria-label={`Select ${vessel.name}`}
                  >
                    <h4 className="font-semibold mb-2">{vessel.name}</h4>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Cargo Type Selection */}
        {selectedCategory === CATEGORY_IDS.CARGO && (
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-maritime-authority mb-6">
              Select Cargo Type
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {CARGO_TYPES.map((cargo) => {
                const isSelected = selectedCargoType === cargo.id;
                return (
                  <button
                    key={cargo.id}
                    onClick={() => setSelectedCargoType(cargo.id)}
                    className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                      isSelected
                        ? "border-maritime-growth bg-maritime-growth text-white"
                        : "border-slate-200 bg-white hover:border-maritime-growth"
                    }`}
                    aria-pressed={isSelected}
                    aria-label={`Select ${cargo.name}`}
                  >
                    <h4 className="font-semibold mb-2">{cargo.name}</h4>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Specialized Services */}
        {selectedCategory === CATEGORY_IDS.SPECIALIZED && (
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-maritime-authority mb-6">
              Specialized Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SPECIALIZED_SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-all duration-300"
                  role="article"
                  aria-label={service.name}
                >
                  <h4 className="text-lg font-semibold text-maritime-authority mb-2">
                    {service.name}
                  </h4>
                  <p className="text-text-secondary">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommended Services */}
        {getRecommendedServices().length > 0 && (
          <div className="bg-white rounded-xl p-8 shadow-maritime">
            <h3 className="text-2xl font-semibold text-maritime-authority mb-6">
              Recommended Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {getRecommendedServices().map((service, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-maritime-surface rounded-lg"
                  role="listitem"
                >
                  <CheckCircle
                    size={20}
                    className="text-maritime-growth flex-shrink-0"
                  />
                  <span className="font-medium text-maritime-authority">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
