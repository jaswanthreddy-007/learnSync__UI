import { About } from "../components/About";
import { Cta } from "../components/Cta";
import { FAQ } from "../components/FAQ";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Pricing } from "../components/Pricing";
import { ScrollToTop } from "../components/ScrollToTop";
import { Services } from "../components/Services";
import { Sponsors } from "../components/Sponsors";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
