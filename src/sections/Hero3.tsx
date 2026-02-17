"use client";
import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import StarBackground from "@/components/StarBackground";
import { useRouter } from "next/navigation";

export default function Hero3() {
    const router = useRouter();
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#020617] flex flex-col items-center justify-center pt-24 pb-12 px-6 sm:px-12 lg:px-24">
            {/* Background Layer: Stars and Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">

                {/* Dynamic Star Background */}
                <StarBackground />

                {/* Main Glow */}
                {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-40 animate-pulse-slow">
                    <Image
                        src="/herosection/Design3/MainGlow.svg"
                        alt="Main Glow"
                        fill
                        className="object-contain scale-150"
                    />
                </div> */}
            </div>

            <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-16">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left lg:pr-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 hover:border-white/20 transition-all cursor-default shadow-xl">
                        <span className="bg-white text-black text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter">New</span>
                        <span className="text-white/90 text-[13px] font-medium tracking-tight">AI-Based Interview Feature</span>
                    </div>

                    {/* Title */}
                    <div className="space-y-1 mb-8">
                        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                            Syslab.ai
                        </h1>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90 tracking-tight leading-tight">
                            Expertise In AI Innovation
                        </h2>
                    </div>

                    <p className="text-lg md:text-xl text-white/60 max-w-lg mb-12 leading-relaxed font-light">
                        Providing and developing innovative <span className="font-semibold text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Artificially Intelligent (AI) Solutions</span>
                    </p>

                    {/* CTA Button */}
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <button
                            onClick={() => router.push("/contact")}
                            className="group relative flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)] overflow-hidden">
                            <span className="relative z-10">Book a Demo</span>
                            <MoveRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </button>

                        {/* <button className="px-8 py-4 rounded-full font-bold text-white border border-white/10 hover:bg-white/5 transition-all active:scale-95">
                            Learn More
                        </button> */}
                    </div>
                </div>

                {/* Right Content: Main Diagram */}
                <div className="flex-[1.2] relative w-full aspect-square lg:aspect-auto lg:h-[800px] flex items-center justify-center">
                    <div className="relative w-[120%] h-[120%]">
                        <Image
                            src="/herosection/Design3/banner.svg"
                            alt="AI Innovation Diagram"
                            fill
                            className="object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.2)]"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>

            {/* Grid Pattern Bottom Right */}
            <div className="absolute -bottom-24 -right-24 w-[40%] h-[40%] opacity-[0.05] rotate-12 pointer-events-none hidden md:block">
                <div className="w-full h-full border-[1px] border-blue-500/20 grid grid-cols-12 grid-rows-12">
                    {Array.from({ length: 144 }).map((_, i) => (
                        <div key={i} className="border-[1px] border-blue-500/10" />
                    ))}
                </div>
            </div>

            {/* Grid Pattern Top Left */}
            <div className="absolute -top-24 -left-24 w-[30%] h-[30%] opacity-[0.03] -rotate-12 pointer-events-none hidden md:block">
                <div className="w-full h-full border-[1px] border-blue-500/20 grid grid-cols-8 grid-rows-8">
                    {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="border-[1px] border-blue-500/10" />
                    ))}
                </div>
            </div>
        </section>
    );
}
