
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Dr. Vani
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Dedicated to helping individuals find balance, heal from trauma, and build resilience 
              for a fulfilling life. Professional psychological counseling with compassionate care.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-400" />
                <span className="text-sm">dr.vani@mindhealing.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors">Services</a></li>
              <li><a href="#appointments" className="text-gray-300 hover:text-orange-400 transition-colors">Appointments</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-orange-400 transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Individual Therapy</li>
              <li className="text-gray-300">Couples Counseling</li>
              <li className="text-gray-300">Family Therapy</li>
              <li className="text-gray-300">Child Psychology</li>
              <li className="text-gray-300">Group Therapy</li>
              <li className="text-gray-300">Online Consultation</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Dr. Vani. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
