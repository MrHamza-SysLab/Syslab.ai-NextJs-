"use client";

import TopRightBulb from "@/../public/herosection/TopRightBulb.svg";
import LeftPillar from "@/../public/herosection/LeftPillar.svg";
import MiniGlow from "@/../public/herosection/MiniGlow.svg";
import TopLeftBulb from "@/../public/herosection/TopLeftBulb.svg";
import DiagonalBeam from "@/../public/herosection/DiagonalBeam.svg";

import Icon1 from "@/../public/aboutUs/1.svg";
import Icon2 from "@/../public/aboutUs/2.svg";
import Icon3 from "@/../public/aboutUs/3.svg";
import Icon4 from "@/../public/aboutUs/4.svg";

import CornerSVG from "@/../public/aboutUs/corner.svg";

export default function About() {
    return (
        <section
            className="relative flex items-center justify-center min-h-screen text-white overflow-hidden px-4 sm:px-6 md:px-8 py-16"
            style={{ background: "radial-gradient(50% 50% at 50% 50%, #121928 100%)" }}
        >
            {/* BG Shape */}
            <img
                src="/gradient/Shape1.svg"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain pointer-events-none hidden md:block"
                alt=""
            />

            <TopRightBulb className="absolute top-10 left-0 w-52 sm:w-72 md:w-[440px] h-auto opacity-80 animate-electric-glow hidden md:block" />
            <LeftPillar className="absolute -bottom-10 -left-6 md:-left-16 w-52 h-[590px] opacity-80 animate-electric-glow hidden md:block" />
            <MiniGlow className="absolute bottom-0 left-14 md:bottom-10 md:left-1/2 md:-translate-x-1/2 w-[190px] h-[100px] sm:w-44 md:w-[380px] opacity-80 animate-electric-glow hidden md:block" />
            <TopLeftBulb className="absolute bottom-16 right-[-10%] w-52 sm:w-72 md:w-[440px] h-auto opacity-80 animate-electric-glow hidden md:block" />
            <DiagonalBeam className="absolute top-[-10%] right-0 w-52 sm:w-72 md:w-[440px] h-auto opacity-80 animate-electric-glow md:rotate-[-47deg] hidden md:block" />

            {/* MAIN CONTENT */}
            <div className="relative z-10 w-full max-w-6xl mx-auto">

                {/* Heading */}
                <div className="mb-12 text-center px-2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3">
                        About Syslab.ai
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                        SYSLAB.AI (Private) Limited specializes in building and delivering innovative Artificial Intelligence solutions.
                    </p>
                </div>

                {/* CARDS AREA */}
                <div className="flex flex-col gap-6">

                    {/* ROW 1 */}
                    <div className="flex flex-col md:flex-row gap-6 w-full">

                        {/* CARD 1 */}
                        <div className="relative bg-transparent opacity-90 backdrop-blur-md rounded-2xl p-6 border border-white hover:bg-white/20 hover:scale-[1.03] transition-all duration-300 w-full md:w-[55%] overflow-hidden">
                            <div className="flex items-start gap-3 mb-3">
                                <Icon4 className="w-16 h-16 opacity-90" />
                                <h3 className="text-xl sm:text-2xl font-semibold leading-snug mt-1">
                                    Innovatiove System
                                </h3>
                            </div>
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                We believe technology and innovation should be leveraged to create efficient and effective systems.
                            </p>
                            <CornerSVG className="absolute inset-0 w-full h-full top-7 transform translate-x-[55%] pointer-events-none" />
                        </div>

                        {/* CARD 2 */}
                        <div className="relative bg-transparent opacity-90 backdrop-blur-md rounded-2xl p-6 border  border-white hover:bg-white/20 hover:scale-[1.03] transition-all duration-300 w-full md:w-[45%] overflow-hidden">
                            <div className="flex items-start gap-3 mb-3">
                                <Icon2 className="w-16 h-16 opacity-90" />
                                <h3 className="text-xl sm:text-2xl font-semibold leading-snug mt-1">
                                    Industry Impact
                                </h3>
                            </div>
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                We aim to build solutions that can positively impact and transform industries.
                            </p>
                            <CornerSVG className="absolute inset-0 w-full h-full top-7 transform translate-x-[65%] pointer-events-none" />
                        </div>

                    </div>

                    {/* ROW 2 */}
                    <div className="flex flex-col md:flex-row gap-6 w-full">

                        {/* CARD 3 */}
                        <div className="relative bg-transparent opacity-90 backdrop-blur-md rounded-2xl p-6 border  border-white hover:bg-white/20 hover:scale-[1.03] transition-all duration-300 w-full md:w-[45%] overflow-hidden">
                            <div className="flex items-start gap-3 mb-3">
                                <Icon3 className="w-16 h-16 opacity-90" />
                                <h3 className="text-xl sm:text-2xl font-semibold leading-snug mt-1">
                                    AI for All
                                </h3>
                            </div>
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                We provide AI-driven solutions to both B2B and B2C markets.
                            </p>
                            <CornerSVG className="absolute inset-0 w-full h-full top-[80px] transform translate-x-[60%] pointer-events-none" />
                        </div>

                        {/* CARD 4 */}
                        <div className="relative bg-transparent opacity-90 backdrop-blur-md rounded-2xl p-6 border  border-white hover:bg-white/20 hover:scale-[1.03] transition-all duration-300 w-full md:w-[55%] overflow-hidden">
                            <div className="flex items-start gap-3 mb-3">
                                <Icon4 className="w-16 h-16 opacity-90" />
                                <h3 className="text-xl sm:text-2xl font-semibold leading-snug mt-1">
                                    Inspired by Deep Tech
                                </h3>
                            </div>

                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                Inspired by Deep Learning, NLP, Computer Vision, Generative AI, IoT, and Blockchain.
                            </p>
                            <CornerSVG className="absolute inset-0 w-full h-full top-[55px] transform translate-x-[55%] pointer-events-none" />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
