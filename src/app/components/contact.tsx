'use client';

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState("");

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        const SERVICE_ID = "service_df6n58i";
        const CONTACT_TEMPLATE_ID = "template_v5zgv1d";  // "Contact Me" template
        const AUTOREPLY_TEMPLATE_ID = "template_o8xp353"; // "Auto Reply" template
        const PUBLIC_KEY = "NOzEBpPszcORzYgmR";

        try {
            // 1️⃣ Send message to your email (Contact Me template)
            await emailjs.sendForm(
                SERVICE_ID,
                CONTACT_TEMPLATE_ID,
                form.current,
                PUBLIC_KEY
            );

            // 2️⃣ Send auto-reply to sender (Auto Reply template)
            await emailjs.send(
                SERVICE_ID,
                AUTOREPLY_TEMPLATE_ID,
                {
                    email: form.current.user_email.value, // matches {{email}} in auto-reply template
                },
                PUBLIC_KEY
            );

            setStatus("Message sent successfully! Check your email for confirmation.");
            form.current.reset();
        } catch (error) {
            console.error(error);
            setStatus("Oops! Something went wrong. Please try again.");
        }
    };

    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white px-6 md:px-16"
        >
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                    Get in <span className="text-green-600">Touch</span>
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto">
                    Have a question or want to connect? Send me a message and you will also receive an automatic confirmation.
                </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            name="user_name"   // matches {{name}} in Contact Me template
                            placeholder="Your Name"
                            required
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            name="user_email"  // used for auto-reply template
                            placeholder="Your Email"
                            required
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <input
                        type="text"
                        name="title"          // matches {{title}} in Contact Me template
                        placeholder="Subject"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        name="message"        // matches {{message}} in Contact Me template
                        placeholder="Your Message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-green-600 hover:to-blue-600 transition"
                    >
                        Send Message
                    </button>
                </form>
                {status && <p className="mt-4 text-center text-green-600 font-semibold">{status}</p>}
            </div>
        </section>
    );
};

export default Contact;
