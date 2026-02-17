"use client";
import React from "react";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/navbar";
import FloatingPills from "@/components/FloatingPills";

export default function Hero2() {
    return (
        <section className="relative w-full min-h-screen bg-[#020617] overflow-hidden flex flex-col items-center justify-center">
            {/* Navbar */}
            <div className="absolute top-0 w-full z-50">
                <Navbar />
            </div>

            {/* Deep Space Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#050A1F] to-[#020617] z-0 pointer-events-none"></div>

            {/* Background Stars (Particles) */}
            <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
                <StarBackground />
            </div>

            {/* Main Content */}
            <div className="relative z-30 flex flex-col items-center text-center px-4 max-w-6xl mx-auto mt-20 mb-32">
                {/* Logo Section */}
                <div className="flex flex-col items-center mb-6 animate-fade-in-up">
                    <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200/50 font-serif tracking-wide drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                        Syslab.ai
                    </h2>
                    {/* Glowing Underline */}
                    <div className="w-24 h-1 bg-blue-500/50 mt-2 rounded-full shadow-[0_0_15px_#3b82f6]"></div>
                </div>

                {/* Hero Title */}
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-jakarta font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-6 uppercase tracking-[0.08em] drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] md:whitespace-nowrap">
                    Expertise In AI Innovation
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                    Providing and developing innovative{" "}
                    <span className="text-[#a5b4fc] font-semibold">
                        Artificially Intelligent (AI)
                    </span>
                    <br className="hidden md:block" /> Solutions
                </p>
            </div>

            {/* PLANET HORIZON (Convex Curve) */}
            <div className="absolute bottom-[-150px] md:bottom-[-250px] left-1/2 -translate-x-1/2 w-[180%] md:w-[130%] h-[400px] md:h-[600px] z-10 pointer-events-none">
                {/* The Planet Body */}
                <div className="w-full h-full rounded-[50%] bg-[#020617] absolute top-20 border-t border-blue-500/30 overflow-hidden shadow-[0_-20px_100px_-20px_rgba(59,130,246,0.5)]">
                    {/* Inner Gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
                </div>

                {/* The Glowing Edge */}
                <div className="absolute top-[80px] left-0 w-full h-full rounded-[50%] shadow-[0_-10px_60px_rgba(60,130,250,0.6)] mix-blend-screen opacity-70"></div>
            </div>

            {/* Pills Container - Resting on the Curve */}
            <div className="absolute bottom-18 md:bottom-32 z-40 w-full overflow-hidden pointer-events-auto flex justify-center">
                <FloatingPills />
            </div>

            {/* Cinematic Lighting overlays */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none z-0"></div>

        </section>
    );
}
