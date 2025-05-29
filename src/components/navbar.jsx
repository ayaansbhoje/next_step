import React, { useState } from 'react';
import { Instagram, Linkedin, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-4 sm:px-6 -mt-2 sm:-mt-4">
      <div className="flex items-center justify-between">
        {/* Left - Logo Section */}
        <div className="flex items-center">
          <div className="mr-1 sm:mr-2">
            <div className="h-16 w-16 sm:h-8 sm:w-8 md:h-16 md:w-16 flex items-center justify-center">
              <img
                src="/assets/tns-logo.png"
                alt="TNS Logo"
                className="h-16 w-16 sm:h-8 sm:w-8 md:h-16 md:w-16 object-contain"
              />
            </div>
          </div>
          <div className="mr-1 sm:mr-2">
            <div className="h-26 w-26 sm:h-20 sm:w-20 md:h-28 md:w-28 flex items-center justify-center">
              <img
                src="/assets/tns_logo_2.png"
                alt="TNS Logo"
                className="h-26 w-26 sm:h-20 sm:w-20 md:h-28 md:w-28 object-contain"
              />
            </div>
          </div>
          <div className="text-yellow-500 font-bold text-xs sm:text-sm md:text-base hidden sm:block">
            THE NEXT 
          </div>
        </div>

        {/* Center - Menu Section */}
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            style={{
              backgroundColor: '#000000',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              padding: '6px 12px',
              borderRadius: '4px',
              border: '1px solid #FFFFFF'
            }}
          >
            <span style={{ marginRight: '8px', color: '#FFFFFF' }}>MENU</span>
            {isMenuOpen ? (
              <X style={{ width: '16px', height: '16px', color: '#FFFFFF' }} />
            ) : (
              <Menu style={{ width: '16px', height: '16px', color: '#FFFFFF' }} />
            )}
          </button>
        </div>

        {/* Right - Social Icons */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300">
            <Instagram className="text-white w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300">
            <Linkedin className="text-white w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>

      {/* Slide-in Menu */}
      <div 
        className={`fixed top-0 right-0 h-full transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50 w-3/5 sm:w-1/2 md:w-2/5`}
        style={{ backgroundColor: '#DBB965' }}
      >
        <div className="flex justify-between items-center p-4 sm:p-6 md:p-8">
          <div className="text-black font-bold text-xl sm:text-2xl md:text-3xl">MENU</div>
          <button 
            onClick={toggleMenu}
            style={{
              backgroundColor: '#000000',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
              borderRadius: '4px',
              border: '1px solid #FFFFFF'
            }}
          >
            <X style={{ width: '16px', height: '16px', color: '#FFFFFF' }} />
          </button>
        </div>
        
        <div className="flex flex-col p-4 pt-6 sm:p-6 sm:pt-8 md:p-8 md:pt-12 space-y-2 sm:space-y-3 md:space-y-4">
          <div className="border-b border-white py-3 sm:py-4 md:py-5">
            <Link to="/" className="!text-white font-bold transition duration-300 hover:opacity-80 text-2xl sm:text-3xl md:text-4xl">HOME</Link>
          </div>
          
          <div className="border-b border-white py-3 sm:py-4 md:py-5">
            <Link to="/about" className="!text-white font-bold transition duration-300 hover:opacity-80 text-2xl sm:text-3xl md:text-4xl">ABOUT US</Link>
          </div>
          
          <div className="border-b border-white py-3 sm:py-4 md:py-5">
            <Link to="/ServicesPage" className="!text-white font-bold transition duration-300 hover:opacity-80 text-2xl sm:text-3xl md:text-4xl">SERVICES</Link>
          </div>
          
          <div className="border-b border-white py-3 sm:py-4 md:py-5">
            <Link to="/reviews" className="!text-white font-bold transition duration-300 hover:opacity-80 text-2xl sm:text-3xl md:text-4xl">REVIEWS</Link>
          </div>
          
          <div className="border-b border-white py-3 sm:py-4 md:py-5">
            <Link to="/ContactUs" className="!text-white font-bold transition duration-300 hover:opacity-80 text-2xl sm:text-3xl md:text-4xl">CONTACT US</Link>
          </div>
          
          {/* Social Icons in Slide-in Menu */}
          <div className="flex space-x-4 sm:space-x-5 md:space-x-6 mt-6 sm:mt-7 md:mt-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300">
              <Instagram className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300">
              <Linkedin className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Modified overlay to cover appropriate area when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-y-0 left-0 bg-transparent z-40 w-2/5 sm:w-1/2 md:w-3/5"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;