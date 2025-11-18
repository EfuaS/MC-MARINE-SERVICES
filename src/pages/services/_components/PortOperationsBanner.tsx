import Button from "../../_components/Button";
import { Phone } from "lucide-react";

export default function PortOperationsBanner() {
  return (
    <section className="py-16 bg-maritime-surface ">
      <div className="bg-gradient-to-r max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 from-maritime-authority to-maritime-growth rounded-xl p-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Ghana Port Operations Expertise
            </h3>
            <p className="text-lg mb-6 opacity-90">
              With deep knowledge of Ghana's port operations, customs
              procedures, and local regulations, we ensure smooth cargo
              operations and compliance with all requirements.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-maritime-energy mb-1">
                  98%
                </div>
                <div className="text-sm opacity-80">On-time Completion</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-maritime-energy mb-1">
                  1000+
                </div>
                <div className="text-sm opacity-80">Cargo Surveys/Year</div>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-right">
            {/* TODO: Add action */}
            <Button
              variant="primary"
              size="lg"
              icon={Phone}
              iconPosition="left"
              className="bg-white text-maritime-authority hover:bg-maritime-energy hover:text-maritime-authority mb-3"
            >
              Port Operations Hotline
            </Button>
            <div className="text-sm opacity-80">
              Direct line to our port-based surveyors
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
