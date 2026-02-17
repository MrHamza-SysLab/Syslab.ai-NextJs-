import CardSection from "@/sections/services/CardSection";
import Header from "@/sections/services/Header";
import Industry from "@/sections/services/IndustrySection";
import Footer from "@/sections/Footer";
import AwardsPartner from "@/sections/AwardsPartner";

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <CardSection />
      <section id="award-&-partners">
        <AwardsPartner />
      </section>
      <Industry />
      <Footer />
    </main>
  );
}


