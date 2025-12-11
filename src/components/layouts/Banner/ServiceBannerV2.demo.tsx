/**
 * ServiceBannerV2 - Demo & Usage Guide
 *
 * Component hiển thị banner dịch vụ với slider ảnh bên phải.
 * Thiết kế hiện đại với animation mượt mà, màu sắc sáng phù hợp theme light.
 */

import { ServiceBannerV2 } from "@/components/layouts/Banner/ServiceBannerV2";

// ============ CÁC VÍ DỤ SỬ DỤNG ============

// VÍ DỤ 1: CẤU HÌNH CƠẢN
export function ServiceBannerV2BasicExample() {
  return (
    <ServiceBannerV2
      title="Professional Cleaning"
      description="Get your home or office spotlessly clean with our expert team. Fast, reliable, and affordable services."
      highlights={["Professional", "Fast", "Reliable"]}
      ctaText="Book Now"
      onCtaClick={() => console.log("CTA clicked!")}
    />
  );
}

// VÍ DỤ 2: CÓ CUSTOM ICONS
import { Home, Sparkles } from "lucide-react";

export function ServiceBannerV2WithCustomIcon() {
  return (
    <ServiceBannerV2
      title="House Cleaning Services"
      description="Transform your living space into a pristine sanctuary. Our certified cleaners use eco-friendly products."
      icon={Home}
      highlights={[
        "Eco-Friendly",
        "Certified Team",
        "24/7 Support",
        "Money-Back Guarantee",
      ]}
      ctaText="Get Free Quote"
      onCtaClick={() => alert("Navigating to quote page...")}
    />
  );
}

// VÍ DỤ 3: CÓ CUSTOM IMAGES
export function ServiceBannerV2WithCustomImages() {
  const cleaningImages = [
    "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop", // Cleaning supplies
    "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=600&h=600&fit=crop", // House cleaning
    "https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=600&h=600&fit=crop", // Professional
    "https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=600&h=600&fit=crop", // Office
  ];

  return (
    <ServiceBannerV2
      title="Office Cleaning Service"
      description="Keep your workplace clean and productive. Custom cleaning plans for businesses of all sizes."
      icon={Sparkles}
      highlights={[
        "Custom Plans",
        "Trained Staff",
        "Flexible Schedule",
        "Competitive Pricing",
      ]}
      ctaText="Schedule Service"
      onCtaClick={() => console.log("Schedule service clicked")}
      images={cleaningImages}
      autoPlay={true}
      autoPlayInterval={5000}
    />
  );
}

// VÍ DỤ 4: KHÔNG AUTO-PLAY
export function ServiceBannerV2ManualSlider() {
  return (
    <ServiceBannerV2
      title="Specialized Cleaning"
      description="From carpet cleaning to window washing, we handle all your cleaning needs with precision."
      highlights={[
        "Carpet Care",
        "Window Cleaning",
        "Sanitization",
        "Pet-Safe Products",
      ]}
      ctaText="Learn More"
      autoPlay={false}
    />
  );
}

// ============ CÁC PROPS CÓ SẨN ============

/**
 * @interface ServiceBannerV2Props
 *
 * @property {string} title - Tiêu đề chính của banner
 * @property {string} description - Mô tả chi tiết dịch vụ
 * @property {React.ComponentType<any>} [icon] - Lucide icon component (mặc định: Sparkles)
 * @property {string[]} [highlights] - Mảng đặc điểm nổi bật (mặc định: ["Professional", "Fast", "Reliable"])
 * @property {string} [ctaText] - Văn bản nút CTA (mặc định: "Get Started")
 * @property {() => void} [onCtaClick] - Callback khi click nút CTA
 * @property {string[]} [images] - Mảng URLs hình ảnh slider (mặc định: 4 hình mẫu)
 * @property {boolean} [autoPlay] - Bật/tắt auto-play slider (mặc định: true)
 * @property {number} [autoPlayInterval] - Thời gian chuyển slide (ms, mặc định: 5000)
 */

// ============ HƯỚNG DẪN STYLING ============

/**
 * COLORS ĐƯỢC SỬ DỤNG:
 * - primary: Màu xanh chính từ theme (oklch(0.68 0.22 250))
 * - blue-50/300: Màu nền gradient nhẹ
 * - foreground/muted-foreground: Chữ tối/xám nhẹ phù hợp light mode
 *
 * ANIMATIONS:
 * - Gradient background pulse: 8s duration
 * - Image carousel: Spring transition (stiffness: 300, damping: 30)
 * - Button hover: Scale 1.1x
 * - Dot indicators: Smooth color transition
 *
 * RESPONSIVE BREAKPOINTS:
 * - Mobile: 1 cột, h-96
 * - Tablet: 2 cột, h-96
 * - Desktop: 2 cột, h-450px
 */

// ============ TÙYCHỈNH ADVANCED ============

/**
 * MUỐN THAY ĐỔI?
 *
 * 1. Thay đổi số slide auto-play:
 *    <ServiceBannerV2 autoPlayInterval={3000} /> // 3s
 *
 * 2. Tắt tính năng dot indicator:
 *    - Bỏ comment dòng "Dot Indicators" trong component
 *    - Hoặc pass prop để control từ parent
 *
 * 3. Thêm navigation arrows mới:
 *    - Chỉnh lại size/color của ChevronLeft/Right icons
 *    - Component đã có navigation buttons built-in
 *
 * 4. Thay đổi animation speed:
 *    - Image transition: `transition={{ ... }}`
 *    - Background: `animate={{ ... }} transition={{ duration: 8 }}`
 *
 * 5. Custom height:
 *    - Chỉnh `h-96 lg:h-[450px]` trong right side div
 *
 * 6. Thay đổi rounded corners:
 *    - Carousel: `rounded-3xl` → `rounded-2xl` hoặc `rounded-full`
 *    - Buttons: `rounded-xl` → tùy chỉnh
 */

// ============ PERFORMANCE TIPS ============

/**
 * 1. Image Optimization:
 *    - Sử dụng URLs có query params (w=600&h=600&fit=crop)
 *    - Hoặc upload ảnh tối ưu hóa lên server
 *
 * 2. Lazy Loading:
 *    - Component đã sử dụng AnimatePresence từ motion/react
 *    - Images sẽ chỉ render khi visible
 *
 * 3. Reduce Re-renders:
 *    - Wrap component trong memo() nếu props hiếm khi thay đổi
 *    - Memoize callbacks: onCtaClick = useCallback(...)
 *
 * 4. Animation Performance:
 *    - Component sử dụng GPU-accelerated transforms
 *    - Tránh animation quá nhiều elements cùng lúc
 */

export default ServiceBannerV2BasicExample;
