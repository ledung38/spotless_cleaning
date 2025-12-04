"use client";

import { motion } from "motion/react";
import { Sparkles, Zap, Shield } from "lucide-react";
import styles from "./Banner.module.css";
import { ServiceBanner } from "./ServiceBanner";
import { ServiceBannerV2 } from "./ServiceBannerV2";

export { ServiceBanner, ServiceBannerV2 };

// Floating Icon Component
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
    <motion.div
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
      <div className="text-blue-300/40 opacity-60">
        <Icon size={64} className="drop-shadow-lg" />
      </div>
    </motion.div>
  );
};

// Animated Text Component
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + idx * 0.1,
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

// Feature Badge Component
const FeatureBadge = ({
  icon: Icon,
  text,
  delay,
}: {
  icon: React.ComponentType<any>;
  text: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{ scale: 1.1, translateY: -5 }}
      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white font-medium hover:bg-white/20 transition-all duration-300 cursor-pointer"
    >
      <Icon size={18} className="text-blue-300" />
      <span>{text}</span>
    </motion.div>
  );
};

// Main Banner Component
export const Banner = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-primary via-blue-800 to-purple-900 flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "-10%", left: "-5%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "-10%", right: "-5%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      </div>

      {/* Floating Icons - Scattered Background */}
      <FloatingIcon Icon={Sparkles} delay={0} position="top-20 right-10" />
      <FloatingIcon Icon={Zap} delay={0.5} position="top-40 left-20" />
      <FloatingIcon Icon={Shield} delay={1} position="bottom-32 right-20" />
      <FloatingIcon Icon={Sparkles} delay={1.5} position="bottom-20 left-32" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <div className="text-base font-semibold text-blue-300 mb-4">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  Welcome to Premium Cleaning
                </motion.span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                <AnimatedText delay={0.2}>Your Home Deserves</AnimatedText>
                <AnimatedText delay={0.5}>Spotless Care</AnimatedText>
              </h1>

              <p className="text-lg sm:text-xl text-blue-100 max-w-xl leading-relaxed">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="inline"
                >
                  Professional cleaning services that exceed expectations. From
                  deep cleaning to regular maintenance, we keep your space
                  pristine with premium attention to detail.
                </motion.span>
              </p>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 pt-6">
              <FeatureBadge
                icon={Sparkles}
                text="Professional Team"
                delay={1.0}
              />
              <FeatureBadge icon={Zap} text="Fast Service" delay={1.2} />
              <FeatureBadge
                icon={Shield}
                text="100% Satisfaction"
                delay={1.4}
              />
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="relative px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-primary font-bold rounded-xl text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 group overflow-hidden">
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  <span>Book Now</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </button>

              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
                Learn More
              </button>
            </motion.div>

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20"
            >
              {[
                { number: "5000+", label: "Happy Clients" },
                { number: "12+", label: "Years Experience" },
                { number: "24/7", label: "Customer Support" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-3xl font-black text-cyan-300">
                    {stat.number}
                  </p>
                  <p className="text-sm text-blue-200 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-96 lg:h-full flex items-center justify-center"
          >
            {/* Animated Cards Stack */}
            <div className="relative w-80 h-80">
              {/* Card 1 */}
              <motion.div
                animate={{ rotate: [0, 5, 0], y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-blue-400/40 to-cyan-400/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 flex items-center justify-center"
                style={{ transform: "rotateY(-15deg) rotateX(10deg)" }}
              >
                <div className="text-center">
                  <div className="text-6xl font-black mb-4">✨</div>
                  <h3 className="text-white font-bold text-xl">
                    Deep Cleaning
                  </h3>
                  <p className="text-blue-100 text-sm mt-2">
                    Professional & Thorough
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                animate={{ rotate: [0, -5, 0], y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-purple-400/40 to-pink-400/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 flex items-center justify-center"
                style={{
                  transform:
                    "translate(30px, 30px) rotateY(15deg) rotateX(-10deg)",
                }}
              >
                <div className="text-center">
                  <div className="text-6xl font-black mb-4">🏠</div>
                  <h3 className="text-white font-bold text-xl">
                    Regular Service
                  </h3>
                  <p className="text-purple-100 text-sm mt-2">
                    Maintain Perfection
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-6xl font-black mb-4">🎯</div>
                  <h3 className="text-white font-bold text-xl">
                    Specialized Care
                  </h3>
                  <p className="text-cyan-100 text-sm mt-2">Expert Solutions</p>
                </div>
              </motion.div>

              {/* Floating Orb */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full blur-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-60 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};
