import { Ship, Award, TrendingUp } from "lucide-react";

export default function RecognitionSection() {
  return (
    <section className="py-20 bg-maritime-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-maritime-authority mb-6">
            Industry Recognition
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-12">
            Certified and recognized by leading maritime authorities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 bg-maritime-surface rounded-xl maritime-card-shadow">
              <div className="w-16 h-16 bg-maritime-authority rounded-full flex items-center justify-center mx-auto mb-4">
                <Ship size={32} color="white" />
              </div>
              <h4 className="text-xl font-bold text-maritime-authority mb-3">
                Ghana Shipping Act
              </h4>
              <p className="text-text-secondary">
                Fully compliant with Act 645 and all regulatory requirements
              </p>
            </div>

            <div className="p-8 bg-maritime-surface rounded-xl maritime-card-shadow">
              <div className="w-16 h-16 bg-maritime-growth rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} color="white" />
              </div>
              <h4 className="text-xl font-bold text-maritime-authority mb-3">
                GIMS Certified
              </h4>
              <p className="text-text-secondary">
                Leading member of Ghana Institute of Marine Surveyors
              </p>
            </div>

            <div className="p-8 bg-maritime-surface rounded-xl maritime-card-shadow">
              <div className="w-16 h-16 bg-maritime-emergency rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} color="white" />
              </div>
              <h4 className="text-xl font-bold text-maritime-authority mb-3">
                500+ Surveys
              </h4>
              <p className="text-text-secondary">
                Extensive portfolio across international shipping companies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
