"use client";
import React from "react";

interface GlowingButtonProps {
  text: string;
  onClick?: () => void;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative px-6 py-2 rounded-full
                 text-white text-lg font-medium
                 flex justify-center items-center
                 overflow-hidden transition-all duration-300"
    >
      {/* Gradient outline */}
      <span className="absolute -inset-1 rounded-full
                       bg-gradient-to-r from-blue-500 to-cyan-400 
                       z-0"></span>

      {/* Inner background slightly smaller to show more outline */}
      <span className="absolute inset-0.5 rounded-full bg-[#121928] z-10"></span>

      {/* Button text */}
      <span className="relative z-20">{text}</span>
    </button>
  );
};

export default GlowingButton;
