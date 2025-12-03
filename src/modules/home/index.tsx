"use client";

import HomeHeader from "./HomeHeader";
import HomeHero from "./HomeHero";
import HomeServices from "./HomeServices";
import HomeFeatures from "./HomeFeatures";
import HomeReviews from "./HomeReviews";
import HomeAreas from "./HomeAreas";
import HomeCTA from "./HomeCTA";
import Footer from "@/components/layouts/Footer";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      <HomeHeader />
      <HomeHero />
      <HomeServices />
      <HomeFeatures />
      <HomeReviews />
      <HomeAreas />
      <HomeCTA />
    </div>
  );
};

export default Home;
