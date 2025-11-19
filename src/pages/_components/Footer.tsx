import { Link } from "../../router";
import logo from "../../assets/logo/logo.png";

export default function Footer() {
  return (
    <footer className="bg-maritime-authority text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="size-10 bg-gradient-to-br from-maritime-authority to-maritime-growth rounded-lg flex items-center justify-center shadow-md group-hover:shadow-maritime-hover transition-all duration-300">
                <img
                  src={logo}
                  alt="waves"
                  className="w-full h-full object-fill rounded-lg"
                  width={40}
                />
              </div>

              <h3 className="text-2xl font-bold">MC Marine Services</h3>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Ghana's premier marine surveying authority, providing certified
              excellence in maritime compliance and vessel inspections across
              Tema and Takoradi ports since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link
                  to="/services"
                  className="hover:text-maritime-energy transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-maritime-energy transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <span className="inline-flex items-center gap-2">
                  <span className="text-white/60 cursor-not-allowed">
                    Portfolio
                  </span>
                  <span className="text-xs bg-maritime-energy text-maritime-authority font-semibold px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>+233-24-282-9813</li>
              <li>+233-26-282-9813</li>
              <li>info@mcmarinepro.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>
            &copy; {new Date().getFullYear()} MC Marine Services. All rights
            reserved. | Ghana Maritime Authority Licensed
          </p>
        </div>
      </div>
    </footer>
  );
}
