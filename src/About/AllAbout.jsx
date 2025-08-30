import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServicesSection from "../components/ServicesSection";
import AboutHeader from "./AboutHeader";
import AboutMain from "./AboutMain";
import Offer from "./Offer";
function AllAbout() {
  return (
    <>
      <Header></Header>
      <AboutHeader />
      <AboutMain/>
      <ServicesSection></ServicesSection>
      <Offer/>
      <Footer></Footer>
    </>
  );
}

export default AllAbout;
