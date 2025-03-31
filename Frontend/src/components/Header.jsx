import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <nav className="hidden md:flex space-x-6 ">
          <a href="/" className="text-yellow-500 hover:text-yellow-300">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-500">
            About
          </a>
          <a href="#books" className="hover:text-yellow-500">
            Books
          </a>
          <a href="#speaking" className="hover:text-yellow-500">
            Speaking
          </a>
          <a href="#consulting" className="hover:text-yellow-500">
            Consulting
          </a>
          <a href="#publishing" className="hover:text-yellow-500">
            Publishing
          </a>
          <a href="/contact" className="hover:text-yellow-500">
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden flex justify-center bg-black py-4 px-4">
          <div className="flex flex-col space-y-3">
            <a href="/" className="text-yellow-500 hover:text-yellow-300">
              Home
            </a>
            <a href="#about" className="hover:text-yellow-500">
              About
            </a>
            <a href="#books" className="hover:text-yellow-500">
              Books
            </a>
            <a href="#speaking" className="hover:text-yellow-500">
              Speaking
            </a>
            <a href="#consulting" className="hover:text-yellow-500">
              Consulting
            </a>
            <a href="#publishing" className="hover:text-yellow-500">
              Publishing
            </a>
            <a href="/contact" className="hover:text-yellow-500">
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
