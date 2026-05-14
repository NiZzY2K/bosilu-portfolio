import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import FeaturedProjects from "./sections/FeaturedProjects";
import Services from "./sections/Services";
import About from "./sections/About";
import Expertise from "./sections/Expertise";
import Experience from "./sections/Experience";
import SelectedWorks from "./sections/SelectedWorks";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import BackToTop from "./components/BackToTop";
import CustomCursor from "./components/CustomCursor";
import InteractiveBackground from "./components/InteractiveBackground";

function App() {
  return (
    <main className="relative min-h-screen bg-[#030507] text-white">
      <InteractiveBackground />
      <CustomCursor />
      <BackToTop />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeaturedProjects />
        <Services />
        <About />
        <Expertise />
        <Experience />
        <SelectedWorks />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;