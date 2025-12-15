import { Metadata } from "next";
import {
  BannerExample,
  CompactBannerAboutExample,
  CompactBannerPricingExample,
  ServiceBannerAirbnbCleaningExample,
  ServiceBannerDeepCleaningExample,
  ServiceBannerEndOfLeaseExample,
  ServiceBannerRegularCleaningExample,
  ServiceBannerRestaurantCleaningExample,
} from "@/components/layouts/Banner/EXAMPLES";
import ExampleServicePage, {
  BannerWithNavigation,
  DeepCleaningPage,
  EndOfLeaseCleaningPage,
  HouseCleaningPage,
  ManualCarouselExample,
  OfficeCleaningPage,
  WindowCleaningPage,
} from "@/components/layouts/Banner/REAL_WORLD_EXAMPLES";
import LayoutComponents from "@/components/layouts/LayoutComponents";
import AboutUs from "@/modules/about-us";
import Home from "@/modules/home";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in Sydney",
  description:
    "Spotless Cleaning provides professional house, office, and commercial cleaning services in Sydney. Deep cleaning, regular maintenance, end of lease cleaning. 2000+ happy clients.",
  keywords: [
    "cleaning services Sydney",
    "house cleaning",
    "professional cleaners Sydney",
    "residential cleaning",
  ],
  openGraph: {
    title: "Professional Cleaning Services in Sydney",
    description:
      "Spotless Cleaning provides professional house, office, and commercial cleaning services in Sydney.",
    url: "https://spotlesscleaning.com.au",
    type: "website",
    images: [
      {
        url: "https://spotlesscleaning.com.au/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Spotless Cleaning - Sydney",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <LayoutComponents>
      <Home />
    </LayoutComponents>
  );
}
