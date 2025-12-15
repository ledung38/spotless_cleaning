import { Metadata } from "next";
import LayoutComponents from "@/components/layouts/LayoutComponents";
import AboutUs from "@/modules/about-us";

export const metadata: Metadata = {
  title: "About Us - Spotless Cleaning",
  description:
    "Learn about Spotless Cleaning, Sydney's trusted cleaning company. 8+ years of experience, 2000+ happy clients, certified professionals.",
  keywords: [
    "about spotless cleaning",
    "cleaning company Sydney",
    "professional cleaners",
    "cleaning services experience",
  ],
  openGraph: {
    title: "About Us - Spotless Cleaning",
    description:
      "Learn about Spotless Cleaning, Sydney's trusted cleaning company with 8+ years of experience.",
    url: "https://spotlesscleaning.com.au/about-us",
    type: "website",
    images: [
      {
        url: "https://spotlesscleaning.com.au/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Spotless Cleaning",
      },
    ],
  },
};

export default function AboutUsPage() {
  return (
    <LayoutComponents>
      <AboutUs />
    </LayoutComponents>
  );
}
