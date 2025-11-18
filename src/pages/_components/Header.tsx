import { FileText, Home, Ship, type LucideIcon } from "lucide-react";
import Button from "./Button";
import { Link, type Path } from "../../router";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Function to check if current path matches the navigation item
  const isActivePath = (path: Path): boolean => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems: { name: string; path: Path; icon: LucideIcon }[] = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "Services",
      path: "/services",
      icon: Ship,
    },
    // {
    //   name: "About",
    //   path: "/",
    //   icon: Users,
    // },
  ];

  return (
    <header
      className={`flex justify-between items-center fixed p-2 top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-maritime border-b border-slate-200"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      {/* logo section */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="size-10 bg-gradient-to-br from-maritime-authority to-maritime-growth rounded-lg flex items-center justify-center shadow-md group-hover:shadow-maritime-hover transition-all duration-300">
            <img
              src={logo}
              alt="waves"
              className="w-full h-full object-fill rounded-lg"
              width={40}
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-maritime-authority group-hover:text-maritime-growth transition-colors duration-300">
              MC Marine Services
            </h1>
            <p className="text-xs text-text-secondary font-mono">
              Ghana's Premium Marine Surveying Company
            </p>
          </div>
        </Link>
      </div>

      {/*Desktop Nav items */}
      <nav className="hidden lg:flex items-center -translate-x-24  space-x-1">
        {navigationItems?.map(({ icon: Icon, name, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              isActivePath(path)
                ? "bg-maritime-authority text-white shadow-md"
                : "text-maritime-authority hover:bg-maritime-surface hover:text-maritime-growth"
            }`}
          >
            <Icon size={16} />
            <span>{name}</span>
          </Link>
        ))}
      </nav>

      {/* Call to Action Button */}
      <Button
        label="Get Quote"
        iconPosition="right"
        icon={FileText}
        className="bg-maritime-growth hover:bg-maritime-authority maritime-emergency-glow"
      />
    </header>
  );
}
