/**
 * ServiceBannerV2 - Real World Integration Examples
 *
 * Copy & paste these examples vào pages của bạn
 */

"use client";

import { ServiceBannerV2 } from "@/components/layouts/Banner";
import { Home, Building2, Sparkles, Zap, Shield, Award } from "lucide-react";

// ============================================
// 1. HOUSE CLEANING PAGE
// ============================================
export function HouseCleaningPage() {
  return (
    <ServiceBannerV2
      title="Professional House Cleaning"
      description="Transform your living space into a pristine sanctuary. Our certified team uses eco-friendly products and proven techniques to deliver exceptional results."
      icon={Home}
      highlights={[
        "Deep Cleaning",
        "Eco-Friendly",
        "24/7 Support",
        "Guaranteed",
      ]}
      ctaText="Book Your Cleaning"
      onCtaClick={() => console.log("Navigate to booking...")}
      images={[
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=600&h=600&fit=crop",
      ]}
    />
  );
}

// ============================================
// 2. OFFICE CLEANING PAGE
// ============================================
export function OfficeCleaningPage() {
  return (
    <ServiceBannerV2
      title="Commercial Office Cleaning"
      description="Keep your workplace clean and productive with our professional commercial cleaning services. Flexible scheduling tailored to your business hours."
      icon={Building2}
      highlights={[
        "Flexible Hours",
        "Professional Team",
        "Discreet Service",
        "Customizable Plans",
      ]}
      ctaText="Get Free Quote"
      onCtaClick={() => console.log("Show quote form...")}
      images={[
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop",
      ]}
      autoPlayInterval={4000}
    />
  );
}

// ============================================
// 3. DEEP CLEANING SERVICE PAGE
// ============================================
export function DeepCleaningPage() {
  return (
    <ServiceBannerV2
      title="Premium Deep Cleaning Service"
      description="Comprehensive deep cleaning that reaches every corner, crevice, and surface. Perfect for move-ins, move-outs, and seasonal refreshes."
      icon={Sparkles}
      highlights={[
        "Complete Coverage",
        "Certified Cleaners",
        "Eco-Safe Products",
        "Bond Approved",
      ]}
      ctaText="Schedule Deep Cleaning"
      onCtaClick={() => console.log("Open booking modal...")}
      images={[
        "https://images.unsplash.com/photo-1583428068239-c5300f39a057?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1527773537098-3eae9d3fff9f?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559156069-fc8c38e4046f?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552881944-baea76346585?w=600&h=600&fit=crop",
      ]}
    />
  );
}

// ============================================
// 4. WINDOW CLEANING SERVICE
// ============================================
export function WindowCleaningPage() {
  return (
    <ServiceBannerV2
      title="Professional Window & Glass Cleaning"
      description="Sparkling clean windows enhance your property's appearance. Our team handles residential and commercial properties with precision and care."
      icon={Zap}
      highlights={[
        "Streak-Free Results",
        "High-Rise Ready",
        "Quick Service",
        "Safety Guaranteed",
      ]}
      ctaText="Get Window Cleaning"
      onCtaClick={() => console.log("Schedule window cleaning...")}
      images={[
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=600&h=600&fit=crop",
      ]}
    />
  );
}

// ============================================
// 5. CARPET CLEANING PAGE
// ============================================
export function CarpetCleaningPage() {
  return (
    <ServiceBannerV2
      title="Expert Carpet & Upholstery Cleaning"
      description="Restore your carpets to like-new condition. We use professional-grade equipment and pet-safe cleaning solutions."
      icon={Shield}
      highlights={[
        "Stain Removal",
        "Odor Elimination",
        "Quick Drying",
        "Pet Safe",
      ]}
      ctaText="Book Carpet Cleaning"
      onCtaClick={() => console.log("Carpet cleaning booking...")}
      images={[
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=600&h=600&fit=crop",
      ]}
    />
  );
}

