import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-gray-900 to-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AutoHub</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner for new and used cars. Quality vehicles at competitive prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-blue-400 text-sm">Home</Link></li>
              <li><Link to="/newArrivals" className="text-gray-400 hover:text-blue-400 text-sm">New Arrivals</Link></li>
              <li><Link to="/usedCars" className="text-gray-400 hover:text-blue-400 text-sm">Used Cars</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 text-sm">Services</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 text-sm">About Us</Link></li>
              <li><Link to="/reviews" className="text-gray-400 hover:text-blue-400 text-sm">Reviews</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📧 info@autohub.com</li>
              <li>📞 +233 123 456 789</li>
              <li>📍 Accra, Ghana</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2024 AutoHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;