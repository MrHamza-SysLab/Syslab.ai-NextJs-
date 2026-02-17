"use client";
import React from "react";
import Slider from "react-slick";
import GlowingButton from "@/components/glowingButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Theme-matching colors for avatar circles
const avatarColors = [
    { bg: "#1e3a8a", shadowDark: "#1e40af", shadowLight: "#3b82f6" }, // Deep Blue
    { bg: "#0c4a6e", shadowDark: "#075985", shadowLight: "#0284c7" }, // Cyan Blue
    { bg: "#581c87", shadowDark: "#6b21a8", shadowLight: "#9333ea" }, // Purple
    { bg: "#164e63", shadowDark: "#155e75", shadowLight: "#06b6d4" }, // Teal
    { bg: "#1e40af", shadowDark: "#1e3a8a", shadowLight: "#60a5fa" }, // Bright Blue
    { bg: "#4338ca", shadowDark: "#3730a3", shadowLight: "#818cf8" }, // Indigo
    { bg: "#0e7490", shadowDark: "#155e75", shadowLight: "#22d3ee" }, // Sky Blue
    { bg: "#7c3aed", shadowDark: "#6d28d9", shadowLight: "#a78bfa" }, // Violet
];

// Get consistent color for a name
const getAvatarColor = (name: string) => {
    const index = name.charCodeAt(0) % avatarColors.length;
    return avatarColors[index];
};

// Sample testimonial data
const testimonials = [
    {
        name: "Dr. Hassan Jamil Syed",
        role: "Senior Lecturer (APU)",
        time: "July, 3rd 2025",
        text: "The platform provided a smooth and efficient way to manage the assessment remotely. Most notably, the AI-based proctoring system enabled a secure environment that helped maintain academic integrity during the quiz.",
        avatar: "/avatar1.png",
    },
    {
        name: "Dr. Waseem Ikram",
        role: "Registrar (FAST-NUCES)",
        time: "July, 3rd 2025",
        text: "The broader feature set of ProctorParhai demonstrated strong potential for academic testing and institutional use. We are proud to support this homegrown solution and see its relevance in transforming how assessments are conducted in both academic and professional settings.",
        avatar: "/avatar2.png",
    },
    {
        name: "Mr. Ismail Bazaz",
        role: "General Secretary (Shamsi Educational Foundation)",
        time: "July, 3rd 2025",
        text: "The AI-based proctoring capabilities have been especially valuable in maintaining the integrity of assessments, while the overall platform experience has been intuitive for both staff and students. The system has allowed us to scale our testing and evaluation efforts without compromising on quality or oversight.",
        avatar: "/avatar2.png",
    },
    {
        name: "Wajeeh Misbah Khan",
        role: "CEO (Stiryum)",
        time: "July, 4th 2025",
        text: "We at Stiryum Technologies have had the opportunity to use ProctorParhai as part of our recruitment process to evaluate candidates from multiple countries through online assessments.",
        avatar: "/avatar3.png",
    },
    {
        name: "Mr. Arshad Mazoor",
        role: "Chief Information Officer (POL)",
        time: "July, 8th 2025",
        text: "We at Pakistan Oxygen Limited used ProctorParhai to conduct an online recruitment test for 104 candidates, and our experience with the platform has been very positive. The ease of use, flexibility, and reliability of the system made it a highly effective solution for evaluating many applicants online.",
        avatar: "/avatar3.png",
    },
    {
        name: "Dr. Sir Huzaimah Bin Husin",
        role: "Head of Department (FTKEK)",
        time: "July, 11th 2025",
        text: "Based on my experience, I would like to highly recommend ProctorParhai to my fellow educators looking for a dependable system to manage their remote assessments effecvely. Thank you.",
        avatar: "/avatar3.png",
    },
    
];

// Custom Arrows
const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="absolute top-1/2 -translate-y-1/2 
                       -right-12 sm:-right-10 md:right-[-65px] lg:right-[-65px] 
                       z-10 w-12 h-12 
                       bg-[#0d1b3d] shadow-[inset_4px_4px_8px_#081229,inset_-4px_-4px_8px_#112c6b] rounded-full 
                       flex items-center justify-center 
                       cursor-pointer transition-all duration-300"
        >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            <svg
                className="w-6 h-6 text-white relative z-10"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    );
};

