"use client";
import Image from "next/image";

export default function PartnerAwards() {
  const images = [
    "/partnerAwards/fast.png",
    "/partnerAwards/nic.png",
    "/partnerAwards/pif.png",
    "/partnerAwards/shamsipng.png",
    "/partnerAwards/ncai.png",
    "/partnerAwards/googledev.png",
    "/partnerAwards/pasha.png",
    "/partnerAwards/nividia.png",
    "/partnerAwards/hec.png",
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden px-4 sm:px-6 md:px-8 py-12 sm:py-16" 
    style={{ background: "radial-gradient(50% 50% at 50% 50%, #121928 100%)" }}
    >

      <img
        src="/gradient/Shape.svg"
        alt=""
        className="absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 object-contain w-full h-full hidden md:block pointer-events-none"
      />
      
      <div className="container relative z-10 text-center max-w-7xl mx-auto w-full">
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 sm:mb-6">
          Partner & Awards
        </h1>

        {/* Responsive Grid */}
        <div
          className="mt-8 sm:mt-10 md:mt-12 
            grid 
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
            gap-6 sm:gap-6 md:gap-8 lg:gap-10 
            justify-items-center
            w-full
            px-2 sm:px-4"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px]
                         aspect-square
                         flex items-center justify-center 
                         bg-[#0d1b3d] rounded-xl p-3 sm:p-4 md:p-5
                         hover:scale-105
                         transition-all duration-300
                         overflow-hidden"
              style={{
                boxShadow: 'inset 4px 4px 8px #081229, inset -4px -4px 8px #112c6b'
              }}
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none backdrop-blur-sm" />
              
              {/* Image container */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Image
                  src={src}
                  alt={`Partner ${index + 1}`}
                  width={200}
                  height={200}
                  className="object-contain w-full h-full p-1"
                  unoptimized
                  priority={index < 4}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
