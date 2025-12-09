"use client";

import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaPlus } from 'react-icons/fa';
import Image from 'next/image';

function FormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
    agreeToTerms: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok || data?.success === false) {
        console.error("Contact API error:", data);
        throw new Error(data?.error || "Request failed");
      }

      setStatus("success");
      setFormData({
        firstName: "",
        email: "",
        message: "",
        agreeToTerms: false,
      });
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/reel/DAtG51pzQpE/" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/company/syslab-ai/" },
    { icon: FaYoutube, url: "https://youtu.be/e7g318dQYh4?si=iCKBRrbAF28aaB2Q" },
  ];

  return (
    <section
      className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 overflow-hidden"
      style={{
        background: "radial-gradient(58.42% 58.08% at 49.13% 41.92%, #152850 0%, #111827 100%)",
      }}
    >
      {/* Background Glob Image */}
      <img
        src="/contactUs/glob.svg"
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain w-full h-full opacity-20 pointer-events-none"
      />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* LEFT SECTION - Contact Info */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Contact Us
              </h1>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                We're here to help you with AI solutions, product inquiries, and collaboration opportunities.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                Get In Touch
              </h2>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-700 hover:scale-105 transition-transform"
                  >
                    <Icon className="text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - Contact Form */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6 sm:mb-8">
                Send Us a Message
              </h2>

              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-white text-sm sm:text-base mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#4FA8FF] focus:bg-white/15 transition-all"
                  placeholder="John"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white text-sm sm:text-base mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#4FA8FF] focus:bg-white/15 transition-all"
                  placeholder="john@company.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white text-sm sm:text-base mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#4FA8FF] focus:bg-white/15 transition-all resize-none"
                  placeholder="Tell us about your project requirements, timeline, and goals..."
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-gray-600 bg-[#0d1b3d] text-[#4FA8FF] focus:ring-[#4FA8FF] focus:ring-2"
                />
                <label htmlFor="agreeToTerms" className="ml-3 text-white text-sm sm:text-base">
                  I agree to the Privacy Policy and Terms of Service
                </label>
              </div>

              {/* Status Message */}
              {status === "success" && (
                <p className="text-sm text-green-400">
                  Your message has been sent successfully.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again later.
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting || !formData.agreeToTerms}
                className="w-full px-6 py-3 rounded-lg bg-[#0d1b3d] border-2 border-white text-white font-medium hover:bg-white/10 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPlus className="text-sm" />
                <span>{submitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormSection;