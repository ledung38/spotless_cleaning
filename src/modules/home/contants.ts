import { TRatingDto } from "@/modules/home/Comment";
import {
  Briefcase,
  Building2,
  Droplets,
  Home,
  Sparkles,
  UtensilsCrossed,
  Wind,
} from "lucide-react";

export const ratingsExample: TRatingDto[] = [
  {
    customerName: "Sophie Williams",
    comment:
      "Fantastic job! The apartment looks spotless and smells amazing. Would absolutely recommend.",
    serviceName: "Regular Cleaning",
  },
  {
    customerName: "Jack Thompson",
    comment: "Thorough end of lease cleaning that met agent requirements.",
    serviceName: "End of Lease Cleaning",
  },
  {
    customerName: "Olivia Harris",
    comment: "A very thorough deep clean with great attention to detail.",
    serviceName: "Deep Cleaning",
  },
  {
    customerName: "Liam Anderson",
    comment:
      "Really happy with the service. Quick, efficient, and great attention to detail.",
    serviceName: "End of Lease Cleaning",
  },
  {
    customerName: "Charlotte Brown",
    comment:
      "Excellent service! The kitchen and bathrooms are spotless. Feels so fresh now.",
    serviceName: "Deep Cleaning",
  },
  {
    customerName: "Noah Martin",
    comment:
      "Outstanding Airbnb cleaning. The home was immaculate and ready on arrival.",
    serviceName: "Airbnb Cleaning",
  },
  {
    customerName: "Emily Johnson",
    comment:
      "Lovely staff and top-quality work. My flat looks so tidy and bright!",
    serviceName: "Regular Cleaning",
  },
  {
    customerName: "Benjamin White",
    comment:
      "End of lease cleaning done perfectly – we got our full bond back.",
    serviceName: "End of Lease Cleaning",
  },
  {
    customerName: "Isla Clarke",
    comment:
      "Professional cleaning service that helps us maintain food safety standards.",
    serviceName: "Restaurant Cleaning",
  },
  {
    customerName: "Ethan Hall",
    comment:
      "Affordable, reliable, and friendly. Definitely my go-to for fortnightly cleans.",
    serviceName: "Regular Cleaning",
  },
  {
    customerName: "Mia Roberts",
    comment:
      "The team was friendly and efficient. My house looks fresh and clean.",
    serviceName: "Mould Cleaning",
  },
  {
    customerName: "Oliver King",
    comment:
      "The crew did a spot-on job with our Restaurant. Floors and desks look great.",
    serviceName: "Restaurant Cleaning",
  },
  {
    customerName: "Harper Evans",
    comment:
      "Very clean, fresh, and well organised – exactly what we expect from an Airbnb.",
    serviceName: "Airbnb Cleaning",
  },
  {
    customerName: "Charlie Adams",
    comment: "Mould issues were handled quickly and effectively.",
    serviceName: "Mould Cleaning",
  },
  {
    customerName: "Grace Lewis",
    comment:
      "Very happy with their end-of-lease service. Friendly staff and fair pricing.",
    serviceName: "End of Lease Cleaning",
  },
  {
    customerName: "Mason Wilson",
    comment: "A trustworthy regular cleaning service we rely on.",
    serviceName: "Regular Cleaning",
  },
  {
    customerName: "Ella Turner",
    comment:
      "The cleaners were polite and worked quickly. Everything looks spotless now.",
    serviceName: "Restaurant Cleaning",
  },
  {
    customerName: "Henry Scott",
    comment:
      "The mould was completely removed and the place feels much healthier now.",
    serviceName: "Mould Cleaning",
  },
  {
    customerName: "Zoe Campbell",
    comment:
      "Lovely experience. The team was cheerful and thorough. Highly recommend them!",
    serviceName: "Regular  Cleaning",
  },
  {
    customerName: "Lucas Davis",
    comment:
      "They went above and beyond! Even cleaned spots I didn’t notice before.",
    serviceName: "Deep Cleaning",
  },
];

export const services = [
  {
    icon: Home,
    title: "End of Lease Cleaning",
    description:
      "Professional end of lease cleaning services to ensure you get your full deposit back.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Regular Cleaning",
    description:
      "Scheduled cleaning services to keep your space clean and fresh every week or month.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Wind,
    title: "Deep Cleaning",
    description:
      "Comprehensive deep cleaning that tackles every corner and surface thoroughly.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Cleaning",
    description:
      "Specialized cleaning services for restaurants, meeting health and safety standards.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Building2,
    title: "Airbnb Cleaning",
    description:
      "Quick turnaround cleaning services for Airbnb properties between guest stays.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Droplets,
    title: "Mould Cleaning",
    description:
      "Professional mould cleaning services to remove mold and mildew from your home.",
    color: "from-red-500 to-pink-500",
  },
];

export const featuresData = [
  {
    title: "Professional Team",
    description:
      "Trained & certified cleaning experts with years of industry experience ensuring exceptional results.",
  },
  {
    title: "Eco-Friendly Solutions",
    description:
      "Safe, environmentally sustainable products that protect your family and the planet.",
  },
  {
    title: "On-Time Service",
    description:
      "Punctual scheduling with flexible booking options to fit your busy lifestyle.",
  },
  {
    title: "Quality Guaranteed",
    description:
      "100% satisfaction guarantee with thorough inspections and meticulous attention to detail.",
  },
  {
    title: "Customer Support",
    description:
      "24/7 dedicated support team ready to address your concerns and scheduling changes.",
  },
  {
    title: "Fast & Efficient",
    description:
      "Advanced cleaning techniques and equipment ensure fast service without compromising quality.",
  },
];

export const statsData = [
  { number: 2000, suffix: "+", label: "Happy Clients" },
  { number: 100, suffix: "%", label: "Satisfaction Rate" },
  { number: 99, suffix: "%", label: "On-Time Delivery" },
  { number: 2800, suffix: "+", label: "Services Completed" },
];
