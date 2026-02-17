"use client";


export default function BannerSection() {
    return (
        <section
            className="bg-[#020617] relative flex flex-col md:flex-row items-center justify-center min-h-screen text-white overflow-hidden px-6 md:px-10 lg:px-16 pt-24 sm:pt-28"
        >


            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 xl:gap-20">
                {/* LEFT CONTENT */}
                <div className="relative z-10 flex-1 max-w-xl text-center md:text-left space-y-6 order-2 md:order-1 mt-8 md:mt-0">
                    <div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                            Empowering Your Vision with
                        </h1>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#4FA8FF] mt-1">
                            Advanced Solutions
                        </h2>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-xl mx-auto md:mx-0">
                        We design and build intelligent, user-centric digital solutions — blending
                        creativity, technology, and AI innovation to help your business grow and adapt
                        in the digital age.
                    </p>

                    <a href="#industry" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-md shadow-md hover:bg-gray-200 transition-all duration-300">
                        Learn More
                    </a>
                </div>

                {/* RIGHT ILLUSTRATION */}
                <div className="relative mt-8 md:mt-0 flex-1 flex justify-center items-center order-1 md:order-2">
                    {/* Theme Background Glow */}
                    <div className="absolute w-[120%] h-[120%] bg-blue-500/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0"></div>

                    <img
                        src="/services/Service.svg"
                        alt="Services illustration"
                        className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain animate-float"
                    />
                </div>
            </div>
        </section>
    );
}
