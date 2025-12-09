"use client";
import Circle from "@/../public/casestudy/circle.svg";

import { useState, useEffect } from "react";

export default function CaseStudy() {
    const icons = [
        "brain-circuit",
        "db",
        "cloud",
        "Lightbulb",
        "network",
        "db",
        "brain-circuit",
        "smartphone",
        "network",
        "smartphone",
    ];

    const [columnsPerRow, setColumnsPerRow] = useState(5); // default for large screens

    // Detect current screen width and set columns accordingly
    useEffect(() => {
        const updateColumns = () => {
            const width = window.innerWidth;
            if (width < 640) setColumnsPerRow(3); // sm
            else if (width < 1024) setColumnsPerRow(4); // md
            else setColumnsPerRow(5); // lg+
        };

        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, []);

    return (
        <section
            className="relative flex items-center justify-center min-h-screen text-white overflow-hidden px-6 sm:px-8 py-16"
            style={{
                background:
                    "radial-gradient(10% 10% at 20% 50%, #121928 100%)",
            }}
        >
            <img
                src="/gradient/Shape.svg"
                alt=""
                className="absolute top-[52%] left-[52%] -translate-x-1/2 -translate-y-1/2 object-contain width-[800px]"
            />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* LEFT COLUMN — TEXT AREA */}
                <div className="max-w-[600px] text-center mx-auto lg:mx-0 lg:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[50px] font-bold capitalize leading-snug">
                        Technology Meets Innovation
                    </h2>
                    <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-gray-200">
                        We have been working on some of the most exciting technologies for
                        research and development. Details of some of the leading research
                        publications are provided here.
                    </p>
                </div>

                <div className="relative grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 justify-items-center">
                    {/* Center Circle */}
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                        <Circle className="w-72 h-72 opacity-30" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z- rotate-180">
                        <Circle className="w-72 h-72 opacity-30" />
                    </div>

                    {icons.map((icon, i) => {
                        const positionInRow = i % columnsPerRow;
                        const opacity = 1 - positionInRow * (1 / (columnsPerRow - 1)) * 0.8;

                        return (
                            <div
                                key={i}
                                style={{ opacity }}
                                className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center bg-[#0d1b3d] shadow-[inset_4px_4px_8px_#081229,inset_-4px_-4px_8px_#112c6b] transition-all duration-500 hover:opacity-100 hover:shadow-[0_0_20px_3px_rgba(0,123,255,0.4)] hover:scale-[1.05]"
                            >
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                                <img src={`/casestudy/${icon}.svg`} alt={icon} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 z-10" />
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
