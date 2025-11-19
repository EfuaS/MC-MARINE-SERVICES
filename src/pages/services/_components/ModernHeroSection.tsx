import { Ship, Award, Clock, CheckCircle } from "lucide-react";

export default function ModernHeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-maritime-authority via-blue-900 to-maritime-growth">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-maritime-authority/20 via-maritime-authority/20 to-transparent"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-maritime-energy/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-maritime-growth/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
        {/* Main Content */}
        <div className="text-center mb-12 mt-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Maritime{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-maritime-energy to-white bg-clip-text text-transparent">
                Excellence
              </span>
              <span className="absolute bottom-3 left-0 w-full h-4 bg-maritime-growth/30 -rotate-1 blur-sm"></span>
            </span>
            <br />
            <span className="text-maritime-energy">Delivered</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto mb-4 leading-relaxed">
            Comprehensive marine surveying services ensuring compliance with
            Ghana Shipping Act and international maritime standards
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-3 border border-white/20">
            <Ship size={20} className="text-maritime-energy" />
            <span className="text-white font-medium">Vessel Services</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-3 border border-white/20">
            <CheckCircle size={20} className="text-maritime-energy" />
            <span className="text-white font-medium">Cargo Inspection</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-3 border border-white/20">
            <Award size={20} className="text-maritime-energy" />
            <span className="text-white font-medium">Certified Surveyors</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-3 border border-white/20">
            <Clock size={20} className="text-maritime-energy" />
            <span className="text-white font-medium">24/7 Available</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 maritime-hover-lift">
            <div className="text-4xl font-bold text-maritime-energy mb-2">
              17+
            </div>
            <div className="text-white/80 text-sm uppercase tracking-wider">
              Years of Service
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 maritime-hover-lift">
            <div className="text-4xl font-bold text-maritime-energy mb-2">
              500+
            </div>
            <div className="text-white/80 text-sm uppercase tracking-wider">
              Surveys Complete
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 maritime-hover-lift">
            <div className="text-4xl font-bold text-maritime-energy mb-2">
              100%
            </div>
            <div className="text-white/80 text-sm uppercase tracking-wider">
              Compliance Rate
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 maritime-hover-lift">
            <div className="text-4xl font-bold text-maritime-energy mb-2">
              24/7
            </div>
            <div className="text-white/80 text-sm uppercase tracking-wider">
              Emergency Support
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 ">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-auto text-maritime-surface"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,50L48,45C96,40,192,30,288,35C384,40,480,60,576,65C672,70,768,60,864,55C960,50,1056,50,1152,55C1248,60,1344,70,1392,75L1440,80L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