const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="absolute top-1/2 -translate-y-1/2 
                      -left-12 sm:-left-10 md:left-[-65px] lg:left-[-65px] 
                      z-10 w-12 h-12 
                      bg-[#0d1b3d] shadow-[inset_4px_4px_8px_#081229,inset_-4px_-4px_8px_#112c6b] rounded-full 
                      flex items-center justify-center 
                      cursor-pointer transition-all duration-300"
        >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            <svg
                className="w-6 h-6 text-white relative z-10"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </div>
    );
};

const Testimonials: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: (dots: React.ReactNode) => (
            <div className="relative z-20">
                <ul className="flex justify-center items-center gap-4 mt-6">{dots}</ul>
            </div>
        ),
        customPaging: (i: number) => (
            <div className="relative w-4 h-4 rounded-full bg-[#0d1b3d] shadow-[inset_2px_2px_4px_#081229,inset_-2px_-2px_4px_#112c6b] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                <div className="dot-inner w-1.5 h-1.5 bg-white rounded-full opacity-50 z-10 transition-all duration-300" />
            </div>
        ),
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .slick-dots {
                        position: relative;
                        bottom: 0;
                        display: flex !important;
                        justify-content: center;
                        align-items: center;
                        padding: 0;
                        margin: 0;
                        list-style: none;
                    }
                    .slick-dots li {
                        margin: 0 4px;
                        width: auto;
                        height: auto;
                    }
                    .slick-dots li.slick-active div {
                        transform: scale(1.3);
                        box-shadow: inset 2px 2px 4px #081229, inset -2px -2px 4px #112c6b, 0 0 10px rgba(6, 182, 212, 0.5);
                    }
                    .slick-dots li.slick-active .dot-inner {
                        opacity: 1 !important;
                        width: 2.5px !important;
                        height: 2.5px !important;
                        background: #06b6d4 !important;
                        box-shadow: 0 0 8px rgba(6, 182, 212, 0.8);
                    }
                    .slick-dots li button {
                        display: none;
                    }
                    .slick-dots li button::before {
                        display: none;
                    }
                `
            }} />
            <section
                className="relative flex flex-col items-center justify-center w-full min-h-screen px-6 py-16"
                style={{
                    background:
                        "radial-gradient(58.42% 58.08% at 49.13% 41.92%, #152850 0%, #111827 100%)",
                }}
            >
            {/* Top Button */}
            <GlowingButton text="Testimonials" onClick={() => { }} />

            {/* Heading */}
            <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-center text-white">
                What’s our user <span className="text-cyan-400">says</span> about us
            </h2>

            {/* Carousel Outer Box */}
            <div className="relative mt-10 w-full max-w-6xl">
                {/* Slider with arrows outside */}
                <div className="relative rounded-3xl p-6 md:p-10 bg-[#0d1b3d] shadow-[inset_4px_4px_8px_#081229,inset_-4px_-4px_8px_#112c6b]">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                    <div className="relative z-10">
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="px-2 md:px-4">
                                <div className="relative bg-transparent opacity-90 backdrop-blur-lg rounded-2xl p-6 pt-12 border border-white/20 hover:bg-white/20 transition-all duration-300 flex flex-col justify-between min-h-[200px]">
                                    {/* Top content */}
                                    <div className="flex items-center space-x-3">
                                        {/* Circular avatar with first letter and neumorphism effect */}
                                        {(() => {
                                            const color = getAvatarColor(testimonial.name);
                                            return (
                                                <div 
                                                    className="relative w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                                                    style={{
                                                        backgroundColor: color.bg,
                                                        boxShadow: `inset 4px 4px 8px ${color.shadowDark}, inset -4px -4px 8px ${color.shadowLight}`
                                                    }}
                                                >
                                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                                                    <span className="text-white font-semibold text-lg relative z-10">
                                                        {testimonial.name.charAt(0)}
                                                    </span>
                                                </div>
                                            );
                                        })()}
                                        <div>
                                            <p className="font-semibold text-white">{testimonial.name}</p>
                                            <p className="text-gray-300 text-sm">
                                                {testimonial.role} • {testimonial.time}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Text content */}
                                    <p className="text-gray-200 mt-2">{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    </div>

                </div>
            </div>
        </section>
        </>
    );
};

export default Testimonials;
