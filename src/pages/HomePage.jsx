import React from "react";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/heroSection/HeroSection";
import CategoriesPage from "../components/categorySection/CategoriesPage";
import NewArrivalsPage from "../components/newArrivals/NewArrivalsPage";
import FeaturePage from "../components/featureSection/FeaturePage";

function HomePage() {

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoriesPage/>
      <NewArrivalsPage/>  
      <FeaturePage/>
    </div>
  );
}

export default HomePage;
