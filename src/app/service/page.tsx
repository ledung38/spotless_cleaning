import { Metadata } from "next";
import { Routes } from "@/lib/enum/routes";
import ServiceComponent from "@/modules/service";
import services from "@/modules/service/contants";

export const metadata: Metadata = {
  title: "Our Services - Spotless Cleaning",
  description:
    "Explore our comprehensive cleaning services: deep cleaning, regular maintenance, end of lease, office, window, and specialized cleaning.",
  keywords: [
    "cleaning services",
    "deep cleaning",
    "regular cleaning",
    "office cleaning",
    "end of lease cleaning",
    "window cleaning",
  ],
  openGraph: {
    title: "Our Services - Spotless Cleaning",
    description:
      "Explore our comprehensive cleaning services for homes and businesses in Sydney.",
    url: "https://spotlesscleaning.com.au/service",
    type: "website",
    images: [
      {
        url: "https://spotlesscleaning.com.au/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Spotless Cleaning - Services",
      },
    ],
  },
};

export default function ServicePage() {
  return <ServiceComponent data={services[Routes.SERVICE_REGULAR_CLEANING]} />;
}
