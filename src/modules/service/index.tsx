import { ServiceBanner } from "@/modules/service/ServiceBanner";
import { ServiceImages } from "@/modules/service/ServiceImages";
import { HowItWorks } from "@/modules/service/ServiceWork";
import React from "react";

const ServiceComponent = ({ data, slug }) => {
  return (
    <div>
      <ServiceBanner {...data} />
      <ServiceImages slug={slug} />
      <HowItWorks slug={slug} />
    </div>
  );
};

export default ServiceComponent;
