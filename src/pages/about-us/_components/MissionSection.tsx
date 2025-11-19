import { Ship } from "lucide-react";
import containers from "../../../assets/images/containers.jpg";

export default function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Ship size={40} className="text-maritime-growth mr-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-maritime-authority">
                Our Mission
              </h2>
            </div>
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                MC Marine Services seeks to offer excellent services in Marine &
                Cargo Surveys, encompassing comprehensive vessel inspections,
                cargo assessments, and marine engineering consultancy across
                Ghana's maritime industry.
              </p>
              <p>
                By the Merchant Shipping Act, 1963, Act 183 amended as Ghana
                Shipping Act 2003, Act 645; it became operational for vessels
                calling at the Sea Ports of Ghana to be inspected and their
                seaworthiness ascertained by a certified marine surveyor.
                Similarly, certain imported/exported cargoes arriving and
                leaving Ghanaian Ports are similarly subjected to official
                survey/inspection.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden maritime-card-shadow">
              <img
                src={containers}
                alt="Port operations and vessel inspection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-maritime-growth text-white p-6 rounded-xl maritime-card-shadow">
              <div className="text-4xl font-bold mb-1">17+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
