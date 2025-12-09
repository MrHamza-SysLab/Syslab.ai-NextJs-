import React from "react";
import Link from "next/link";
import GlowingButton from "@/components/glowingButton";

function JoinUsSection() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center py-10 sm:py-14 md:py-18 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
      style={{
        background:
          "radial-gradient(58.42% 58.08% at 49.13% 41.92%, #152850 0%, #111827 100%)",
      }}
    >
      {/* Center Card */}
      <div className="w-full max-w-4xl sm:max-w-5xl mx-auto rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(15,23,42,0.8)] px-4 xs:px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12 lg:py-14 flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
          Start Your Career with{" "}
          <span className="relative inline-block">
            <span className="text-cyan-300 font-bold">SYSLAB.AI</span>

            {/* Underline */}
            <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-0.5 bg-linear-to-r from-cyan-400 via-sky-300 to-transparent rounded-full" />

            {/* Spark effect */}
            <span className="pointer-events-none absolute -right-3 -top-2 flex gap-0.5">
              <span className="w-0.5 h-2 bg-cyan-300 rounded-full" />
              <span className="w-0.5 h-3 bg-cyan-300 rounded-full" />
              <span className="w-0.5 h-2 bg-cyan-300 rounded-full" />
            </span>
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl sm:max-w-2xl">
          Unlock opportunities to work with cutting-edge AI, innovative products,
          and industry-leading experts.
        </p>

        {/* Button */}
        <div className="mt-6 sm:mt-8">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdFDOcHyJpop0e4NJiB7m2PN8pzuvdwcm03XXzPp2EmOhDl-A/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlowingButton text="Apply Now" />
          </Link>
        </div>
      </div>

      
      
    </section>
  );
}

export default JoinUsSection;