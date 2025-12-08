import { TRatingDto } from "@/modules/home/Comment";
import {
  Briefcase,
  Building2,
  Droplets,
  Home,
  UtensilsCrossed,
  Wind,
} from "lucide-react";

export const ratingsExample: TRatingDto[] = [
  {
    customerName: "Emily Johnson",
    comment:
      "They did an amazing job! My apartment looks spotless and smells fresh. Highly recommended!",
    serviceName: "Standard Home Cleaning",
  },
  {
    customerName: "Michael Carter",
    comment:
      "Fast, professional, and very friendly staff. Will definitely book again.",
    serviceName: "Deep Cleaning",
  },
  {
    customerName: "Sarah Nguyen",
    comment:
      "Great service! They cleaned every corner thoroughly. Worth every dollar.",
    serviceName: "Move-in / Move-out Cleaning",
  },
  {
    customerName: "Jacob Wilson",
    comment:
      "The team arrived on time and worked efficiently. My carpets look brand new!",
    serviceName: "Carpet Cleaning",
  },
  {
    customerName: "Olivia Martinez",
    comment:
      "Excellent job! They paid attention to detail and left everything shining.",
    serviceName: "Office Cleaning",
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
    icon: Droplets,
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
    icon: Briefcase,
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
