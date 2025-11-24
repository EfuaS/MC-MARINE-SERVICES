import { Users } from "lucide-react";
import { OptimizedImage } from "../../../components/OptimizedImage";

const teamMembers = [
  {
    name: "Patrick Appiah-Opong",
    role: "Class 1 Marine Engineer",
    image: "https://mcmarineservices.com/images/the-team/appiah-oppong.png",
    description:
      "Patrick is a class one marine chief engineer with extensive experience in marine engine systems, ship surveys, and port state control inspections. He specializes in international ship management systems (ISM) and has successfully transitioned from hands-on engineering roles to leadership positions, bringing a wealth of technical and managerial expertise to our team.",
  },
  {
    name: "Mark Kwame Cobbinah",
    role: "Hull & Machinery / Cargo Surveyor",
    image: "https://mcmarineservices.com/images/the-team/mark-cobbinah.png",
    description:
      "Mark is a seasoned professional with over 15 years of experience in marine surveys, engineering, cargo inspection, and port operations. His deep knowledge of the maritime industry and commitment to excellence help drive our mission to deliver outstanding service in a dynamic and progressive environment.",
  },
  {
    name: "Richard Nortey",
    role: "Class 1 Marine Engineer",
    image: "https://mcmarineservices.com/images/the-team/richard-nortey.png",
    description:
      "Richard is a Class 1 Marine Engineer with expertise in hull and machinery surveys, draft surveys, and marine engineering. He holds advanced certifications and is a member of leading maritime organizations, demonstrating strong technical proficiency in ship operations, project management, and marine safety standards.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Users size={40} className="text-maritime-growth mr-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-maritime-authority">
              Meet Our Team
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
            Our dedicated professionals bring decades of combined experience in
            marine surveying, ensuring the highest standards of service and
            expertise.
          </p>
          <div className="w-24 h-1 bg-maritime-growth mx-auto rounded-full"></div>
        </div>

        {/* Team Grid */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-maritime-surface rounded-xl lg:overflow-hidden lg:h-80 maritime-card-shadow maritime-hover-lift group grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={` overflow-hidden my-auto size-80  place-self-center md:place-self-auto ${
                  index % 2 === 1 ? "lg:col-start-2 lg:place-self-end " : ""
                }`}
              >
                <OptimizedImage
                  src={member.image}
                  alt={member.name}
                  width={320}
                  height={320}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-300"
                  objectFit="cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold  text-maritime-authority mb-2">
                  {member.name}
                </h3>
                <p className="text-maritime-growth font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-text-secondary text-justify leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
