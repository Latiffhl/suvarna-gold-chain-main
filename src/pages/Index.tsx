
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Calculator from "@/components/Calculator";
import Trust from "@/components/Trust";
import Founders from "@/components/Founders";
import Footer from "@/components/Footer";
import GoldPrice from "@/components/GoldPrice";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <GoldPrice />
      <Hero />
      <Features />
      <Calculator />
      <Trust />
      <Founders />
      <Footer />
    </div>
  );
};

export default Index;
