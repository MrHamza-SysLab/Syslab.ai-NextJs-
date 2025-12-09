"use client";
import { ArrowUpRight, Search, Brain, Cloud, Shield, Code, Zap } from "lucide-react";
import Link from "next/link";
import Pentagon from "@/../public/products/vector.svg";

export default function CardSection() {
  const services = [
    {
      icon: Brain,
      title: "AI Product Development",
      description: "From concept to deployment, we build intelligent products that leverage cutting-edge AI technologies to solve real-world problems.",
    },
    {
      icon: Shield,
      title: "Machine Learning & Data Science",
      description: "We help businesses unlock the power of data through predictive modeling, deep learning, and natural language processing to drive smarter decisions.",
    },
    {
      icon: Code,
      title: "Generative AI & Automation",
      description: "We leverage Large Language Models (LLMs) and Generative AI to automate workflows, enhance creativity, and deliver adaptive digital experiences.",
    },
    {
      icon: Cloud,
      title: "Cloud AI Integration",
      description: "We offer seamless AI model deployment and integration across cloud and edge platforms to ensure performance, security, and scalability.",
    },
    {
      icon: Zap,
      title: "Blockchain",
      description: "By integrating academic research with industrial application, we advance the capabilities of Blockchain to redefine trust, security, and efficiency in the digital world.",
    },
    {
      icon: Search,
      title: "Research & Innovation",
      description: "Collaborating with academia and industry, we continuously push the boundaries of Deep Learning, NLP, IoT, Blockchain, and Computer Vision to create real-world impact.",
    },
  ];

  return (
    <section className="relative flex flex-col justify-center min-h-screen text-white overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20" style={{
                background:
                    "radial-gradient(10% 10% at 20% 50%, #121928 100%)",
            }} >

      <img
        src="/gradient/Shape.svg"
        alt=""
        className="absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 object-contain w-full h-full"
      />

      {/* === SVG: LEFT SIDE GLOW (visible only on lg+) === */}
      <Pentagon className="hidden lg:block absolute right-0 top-8/12 -translate-y-1/2 w-[600px] h-[900px] opacity-70" />

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* HEADING */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 w-full text-center px-4">
          <h1
                className="w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-tight"
                style={{
                    background: "linear-gradient(135deg, #fff, #0ff)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Services That Help You Grow
            </h1>
            <h2 className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-2xl mx-auto text-center px-2">
                At SYSLAB.AI (Private) Limited, we specialize in creating intelligent, data-driven solutions designed to transform industries and empower organizations with next-generation technologies.
            </h2>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mt-8 sm:mt-10 md:mt-12 px-2 sm:px-0">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 bg-[#0d1b3d] shadow-[inset_2px_2px_4px_#081229,inset_-2px_-2px_4px_#112c6b] flex flex-col items-center text-center hover:bg-black/40 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                
                {/* Icon Container */}
                <div className="relative z-10 mb-3 sm:mb-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-[#0d1b3d] shadow-[inset_2px_2px_4px_#081229,inset_-2px_-2px_4px_#112c6b] flex items-center justify-center">
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white relative z-10" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 px-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-300 text-xs sm:text-sm leading-relaxed px-1 sm:px-2">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
