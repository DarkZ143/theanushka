import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">The Anushka</h3>
          <p className="text-sm text-gray-300">
            A journey of a medical girl sharing her experiences, knowledge, and lifestyle in the field of healthcare.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#blogs" className="hover:text-white">Blogs</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex space-x-5 text-xl">
            <a href="https://instagram.com" target="_blank"><FaInstagram className="cursor-pointer hover:text-pink-400" /></a>
            <a href="https://linkedin.com" target="_blank"><FaLinkedin className="cursor-pointer hover:text-blue-400" /></a>
            <a href="https://twitter.com" target="_blank"><FaTwitter className="cursor-pointer hover:text-sky-400" /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-8 text-sm">
        © {new Date().getFullYear()} The Anushka | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
