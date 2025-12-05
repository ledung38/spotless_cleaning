"use client";

import { Banner } from "@/modules/home/Banner";
import Comment from "@/modules/home/Comment";
import { ratingsExample } from "@/modules/home/contants";
import { Service } from "@/modules/home/Service";
import HomeAreas from "@/modules/home/ServiceAreasV2";
import { WhyChooseUs } from "@/modules/home/WhyChooseUs";

const Home = () => {
  return (
    <div className="w-full">
      <Banner />
      <Service />
      <WhyChooseUs />
      <Comment ratings={ratingsExample} />
      <HomeAreas />
    </div>
  );
};

export default Home;
