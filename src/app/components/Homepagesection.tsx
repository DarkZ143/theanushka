'use client';

import React from "react";
import Image from "next/image";
import profilePic from "./../../../public/anushkaimg.png"; // replace with actual image path

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-50 via-green-50 to-white px-6 md:px-16 overflow-hidden"
    >
      {/* 🔹 Heartbeat Background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M0,160 L100,160 L120,80 L140,240 L180,100 L220,200 L260,160 L300,160 L320,80 L340,240 L380,100 L420,200 L460,160 L500,160 L520,80 L540,240 L580,100 L620,200 L660,160 L700,160 L720,80 L740,240 L780,100 L820,200 L860,160 L900,160 L920,80 L940,240 L980,100 L1020,200 L1060,160 L1100,160 L1120,80 L1140,240 L1180,100 L1220,200 L1260,160 L1300,160"
          >
            <animate
              attributeName="stroke-dasharray"
              from="0,2000"
              to="2000,0"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Left Side Content */}
      <div className="flex-1 text-center md:text-left space-y-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800">
          Hi, I'm <span className="text-green-600">Anushka Verma</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl">
          A passionate <span className="font-semibold text-green-700">medical student</span> 
          sharing knowledge, experiences, and inspiration from the journey of becoming a doctor.
        </p>
        <div className="space-x-4 mt-4">
          <a
            href="#about"
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            About Me
          </a>
          <a
            href="#blogs"
            className="px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition"
          >
            Read Blogs
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center relative z-10">
        {/* Glow Effect */}
        <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-400 to-green-400 blur-3xl opacity-40 animate-pulse"></div>

        {/* Profile Picture */}
        <div className="relative z-10 rounded-full border-4 border-white shadow-xl overflow-hidden">
          <Image
            src={profilePic}
            alt="Anushka Verma"
            width={350}
            height={350}
            className="rounded-full object-cover"
          />
        </div>

        {/* Floating Medical Icons */}
        <span className="absolute top-10 right-10 text-blue-600 text-4xl animate-bounce">⚕️</span>
        <span className="absolute bottom-16 left-10 text-green-600 text-3xl animate-pulse">💉</span>
        <span className="absolute bottom-10 right-20 text-red-500 text-3xl animate-ping">❤️</span>
      </div>
    </section>
  );
};

export default Hero;
