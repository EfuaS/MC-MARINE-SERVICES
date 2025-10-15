import { Link } from "../../router";

export default function Footer() {
  return (
    <footer className="bg-maritime-authority text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">MC Marine Pro</h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Ghana's premier marine surveying authority, providing certified
              excellence in maritime compliance and vessel inspections across
              Tema and Takoradi ports since 2010.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-maritime-growth rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MC</span>
              </div>
              <div>
                <div className="text-sm font-semibold">
                  Ghana Maritime Authority Certified
                </div>
                <div className="text-xs text-white/60">
                  License #GMA-MS-2010-001
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link
                  to="/"
                  className="hover:text-maritime-energy transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-maritime-energy transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-maritime-energy transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Tema: +233-30-234-5678</li>
              <li>Takoradi: +233-31-345-6789</li>
              <li>info@mcmarinepro.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>
            &copy; {new Date().getFullYear()} MC Marine Pro. All rights
            reserved. | Ghana Maritime Authority Licensed
          </p>
        </div>
      </div>
    </footer>
  );
}
