import Footer from "./components/Footer";
import Header from "./components/Header";
import BeachExperience from "./home/BeachExperience";
import BeachVideoSection from "./components/BeachVideoSection";
import BenefitsSection from "./home/BenefitsSection";
import BookingSection from "./home/BookingSection";
import DestinationSection from "./home/DestinationSection";
import DiscoverSection from "./home/DiscoverSection";
import FeaturesSection from "./home/FeaturesSection";
import HeaderSection from "./home/HeaderSection";
import OfferSection from "./home/OfferSection";
import ServicesSection from "./components/ServicesSection";
import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <Header />
      <HeaderSection />
      <BookingSection />
      <DiscoverSection />
      <FeaturesSection />
      <DestinationSection />
      <BeachVideoSection />
      <BeachExperience />
      <ServicesSection />
      <BenefitsSection />
      <OfferSection />
      <Footer />
      <Buttons/>

      
    <Buttons/>
    </>
  );
}

export default App;
