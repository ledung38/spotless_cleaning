import { Metadata } from "next";
import LayoutComponents from "@/components/layouts/LayoutComponents";
import Pricing from "@/modules/pricing";

export const metadata: Metadata = {
  title: "Pricing - Spotless Cleaning Services",
  description:
    "Transparent, affordable pricing for all cleaning services. House cleaning, deep cleaning, office cleaning. Free quotes available.",
  keywords: [
    "cleaning prices Sydney",
    "house cleaning cost",
    "office cleaning pricing",
    "affordable cleaning services",
  ],
  openGraph: {
    title: "Pricing - Spotless Cleaning Services",
    description:
      "Transparent, affordable pricing for all cleaning services. Free quotes available.",
    url: "https://spotlesscleaning.com.au/pricing",
    type: "website",
    images: [
      {
        url: "https://spotlesscleaning.com.au/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "Spotless Cleaning - Pricing",
      },
    ],
  },
};

export default function PricingPage() {
  return (
    <LayoutComponents>
      <Pricing />
    </LayoutComponents>
  );
}
