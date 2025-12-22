import {
  Sparkles,
  Zap,
  Shield,
  Award,
  CheckCircle2,
  Heart,
  Droplets,
} from "lucide-react";
import { ArrowRightIcon } from "@/components/icons";
import { Routes } from "@/lib/enum/routes";
import Link from "next/link";
import { AnimateDiv, AnimateP, AnimateSpan } from "@/components/common/Animate";

const icons = {
  Award,
  CheckCircle2,
  Heart,
  Shield,
  Sparkles,
  Droplets,
};

export interface ServiceBannerProps {
  title: string;
  description: string;
  icon?: string;
  highlights?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
}

export const ServiceBanner = ({
  title,
  description,
  icon = "Sparkles",
  highlights = ["Professional", "Fast", "Reliable"],
  ctaText = "Get Started",
  onCtaClick,
}: ServiceBannerProps) => {
  const IconComponent = icons[icon];
  return (
    <div className="relative w-full min-h-[400px] overflow-hidden bg-gradient-to-br from-primary via-blue-800 to-purple-900 dark:bg-none ">
      {/* Animated Background Gradient */}
      <AnimateDiv
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating Icon Background */}
      <AnimateDiv
        className="absolute -top-20 -right-20 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <IconComponent size={300} className="text-white" />
      </AnimateDiv>

      <AnimateDiv
        className="absolute -bottom-20 -left-20 opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Shield size={300} className="text-blue-300" />
      </AnimateDiv>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <AnimateDiv
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Icon Badge */}
            <AnimateDiv
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-fit"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl flex items-center justify-center border border-blue-300/30 backdrop-blur-sm">
                <IconComponent size={32} className="text-cyan-300" />
              </div>
            </AnimateDiv>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight">
              <AnimateSpan
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block"
              >
                {title}
              </AnimateSpan>
            </h1>

            {/* Description */}
            <AnimateP
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-blue-100 leading-relaxed max-w-xl"
            >
              {description}
            </AnimateP>

            {/* Highlights */}
            <AnimateDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {highlights.map((highlight, idx) => (
                <AnimateDiv
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-sm font-semibold text-white">
                    {highlight}
                  </span>
                </AnimateDiv>
              ))}
            </AnimateDiv>

            {/* CTA Button */}
            <AnimateDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-4"
            >
              <Link
                href={Routes.BOOKING}
                className="relative inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 group overflow-hidden"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  {ctaText}
                  <AnimateSpan
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRightIcon className="w-6 h-6" />
                  </AnimateSpan>
                </span>
              </Link>
            </AnimateDiv>
          </AnimateDiv>

          {/* Right Side - Feature Cards */}
          <AnimateDiv
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96"
          >
            {/* Feature Card 1 */}
            <AnimateDiv
              animate={{
                y: [0, -15, 0],
                rotateZ: [0, 2, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 left-0 w-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center">
                  <Award size={24} className="text-blue-300" />
                </div>
                <h3 className="text-white font-bold">Expert Team</h3>
              </div>
              <p className="text-blue-100 text-sm">
                Highly trained and certified professionals with years of
                experience
              </p>
            </AnimateDiv>

            {/* Feature Card 2 */}
            <AnimateDiv
              animate={{
                y: [0, 15, 0],
                rotateZ: [0, -2, 0],
              }}
              transition={{ duration: 4, delay: 0.5, repeat: Infinity }}
              className="absolute bottom-0 right-0 w-72 bg-gradient-to-br from-purple-400/20 to-pink-400/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center">
                  <Zap size={24} className="text-purple-300" />
                </div>
                <h3 className="text-white font-bold">Quick Service</h3>
              </div>
              <p className="text-purple-100 text-sm">
                Fast and efficient service without compromising on quality
              </p>
            </AnimateDiv>
          </AnimateDiv>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <AnimateDiv
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
};
