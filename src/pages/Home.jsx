import { Link } from "react-router-dom";
import NavigationHeader from "../features/home/NavigationHeader";
import HeroSection from "../features/home/HeroSection";
import Footer from "../features/home/Footer";
import CTASection from "../features/home/CTASection";
import ServiceSection from "../features/home/ServiceSection";
import AboutSection from "../features/home/AboutSection";

function Home() {
  return (
    <div className="relative font-regular font-roboto text-mainBlackLight">
      <header className="fixed z-20 top-0 left-0 bg-mainWhite/40 backdrop-blur-sm w-full">
        <NavigationHeader />
      </header>
      <main>
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <CTASection />
      </main>
      <footer className="border-t-2 border-t-stone-100 border-b-4 border-b-main px-16 py-8 bg-mainWhite">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
