import Hero from "@/components/Hero";
import About from "@/components/About";
import Story from "@/components/Story";
import Geology from "@/components/Geology";
import WhyChoose from "@/components/WhyChoose";
import Itinerary from "@/components/Itinerary";
import EcoCommitment from "@/components/EcoCommitment";
import Gallery from "@/components/Gallery";
import Audience from "@/components/Audience";
import Includes from "@/components/Includes";
import Safety from "@/components/Safety";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Story />
      <Geology />
      <WhyChoose />
      <Itinerary />
      <EcoCommitment />
      <Gallery />
      <Audience />
      <Includes />
      <Safety />
      <Pricing />
      <Contact />
    </>
  );
}
