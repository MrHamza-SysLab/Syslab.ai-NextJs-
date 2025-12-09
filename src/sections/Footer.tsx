"use client";

import { useState } from "react";
import { FaYoutube, FaLinkedin, FaInstagram, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Image from "next/image";
import FullWidthButton from "@/components/fullWidthButton";

export default function Footer() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // ✅ Dynamic social links
    const socialLinks = [
        { icon: FaInstagram, url: "https://www.instagram.com/reel/DAtG51pzQpE/" },
        { icon: FaLinkedin, url: "https://www.linkedin.com/company/syslab-ai/" },
        { icon: FaYoutube, url: "https://youtu.be/e7g318dQYh4?si=iCKBRrbAF28aaB2Q" },
    ];

    return (
        <footer className="text-white w-full border-t border-white/10" style={{ background: "radial-gradient(58.42% 58.08% at 49.13% 41.92%, #152850 0%, #111827 100%)" }}>
            <div className="container mx-auto px-6 md:px-16 py-16">
                {/* Large screens: 3 columns */}
                <div className="hidden md:flex xl:flex justify-between gap-16">
                    {/* Column 1 - Company */}
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-8">
                            <Image src="/footer/logo.svg" alt="Company Logo" width={30} height={30} />
                            <h3 className="text-2xl font-semibold">
                                SysLab.<strong style={{ color: "#1D4ED8" }}>ai</strong>
                            </h3>
                        </div>
                        <p className="text-gray-300 mb-8">
                            Room 1, Academic Block 3 FAST- National University of Computer Emerging Sciences ST-4, Sector 17-D, Shah Latif Town On National Highway Karachi.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, url }, i) => (
                                <a
                                    key={i}
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

                    {/* Column 2 - About */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-9 mt-3.5">About Us</h3>
                        <p className="text-gray-300 mb-6">
                            SYSLAB AI (Private) Limited focuses on providing and developing innovative Artificially Intelligent (AI) solutions.
                        </p>
                    </div>

                    {/* Column 3 - Subscribe */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-9 mt-3.5">Stay Up To Date</h3>
                        <FullWidthButton />
                    </div>
                </div>

                {/* Small/Medium screens: Accordion */}
                <div className="md:hidden">
                    {/* Company */}
                    <div className="border-b border-gray-700">
                        <button
                            onClick={() => toggleAccordion(0)}
                            className="w-full text-left py-4 flex justify-between items-center text-lg font-semibold"
                        >
                            <span>Company</span>
                            {openIndex === 0 ? <FaMinusCircle className="w-5 h-5 text-blue-500" /> : <FaPlusCircle className="w-5 h-5" />}
                        </button>
                        {openIndex === 0 && (
                            <div className="pl-4 pb-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <Image src="/footer/logo.svg" alt="Company Logo" width={25} height={25} />
                                    <h3 className="text-xl font-semibold">
                                        SysLab.<strong style={{ color: "#1D4ED8" }}>ai</strong>
                                    </h3>
                                </div>
                                <p className="mb-4 text-gray-300">
                                    Room 1, Academic Block 3 FAST- National University of Computer Emerging Sciences ST-4, Sector 17-D, Shah Latif Town On National Highway Karachi.
                                </p>
                                <div className="flex gap-3 mb-4">
                                    {socialLinks.map(({ icon: Icon, url }, i) => (
                                        <a
                                            key={i}
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
                        )}
                    </div>

                    {/* About */}
                    <div className="border-b border-gray-700">
                        <button
                            onClick={() => toggleAccordion(1)}
                            className="w-full text-left py-4 flex justify-between items-center text-lg font-semibold"
                        >
                            <span>About Us</span>
                            {openIndex === 1 ? <FaMinusCircle className="w-5 h-5 text-blue-500" /> : <FaPlusCircle className="w-5 h-5" />}
                        </button>
                        {openIndex === 1 && (
                            <div className="pl-4 pb-4 text-gray-300">
                                SYSLAB AI (Private) Limited focuses on providing and developing innovative Artificially Intelligent (AI) solutions.
                            </div>
                        )}
                    </div>

                    {/* Stay Up To Date */}
                    <div className="border-b border-gray-700">
                        <button
                            onClick={() => toggleAccordion(2)}
                            className="w-full text-left py-4 flex justify-between items-center text-lg font-semibold"
                        >
                            <span>Stay Up To Date</span>
                            {openIndex === 2 ? <FaMinusCircle className="w-5 h-5 text-blue-500" /> : <FaPlusCircle className="w-5 h-5" />}
                        </button>
                        {openIndex === 2 && (
                            <div className="pl-4 pb-4">
                                <FullWidthButton />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ✅ Footer Bottom Bar */}
            <div className="border-t border-gray-800 text-center py-6 text-gray-400 text-sm">
                © {new Date().getFullYear()} <span className="text-white font-semibold">SysLab.ai</span>. All rights reserved.
            </div>
        </footer>
    );
}
