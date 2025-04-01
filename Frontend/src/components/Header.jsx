import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // Default active link

  // Set active link based on the current URL when the component mounts
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
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
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 transition duration-300 ${
                activeLink === link.href ? "text-yellow-500" : "hover:text-yellow-500"
              }`}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden flex justify-center bg-black py-4 px-4">
          <div className="flex flex-col space-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Books", href: "/book/age-of-the-impatient-leader" },
              { label: "Speaking", href: "/speaking" },
              { label: "Consulting", href: "/consulting" },
              { label: "Publishing", href: "/publishing" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 transition duration-300 ${
                  activeLink === link.href ? "text-yellow-500" : "hover:text-yellow-500"
                }`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
