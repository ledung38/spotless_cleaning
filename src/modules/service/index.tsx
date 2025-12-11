import { CompactApp } from "@/components/common/Compact";
import { ServiceBanner } from "@/modules/service/ServiceBanner";
import { ServiceImages } from "@/modules/service/ServiceImages";
import { HowItWorks } from "@/modules/service/ServiceWork";
import React from "react";

const ServiceComponent = ({ data }) => {
  return (
    <div>
      <ServiceBanner {...data} />
      <ServiceImages />
      <HowItWorks />
    </div>
  );
};

export default ServiceComponent;
