import { ServiceBannerProps } from "@/modules/service/ServiceBanner";
import {
  Award,
  CheckCircle2,
  ClipboardList,
  Heart,
  Shield,
  Sparkles,
  Users,
  Wind,
  Zap,
} from "lucide-react";

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
  "mould-cleaning": {
    title: "Mould Cleaning",
    description:
      "Remove mould from your home with our professional mould cleaning service. We use state-of-the-art equipment and techniques to ensure a clean and healthy environment.",
    icon: "Droplets",
    highlights: ["100% Eco-friendly", "Full Guarantee", "Insured Team"],
    ctaText: "Book Mould Cleaning Now",
  },
};

export default services;

export const listServiceIncludes = {
  "end-of-lease-cleaning": {
    mainServices: [
      {
        title: "Full Property Cleaning",
        color: "from-orange-500 to-red-500",
        icon: Wind,
        items: [
          "Complete cleaning of all rooms, floors, and surfaces",
          "Including walls, skirting boards, and light fittings",
        ],
      },
      {
        title: "Kitchen & Appliances",
        color: "from-yellow-500 to-orange-500",
        icon: Zap,
        items: [
          "Thorough cleaning of oven, fridge, and cupboards",
          "Sinks, taps, benches, and splashbacks cleaned",
        ],
      },
      {
        title: "Bathrooms & Laundry",
        color: "from-blue-500 to-cyan-500",
        icon: Sparkles,
        items: [
          "Sanitize sinks, taps, toilets, showers, and tubs",
          "Mirrors, floors, and laundry areas cleaned",
        ],
      },
      {
        title: "Interior Detailing",
        color: "from-green-500 to-emerald-500",
        icon: ClipboardList,
        items: [
          "Cupboards, drawers, and storage spaces wiped",
          "All surfaces dusted and polished",
        ],
      },
    ],
    optionalExtras: [
      {
        title: "Carpet Steam Cleaning",
        description: "Deep clean carpets to remove dirt, dust, and stains.",
        color: "from-orange-500 to-red-500",
        icon: Wind,
      },
      {
        title: "Window Interior Cleaning",
        description: "Ensure windows and glass doors are sparkling clean.",
        color: "from-indigo-500 to-blue-500",
        icon: Users,
      },
      {
        title: "Oven Deep Clean",
        description:
          "Extra time for thorough cleaning of oven interiors and trays.",
        color: "from-yellow-500 to-orange-500",
        icon: Zap,
      },
    ],
  },

  "regular-cleaning": {
    mainServices: [
      {
        title: "Living Areas",
        color: "from-purple-500 to-pink-500",
        icon: CheckCircle2,
        items: [
          "Vacuuming, mopping, and dusting all living spaces",
          "Tidying up and organizing where needed",
        ],
      },
      {
        title: "Kitchen Maintenance",
        color: "from-orange-500 to-red-500",
        icon: Wind,
        items: [
          "Clean benches, sinks, taps, and appliances",
          "Wipe down cupboards and surfaces",
        ],
      },
      {
        title: "Bathroom & Laundry",
        color: "from-blue-500 to-cyan-500",
        icon: Sparkles,
        items: [
          "Sanitize all surfaces, tubs, showers, and toilets",
          "Clean mirrors and floors",
        ],
      },
    ],
    optionalExtras: [
      {
        title: "Fridge Interior Cleaning",
        description:
          "Keep your fridge hygienic with internal cleaning of racks and drawers.",
        color: "from-blue-500 to-cyan-500",
        icon: Sparkles,
      },
      {
        title: "Oven Cleaning",
        description: "Regular oven maintenance to keep it spotless.",
        color: "from-yellow-500 to-orange-500",
        icon: Zap,
      },
    ],
  },

  "deep-cleaning": {
    mainServices: [
      {
        title: "Whole Property Cleaning",
        color: "from-purple-500 to-pink-500",
        icon: CheckCircle2,
        items: [
          "Deep clean of all rooms, floors, and hidden corners",
          "Dusting high surfaces and behind furniture",
        ],
      },
      {
        title: "Kitchen & Appliances",
        color: "from-orange-500 to-red-500",
        icon: Wind,
        items: [
          "Inside and outside of oven, fridge, and cabinets",
          "Clean sinks, taps, benches, and splashbacks",
        ],
      },
      {
        title: "Bathroom & Laundry",
        color: "from-blue-500 to-cyan-500",
        icon: Sparkles,
        items: [
          "Deep scrubbing of tubs, showers, sinks, and toilets",
          "Sanitize floors, tiles, mirrors, and laundry areas",
        ],
      },
    ],
    optionalExtras: [
      {
        title: "Carpet Steam Cleaning",
        description: "Deep steam cleaning for all carpeted areas.",
        color: "from-orange-500 to-red-500",
        icon: Wind,
      },
      {
        title: "Wall Stains Removal",
        description: "Remove tough stains from walls and high-touch areas.",
        color: "from-green-500 to-emerald-500",
        icon: ClipboardList,
      },
    ],
  },

  "restaurant-cleaning": {
    mainServices: [
      {
        title: "Kitchen & Food Prep Areas",
        color: "from-orange-500 to-red-500",
        icon: Wind,
        items: [
          "Sanitize all food prep surfaces and appliances",
          "Clean ovens, stoves, and commercial equipment",
        ],
      },
      {
        title: "Dining & Public Areas",
        color: "from-purple-500 to-pink-500",
        icon: CheckCircle2,
        items: [
          "Mop floors, wipe tables, and dust surfaces",
          "Sanitize chairs, counters, and service areas",
        ],
      },
      {
        title: "Bathrooms & Staff Areas",
        color: "from-blue-500 to-cyan-500",
        icon: Sparkles,
        items: [
          "Clean and sanitize all sinks, toilets, and floors",
          "Ensure mirrors and surfaces are spotless",
        ],
      },
    ],
    optionalExtras: [
      {
        title: "Deep Oven & Grill Cleaning",
        description: "Extra attention for ovens, grills, and fryers.",
        color: "from-yellow-500 to-orange-500",
        icon: Zap,
      },
      {
        title: "Vent & Hood Cleaning",
        description: "Clean and sanitize kitchen ventilation and hoods.",
        color: "from-indigo-500 to-blue-500",
        icon: Users,
      },
    ],
  },

  "airbnb-cleaning": {
    mainServices: [
      {
        title: "Guest Rooms",
        color: "from-purple-500 to-pink-500",
        icon: CheckCircle2,
        items: [
          "Vacuum, dust, and sanitize all guest rooms",
          "Change bed linens and tidy up",
        ],
      },
      {
        title: "Kitchen & Dining",
        color: "from-orange-500 to-red-500",
        icon: Wind,
        items: [
          "Clean benches, sinks, appliances, and floors",
          "Ensure utensils and surfaces are spotless",
        ],
      },
      {
        title: "Bathrooms",
        color: "from-blue-500 to-cyan-500",
        icon: Sparkles,
        items: [
          "Sanitize toilets, sinks, showers, and mirrors",
          "Clean floors and tiles thoroughly",
        ],
      },
    ],
    optionalExtras: [
      {
        title: "Laundry Service",
        description: "Wash, dry, and fold guest linens and towels.",
        color: "from-green-500 to-emerald-500",
        icon: ClipboardList,
      },
      {
        title: "Fridge & Oven Cleaning",
        description: "Extra cleaning for guest-ready kitchens.",
        color: "from-yellow-500 to-orange-500",
        icon: Zap,
      },
    ],
  },

  "mould-cleaning": {
    mainServices: [
      {
        title: "Affected Areas",
        color: "from-green-500 to-emerald-500",
        icon: ClipboardList,
        items: [
          "Identify and treat areas with mould growth",
          "Apply safe anti-mould treatments to walls and surfaces",
        ],
      },
      {
        title: "Bathroom & Laundry",
        color: "from-blue-500 to-cyan-500",
        icon: Sparkles,
        items: [
          "Deep clean areas prone to mould like tiles and grout",
          "Sanitize sinks, tubs, and shower screens",
        ],
      },
      {
        title: "Ventilation & Prevention",
        color: "from-indigo-500 to-blue-500",
        icon: Users,
        items: [
          "Clean and sanitize air vents",
          "Advice on moisture control to prevent mould recurrence",
        ],
      },
    ],
    optionalExtras: [
      {
        title: "Wall Treatment",
        description: "Extra treatment for stubborn mould on walls.",
        color: "from-green-500 to-emerald-500",
        icon: ClipboardList,
      },
      {
        title: "Carpet Mould Removal",
        description: "Treat carpets affected by mould safely and effectively.",
        color: "from-orange-500 to-red-500",
        icon: Wind,
      },
    ],
  },
};
