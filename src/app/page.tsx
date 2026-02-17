import Hero3 from "@/sections/Hero3";
import CaseStudy from "@/sections/CaseStudy";
import About from "@/sections/About";
import Products from "@/sections/Products";
import PartnerAwards from "@/sections/PartnerAwards";
import CustomersUsers from "@/sections/CustomersUsers";
import Testimonials from "@/sections/Testimonials";
import Footer from "@/sections/Footer";

export default function HomePage() {
  return (
    <>
      <section id="home">
        <Hero3 />
      </section>

      <CaseStudy />

      <section id="about">
        <About />
      </section>

      <section id="products">
        <Products />
      </section>

      {/* <section id="award-&-partners">
        <PartnerAwards />
      </section> */}

      <section id="customers-users">
        <CustomersUsers />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <Footer />
    </>
  );
}


