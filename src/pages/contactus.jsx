import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import Navbar from '../components/navbar'; // Adjust path as needed
import Footer from '../components/Footer'; // Adjust path as needed

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Include Navbar */}
      <Navbar />
      
      {/* Main Content - shifted down with padding-top */}
      <div className="flex-grow flex flex-col items-center justify-start pt-24 pb-16 text-white" 
           style={{ background: 'linear-gradient(to bottom, #3e3211 0%, #ab9046 100%)' }}>
        
        {/* Header */}
        <h1 className="text-5xl font-bold tracking-widest mb-6">CONTACT US</h1>
        
        {/* Short paragraph */}
        <div className="text-center max-w-3xl mb-16">
          <p className="text-lg">
            Connect with our team of experts today to start your journey toward exceptional leadership and HR excellence.
          </p>
        </div>
        
        {/* Two column section with divider */}
        <div className="flex w-full max-w-4xl justify-center px-4">
          
          {/* Left column */}
          <div className="w-1/2 flex flex-col items-end pr-12">
            <div className="flex items-center space-x-4 mb-4">
              <Mail size={24} />
              <span className="text-2xl font-bold">Email</span>
            </div>
            <a href="mailto:thenextstep@gmail.com" className="text-lg mb-8 hover:text-gray-200 transition-colors">
              thenextstep@gmail.com
            </a>
            
            <div className="flex items-center space-x-4 mb-4">
              <Phone size={24} />
              <span className="text-2xl font-bold">Phone no.</span>
            </div>
            <a href="tel:+91-9827383883" className="text-lg mb-8 hover:text-gray-200 transition-colors">
              +91-9827383883
            </a>
            
            <div className="flex items-center space-x-4 mb-4">
              <MapPin size={24} />
              <span className="text-2xl font-bold">Address</span>
            </div>
            <a href="https://maps.google.com/?q=Your+Address" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-200 transition-colors">
              Your Office Address Here
            </a>
          </div>
          
          {/* Vertical divider */}
          <div className="w-px bg-white mx-4"></div>
          
          {/* Right column */}
          <div className="w-1/2 flex flex-col pl-12">
            <h2 className="text-2xl font-bold mb-6">Connect our socials</h2>
            
            <div className="space-y-6">
              <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:text-gray-200 transition-colors">
                <Instagram size={24} />
                <span className="text-2xl tracking-widest">INSTAGRAM</span>
              </a>
              
              <a href="https://facebook.com/yourcompany" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:text-gray-200 transition-colors">
                <Facebook size={24} />
                <span className="text-2xl tracking-widest">FACEBOOK</span>
              </a>
              
              <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:text-gray-200 transition-colors">
                <Linkedin size={24} />
                <span className="text-2xl tracking-widest">LINKEDIN</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Include Footer */}
      <Footer />
    </div>
  );
}