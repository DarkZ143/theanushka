'use client';

import React from "react";
import { FaCheckCircle, FaMapMarkerAlt, FaGraduationCap, FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            About <span className="text-green-600">Anushka</span>
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            I’m <span className="font-semibold text-blue-700">Anushka Verma</span>, 
            a passionate medical student preparing for my career in the 
            healthcare field. With strong interest in <span className="text-green-700">Operation Theatre Technology</span>, 
            I focus on developing skills that make a real impact in 
            patient care and medical practices.
          </p>
          
          <div className="flex items-center text-gray-600 mt-4 mb-6">
            <FaMapMarkerAlt className="text-green-600 mr-2" />
            <span>Shajahanpur (U.P.), India</span>
          </div>

          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>

        {/* Right Side - Skills & Education */}
        <div className="space-y-8">

          {/* Key Skills */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Key Skills</h3>
            <ul className="space-y-3">
              {[
                "OT Machine Operate",
                "Instrument Maintain",
                "OT Preparation",
                "Assisting Anesthesia Team",
              ].map((skill, i) => (
                <li key={i} className="flex items-center">
                  <FaCheckCircle className="mr-3 text-green-200" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaGraduationCap className="mr-3 mt-1 text-blue-200" />
                <p>
                  <span className="font-semibold">Diploma in Operation Theatre Technician</span>  
                  <br />
                  (Feb 2026 expected) – King George Medical University (KGMU), Lucknow
                </p>
              </li>
              <li className="flex items-start">
                <FaGraduationCap className="mr-3 mt-1 text-blue-200" />
                <p>
                  <span className="font-semibold">B.Sc in Zoology, Biology, Chemistry</span>  
                  <br />
                  (2025) – Royal Khand University (RKU)
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
