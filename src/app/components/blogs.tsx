'use client';

import React, { useState } from "react";

const fakeBlogs = [
    {
        title: "How to Prepare OT for Surgery",
        desc: "Step-by-step procedure to prepare an Operation Theatre safely.",
        details: [
            "1. **Sterilize the OT:** Wipe all surfaces with approved disinfectants and ensure instruments are autoclaved.",
            "2. **Check Equipment:** Ensure suction, cautery, anesthesia machines, and monitors are functioning properly.",
            "3. **Arrange Instruments:** Place instruments on sterile trays according to the surgery type.",
            "4. **Patient Prep:** Verify patient identity, pre-surgery vitals, and position patient on OT table.",
            "5. **Team Briefing:** Communicate with surgeon, anesthetist, and nursing staff about procedure specifics.",
        ],
        date: "Aug 15, 2025",
    },
    {
        title: "Assisting Anesthesia Team Tips",
        desc: "Detailed procedure to assist anesthesia effectively.",
        details: [
            "1. **Prepare Drugs and Equipment:** Check anesthesia machine, oxygen cylinder, and suction.",
            "2. **Monitor Patient:** Assist in placing monitors (BP, ECG, O2) and observe vitals.",
            "3. **Maintain Sterility:** Handle syringes, IV lines, and equipment maintaining hygiene.",
            "4. **Support During Induction:** Hand over instruments or medications as per anesthetist instructions.",
            "5. **Post-Procedure Care:** Help monitor patient recovery, remove airway devices safely, and report vitals.",
        ],
        date: "Sep 02, 2025",
    },
    {
        title: "Maintaining Surgical Instruments",
        desc: "Stepwise guide for instrument care and maintenance.",
        details: [
            "1. **Initial Cleaning:** Rinse instruments in cold water immediately after use.",
            "2. **Disinfection:** Use enzymatic cleaners to remove blood/tissue residues.",
            "3. **Autoclaving:** Pack instruments properly and sterilize at correct temperature/time.",
            "4. **Storage:** Keep instruments dry in sterile containers to prevent contamination.",
            "5. **Routine Checks:** Inspect instruments for damage, rust, or wear before each use.",
        ],
        date: "Jul 28, 2025",
    },
    {
        title: "OT Machine Operation Basics",
        desc: "Step-by-step instructions for safe OT machine usage.",
        details: [
            "1. **Check Power Supply:** Ensure all machines are connected and functional.",
            "2. **Machine Calibration:** Calibrate suction, ventilator, and cautery machines.",
            "3. **Safety Checks:** Verify alarms, backup systems, and oxygen supply.",
            "4. **Pre-Surgery Setup:** Arrange machines near OT table for easy access.",
            "5. **Monitoring:** During surgery, assist in observing machine readings and report irregularities.",
        ],
        date: "Jun 18, 2025",
    },
    {
        title: "Medical Safety Protocols",
        desc: "Comprehensive stepwise safety protocols in OT.",
        details: [
            "1. **Hand Hygiene:** Wash hands thoroughly before and after procedures.",
            "2. **PPE Usage:** Wear masks, gloves, gowns, and caps correctly.",
            "3. **Sterile Field Maintenance:** Avoid touching non-sterile surfaces during surgery.",
            "4. **Waste Management:** Dispose of biohazard materials as per guidelines.",
            "5. **Emergency Protocols:** Keep emergency drugs and equipment ready for immediate use.",
        ],
        date: "Oct 01, 2025",
    },
    {
        title: "Patient Care Essentials",
        desc: "Step-by-step guide to ensure patient care during OT procedures.",
        details: [
            "1. **Pre-Operative Preparation:** Verify patient identity, explain procedure, and check vitals.",
            "2. **Comfort Measures:** Provide cushioning, temperature control, and reassurance.",
            "3. **During Surgery Assistance:** Monitor patient position, vitals, and support the team.",
            "4. **Post-Operative Care:** Ensure safe transfer to recovery, monitor vitals, and assist in patient comfort.",
            "5. **Documentation:** Record observations, procedure details, and report to supervising staff.",
        ],
        date: "Oct 15, 2025",
    },
];

const Blog = () => {
    const [selectedBlog, setSelectedBlog] = useState<any>(null);

    return (
        <section
            id="blogs"
            className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white px-6 md:px-16"
        >
            {/* Page content wrapper */}
            <div className={`${selectedBlog ? "blur-sm pointer-events-none" : ""} transition-all duration-300`} id="page-content">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                        My <span className="text-green-600">Blogs</span>
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Explore my experiences, tips, and step-by-step guides in the medical field. Learn practical techniques for OT preparation, patient care, and more.
                    </p>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {fakeBlogs.map((blog, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-green-600 hover:scale-105 transform transition-all duration-300 cursor-pointer"
                            onClick={() => setSelectedBlog(blog)}
                        >
                            <h3 className="text-2xl font-semibold text-blue-800 mb-3">{blog.title}</h3>
                            <p className="text-gray-600 mb-4">{blog.desc}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">{blog.date}</span>
                                <span className="text-white bg-gradient-to-r from-blue-600 to-green-600 px-4 py-2 rounded-full text-sm hover:from-green-600 hover:to-blue-600 transition">
                                    Read More
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedBlog && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    {/* Blurred overlay (optional subtle tint) */}
                    <div
                        className="absolute inset-0 bg-white bg-opacity-40"
                        onClick={() => setSelectedBlog(null)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full p-8 z-10 overflow-y-auto max-h-[90vh]">
                        <button
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
                            onClick={() => setSelectedBlog(null)}
                        >
                            ×
                        </button>
                        <h3 className="text-3xl font-bold text-blue-800 mb-4">{selectedBlog.title}</h3>
                        <ul className="text-gray-700 space-y-3 mb-6 list-disc list-inside">
                            {selectedBlog.details.map((step: string, i: number) => (
                                <li key={i}>{step}</li>
                            ))}
                        </ul>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm">{selectedBlog.date}</span>
                            <button
                                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full shadow hover:from-green-600 hover:to-blue-600 transition"
                                onClick={() => setSelectedBlog(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Blog;
