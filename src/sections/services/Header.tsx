"use client";


export default function BannerSection() {
    return (
        <section
            className="relative flex flex-col md:flex-row items-center justify-center min-h-screen text-white overflow-hidden px-6 md:px-10 lg:px-16 pt-24 sm:pt-28"
            style={{
                background:
                    "radial-gradient(58.42% 58.08% at 49.13% 41.92%, #152850 0%, #111827 100%)",
            }}
        >

          
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 xl:gap-20">
                {/* LEFT CONTENT */}
                <div className="relative z-10 flex-1 max-w-xl text-left space-y-6 order-2 md:order-1 mt-8 md:mt-0">
                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                        Empowering Your Vision with
                    </h1>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#4FA8FF] mt-1">
                        Advanced Solutions
                    </h2>
                </div>

                  <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-xl">
                      We design and build intelligent, user-centric digital solutions — blending
                      creativity, technology, and AI innovation to help your business grow and adapt
                      in the digital age.
                  </p>

                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-md shadow-md hover:bg-gray-200 transition-all duration-300">
                      Learn More
                  </button>
                </div>

                {/* RIGHT ILLUSTRATION */}
                <div className="relative mt-8 md:mt-0 flex-1 flex justify-center items-center order-1 md:order-2">
                    <img
                        src="/services/Service.svg"
                        alt="Services illustration"
                        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain animate-float"
                    />
                </div>
            </div>
        </section>
    );
}
