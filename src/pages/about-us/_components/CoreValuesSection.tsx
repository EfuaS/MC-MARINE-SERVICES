import { Shield, Globe, Award, Users } from "lucide-react";

export default function CoreValuesSection() {
  const values = [
    {
      icon: Shield,
      title: "Due Diligence",
      description:
        "Every assignment handled with meticulous attention to detail and regulatory compliance",
      color: "maritime-authority",
    },
    {
      icon: Globe,
      title: "International Standards",
      description:
        "Adherence to local regulations and relevant international protocols governing the marine industry",
      color: "maritime-growth",
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description:
        "Leading surveyors in the Ghana Institute of Marine Surveyors with proven expertise",
      color: "maritime-emergency",
    },
    {
      icon: Users,
      title: "Client Trust",
      description:
        "Serving cargo owners, shipping companies and their affiliates across Ghana's major ports",
      color: "maritime-authority",
    },
  ];

  return (
    <section className="py-20 bg-maritime-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-maritime-authority mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
            The principles that guide our operations and define our commitment
            to excellence in marine surveying
          </p>
          <div className="w-24 h-1 bg-maritime-growth mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 maritime-card-shadow maritime-hover-lift text-center group"
              >
                <div
                  className={`w-16 h-16 bg-${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={32} color="white" />
                </div>
                <h3 className="text-xl font-bold text-maritime-authority mb-4">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
