"use client";

import { CompactApp } from "@/components/common/Compact";
import { Banner } from "@/modules/home/Banner";
import Comment from "@/modules/home/Comment";
import { ratingsExample } from "@/modules/home/contants";
import { Service } from "@/modules/home/Service";
import HomeAreas from "@/modules/home/ServiceAreasV2";
import { WhyChooseUs } from "@/modules/home/WhyChooseUs";

const Home = () => {
  return (
    <div className="w-full -mt-10">
      <Banner />
      <Service />
      <CompactApp
        subtitle={`Ready to experience spotless clean? Our team is here to help with professional cleaning services tailored to your needs.`}
        textButton={`Book a Service`}
      />
      <WhyChooseUs />
      <Comment ratings={ratingsExample} />
      <HomeAreas />
    </div>
  );
};

export default Home;
