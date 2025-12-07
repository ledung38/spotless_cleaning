"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  Target,
  Heart,
  Zap,
  Shield,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import logo from "@/lib/assets/images/logo.webp";

// ============================================================================
// COMPONENTS
// ============================================================================

const AnimatedCounter = ({
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
    const target = number;
    const duration = 2;
    const incrementPerFrame = target / (duration * 60);
    let current = 0;

    const interval = setInterval(() => {
      current += incrementPerFrame;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center"
    >
      <div className="text-4xl lg:text-5xl font-black text-primary mb-2">
        {count}
        <span className="text-2xl lg:text-3xl ml-1">{suffix}</span>
      </div>
      <p className="text-muted-foreground font-semibold text-sm lg:text-base">
        {label}
      </p>
    </motion.div>
  );
};

const ValueCard = ({
  icon: Icon,
  title,
  description,
  delay,
  colorClass,
}: {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  delay: number;
  colorClass: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -12, scale: 1.02 }}
      className={`group relative h-full overflow-hidden rounded-3xl p-8 border-2 backdrop-blur-sm ${colorClass} transition-all duration-300 cursor-pointer`}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={{
          background:
            "radial-gradient(600px at 50% 50%, rgba(255,255,255, 0.1), transparent 80%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 space-y-4">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.15 }}
          transition={{ duration: 0.8 }}
          className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300"
        >
          <Icon className="w-10 h-10 text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white">{title}</h3>

        {/* Description */}
        <p className="text-white/80 leading-relaxed text-sm">{description}</p>

        {/* Bottom accent */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 40 }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
          viewport={{ once: true }}
          className="h-1 bg-white/40 rounded-full mt-6"
        />
      </div>
    </motion.div>
  );
};

