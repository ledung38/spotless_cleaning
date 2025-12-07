import { ServiceBannerProps } from "@/modules/service/ServiceBanner";
import { Award, CheckCircle2, Heart, Shield, Sparkles } from "lucide-react";

const services: Record<string, ServiceBannerProps> = {
  "end-of-lease-cleaning": {
    title: "End of Lease Cleaning",
    description:
      "Professional end-of-lease cleaning to ensure you get your full bond back. We handle all the details with precision.",
    icon: "CheckCircle2",
    highlights: ["Bond Approved", "Detail Oriented", "Licensed Team"],
    ctaText: "Get Bond Back Guarantee",
  },
  "regular-cleaning": {
    title: "Regular Cleaning",
    description:
      "Keep your home fresh and tidy with our regular cleaning service. Customizable schedules to fit your lifestyle.",
    icon: "Heart",
    highlights: ["Weekly Plans", "Flexible Scheduling", "24/7 Support"],
    ctaText: "Schedule Regular Cleaning",
  },
  "deep-cleaning": {
    title: "Professional Deep Cleaning",
    description:
      "Our comprehensive deep cleaning service reaches every corner of your space, removing dirt, dust, and allergens for a spotless finish.",
    icon: "Sparkles",
    highlights: ["100% Eco-friendly", "Full Guarantee", "Insured Team"],
    ctaText: "Book Deep Cleaning Now",
  },
  "restaurant-cleaning": {
    title: "Commercial Restaurant Cleaning",
    description:
      "Specialized cleaning for food service establishments. Health code compliant and certified professionals.",
    icon: "Shield",
    highlights: [
      "Health Code Certified",
      "Commercial Grade",
      "Scheduled Service",
    ],
    ctaText: "Schedule Commercial Cleaning",
  },
  "airbnb-cleaning": {
    title: "Airbnb & Rental Property Cleaning",
    description:
      "Ensure 5-star reviews with our Airbnb-specialized cleaning service. Quick turnarounds between guests.",
    icon: "Award",
    highlights: ["Fast Turnaround", "5-Star Quality", "Guest Ready"],
    ctaText: "Book Airbnb Cleaning",
  },
};

export default services;
