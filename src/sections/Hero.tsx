"use client";

import TopRightBulb from "@/../public/herosection/TopRightBulb.svg";
import LeftPillar from "@/../public/herosection/LeftPillar.svg";
import MiniGlow from "@/../public/herosection/MiniGlow.svg";
import TopLeftBulb from "@/../public/herosection/TopLeftBulb.svg";
import DiagonalBeam from "@/../public/herosection/DiagonalBeam.svg";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen text-center text-white overflow-hidden px-6 md:px-12 lg:px-20" style={{ background: "radial-gradient(40% 25% at 50% 50%, #121928  100%)" }}>
            <img
                src="/gradient/herocloud.svg"
                alt=""
                className="absolute top-[45%] left-[45%] -translate-x-1/2 -translate-y-1/2 object-contain w-[1500px] h-full"
            />

            {/* === SVG 01: TopRightBulb === */}
            <TopRightBulb className="absolute top-10 left-0 w-52 sm:w-72 md:w-[440px] h-auto opacity-80 animate-electric-glow" />

            {/* === SVG 02: LeftPillar === */}
            <LeftPillar className="absolute -bottom-10 -left-6 md:-left-16 w-52 h-[590px] opacity-80 animate-electric-glow hidden sm:hidden md:block" />

            <MiniGlow
                className="absolute bottom-0 left-14 md:bottom-10 md:left-1/2 md:-translate-x-1/2 w-[380px] h-[175px] sm:w-44 md:w-[380px] opacity-80 animate-electric-glow"
            />




            {/* === SVG 04: TopLeftBulb === */}
            <TopLeftBulb className="absolute bottom-16 right-0 w-52 sm:w-72 md:w-[440px] h-auto opacity-80 animate-electric-glow" />

            {/* === SVG 05: DiagonalBeam === */}
            <DiagonalBeam className="absolute top-20 right-0 w-52 sm:w-72 md:w-[440px] h-auto opacity-80 animate-electric-glow md:rotate-0 rotate-[-47deg]" />

            {/* === Hero Text Content === */}
            <div className="relative z-10 mt-20 md:mt-0 max-w-3xl">
                <h1
                    className="inline-block whitespace-nowrap text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight"
                    style={{
                        background:
                            "linear-gradient(135deg, #fff, #0ff)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Syslab.ai
                </h1>

                <h2 className="mt-3 text-3xl sm:text-4xl md:text-6xl text-white">
                    Expertise In AI Innovation
                </h2>

                <p className="mt-5 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                    Providing and developing innovative{" "}
                    <strong className="text-cyan-500">Artificially Intelligent (AI) solutions.</strong>
                </p>
            </div>
        </section>
    );
}

// "use client";
// import TopRightBulb from "@/../public/herosection/TopRightBulb.svg";
// import LeftPillar from "@/../public/herosection/LeftPillar.svg";
// import MiniGlow from "@/../public/herosection/MiniGlow.svg";
// import TopLeftBulb from "@/../public/herosection/TopLeftBulb.svg";
// import DiagonalBeam from "@/../public/herosection/DiagonalBeam.svg";

// export default function Hero() {
//     return (
//         <section className="relative flex flex-col items-center justify-center min-h-screen text-center text-white overflow-hidden px-6 md:px-12 lg:px-20">
//             {/* === SVG 01: TopRightBulb === */}
//             <TopRightBulb className="absolute top-10 left-0 w-52 sm:w-72 md:w-[440px] h-auto opacity-80 animate-electric-glow" />

//             {/* === SVG 02: LeftPillar === */}
//             <LeftPillar
//                 className="absolute -bottom-10 -left-6 md:-left-16 w-52 h-[590] opacity-80 animate-electric-glow"
//             />


//             {/* === SVG 03: MiniGlow === */}
//             <MiniGlow className="absolute bottom-10 w-[440px] h-[202px] sm:w-80 md:w-[440px] opacity-80 animate-electric-glow" />

//             {/* === SVG 04: TopLeftBulb === */}
//             <TopLeftBulb className="absolute bottom-16 right-0 w-52 sm:w-72 md:w-[440px] h-auto opacity-80 animate-electric-glow" />

//             {/* === SVG 05: DiagonalBeam === */}
//             <DiagonalBeam className="absolute top-20 right-0 w-52 sm:w-72 md:w-[440px] h-auto opacity-80 animate-electric-glow" />

//             {/* === Hero Text Content === */}
//             <div className="relative z-10 mt-20 md:mt-0 max-w-3xl">
//                 <h1
//                     className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
//                     style={{
//                         background:
//                             "linear-gradient(to bottom right, #FFF 0%, #0FF 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #FFF 0%, #0FF 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #FFF 0%, #0FF 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #FFF 0%, #0FF 50%) top right / 50% 50% no-repeat",
//                         backgroundClip: "text",
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "transparent",
//                     }}
//                 >
//                     Syslab.ai
//                 </h1>

//                 <h2 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-semibold text-white">
//                     Expertise In AI Innovation
//                 </h2>

//                 <p className="mt-5 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
//                     Providing and developing innovative{" "}
//                     <strong className="text-cyan-500">
//                         Artificially Intelligent (AI) solutions.
//                     </strong>
//                 </p>
//             </div>
//         </section>
//     );
// }

