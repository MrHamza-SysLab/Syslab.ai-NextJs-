"use client";
import React from "react";

const services = [
    "AI Automation & Intelligent Workflows",
    "Generative AI & LLM Solution",
    "Online Proctoring & Assessment",
    "Education with Conversational AI",
    "AI Model deployment Integration",
    "Custom AI System"
];

export default function FloatingPills() {
    return (
        <div className="w-full relative overflow-hidden flex group backdrop-blur-[1px]">
            {/* Gradient Masks for smooth fade out at edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>

            {/* Set 1 */}
            <div className="flex shrink-0 items-center justify-around gap-4 whitespace-nowrap animate-marquee-right hover:[animation-play-state:paused] min-w-full pr-4">
                {services.map((service, index) => (
                    <Pill key={index} text={service} />
                ))}
            </div>

            {/* Set 2 (Duplicate for Seamless Loop) */}
            <div className="flex shrink-0 items-center justify-around gap-4 whitespace-nowrap animate-marquee-right hover:[animation-play-state:paused] min-w-full pr-4">
                {services.map((service, index) => (
                    <Pill key={`dup-${index}`} text={service} />
                ))}
            </div>
        </div>
    );
}

const Pill = ({ text }: { text: string }) => (
    <div className="whitespace-nowrap px-6 py-2.5 rounded-full border border-blue-500/20 bg-[#0B1221]/80 backdrop-blur-md text-blue-100 text-sm md:text-base font-light tracking-wide hover:border-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-default">
        {text}
    </div>
);
