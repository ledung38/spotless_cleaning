import LayoutComponents from "@/components/layouts/LayoutComponents";
import Home from "@/modules/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in Sydney",
  description:
    "Spotless Cleaning provides professional house, restaurant, and commercial cleaning services in Sydney. Deep cleaning, regular maintenance, end of lease cleaning. 2000+ happy clients.",
  keywords: [
    "cleaning services Sydney",
    "house cleaning",
    "professional cleaners Sydney",
    "residential cleaning",
  ],
  openGraph: {
    title: "Professional Cleaning Services in Sydney",
    description:
      "Spotless Cleaning provides professional house, restaurant, and commercial cleaning services in Sydney.",
    url: "https://spotless-cleaning-psi.vercel.app",
    type: "website",
    images: [
      {
        url: "https://spotless-cleaning-psi.vercel.app/og-home.jpg",
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
