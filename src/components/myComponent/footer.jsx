"use client";

import Link from "next/link";
import { Facebook, Instagram,  Mail } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

import GhanchisLogo from "./logo";

const Footer = () => {
  return (
    <footer className="w-full text-white py-12"
    style={{backgroundColor : "#354F52"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <GhanchisLogo />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Premium fabrics and traditional wear — designed for comfort and crafted with style. 
              Experience the elegance of Pakistani fashion heritage.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="https://web.facebook.com/GHANCHIS.PK" target="_blank" className="bg-gray-800 p-2 rounded-full hover:bg-maroon-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/ghanchis.pk/" target="_blank" className="bg-gray-800 p-2 rounded-full hover:bg-maroon-600 transition-colors">
                <Instagram className="w-5 h-5" />
                
              </Link>
              <Link href="https://www.tiktok.com/@ghanchis.pk" target="_blank" className="bg-gray-800 p-2 rounded-full hover:bg-maroon-600 transition-colors">
                <FaTiktok  className="w-5 h-5" />
                
              </Link>
              <Link href="mailto:support@ghanchis.pk" className="bg-gray-800 p-2 rounded-full hover:bg-maroon-600 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gold-500 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-sm mt-4">
              <li><Link href="/" className="text-gray-300 hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link href="/collections" className="text-gray-300 hover:text-gold-400 transition-colors">Collections</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-gold-400 transition-colors">Contact</Link></li>
              <li><Link href="/size-guide" className="text-gray-300 hover:text-gold-400 transition-colors">Size Guide</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gold-500 inline-block">Customer Care</h3>
            <ul className="space-y-3 text-sm mt-4">
              <li><Link href="/faq" className="text-gray-300 hover:text-gold-400 transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="text-gray-300 hover:text-gold-400 transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-gray-300 hover:text-gold-400 transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/support" className="text-gray-300 hover:text-gold-400 transition-colors">Support</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-gold-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gold-500 inline-block">Stay Updated</h3>
            <p className="text-sm text-gray-300">
              Subscribe to our newsletter for the latest arrivals, exclusive offers, and style tips.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-3 rounded-lg text-gray-900 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-maroon-600 text-white py-3 rounded-lg hover:bg-maroon-700 transition-colors font-medium"
              >
              
              </button>
            </form>
           
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between">
          
          {/* Copyright and Policies */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Ghanchis.pk. All rights reserved.</p>
            <div className="hidden md:block">|</div>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            </div>
          </div>

          {/* Payment Methods */}
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;