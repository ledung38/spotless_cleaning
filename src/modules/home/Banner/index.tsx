import { AnimateSpan } from "@/components/common/Animate";
import SmoothLoopVideo from "@/components/common/BannerVideo";
import { ArrowCircleRightIcon } from "@/components/icons";
import { Routes } from "@/lib/enum/routes";
import BannerSlider from "@/modules/home/Banner/BannerSlider";
import { imageImages } from "@/modules/home/Banner/contants";
import { HandCoins, Shield, Sparkles, Zap } from "lucide-react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const FeatureBadge = ({
  icon: Icon,
  text,
}: {
  icon: React.ComponentType<any>;
  text: string;
}) => {
  return (
    <div className="flex justify-start items-center gap-2 rounded-full px-2.5 sm:px-4  lg:pr-10  py-2 transition-all duration-300 bg-[#c8d4e0] hover:brightness-110 hover:scale-105">
      <Icon size={18} className="text-[#6b7d94] font-bold" />
      <span className="font-bold text-[#6b7d94] text ">{text}</span>
    </div>
  );
};

interface ServiceBannerV2Props {
  title?: string;
  description?: string;
  icon?: React.ComponentType<any>;
  highlights?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
  images?: string[] | StaticImageData[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const Banner = ({
  description = `Professional cleaning services that exceed expectations. From
                  deep cleaning to regular maintenance, we keep your space
                  pristine with premium attention to detail.`,
  ctaText = "GET AN INSTANT QUOTE",
  onCtaClick,
  images = imageImages,
  autoPlay = true,
  autoPlayInterval = 3000,
}: ServiceBannerV2Props) => {
  return (
    // <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-bl from-secondary/30 via-blue-50/30 to-primary/70 flex items-center">
    <div className="relative w-full min-h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <SmoothLoopVideo src="/banner_video.mp4" />
      </div>

      {/* Main Content */}
      <div className="max-sm:!pt-38 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-25">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              {/* <TagTitle>Welcome to Premium Cleaning</TagTitle> */}
              {/* <span className="text-4xl font-bold bg-gradient-to-r from-[#FDBA74] to-[#FB923C] bg-clip-text text-transparent">
                2800+ Services Completed
              </span> */}
              <h1 className="text-4xl lg:text-5xl font-black  leading-tight bg-gradient-to-r from-[#0871eb] via-primary/80 to-[#1565C0] bg-clip-text  text-[#e8e3da]">
                {/* <AnimatedText delay={0}> */}
                Professional Cleaning Service in Sydney
                {/* </AnimatedText> */}
              </h1>

              <p className=" sm:text-xl text-lg text-[#e8e3da] leading-relaxed max-w-xl ">
                <span
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  // transition={{ duration: 0.8, delay: 0.8 }}
                  className="inline"
                >
                  {description}
                </span>
              </p>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 gap-3 pt-6 w-fit">
              <FeatureBadge icon={Sparkles} text="Professional Team" />
              <FeatureBadge icon={Zap} text="On Time" />
              <FeatureBadge icon={Shield} text="100% Satisfaction" />
              <FeatureBadge icon={HandCoins} text="Affordable Rates" />
            </div>

            {/* CTA Button */}
            <Link
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              href={Routes.BOOKING}
              className="pt-6"
            >
              <button
                // whileHover={{ scale: 1.05, translateY: -2 }}
                // whileTap={{ scale: 0.95 }}
                onClick={onCtaClick}
                className="relative px-8 py-4 bg-gradient-to-r from-[oklch(0.62_0.18_250)] to-[oklch(0.55_0.15_250)] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-[oklch(0.62_0.18_250)]/30 transition-all duration-300 group overflow-hidden"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  {ctaText}
                  <AnimateSpan
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowCircleRightIcon className="size-6" />
                  </AnimateSpan>
                </span>
              </button>
            </Link>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
              {[
                { number: "2000+", label: "Happy Clients" },
                { number: "8+", label: "Years Experience" },
                { number: "24/7", label: "Customer Support" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  // initial={{ opacity: 0, y: 10 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // transition={{
                  //   duration: 0.5,
                  //   delay: 1.4 + idx * 0.1,
                  //   ease: "easeOut",
                  // }}
                  className="text-center"
                >
                  <p className="text-3xl font-black text-secondary">
                    {stat.number}
                  </p>
                  <p className="text-sm font-medium text-[#c8d4e0] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image Carousel */}
          <BannerSlider
            autoPlay={autoPlay}
            autoPlayInterval={autoPlayInterval}
            images={images}
          />
        </div>
      </div>
    </div>
  );
};
