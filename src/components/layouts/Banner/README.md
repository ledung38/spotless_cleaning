# 🎨 Banner Components Guide

## 📁 Folder Structure

```
src/components/layouts/Banner/
├── index.tsx                      # Main Banner component + exports
├── ServiceBanner.tsx              # Original service banner (darker theme)
├── ServiceBannerV2.tsx            # NEW: Modern service banner with image slider ⭐
├── ServiceBannerV2.demo.tsx       # Usage examples & documentation
├── Banner.module.css              # Styles module
└── README.md                      # This file
```

---

## 🚀 Quick Start

### Import and Use ServiceBannerV2

```tsx
import { ServiceBannerV2 } from "@/components/layouts/Banner";

export function HomePage() {
  return (
    <ServiceBannerV2
      title="Professional Cleaning Services"
      description="Transform your space with our expert cleaning team"
      highlights={["Professional", "Fast", "Reliable"]}
      ctaText="Book Now"
      onCtaClick={() => console.log("Booking...")}
    />
  );
}
```

---

## 📋 Components Overview

### 1. **Banner** (Original Main Hero Banner)

- Full-screen hero banner
- Complex layout with animated cards
- Dark blue/purple gradient background
- Features: Trust stats, feature badges, illustrated cards
- **Use for**: Homepage hero section

### 2. **ServiceBanner** (Dark Service Banner)

- Medium height service-focused banner
- Dark gradient background (blue → purple)
- Two feature cards that animate
- **Use for**: Service listing pages, detailed service showcase

### 3. **ServiceBannerV2** ⭐ NEW - Modern Light-Themed Service Banner

- Modern, light-themed service banner with **image carousel slider on the right**
- Responsive design (mobile-first)
- Auto-playing image carousel with manual controls (arrows + dots)
- Uses primary color from light theme
- Smooth spring animations
- **Use for**: Service pages, product showcases, landing sections

**Props:**

```tsx
interface ServiceBannerV2Props {
  title: string; // Main heading
  description: string; // Description text
  icon?: React.ComponentType<any>; // Lucide icon (default: Sparkles)
  highlights?: string[]; // Feature bullets
  ctaText?: string; // Button text (default: "Get Started")
  onCtaClick?: () => void; // Button click handler
  images?: string[]; // Array of image URLs for carousel
  autoPlay?: boolean; // Auto-play slides (default: true)
  autoPlayInterval?: number; // Delay in ms (default: 5000)
}
```

**Usage:**

```tsx
import { ServiceBannerV2 } from "@/components/layouts/Banner";
import { Home } from "lucide-react";

export default function HouseCleaningPage() {
  return (
    <ServiceBannerV2
      title="Professional House Cleaning"
      description="Transform your home with our expert cleaning services"
      icon={Home}
      highlights={["Professional", "Eco-Friendly", "24/7 Support"]}
      ctaText="Book Now"
      onCtaClick={() => router.push("/booking")}
      images={[
        "https://example.com/before1.jpg",
        "https://example.com/after1.jpg",
        "https://example.com/before2.jpg",
        "https://example.com/after2.jpg",
      ]}
      autoPlay={true}
      autoPlayInterval={5000}
    />
  );
}
```

---

## 🎨 ServiceBannerV2 - Colors & Design

**Light Theme Colors (from globals.css):**

- **Background**: `from-primary/5 via-blue-50/30 to-accent/10` - Soft gradient
- **Text**: `text-foreground` - Dark text for light mode
- **Muted**: `text-muted-foreground` - Gray secondary text
- **Accent**: `from-primary to-blue-600` - Button gradient
- **Highlights**: `bg-primary/8` with `border-primary/20` - Feature badges
- **Primary Color**: `oklch(0.68 0.22 250)` - Apple blue #0A84FF

**Key differences from ServiceBanner:**
| Feature | ServiceBanner | ServiceBannerV2 |
|---------|---------------|-----------------|
| Theme | Dark | **Light** |
| Right Panel | Feature Cards | **Image Carousel Slider** |
| Background | Dark gradient | Soft light gradient |
| Icons | Blue/purple | Primary blue |
| Use Case | Service details | Landing pages, showcases |

---

## 🎬 ServiceBannerV2 - Features

✨ **Image Carousel**

- Spring transition animation (smooth & natural)
- Swipeable navigation with arrow buttons
- Dot indicators showing current slide
- Image counter (e.g., "1 / 4")
- Auto-play with configurable interval
- Manual controls (arrows + dots)

🎨 **Design Elements**

- Responsive layout (1 col mobile, 2 col desktop)
- Rounded corner carousel (rounded-3xl)
- Gradient overlay on images
- Shadow effects on buttons
- Backdrop blur for modern look

🎯 **Animations**

- Staggered text entrance animations
- Smooth carousel transitions
- Button hover effects (scale + shadow)
- Background gradient pulse (8s cycle)
- Floating decorative icon

---

## 📱 Responsive Breakpoints

| Screen              | Layout                 | Image Height       | Notes              |
| ------------------- | ---------------------- | ------------------ | ------------------ |
| Mobile (< 640px)    | 1 column, full width   | h-96 (384px)       | Stacked layout     |
| Tablet (640-1024px) | 1-2 columns            | h-96               | Still compact      |
| Desktop (1024px+)   | 2 columns side-by-side | h-[450px] (450px)  | Full layout        |
| Padding             | 4px mobile, 6lg, 8lg   | Responsive gutters | Adjusts per screen |

---

## 🚀 Quick Examples

