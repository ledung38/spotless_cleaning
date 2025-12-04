"use client";

import React from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  Sparkles,
  Users,
  Clock,
  Shield,
  Leaf,
  Award,
  Zap,
} from "lucide-react";
import { TickIcon } from "@/components/icons";

const CounterStat = ({
  number,
  suffix,
  label,
  delay,
}: {
  number: number;
  suffix: string;
  label: string;
  delay: number;
}) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = number;
    const duration = 2;
    const increment = end / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.div className="text-3xl sm:text-4xl font-black text-white drop-shadow-lg">
        {count}
        <span className="text-xl sm:text-2xl ml-1">{suffix}</span>
      </motion.div>
      <p className="text-xs sm:text-sm text-white/90 font-semibold mt-2 drop-shadow-md">
        {label}
      </p>
    </motion.div>
  );
};

const FeatureItem = ({
  title,
  description,
  delay,
}: {
  title: string;
  description: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex items-start gap-4 group"
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="flex-shrink-0 mt-1"
      >
        <div className="flex items-center justify-center group-hover:scale-110 transition-all duration-300">
          <TickIcon className="size-6 shrink-0 " />
        </div>
      </motion.div>
      <div className="flex-1">
        <h4 className="text-base sm:text-lg font-bold text-foreground mb-1 group-hover:text-primary">
          {title}
        </h4>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const WhyChooseUs = () => {
  const features = [
    {
      title: "Professional Team",
      description:
        "Trained & certified cleaning experts with years of industry experience ensuring exceptional results.",
    },
    {
      title: "Eco-Friendly Solutions",
      description:
        "Safe, environmentally sustainable products that protect your family and the planet.",
    },
    {
      title: "On-Time Service",
      description:
        "Punctual scheduling with flexible booking options to fit your busy lifestyle.",
    },
    {
      title: "Quality Guaranteed",
      description:
        "100% satisfaction guarantee with thorough inspections and meticulous attention to detail.",
    },
    {
      title: "Customer Support",
      description:
        "24/7 dedicated support team ready to address your concerns and scheduling changes.",
    },
    {
      title: "Fast & Efficient",
      description:
        "Advanced cleaning techniques and equipment ensure fast service without compromising quality.",
    },
  ];

  const stats = [
    { number: 2700, suffix: "+", label: "Happy Clients" },
    { number: 100, suffix: "%", label: "Satisfaction Rate" },
    { number: 99, suffix: "%", label: "On-Time Delivery" },
    { number: 2800, suffix: "+", label: "Services Completed" },
  ];

  return (
    <div className="relative mb-40">
      <div className="relative w-full overflow-hidden bg-white py-16 sm:py-24 lg:py-32 !pb-24">
        {/* <div className="bg-[url('/bg_layer.webp')] bg-repeat w-64 h-64 absolute"></div> */}
        <div className="absolute inset-0 bg-[url('/bg_layer.webp')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          {/* Header */}
          {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 sm:mb-6"
          >
            Why choose us?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Discover why thousands of customers trust us for their professional
            cleaning needs
          </motion.p>
        </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-block">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-blue-400/20 border border-primary/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
              >
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Why Choose N&T Spotless
                </span>
              </motion.span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-foreground leading-tight mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="block"
              >
                Professional Cleaning
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
              >
                You Can Trust
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed"
            >
              {`Experience premium cleaning services with our dedicated team.
              We're committed to transforming your space into a spotless
              sanctuary with professional expertise and attention to detail.`}
            </motion.p>
          </motion.div>

          {/* Features Grid - 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20 max-sm:gap-4">
            {/* Left Column - Features List */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {features.slice(0, 3).map((feature, idx) => (
                <FeatureItem
                  key={idx}
                  title={feature.title}
                  description={feature.description}
                  delay={idx * 0.1}
                />
              ))}
            </motion.div>

            {/* Right Column - Features List */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {features.slice(3, 6).map((feature, idx) => (
                <FeatureItem
                  key={idx + 3}
                  title={feature.title}
                  description={feature.description}
                  delay={idx * 0.1}
                />
              ))}
            </motion.div>
          </div>

          {/* CTA Section */}
          {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg w-full sm:w-auto"
            >
              Get Your Free Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all duration-300 text-base sm:text-lg w-full sm:w-auto"
            >
              Schedule Service
            </motion.button>
          </div>
        </motion.div> */}
        </div>
      </div>
      {/* Stats Section with Background Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute left-1/2 bottom-0 transform w-[calc(100vw-32px)] sm:w-3/5 sm:min-w-[800px]  -translate-x-1/2 translate-y-1/2  rounded-3xl overflow-hidden  "
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&h=400&fit=crop')",
            filter: "brightness(0.6) contrast(1.1)",
          }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-blue-600/60 to-primary/70" />

        {/* Content */}
        <div className="relative z-10 px-6 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8"
          >
            {stats.map((stat, idx) => (
              <CounterStat
                key={idx}
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
                delay={0.1 * idx}
              />
            ))}
          </motion.div>
        </div>

        {/* Stats Icons Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute top-8 left-8 text-white/40">
            <Users size={48} />
          </div>
          <div className="absolute top-12 right-12 text-white/40">
            <Award size={48} />
          </div>
          <div className="absolute bottom-8 left-1/4 text-white/40">
            <Clock size={48} />
          </div>
          <div className="absolute bottom-12 right-20 text-white/40">
            <Sparkles size={48} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