// MAIN COMPONENT
// ============================================================================

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Director",
      image: logo,
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      image: logo,
    },
    {
      name: "Emma Davis",
      role: "Quality Lead",
      image: logo,
    },
  ];

  const processSteps = [
    {
      title: "Consultation",
      description:
        "We understand your specific cleaning needs and preferences through a detailed discussion.",
    },
    {
      title: "Planning",
      description:
        "Our team creates a customized cleaning plan tailored to your property and requirements.",
    },
    {
      title: "Execution",
      description:
        "Professional cleaning with premium products and techniques for exceptional results.",
    },
    {
      title: "Follow-up",
      description:
        "We ensure your complete satisfaction and address any questions or concerns you may have.",
    },
  ];

  return (
    <div className="w-full">
      {/* ========== ABOUT COMPANY SECTION ========== */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-primary/5 to-white ">
        <div className="bg-[url('/about.png')] absolute inset-0" />
        <div className="bg-[rgba(248,248,248,.89)] absolute inset-0" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 leading-tight">
                  Who We Are
                </h2>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Founded with a vision to transform how people experience
                  cleanliness, Spotless Cleaning has been revolutionizing the
                  cleaning industry for over 15 years. What started as a small
                  family business has grown into a trusted partner for thousands
                  of satisfied customers across the region.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  {`We believe that a clean space is more than just
                  aesthetics—it's about creating healthy, happy environments
                  where families and businesses can thrive. Our commitment to
                  excellence, sustainability, and customer satisfaction drives
                  everything we do.`}
                </p>
              </div>

              {/* Stats highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-3 gap-6 p-6 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-blue-100/60"
              >
                <div className="text-center">
                  <div className="text-3xl font-black text-primary mb-2">
                    15+
                  </div>
                  <p className="text-sm text-muted-foreground font-semibold">
                    Years in Business
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary mb-2">
                    10k+
                  </div>
                  <p className="text-sm text-muted-foreground font-semibold">
                    Happy Customers
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary mb-2">
                    98%
                  </div>
                  <p className="text-sm text-muted-foreground font-semibold">
                    Satisfaction
                  </p>
                </div>
              </motion.div>
            </motion.div>
            {/* Right - Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl h-96 lg:h-full min-h-96 shadow-2xl">
                {/* Image placeholder with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-100/30 to-primary/20 flex items-center justify-center border-2 border-primary/30">
                  <div className="text-center space-y-4 h-full">
                    <img
                      src={"/about.png"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Animated decorative elements */}
                <motion.div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full border-2 border-primary/20"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute -bottom-5 -left-5 w-32 h-32 rounded-full border-2 border-primary/15"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== OUR MISSION & CORE VALUES SECTION ========== */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        {/* Split background */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/75 via-blue-600/70 to-cyan-700/75" /> */}

        {/* Animated decorative elements */}
        <motion.div
          className="absolute top-10 right-1/3 w-96 h-96 rounded-full bg-blue-400/15 blur-3xl"
          animate={{ y: [0, -60, 0], x: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full bg-primary/20 blur-3xl"
          animate={{ y: [0, 60, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, delay: 1, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/15 backdrop-primary-md border border-primary/30 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                Our Foundation
              </span>
            </motion.div>
          </motion.div>

          {/* Main Grid - Mission left, Values right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT - MISSION SECTION */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {/* Mission badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2"
              >
                <span className="text-primary text-sm font-bold">
                  Our Mission
                </span>
              </motion.div>

              {/* Main Mission Title */}
              <div>
                <h2 className="text-5xl lg:text-6xl font-black leading-tight">
                  <span className="text-ư">Create Spaces</span>
                  <br />
                  <span className="bg-gradient-to-r from-foreground/40 to-primary bg-clip-text text-transparent">
                    That Inspire
                  </span>
                </h2>
              </div>

              {/* Mission Description */}
              <p className="text-foreground leading-relaxed text-lg max-w-lg">
                We transform homes and offices into spotless sanctuaries where
                cleanliness meets comfort. Your space deserves exceptional care.
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300"
              >
                Book now
              </motion.button>
            </motion.div>

            {/* Core Values - Grid Layout */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6 relative p-4"
            >
              {/* Values header */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2"
              >
                <span className="text-white text-sm font-bold">Our Values</span>
              </motion.div>

              <h3 className="text-4xl font-black text-white">
                Our Core Values
              </h3>

              {/* Values Grid 2x2 */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "Trust",
                    description:
                      "Building lasting relationships through transparency and reliability.",
                  },
                  {
                    title: "Customer Care",
                    description:
                      "Your satisfaction is our mission—we go above and beyond.",
                  },
                  {
                    title: "Quality",
                    description:
                      "Excellence in every task, every time, without compromise.",
                  },
                  {
                    title: "Dedication",
                    description:
                      "Passionate about creating spotless spaces for our clients.",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 + 0.1 * index }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="group relative overflow-hidden rounded-2xl bg-white/15 backdrop-blur-md border-2 border-white/40 hover:border-white/70 p-6 transition-all duration-300"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 space-y-3">
                      <h4 className="text-xl font-bold text-white">
                        {value.title}
                      </h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>

                    {/* Corner accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-12 h-12 bg-white/20 rounded-bl-full"
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Border accent */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -inset-1  rounded-3xl pointer-events-none bg-gradient-to-b from-primary/95 via-primary/90 to-primary/95 -z-1"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== VALUES SECTION ========== */}
      {/* <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-primary/95 via-primary/90 to-primary/95">
        <motion.div
          className="absolute top-0 -right-40 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 -left-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, delay: 1, repeat: Infinity }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-white">
                Core Values
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our core values shape everything we do, from how we treat our
              customers to the quality standards we maintain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <ValueCard
              icon={Heart}
              title="Customer First"
              description="Your satisfaction is our top priority. We listen to your needs and deliver tailored cleaning solutions that exceed expectations."
              delay={0.1}
              colorClass="bg-gradient-to-br from-primary/70 to-blue-500/70 border-primary/60 hover:border-blue-300/80"
            />
            <ValueCard
              icon={Zap}
              title="Excellence"
              description="We maintain the highest standards of quality in every cleaning job, using premium products and proven techniques."
              delay={0.2}
              colorClass="bg-gradient-to-br from-blue-600/70 to-primary/70 border-primary/60 hover:border-blue-300/80"
            />
            <ValueCard
              icon={Shield}
              title="Trust & Safety"
              description="Your home is your sanctuary. We respect your space with eco-friendly products and professional handling of all items."
              delay={0.3}
              colorClass="bg-gradient-to-br from-primary/70 to-indigo-600/70 border-primary/60 hover:border-blue-300/80"
            />
            <ValueCard
              icon={Target}
              title="Reliability"
              description="Consistent, dependable service you can count on. We arrive on time and deliver results every single time."
              delay={0.4}
              colorClass="bg-gradient-to-br from-blue-600/70 to-cyan-600/70 border-primary/60 hover:border-blue-300/80"
            />
          </div>
        </div>
      </section> */}

      {/* ========== OUR PROCESS SECTION ========== */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-primary/10 to-white">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-grid-primary/20 bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)]" />

        {/* Decorative shapes */}
        <motion.div
          className="absolute top-10 right-20 w-40 h-40 rounded-full border-2 border-primary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-32 h-32 rounded-full border-2 border-primary/25"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/40 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                How It Works
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight">
              Our Service Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to final follow-up, we ensure a seamless
              experience tailored to your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative"
              >
                {/* Card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-100/60 rounded-3xl border-2 border-primary/40 group-hover:border-primary/70 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30" />

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Number badge */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center border-2 border-primary/50 mb-6 shadow-lg"
                  >
                    <span className="text-3xl font-black text-white">
                      {index + 1}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.description}
                  </p>

                  {/* Connector line */}
                  {index < 3 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.8, delay: 0.15 * index + 0.2 }}
                      viewport={{ once: true }}
                      className="hidden lg:block absolute -right-5 top-32 w-1 h-24 bg-gradient-to-b from-primary/60 to-transparent origin-top"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TEAM SECTION ========== */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-primary/90 via-primary/85 to-blue-700/90">
        {/* Animated background blobs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary/25 blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, 20, 0] }}
          transition={{ duration: 14, delay: 1, repeat: Infinity }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-white">
                Meet The Team
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Expert Professionals
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our dedicated team of cleaning experts is passionate about
              delivering excellence and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl h-80 mb-6 w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-indigo-600/30" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay with info on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6"
                  >
                    <div className="text-white">
                      <p className="text-sm text-white/80 mb-2">
                        Dedicated Expert
                      </p>
                      <p className="text-sm leading-relaxed">
                        Passionate about creating spotless, healthy spaces for
                        our valued clients.
                      </p>
                    </div>
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-100/70 font-semibold text-sm">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      {/* <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-primary/8 to-white">
        <motion.div
          className="absolute top-20 -right-32 w-80 h-80 rounded-full border-2 border-primary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full border-2 border-primary/25"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/40 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                Why Choose Us
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight">
              Excellence in Every Detail
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover why thousands of customers trust us with their cleaning
              needs and experience the difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Professional Team",
                desc: "Professional, certified cleaning experts with years of experience",
              },
              {
                title: "Eco-Friendly",
                desc: "Eco-friendly, safe cleaning products for your family and pets",
              },
              {
                title: "Flexible Scheduling",
                desc: "Flexible scheduling to fit your lifestyle and preferences",
              },
              {
                title: "Satisfaction Guarantee",
                desc: "100% satisfaction guarantee or we'll make it right",
              },
              {
                title: "Transparent Pricing",
                desc: "Transparent pricing with no hidden fees or surprises",
              },
              {
                title: "Advanced Equipment",
                desc: "State-of-the-art cleaning equipment for superior results",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative p-6 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-blue-100/60 hover:border-primary/60 hover:bg-gradient-to-br hover:from-primary/15 hover:to-blue-200/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-primary/50">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600">
        {/* Animated background blobs */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255, 0.1), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255, 0.1), transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Ready for Spotless Perfection?
              </h2>
              <p className="text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
                Let our expert team transform your space into a spotless haven.
                Contact us today to schedule your cleaning service and
                experience the Spotless Cleaning difference.
              </p>
            </div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.button
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-blue-600/40 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Book Now
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
