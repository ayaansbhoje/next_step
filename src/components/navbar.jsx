import React, { useState } from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 -mt-4">
      <div className="flex items-center justify-between">
        {/* Left - Logo Section */}
        <div className="flex items-center">
          <div className="mr-2">
            <div className="h-14 w-14 flex items-center justify-center">
              <img
                src="public\\assets\\tns-logo.png"
                alt="TNS Logo"
                className="h-14 w-14 object-contain"
              />
            </div>
          </div>
          <div className="mr-2">
            <div className="h-36 w-36 flex items-center justify-center">
              <img
                src="public\assets\tns_logo_2.png"
                alt="TNS Logo"
                className="h-36 w-36 object-contain"
              />
            </div>
          </div>
          <div className="text-yellow-500 font-bold text-lg hidden md:block">
            THE NEXT STEP
          </div>
        </div>

        {/* Center - Menu Section */}
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-yellow-500 transition duration-300"
          >
            <span className="mr-2 text-white">MENU</span>
            <span className="inline-block">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Right - Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300">
            <Instagram size={24} className="text-white" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300">
            <Linkedin size={24} className="text-white" />
          </a>
        </div>
      </div>

      {/* Slide-in Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-1/2 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
        style={{ backgroundColor: '#DBB965' }}
      >
        <div className="flex justify-between items-center p-8">
          <div className="text-black text-3xl font-bold">MENU</div>
          <button 
            onClick={toggleMenu}
            className="text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col p-8 pt-12 space-y-3">
          <div className="border-b border-white py-5">
            <a href="/" className="!text-white text-5xl font-bold transition duration-300 hover:opacity-80">HOME</a>
          </div>
          
          <div className="border-b border-white py-5">
            <a href="/about" className="!text-white text-5xl font-bold transition duration-300 hover:opacity-80">ABOUT US</a>
          </div>
          
          <div className="border-b border-white py-5">
            <a href="/services" className="!text-white text-5xl font-bold transition duration-300 hover:opacity-80">SERVICES</a>
          </div>
          
          <div className="border-b border-white py-5">
            <a href="/reviews" className="!text-white text-5xl font-bold transition duration-300 hover:opacity-80">REVIEWS</a>
          </div>
          
          <div className="border-b border-white py-5">
            <a href="/contact" className="!text-white text-5xl font-bold transition duration-300 hover:opacity-80">CONTACT US</a>
          </div>
          {/* Social Icons in Slide-in Menu */}
          <div className="flex space-x-6 mt-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300">
              <Instagram size={28} className="text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300">
              <Linkedin size={28} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Modified overlay to only cover the left half when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-y-0 left-0 right-1/2 bg-transparent z-40"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;