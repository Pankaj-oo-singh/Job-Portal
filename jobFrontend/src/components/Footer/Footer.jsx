import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-600">JobPort</h2>
          <p className="mt-4 text-sm">
            Your one-stop platform for finding jobs, hiring talent, and building your career.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/jobs" className="hover:underline">Find Jobs</a></li>
            <li><a href="/companies" className="hover:underline">Companies</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-800"><FaFacebookF /></a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800"><FaTwitter /></a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800"><FaLinkedinIn /></a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} JobPort. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
