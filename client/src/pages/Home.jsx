import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Reels from "../components/Reels";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Reels />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default Home;