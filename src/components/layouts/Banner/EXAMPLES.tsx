"use client";

/**
 * DEMO & USAGE EXAMPLES - Banner Components
 *
 * File này chỉ để reference, không dùng trong production
 * Xóa file này nếu không cần thiết
 */

import { Banner } from "./index";
import { CompactBanner } from "./CompactBanner";
import { ServiceBanner } from "./ServiceBanner";
import { Sparkles, Shield, Heart, Award, CheckCircle2 } from "lucide-react";

// ============================================
// EXAMPLE 1: Main Hero Banner
// ============================================
export const BannerExample = () => {
  return <Banner />;
};

// ============================================
// EXAMPLE 2: Compact Banner - About Page
// ============================================
export const CompactBannerAboutExample = () => {
  return (
    <CompactBanner
      title="About Our Company"
      subtitle="12 years of excellence in professional cleaning services"
    />
  );
};

// ============================================
// EXAMPLE 3: Compact Banner - Pricing Page
// ============================================
export const CompactBannerPricingExample = () => {
  return (
    <CompactBanner
      title="Simple & Transparent Pricing"
      subtitle="Choose the perfect cleaning plan for your needs"
    />
  );
};

// ============================================
// EXAMPLE 4: Service Banner - Deep Cleaning
// ============================================
export const ServiceBannerDeepCleaningExample = () => {
  return (
    <ServiceBanner
      title="Professional Deep Cleaning"
      description="Our comprehensive deep cleaning service reaches every corner of your space, removing dirt, dust, and allergens for a spotless finish."
      icon={Sparkles}
      highlights={["100% Eco-friendly", "Full Guarantee", "Insured Team"]}
      ctaText="Book Deep Cleaning Now"
      onCtaClick={() => {
        console.log("Book deep cleaning");
        // Navigate to booking page
      }}
    />
  );
};

// ============================================
// EXAMPLE 5: Service Banner - Regular Cleaning
// ============================================
export const ServiceBannerRegularCleaningExample = () => {
  return (
    <ServiceBanner
      title="Weekly Maintenance Cleaning"
      description="Keep your home fresh and tidy with our regular cleaning service. Customizable schedules to fit your lifestyle."
      icon={Heart}
      highlights={["Weekly Plans", "Flexible Scheduling", "24/7 Support"]}
      ctaText="Schedule Regular Cleaning"
      onCtaClick={() => {
        console.log("Book regular cleaning");
      }}
    />
  );
};

// ============================================
// EXAMPLE 6: Service Banner - End of Lease
// ============================================
export const ServiceBannerEndOfLeaseExample = () => {
  return (
    <ServiceBanner
      title="End of Lease Cleaning"
      description="Professional end-of-lease cleaning to ensure you get your full bond back. We handle all the details with precision."
      icon={CheckCircle2}
      highlights={["Bond Approved", "Detail Oriented", "Licensed Team"]}
      ctaText="Get Bond Back Guarantee"
      onCtaClick={() => {
        console.log("Book end of lease cleaning");
      }}
    />
  );
};

// ============================================
// EXAMPLE 7: Service Banner - Airbnb Cleaning
// ============================================
export const ServiceBannerAirbnbCleaningExample = () => {
  return (
    <ServiceBanner
      title="Airbnb & Rental Property Cleaning"
      description="Ensure 5-star reviews with our Airbnb-specialized cleaning service. Quick turnarounds between guests."
      icon={Award}
      highlights={["Fast Turnaround", "5-Star Quality", "Guest Ready"]}
      ctaText="Book Airbnb Cleaning"
      onCtaClick={() => {
        console.log("Book airbnb cleaning");
      }}
    />
  );
};

// ============================================
// EXAMPLE 8: Service Banner - Restaurant
// ============================================
export const ServiceBannerRestaurantCleaningExample = () => {
  return (
    <ServiceBanner
      title="Commercial Restaurant Cleaning"
      description="Specialized cleaning for food service establishments. Health code compliant and certified professionals."
      icon={Shield}
      highlights={[
        "Health Code Certified",
        "Commercial Grade",
        "Scheduled Service",
      ]}
      ctaText="Schedule Commercial Cleaning"
      onCtaClick={() => {
        console.log("Book restaurant cleaning");
      }}
    />
  );
};

// ============================================
// USAGE INSTRUCTIONS
// ============================================
/**
 * HOW TO USE BANNER COMPONENTS IN YOUR PAGES:
 *
 * 1. HOME PAGE (src/app/page.tsx)
 *    import { Banner } from "@/components/layouts/Banner";
 *
 *    export default function Home() {
 *      return (
 *        <>
 *          <Header />
 *          <Banner />
 *          <OtherSections />
 *          <Footer />
 *        </>
 *      );
 *    }
 *
 * 2. SERVICE PAGES (src/app/components/service/[slug]/page.tsx)
 *    import { ServiceBanner } from "@/components/layouts/Banner";
 *    import { Sparkles } from "lucide-react";
 *
 *    export default function ServicePage() {
 *      return (
 *        <>
 *          <Header />
 *          <ServiceBanner
 *            title="Service Title"
 *            description="Service description"
 *            icon={Sparkles}
 *            highlights={["Feature 1", "Feature 2"]}
 *          />
 *          <ServiceDetails />
 *          <Footer />
 *        </>
 *      );
 *    }
 *
 * 3. SECONDARY PAGES (About, Pricing, etc.)
 *    import { CompactBanner } from "@/components/layouts/Banner";
 *
 *    export default function AboutPage() {
 *      return (
 *        <>
 *          <Header />
 *          <CompactBanner
 *            title="About Us"
 *            subtitle="Our story and mission"
 *          />
 *          <OtherContent />
 *          <Footer />
 *        </>
 *      );
 *    }
 */
