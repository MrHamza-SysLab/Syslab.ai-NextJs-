
function ContentSection() {
    const contentData = [
        {
            subtitle: "Smart eLearning Platform",
            title: "IPARHAI",
            highlight: "Personalized AI Learning Experience.",
            description:
                "Delivering Adaptive Online Education Through AI-Powered Personalization. IPARHAI Enables Teachers And Students To Engage With Customized Content, Analytics, And Performance Tracking.",
            buttonText: "Explore IPARHAI",
            image: "/products/1.svg",
        },
        {
            subtitle: "AI Proctoring & Exam Integrity",
            title: "Proctor Parhai",
            highlight: "Secure, automated exam monitoring.",
            description:
                "Ensure exam authenticity with intelligent identity verification, gaze tracking, and environment analysis. ProctorParhai maintains fairness and trust in remote assessments.",
            buttonText: "Explore Proctor Parhai",
            image: "/products/2.svg",
        },
        {
            subtitle: "Smart City Vision System",
            title: "Eyecon.ai",
            highlight: "Real-time event detection and analysis.",
            description:
                "Empowering smart cities with computer vision for real-time traffic analytics, event detection, and situational awareness — built on Vision Transformers and Visual Language Models.",
            buttonText: "Explore Eyecon.Ai",
            image: "/products/3.svg",
        },
    ];

    return (
        <section
            className="relative flex flex-col items-center justify-center w-full min-h-screen px-6 py-16"
            style={{
                background:
                    "radial-gradient(58.42% 58.08% at 49.13% 41.92%, #152850 0%, #111827 100%)",
            }}
        >
            {/* Heading */}
            <h1
                className="inline-block text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-center"
                style={{
                    background: "linear-gradient(135deg, #fff, #0ff)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Where Research Meets Real-World Innovation
            </h1>
            <h2 className="mt-3 text-lg sm:text-xl md:text-xl text-white max-w-2xl text-center">
                We offer a wide range of products that are designed to meet the needs of
                our clients and customers
            </h2>

            {/* Parent container for rows */}
            <div className="mt-12 w-full max-w-6xl flex flex-col gap-16">
                {contentData.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Image Half with spinner SVG as controlled background */}
                        <div className="md:w-1/2 w-full flex justify-center">
                            <div className="relative w-full max-w-[420px] aspect-square overflow-visible">
                                {/* Spinner SVG as animated background glow */}
                                <img
                                    src="/products/spinner.svg"
                                    alt=""
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-40 pointer-events-none animate-spin"
                                />

                                {/* The actual image (on top of spinner) */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="relative z-10 w-3/4 h-auto mx-auto block"
                                    style={{ display: "block" }}
                                />
                            </div>
                            
                        </div>


                        {/* Text Half with modified spacing */}
                        <div
                            className="md:w-1/2 w-full flex flex-col justify-center"
                            style={{
                                transform: "translateY(-10%)", // Adjust vertical position as before
                            }}
                        >
                            {/* Subtitle & Title - gap removed */}
                            <span className="text-sm uppercase tracking-widest text-[#60B7FF] mb-0">
                                {item.subtitle}
                            </span>
                            <h3 className="text-4xl sm:text-5xl font-bold text-white mt-0">
                                {item.title}
                            </h3>

                            {/* Highlight - small top margin, gap with description removed */}
                            <p className="flex items-center gap-2 text-white font-medium mt-5 mb-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 2L10.6985 7.20599C10.4445 8.22185 10.3176 8.72978 10.0531 9.14309C9.81915 9.50868 9.50868 9.81915 9.14309 10.0531C8.72978 10.3176 8.22185 10.4445 7.20599 10.6985L2 12L7.20599 13.3015C8.22185 13.5555 8.72978 13.6824 9.14309 13.9469C9.50868 14.1808 9.81915 14.4913 10.0531 14.8569C10.3176 15.2702 10.4445 15.7782 10.6985 16.794L12 22L13.3015 16.794C13.5555 15.7782 13.6824 15.2702 13.9469 14.8569C14.1808 14.4913 14.4913 14.1808 14.8569 13.9469C15.2702 13.6824 15.7782 13.5555 16.794 13.3015L22 12L16.794 10.6985C15.7782 10.4445 15.2702 10.3176 14.8569 10.0531C14.4913 9.81915 14.1808 9.50868 13.9469 9.14309C13.6824 8.72978 13.5555 8.22185 13.3015 7.20599L12 2Z"
                                        stroke="#60B7FF"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                {item.highlight}
                            </p>

                            {/* Description - gap removed from highlight */}
                            <p className="text-gray-300 mt-0">{item.description}</p>

                            {/* Button remains same */}
                            <button className="mt-4 px-6 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-200 transition-all duration-300 w-max">
                                {item.buttonText}
                            </button>
                        </div>


                    </div>

                ))}
            </div>
        </section>
    );
}

export default ContentSection;
