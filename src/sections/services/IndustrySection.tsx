"use client";

export default function IndustrySection() {
  const industries = [
    {
      image: "/services/image1.svg",
      title: "Transforming Education Through AI",
      description: "Delivering AI-powered eLearning and proctoring solutions such as iParhai and ProctorParhai, revolutionizing online learning and assessment.",
      tags: ["iParhai", "ProctorParhai"],
    },
    { 
      image: "/services/image2.svg",
      title: "Building Smarter Cities",
      description: "Developing intelligent computer vision systems like Eyecon AI for traffic monitoring, event detection, and urban safety analytics, enabling the foundation of truly smart, connected cities.",
      tags: ["Eyecon AI"],
    },
    {
      image: "/services/image3.svg",
      title: "Empowering Enterprises with Intelligence",
      description: "Providing tailored AI solutions for data automation, productivity enhancement, and decision intelligence, helping organizations innovate and scale efficiently.",
      tags: ["Data Automation", "Productivity Enhancement", "Decision Intelligence"],
    },
    {
      image: "/services/image4.svg",
      title: "Advancing Research & Academia",
      description: "Partnering with universities and research institutions to push the frontiers of Deep Learning, Natural Language Processing, and Cognitive Computing, fostering continuous innovation in AI.",
      tags: ["Deep Learning", "Natural Language Processing", "Cognitive Computing"],
    },
  ];

  return (
    <section className="relative flex flex-col justify-center min-h-screen text-white overflow-hidden px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-16 md:py-20" style={{
                background:
                    "radial-gradient(10% 10% at 20% 50%, #121928 100%)",
            }} >

      <img
        src="/gradient/Shape.svg"
        alt=""
        className="absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 object-contain w-full h-full opacity-50 sm:opacity-100"
      />


      <div className="container mx-auto relative z-10 max-w-8xl">
        {/* HEADING */}
        <div className="mb-6 sm:mb-10 md:mb-12 lg:mb-16 w-full text-center px-2 sm:px-4">
          <h1
                className="w-full text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-tight"
            >
                Industries We Serve
            </h1>
            <h2 className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-base md:text-lg lg:text-xl text-white max-w-2xl mx-auto text-center px-1 sm:px-2">
                At SYSLAB.AI (Private) Limited, we specialize in creating intelligent, data-driven solutions designed to transform industries and empower organizations with next-generation technologies.
            </h2>
        </div>

        {/* INDUSTRIES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* LEFT: Large Education Card */}
          <div className="lg:row-span-3">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-full flex flex-col">
              {/* Image */}
              <div className="relative h-56 sm:h-80 md:h-96 overflow-hidden rounded-b-2xl sm:rounded-b-3xl">
                <img
                  src={industries[0].image}
                  alt={industries[0].title}
                  className="w-full h-full object-cover object-center rounded-b-2xl sm:rounded-b-3xl"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col pt-4 sm:pt-6 md:pt-8 px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight">
                  {industries[0].title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 leading-relaxed">
                  {industries[0].description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                  {industries[0].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 border border-[#4FA8FF] text-[#4FA8FF] text-[10px] sm:text-xs md:text-sm rounded-md hover:bg-[#4FA8FF]/10 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Three Stacked Cards */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {industries.slice(1).map((industry, index) => (
              <div
                key={index}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
              >
                <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-3 sm:gap-4 md:gap-6 h-full">
                  {/* Image */}
                  <div className="relative w-full md:w-1/2 lg:w-full xl:w-1/2 h-44 sm:h-56 md:h-full lg:h-56 xl:h-full overflow-hidden flex-shrink-0">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 md:w-1/2 lg:w-full xl:w-1/2 flex flex-col px-4 sm:px-5 md:px-0 lg:px-4 xl:px-0 md:pr-5 lg:pr-0 xl:pr-5 sm:pr-6 xl:pr-6 py-4 sm:py-5 md:py-0 lg:py-4 xl:py-0 h-full">
                    <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-1.5 sm:mb-2 md:mb-3 leading-tight">
                      {industry.title}
                    </h3>
                    <p className="text-gray-300 text-[11px] sm:text-xs md:text-sm mb-2 leading-relaxed flex-1">
                      {industry.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {industry.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 sm:px-3 py-1 sm:py-1.5 border border-[#4FA8FF] text-[#4FA8FF] text-[10px] sm:text-xs rounded-md hover:bg-[#4FA8FF]/10 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
