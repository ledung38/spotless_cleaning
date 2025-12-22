import {
  AnimateButton,
  AnimateDiv,
  AnimateSpan,
} from "@/components/common/Animate";
import SmoothLoopVideo from "@/components/common/BannerVideo";
import { ArrowCircleRightIcon } from "@/components/icons";
import BannerSlider from "@/modules/home/Banner/BannerSlider";
import { imageImages } from "@/modules/home/Banner/contants";
import { HandCoins, Shield, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";
import { StaticImageData } from "next/image";
import React from "react";

const FloatingIcon = ({
  Icon,
  delay,
  position,
}: {
  Icon: React.ComponentType<any>;
  delay: number;
  position: string;
}) => {
  return (
    <AnimateDiv
      className={`absolute ${position}`}
      animate={{
        y: [0, -30, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="text-primary opacity-60">
        <Icon size={64} className="drop-shadow-lg" />
      </div>
    </AnimateDiv>
  );
};

const FeatureBadge = ({
  icon: Icon,
  text,
  delay = 0,
}: {
  icon: React.ComponentType<any>;
  text: string;
  delay?: number;
}) => {
  return (
    <AnimateDiv
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.6 + delay,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.05, translateY: -3 }}
      className="flex justify-start items-center gap-2 rounded-full px-2.5 sm:px-4  lg:pr-10  py-2 transition-all duration-300 bg-[#c8d4e0] hover:brightness-110"
    >
      <Icon size={18} className="text-[#6b7d94] font-bold" />
      <span className="font-bold text-[#6b7d94] text ">{text}</span>
    </AnimateDiv>
  );
};
const AnimatedText = ({
  children,
  delay,
}: {
  children: string;
  delay: number;
}) => {
  const words = children.split(" ");

  return (
    <div className="overflow-hidden">
      <AnimateDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay,
          ease: "easeOut",
        }}
      >
        {words.map((word, idx) => (
          <AnimateSpan
            key={idx}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + idx * 0.08,
              ease: "easeOut",
            }}
          >
            {word}
          </AnimateSpan>
        ))}
      </AnimateDiv>
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
      {/* <FloatingIcon Icon={Sparkles} delay={0} position="top-20 right-10" /> */}
      {/* <FloatingIcon Icon={Zap} delay={0.5} position="top-40 left-20" /> */}
      {/* <FloatingIcon Icon={Shield} delay={1} position="bottom-32 right-20" /> */}
      {/* <FloatingIcon Icon={Sparkles} delay={1.5} position="bottom-20 left-32" /> */}
      {/* <div className="bg-[url('/home_banner_v2.png')] absolute inset-0 bg-cover" /> */}
      {/* <div className="bg-gradient-to-r  from-[rgba(248,248,248,.89)] via-[rgba(248,248,248,.59)] to-[rgba(248,248,248,.01)] absolute inset-0" /> */}
      {/* <div className="bg-gradient-to-br from-primary via-blue-800 to-purple-900 absolute inset-0 opacity-40" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" /> */}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-25">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}

          <AnimateDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              {/* <TagTitle>Welcome to Premium Cleaning</TagTitle> */}
              {/* <span className="text-4xl font-bold bg-gradient-to-r from-[#FDBA74] to-[#FB923C] bg-clip-text text-transparent">
                2800+ Services Completed
              </span> */}
              <h1 className="text-4xl lg:text-5xl font-black  leading-tight bg-gradient-to-r from-[#0871eb] via-primary/80 to-[#1565C0] bg-clip-text  text-[#e8e3da]">
                <AnimatedText delay={0}>
                  Professional Cleaning Service in Sydney
                </AnimatedText>
                {/* <AnimatedText delay={0.5}>Spotless Care</AnimatedText> */}
              </h1>

              <p className=" sm:text-xl text-lg text-[#e8e3da] leading-relaxed max-w-xl ">
                <AnimateSpan
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="inline"
                >
                  {description}
                </AnimateSpan>
              </p>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 gap-3 pt-6 w-fit">
              <FeatureBadge
                icon={Sparkles}
                text="Professional Team"
                delay={0}
              />
              <FeatureBadge icon={Zap} text="On Time" delay={0.1} />
              <FeatureBadge
                icon={Shield}
                text="100% Satisfaction"
                delay={0.2}
              />
              <FeatureBadge
                icon={HandCoins}
                text="Affordable Rates"
                delay={0.3}
              />
            </div>

            {/* CTA Button */}
            <AnimateDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              className="pt-6"
            >
              <AnimateButton
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
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
              </AnimateButton>
            </AnimateDiv>

            {/* Trust Stats */}
            <AnimateDiv className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
              {[
                { number: "2000+", label: "Happy Clients" },
                { number: "8+", label: "Years Experience" },
                { number: "24/7", label: "Customer Support" },
              ].map((stat, idx) => (
                <AnimateDiv
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.4 + idx * 0.1,
                    ease: "easeOut",
                  }}
                  className="text-center"
                >
                  <p className="text-3xl font-black text-secondary">
                    {stat.number}
                  </p>
                  <p className="text-sm font-medium text-[#c8d4e0] mt-1">
                    {stat.label}
                  </p>
                </AnimateDiv>
              ))}
            </AnimateDiv>
          </AnimateDiv>

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
