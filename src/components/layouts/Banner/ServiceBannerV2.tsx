"use client";

import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface ServiceBannerV2Props {
  title: string;
  description: string;
  icon?: React.ComponentType<any>;
  highlights?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
  images?: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const ServiceBannerV2 = ({
  title,
  description,
  icon: Icon = Sparkles,
  highlights = ["Professional", "Fast", "Reliable"],
  ctaText = "Get Started",
  onCtaClick,
  images = [
    "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=600&h=600&fit=crop",
  ],
  autoPlay = true,
  autoPlayInterval = 5000,
}: ServiceBannerV2Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full min-h-[480px] lg:min-h-[520px] overflow-hidden bg-gradient-to-br from-primary/5 via-blue-50/30 to-accent/10">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(10, 132, 255, 0.08) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(10, 132, 255, 0.06) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(10, 132, 255, 0.08) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute -top-32 -right-32 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Icon size={400} className="text-primary" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Icon Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-fit"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/15 to-blue-300/10 rounded-2xl flex items-center justify-center border border-primary/20 backdrop-blur-sm">
                <Icon size={32} className="text-primary" />
              </div>
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-black text-foreground leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block"
              >
                {title}
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              {description}
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                  className="flex items-center gap-2 bg-primary/8 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 hover:bg-primary/12 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-semibold text-foreground">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
              <button
                onClick={onCtaClick}
                className="relative px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group overflow-hidden"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  {ctaText}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative h-96 lg:h-[450px] rounded-3xl overflow-hidden"
          >
            {/* Carousel Container */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-blue-100/20 border border-primary/10">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`Slide ${currentImageIndex + 1}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.5 },
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-4 z-20 rounded-3xl">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-white transition-all duration-300 shadow-lg"
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-white transition-all duration-300 shadow-lg"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 right-6 z-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-primary font-semibold text-sm shadow-lg"
              >
                {currentImageIndex + 1} / {images.length}
              </motion.div>
            </div>

            {/* Dot Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {images.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentImageIndex ? 1 : -1);
                    setCurrentImageIndex(idx);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentImageIndex
                      ? "bg-white w-8 h-2"
                      : "bg-white/50 w-2 h-2 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
};
