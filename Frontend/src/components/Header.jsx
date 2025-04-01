import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the "Books" menu should be active
  const isBooksActive = location.pathname.startsWith("/book");

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo (unchanged) */}
        <div className="flex items-center">
          <div className="mr-4 w-full h-20">
            <img
              src={logo}
              alt="PV Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder.svg?height=80&width=80";
              }}
            />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/#about" },
            { label: "Books", href: "/book/age-of-the-impatient-leader" },
            { label: "Speaking", href: "/#speaking" },
            { label: "Consulting", href: "/#consulting" },
            { label: "Publishing", href: "/#publishing" },
            { label: "Contact", href: "/contact" },
          ].map((link) => {
            const isActive = location.pathname === link.href || (link.label === "Books" && isBooksActive);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 transition duration-300 ${
                  isActive ? "text-yellow-500" : "hover:text-yellow-500"
                }`}
              >
                {link.label}
                {isActive && <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></div>}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center bg-black py-4 px-4 text-center space-y-3">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/#about" },
            { label: "Books", href: "/book/age-of-the-impatient-leader" },
            { label: "Speaking", href: "/#speaking" },
            { label: "Consulting", href: "/#consulting" },
            { label: "Publishing", href: "/#publishing" },
            { label: "Contact", href: "/contact" },
          ].map((link) => {
            const isActive = location.pathname === link.href || (link.label === "Books" && isBooksActive);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative block px-4 py-2 transition duration-300 ${
                  isActive ? "text-yellow-500" : "hover:text-yellow-500"
                }`}
              >
                {link.label}
                {isActive && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-yellow-500"></div>}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;