### 1. Basic Usage

```tsx
<ServiceBannerV2
  title="Cleaning Services"
  description="Professional cleaning for your home or office"
/>
```

### 2. With Custom Icon

```tsx
import { Building2 } from "lucide-react";

<ServiceBannerV2
  title="Office Cleaning"
  icon={Building2}
  highlights={["Custom Plans", "Flexible Schedule"]}
/>;
```

### 3. With Custom Images

```tsx
<ServiceBannerV2
  title="Our Work"
  images={[
    "/images/cleaning-1.jpg",
    "/images/cleaning-2.jpg",
    "/images/cleaning-3.jpg",
    "/images/cleaning-4.jpg",
  ]}
/>
```

### 4. With CTA Handler

```tsx
const handleBooking = () => {
  window.location.href = "/booking";
};

<ServiceBannerV2
  title="Ready to Book?"
  ctaText="Schedule Service"
  onCtaClick={handleBooking}
/>;
```

### 5. Manual Carousel (No Auto-Play)

```tsx
<ServiceBannerV2 title="Gallery" autoPlay={false} />
```

---

## 🛠️ Customization Examples

### Change Carousel Auto-Play Speed

```tsx
// Slower (10 seconds)
<ServiceBannerV2 autoPlayInterval={10000} />

// Faster (2 seconds)
<ServiceBannerV2 autoPlayInterval={2000} />
```

### Disable Auto-Play

```tsx
<ServiceBannerV2 autoPlay={false} />
```

### Different Button Style

Edit `ServiceBannerV2.tsx` around line 110:

```tsx
// From: bg-gradient-to-r from-primary to-blue-600
// To solid primary:
className = "... bg-primary ...";

// Or different colors:
className = "... bg-gradient-to-r from-green-500 to-emerald-600 ...";
```

### Change Image Carousel Height

Edit around line 140:

```tsx
// Current: h-96 lg:h-[450px]
// Taller: h-96 lg:h-[550px]
className = "relative h-96 lg:h-[550px] rounded-3xl overflow-hidden";
```

### Change Border Radius

```tsx
// From: rounded-3xl
// To: rounded-2xl, rounded-xl, rounded-lg, or rounded-full
className = "... rounded-2xl ...";
```

---

## 📚 Available Lucide Icons

Popular choices for cleaning services:

- `Sparkles` ✨ - General cleaning/shine
- `Home` 🏠 - House cleaning
- `Building2` 🏢 - Office cleaning
- `Leaf` 🍃 - Eco-friendly
- `Shield` 🛡️ - Protection/quality
- `Award` 🏆 - Premium/certified
- `Clock` ⏰ - Time/24/7
- `Users` 👥 - Team
- `Zap` ⚡ - Fast service

```tsx
import { Sparkles, Home, Building2, Leaf } from "lucide-react";
```

---

## ✅ Implementation Checklist

- [ ] Replace placeholder images with real business photos
- [ ] Update title & description for your service
- [ ] Customize highlights to match your services
- [ ] Update CTA button text and action
- [ ] Configure auto-play interval if needed
- [ ] Test on mobile/tablet/desktop
- [ ] Add analytics to `onCtaClick`
- [ ] Verify image loading speeds
- [ ] Test carousel navigation (arrows & dots)

---

## 🎯 Best Practices

### 1. Images

- Use optimized images (w=600&h=600&fit=crop in URL)
- Compress images before uploading
- Use consistent aspect ratios
- Min 4 images for good carousel experience

### 2. Performance

- Image carousel lazy loads automatically
- Animations use GPU acceleration
- Minimal re-renders via motion/react
- Component is ~8KB (minified)

### 3. Accessibility

- All buttons have proper contrast
- Navigation arrows are keyboard accessible
- Text is readable on all backgrounds
- Icon descriptions available via props

### 4. Mobile

- Touch-friendly navigation buttons (12h×12h)
- Responsive text sizing
- Proper spacing on small screens
- Carousel works on mobile (tap arrows/dots)

---

## 🔄 Migration from ServiceBanner to ServiceBannerV2

If you're upgrading from the old `ServiceBanner`:

**Before:**

```tsx
import { ServiceBanner } from "@/components/layouts/Banner";

export default function Page() {
  return (
    <ServiceBanner
      title="Our Service"
      description="Service description"
      highlights={["Feature1", "Feature2"]}
      ctaText="Learn More"
    />
  );
}
```

**After (V2):**

```tsx
import { ServiceBannerV2 } from "@/components/layouts/Banner";

export default function Page() {
  return (
    <ServiceBannerV2
      title="Our Service"
      description="Service description"
      highlights={["Feature1", "Feature2"]}
      ctaText="Learn More"
      images={
        [
          /* your images */
        ]
      }
    />
  );
}
```

Both work! ServiceBanner is still available for dark-themed pages.

---

## 📞 Troubleshooting

**Q: Images not showing?**  
A: Check image URLs are accessible, verify CORS headers, check browser console

**Q: Carousel not auto-playing?**  
A: Verify `autoPlay={true}`, check `autoPlayInterval` value, browser may pause unfocused tabs

**Q: Animation stuttering?**  
A: Reduce animations on page, optimize image sizes, check hardware acceleration

**Q: Text overflow on mobile?**  
A: Tailwind handles responsive text automatically, adjust if using custom CSS

---

**Last Updated:** December 4, 2025  
**Component Version:** v2.0 (Light Theme with Carousel)  
**Status:** Production Ready ✅

```

```
