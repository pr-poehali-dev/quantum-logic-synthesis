import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Intro from "@/components/Intro";
import CallToAction from "@/components/CallToAction";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Intro />
      <CallToAction />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;