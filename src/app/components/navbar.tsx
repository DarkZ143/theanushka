'use client';

import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Blogs", path: "#blogs" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 to-green-500 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Title */}
        <a 
          href="#home"
          className="text-white font-bold text-xl cursor-pointer"
        >
          The Anushka <span className="text-green-100">| Medical Girl</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.path} 
                className="hover:text-green-100 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gradient-to-b from-blue-700 to-green-600 text-white fixed top-0 left-0 h-full w-3/4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-xl font-bold">Menu</h2>
          <FaTimes onClick={() => setIsOpen(false)} className="cursor-pointer text-2xl" />
        </div>
        <ul className="flex flex-col items-start px-6 space-y-6 mt-6 text-lg font-medium">
          {navLinks.map((link, index) => (
            <li key={index} onClick={() => setIsOpen(false)}>
              <a 
                href={link.path} 
                className="hover:text-green-100 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
