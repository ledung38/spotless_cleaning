import { Metadata } from "next";
import LayoutComponents from "@/components/layouts/LayoutComponents";
import BookingWizard from "@/modules/booking";

export const metadata: Metadata = {
  title: "Book Cleaning Service - Spotless Cleaning",
  description:
    "Book your cleaning service in Sydney. Easy online booking, instant quotes, flexible scheduling.",
  keywords: [
    "book cleaning service",
    "schedule cleaning",
    "cleaning booking",
    "get cleaning quote",
  ],
  openGraph: {
    title: "Book Cleaning Service - Spotless Cleaning",
    description:
      "Easy online booking for professional cleaning services in Sydney.",
    url: "https://spotlesscleaning.com.au/booking",
    type: "website",
    images: [
      {
        url: "https://spotlesscleaning.com.au/og-booking.jpg",
        width: 1200,
        height: 630,
        alt: "Spotless Cleaning - Booking",
      },
    ],
  },
};

export default function BookingPage() {
  return (
    <LayoutComponents>
      <BookingWizard />
    </LayoutComponents>
  );
}
