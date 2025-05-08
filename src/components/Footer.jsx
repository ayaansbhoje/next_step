import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-12">
      {/* Background image - fully visible */}
      <img 
        src="public\assets\footer_bg.png" 
        alt="Footer background" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      <div className="container mx-auto px-6 relative z-20">
        {/* Header - left aligned */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold tracking-wider text-white">YOUR JOURNEY BEGINS HERE</h2>
        </div>
        
        <div className="flex flex-wrap">
          {/* Left - Logo at bottom left */}
          <div className="w-1/5 mt-16">
            <div className="bg-black rounded-full h-32 w-32 flex items-center justify-center border-4" style={{ borderColor: '#AB8525' }}>
              <span className="text-4xl font-bold" style={{ color: '#AB8525' }}>TNS</span>
            </div>
            <div className="mt-2 text-lg text-white opacity-80">THE NEXT STEP</div>
          </div>
          
          {/* Middle section with Contact and Sitemap side by side */}
          <div className="w-4/5 flex -mt-8">
            {/* TO CONTACT US section */}
            <div className="w-2/5 text-white">
              <h3 className="text-xl font-semibold mb-4">TO CONTACT US</h3>
              <div className="flex items-center mb-3">
                <span className="mr-3">☎</span>
                <span>418 915-066</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="mr-3">✉</span>
                <span>nextstep@gmail.com</span>
              </div>
              <div className="flex space-x-6">
                <a href="#" style={{ color: 'white' }}>
                  <Instagram size={24} />
                </a>
                <a href="#" style={{ color: 'white' }}>
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            
            {/* SITE MAP section - positioned more towards left */}
            <div className="w-2/5 text-white -ml-16">
              <h3 className="text-xl font-semibold mb-6 text-white">SITE MAP</h3>
              <ul>
                <li className="mb-2"><a href="#" style={{ color: 'white' }}>Home</a></li>
                <li className="mb-2"><a href="#" style={{ color: 'white' }}>About us</a></li>
                <li className="mb-2"><a href="#" style={{ color: 'white' }}>Service</a></li>
                <li className="mb-2"><a href="#" style={{ color: 'white' }}>Tesitmonials</a></li>
                <li className="mb-2"><a href="#" style={{ color: 'white' }}>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;