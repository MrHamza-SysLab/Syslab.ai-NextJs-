import Hero from "@/sections/Hero";
import CaseStudy from "@/sections/CaseStudy";
import About from "@/sections/About";
import Products from "@/sections/Products";
import PartnerAwards from "@/sections/PartnerAwards";
import Testimonials from "@/sections/Testimonials";
import Footer from "@/sections/Footer";

export default function HomePage() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <CaseStudy />

      <section id="about">
        <About />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="award-&-partner">
        <PartnerAwards />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <Footer />
    </>
  );
}