// ============================================
// 6. END OF LEASE CLEANING PAGE
// ============================================
export function EndOfLeaseCleaningPage() {
  return (
    <ServiceBannerV2
      title="End of Lease Cleaning"
      description="Move out with confidence! Our bond-approved cleaning ensures you get your full security deposit back. Comprehensive coverage of every detail."
      icon={Award}
      highlights={[
        "Bond Approved",
        "100% Satisfaction",
        "Inspection Ready",
        "Full Coverage",
      ]}
      ctaText="Schedule Bond Clean"
      onCtaClick={() => console.log("Book end of lease cleaning...")}
      images={[
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=600&h=600&fit=crop",
      ]}
    />
  );
}

// ============================================
// 7. MINIMAL VERSION (No Custom Images)
// ============================================
export function MinimalBannerExample() {
  return (
    <ServiceBannerV2
      title="One-Time Cleaning"
      description="Need a quick clean? Our one-time service is perfect for special occasions or maintenance."
      icon={Sparkles}
      highlights={["Fast Service", "Affordable", "Professional"]}
      ctaText="Book Now"
      // Will use default placeholder images
    />
  );
}

// ============================================
// 8. WITH ROUTER NAVIGATION
// ============================================
import { useRouter } from "next/navigation";

export function BannerWithNavigation() {
  const router = useRouter();

  const handleBooking = () => {
    router.push("/booking");
  };

  const handleQuote = () => {
    router.push("/quote");
  };

  return (
    <ServiceBannerV2
      title="Ready to Get Started?"
      description="Choose from our range of cleaning services and schedule today."
      icon={Sparkles}
      highlights={["Professional", "Reliable", "Affordable"]}
      ctaText="Book Service"
      onCtaClick={handleBooking}
      images={[
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=600&h=600&fit=crop",
      ]}
    />
  );
}

// ============================================
// 9. MANUAL CAROUSEL (No Auto-Play)
// ============================================
export function ManualCarouselExample() {
  return (
    <ServiceBannerV2
      title="Our Gallery"
      description="Browse through our recent work and see the quality of our cleaning services."
      icon={Sparkles}
      highlights={["Before & After", "Real Results", "Quality Work"]}
      ctaText="See More"
      autoPlay={false} // User controls carousel
      images={[
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=600&h=600&fit=crop",
      ]}
    />
  );
}

// ============================================
// 10. FAST AUTO-PLAY (2 seconds)
// ============================================
export function FastCarouselExample() {
  return (
    <ServiceBannerV2
      title="Quick Showcase"
      description="See our work in rapid succession - fast auto-play for impact!"
      icon={Zap}
      highlights={["Fast", "Impressive", "Engaging"]}
      ctaText="Learn More"
      autoPlayInterval={2000} // Change slide every 2 seconds
      images={[
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=600&h=600&fit=crop",
      ]}
    />
  );
}

// ============================================
// USAGE IN A PAGE COMPONENT
// ============================================

/**
 * Example page component using ServiceBannerV2
 */
export function ExampleServicePage() {
  return (
    <main>
      {/* Banner Section */}
      <HouseCleaningPage />

      {/* Other sections can follow */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        {/* Add your content here */}
      </section>

      {/* Another banner for different service */}
      <section className="py-16">
        <OfficeCleaningPage />
      </section>
    </main>
  );
}

// ============================================
// NOTES:
// ============================================

/**
 * 💡 TIPS:
 *
 * 1. Replace placeholder images with your own
 * 2. Update service titles and descriptions
 * 3. Adjust highlights to match your services
 * 4. Implement proper onCtaClick handlers
 * 5. Test on mobile/tablet/desktop
 * 6. Add analytics tracking
 * 7. Use router.push() for page navigation
 *
 * 🎨 COLORS:
 * - Already using light theme colors from globals.css
 * - Primary blue: oklch(0.68 0.22 250) #0A84FF
 * - No color changes needed!
 *
 * 📸 IMAGES:
 * - Min 4 images for carousel
 * - Use consistent aspect ratios
 * - Compress before uploading
 * - Add ?w=600&h=600&fit=crop for optimization
 *
 * ⚡ PERFORMANCE:
 * - Component is ~8KB minified
 * - Uses GPU-accelerated animations
 * - Lazy loads images automatically
 * - No performance issues with multiple banners
 *
 * 🎯 ANIMATIONS:
 * - Spring transition for smooth carousel
 * - Auto-play interval (default 5000ms)
 * - Manual controls (arrows + dots)
 * - Hover effects on buttons
 */

export default ExampleServicePage;
