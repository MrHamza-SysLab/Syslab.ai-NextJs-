"use client";



export default function CustomersUsers() {
    // Logo order: stiryum, fast, ubl, stiryum, pakOxygen, ubl, shamsi
    const logoOrder = [
        { name: "FAST", image: "/awardspartner/fast.svg" },
        { name: "NCAI", image: "/awardspartner/ncai.svg" },
        { name: "NVIDIA", image: "/awardspartner/nvidia.svg" },
        { name: "GOOGLEDEV", image: "/awardspartner/googledev.svg" },
        { name: "PIF", image: "/awardspartner/pif.svg" },
        { name: "PASHA", image: "/awardspartner/pasha.svg" },
        { name: "NIC", image: "/awardspartner/nic.svg" },
    ];

    return (
        <section
            className="bg-[#020617] relative flex items-center justify-center w-full text-white overflow-hidden py-16"
        >
            {/* BG Shape */}
            <img
                src="/gradient/Shape1.svg"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain pointer-events-none hidden md:block"
                alt=""
            />



            {/* MAIN CONTENT */}
            <div className="relative z-10 w-full">

                {/* Heading */}
                <div className="mb-16 text-center px-4 sm:px-6 md:px-8">
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3"
                        style={{
                            background: "linear-gradient(135deg, #fff, #0ff)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Awards & Partners
                    </h1>
                </div>

                {/* Logo Carousel Container */}
                <div className="space-y-8">
                    {/* Top Row - Moving Right */}
                    <div className="overflow-hidden">
                        <div className="flex animate-scroll-right gap-6">
                            {/* First set of logos */}
                            {logoOrder.map((logo, index) => (
                                <div
                                    key={`top-1-${index}`}
                                    className="flex-shrink-0 w-28 sm:w-40 md:w-48 h-16 sm:h-20 md:h-24 bg-white rounded-xl border border-white/30 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-4"
                                >
                                    <img
                                        src={logo.image}
                                        alt={logo.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {logoOrder.map((logo, index) => (
                                <div
                                    key={`top-2-${index}`}
                                    className="flex-shrink-0 w-28 sm:w-40 md:w-48 h-16 sm:h-20 md:h-24 bg-white rounded-xl border border-white/30 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-4"
                                >
                                    <img
                                        src={logo.image}
                                        alt={logo.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Row - Moving Left */}
                    <div className="overflow-hidden">
                        <div className="flex animate-scroll-left gap-6 flex-row-reverse">
                            {/* First set of logos */}
                            {logoOrder.map((logo, index) => (
                                <div
                                    key={`bottom-1-${index}`}
                                    className="flex-shrink-0 w-28 sm:w-40 md:w-48 h-16 sm:h-20 md:h-24 bg-white rounded-xl border border-white/30 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-4"
                                >
                                    <img
                                        src={logo.image}
                                        alt={logo.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {logoOrder.map((logo, index) => (
                                <div
                                    key={`bottom-2-${index}`}
                                    className="flex-shrink-0 w-28 sm:w-40 md:w-48 h-16 sm:h-20 md:h-24 bg-white rounded-xl border border-white/30 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-4"
                                >
                                    <img
                                        src={logo.image}
                                        alt={logo.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

