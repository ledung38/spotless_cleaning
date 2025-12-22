import { CompactApp } from "@/components/common/Compact";
import { Banner } from "@/modules/home/Banner";
import Comment from "@/modules/home/Comment";
import { ratingsExample } from "@/modules/home/contants";
import { Service } from "@/modules/home/Service";
import HomeAreas from "@/modules/home/ServiceAreasV2";
import { WhyChooseUs } from "@/modules/home/WhyChooseUs";

const Home = () => {
  return (
    <div className="w-full -mt-20">
      <Banner />
      <Service />
      <CompactApp backgroundImage={`/compat_home2.png`} />
      <WhyChooseUs />
      <Comment ratings={ratingsExample} />
      <HomeAreas />
    </div>
  );
};

export default Home;
