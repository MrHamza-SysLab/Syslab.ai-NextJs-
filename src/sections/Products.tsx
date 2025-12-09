"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Pentagon from "@/../public/products/vector.svg"; // 👈 your SVG import here

export default function Products() {
  const cards = [
    {
      title: "ProctorParhai",
      desc: "This innovative app utilizes AI for online proctoring. ProctorParhai ensures exam integrity by confirming candidate identity, monitoring focus, detecting unauthorized materials, and preventing external assistance.",
      img: "/casestudy/brain-circuit.svg",
      link: "https://www.proctorparhai.com/",
    },
    {
      title: "iParhai",
      desc: "Developed to meet the growing needs of online education, iParhai provides an adaptive solution to deliver content according to the learner’s specific needs. It’s already adopted by several schools.",
      img: "/casestudy/cloud.svg",
      link: "https://iparhai.com/",
    },
    {
      title: "Eyecon AI",
      desc: "Eyecon AI focuses on detecting mixed critical events using computer vision. Leveraging Vision Transformers and Visual Language Models, it determines various criticalities in smart cities in real time.",
      img: "/casestudy/network.svg",
      link: "#",
    },
    {
      title: "Recruitment System",
      desc: "Our recruitment platform leverages AI-driven analysis to identify the best candidates, automating evaluation and ensuring unbiased, data-backed hiring decisions.",
      img: "/casestudy/db.svg",
      link: "#",
    },
  ];

  return (
    <section className="relative flex flex-col justify-center min-h-screen text-white overflow-hidden px-6 sm:px-8 py-16" style={{
                background:
                    "radial-gradient(10% 10% at 20% 50%, #121928 100%)",
            }} >

      <img
        src="/gradient/Shape.svg"
        alt=""
        className="absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 object-contain w-full h-full"
      />

      {/* === SVG: LEFT SIDE GLOW (visible only on lg+) === */}
      <Pentagon className="hidden lg:block absolute right-0 top-8/12 -translate-y-1/2 w-[600px] h-[900px] opacity-70" />

      <div className="container mx-auto relative z-10">
        {/* HEADING */}
        <div className="mb-12 max-w-[700px] mx-auto sm:mx-0 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-4">
            Our Products
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            We provide a range of innovative products designed for modern technology
            and user experience. Each product blends design and performance to deliver
            outstanding results.
          </p>
        </div>

        {/* PRODUCT CARDS */}
        <div className="flex flex-col gap-8">
          {cards
            .reduce((rows, card, i) => {
              if (i % 2 === 0) rows.push([card]);
              else rows[rows.length - 1].push(card);
              return rows;
            }, [] as any[])
            .map((pair, rowIndex) => (
              <div key={rowIndex} className="flex flex-col md:flex-row gap-8">
                {pair.map((card: any, cardIndex: number) => {
                  const isEvenRow = rowIndex % 2 === 0;
                  const widthClass =
                    (cardIndex === 0 && isEvenRow) || (cardIndex === 1 && !isEvenRow)
                      ? "md:w-[45%]"
                      : "md:w-[55%]";

                  return (
                    <div
                      key={card.title}
                      className={`relative bg-[#272829] opacity-90 backdrop-blur-md rounded-2xl p-6 pt-12 border border-blue-600
                      hover:bg-white/20 hover:scale-[1.03] transition-all duration-300 
                      w-full ${widthClass}`}
                    >

                      {/* === LINK ICON === */}
                      <Link
                        href={card.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 bg-[#1D4ED8] p-2 rounded-full hover:bg-[#2563EB] transition"
                      >
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </Link>

                      {/* === CARD CONTENT === */}
                      <div className="flex flex-col text-left">
                        {/* Small screens → title first */}
                        <div className="block md:hidden">
                          <h3 className="text-2xl font-semibold leading-relaxed mb-2">
                            {card.title}
                          </h3>
                          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                            {card.desc}
                          </p>
                        </div>

                        {/* Medium+ screens → description first */}
                        <div className="hidden md:block">
                          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-2">
                            {card.desc}
                          </p>
                          <h3 className="text-2xl font-semibold leading-relaxed">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
