import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section - Name and Bio */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Pawan Verma</h2>
            <p className="text-sm text-gray-300 mb-4">
              Speaker and Management Consultant from India Speaker and Management Consultant from India
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-500 transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition duration-300">
                  Books
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition duration-300">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="mb-2">Mumbai, Maharashtra, India</p>
            <p className="mb-2">Phone: (+91) 93222-45678</p>
            <p className="mb-2">Email: office@pawanverma@gmail.com</p>
          </div>
        </div>

        {/* Curved Shape */}
        <div className="absolute top-0 left-0 w-full h-12 bg-black">
          <div className="absolute top-0 left-0 w-full h-12 bg-white rounded-b-[50%] transform translate-y-[-50%]"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

