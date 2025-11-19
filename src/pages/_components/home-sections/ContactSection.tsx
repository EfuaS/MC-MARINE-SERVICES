import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  CheckCircle,
} from "lucide-react";
import Button from "../Button";
import Input from "../Input";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    message: "",
    urgency: "normal",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        message: "",
        urgency: "normal",
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const officeLocations = [
    {
      name: "Tema Port Office",
      address: "Tema Port, Tema, Ghana",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.134145472372!2d0.0031649747455773647!3d5.626513494354539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102078a238ec05e3%3A0xddd02c3f72c0b7ad!2sTema%20Harbour%20Port!5e1!3m2!1sen!2sgh!4v1761831566495!5m2!1sen!2sgh",
      hours: "24/7 Operations",
    },
    {
      name: "Takoradi Port Office",
      address: "Takoradi Port, Takoradi, Ghana",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7557.261835614977!2d-1.7456484097344154!3d4.884835880363726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe770a8ab2c4bf9%3A0x794b8f65b8a452ef!2sTakoradi%20Harbour!5e1!3m2!1sen!2sgh!4v1761831690843!5m2!1sen!2sgh",
      hours: "24/7 Operations",
    },
  ];
  return (
    <section id="contact-section" className="py-20 bg-maritime-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-maritime-authority mb-6">
            Get Your Maritime Survey Quote
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
            Ready to ensure your vessel or cargo meets all regulatory
            requirements? Contact our certified marine surveyors for immediate
            assistance or request a detailed quote for your specific needs.
          </p>
          <div className="w-24 h-1 bg-maritime-growth mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 maritime-card-shadow">
              <h3 className="text-2xl font-bold text-maritime-authority mb-6">
                Request Survey Quote
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle
                    size={20}
                    color="var(--color-success)"
                    className="mr-3"
                  />
                  <span className="text-green-800">
                    Thank you! We'll contact you within 2 hours during business
                    hours.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    value={formData?.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData?.phone}
                    onChange={handleInputChange}
                    placeholder="+233-XX-XXX-XXXX"
                    required
                  />
                  <Input
                    label="Company Name"
                    type="text"
                    name="company"
                    value={formData?.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-maritime-authority mb-2">
                      Service Type
                    </label>
                    <select
                      name="serviceType"
                      value={formData?.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maritime-growth focus:border-transparent"
                      required
                    >
                      <option value="">Select service type</option>
                      <option value="vessel-inspection">
                        Vessel Inspection
                      </option>
                      <option value="cargo-survey">Cargo Survey</option>
                      <option value="pi-survey">P&I Survey</option>
                      <option value="compliance-audit">Compliance Audit</option>
                      <option value="damage-assessment">
                        Damage Assessment
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-maritime-authority mb-2">
                      Urgency Level
                    </label>
                    <select
                      name="urgency"
                      value={formData?.urgency}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maritime-growth focus:border-transparent"
                    >
                      <option value="normal">Normal (2-3 days)</option>
                      <option value="urgent">Urgent (24 hours)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-maritime-authority mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData?.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maritime-growth focus:border-transparent resize-none"
                    placeholder="Please provide details about your vessel, cargo, location, and specific requirements..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  loading={isSubmitting}
                  icon={Send}
                  iconPosition="right"
                  iconSize={20}
                  className="bg-maritime-growth hover:bg-maritime-authority text-white"
                >
                  {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                </Button>
              </form>
            </div>
            {/* Quick Contact Options */}
            <div className="bg-maritime-authority rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Contact Options</h3>
              <div className="space-y-3">
                <a
                  href="mailto:info@mcmarinepro.com"
                  className="flex items-center hover:text-maritime-energy transition-colors duration-300"
                >
                  <Mail size={18} color="currentColor" className="mr-3" />
                  info@mcmarinepro.com
                </a>
                <a
                  href="https://wa.me/+233242829813"
                  target="_blank"
                  className="flex items-center hover:text-maritime-energy transition-colors duration-300"
                >
                  <MessageCircle
                    size={18}
                    color="currentColor"
                    className="mr-3"
                  />
                  WhatsApp Us
                </a>
                <div className="flex items-center">
                  <Clock size={18} color="currentColor" className="mr-3" />
                  Response Time: &lt; 2 hours
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-7">
            {/* Office Contacts */}
            <div className="bg-maritime-authority rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Phone size={24} color="white" className="mr-3" />
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="border-b border-white/20 pb-4 last:border-b-0">
                  <h4 className="font-semibold mb-1">Mark Cobbinah</h4>
                  <a
                    href={`tel:+233-24-282-9813`}
                    className="text-xl block font-bold hover:text-maritime-energy transition-colors duration-300"
                  >
                    +233-24-282-9813
                  </a>
                  <a
                    href={`tel:+233-26-282-9813`}
                    className="text-xl block font-bold hover:text-maritime-energy transition-colors duration-300"
                  >
                    +233-26-282-9813
                  </a>
                  <p className="text-sm text-white/80 mt-1">
                    Direct line for urgent survey requests
                  </p>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white rounded-xl p-4 px-8 maritime-card-shadow">
              <h3 className="text-2xl font-bold text-maritime-authority mb-6 flex items-center">
                <MapPin
                  size={24}
                  color="var(--color-maritime-authority)"
                  className="mr-3"
                />
                Office Locations
              </h3>
              <div className="space-y-6">
                {officeLocations?.map((office, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-4 last:border-b-0"
                  >
                    <h4 className="font-semibold text-maritime-authority mb-2">
                      {office.name}
                    </h4>
                    <p className="text-text-secondary mb-2">{office.address}</p>
                    <p className="text-sm text-maritime-growth font-medium mb-3">
                      {office.hours}
                    </p>
                    <div className="w-full h-32 rounded-lg overflow-hidden bg-gray-100">
                      <iframe
                        width="100%"
                        height="100%"
                        loading="lazy"
                        title={office.name}
                        referrerPolicy="no-referrer-when-downgrade"
                        src={office.src}
                        className="border-0"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
