"use client";


export default function BannerSection() {
    return (
        <section
            className="relative flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[80vh] md:min-h-screen text-center text-white overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20 pt-24 sm:pt-28"
            style={{
                background: "radial-gradient(40% 25% at 50% 50%, #121928 100%)",
            }}
        >
            {/* === Full Background Image === */}
            <img
                src="/products/productBanner.svg"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover"
            />


            {/* === Hero Text Content === */}
            <div className="relative z-10 mt-10 sm:mt-16 md:mt-20 max-w-3xl">
                <h1
                    className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight"
                >
                    Featured Products
                </h1>

                <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto">
                    Empowering industries with next-generation AI solutions developed by {" "}
                    <strong className="text-cyan-500">Syslab.ai.</strong>
                </p>
            </div>
        </section>
    );
}
