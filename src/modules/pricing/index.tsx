"use client";

import { CompactApp } from "@/components/common/Compact";
import { TextGradient } from "@/components/common/TextGradient";
import { TickIcon } from "@/components/icons";
import { useAppRouter } from "@/hooks/useAppRouter";
import { Routes } from "@/lib/enum/routes";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Check,
  Droplets,
  Home,
  Sparkles,
  UtensilsCrossed,
  Wind,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { title } from "process";
import React, { useState } from "react";

interface PricingFeature {
  icon?: React.ComponentType<any>;
  text: string;
  highlight?: boolean;
}

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: PricingFeature[];
  icon: React.ComponentType<any>;
  color: string;
  delay: number;
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  icon: Icon,
  color,
  delay,
  isPopular = false,
}) => {
  //   const [isHovered, setIsHovered] = useState(false);
  const router = useAppRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      //   transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      //   onMouseEnter={() => setIsHovered(true)}
      //   onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -12, transition: { duration: 0.01 } }}
      className={`relative group  rounded-3xl overflow-visible transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 ${
        isPopular ? "lg:scale-105 shadow-primary/30" : ""
      }`}
    >
      {/* Card Background */}
      <div
        className={`relative h-full  p-8 lg:p-10 rounded-3xl backdrop-blur-xl transition-all duration-300 ${
          isPopular
            ? "bg-gradient-to-br from-primary/20 via-primary/10 to-blue-500/5 border-2 border-primary/50"
            : "bg-gradient-to-br from-card/80 to-card/40 border border-border/50 group-hover:border-primary/50"
        }`}
      >
        {/* Popular Badge */}
        {isPopular && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
            className="absolute -top-4 left-1/2 -translate-x-1/2 "
          >
            <div className="bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-primary/30 flex items-center gap-2 relative z-50">
              <Sparkles size={16} />
              Most Popular
            </div>
          </motion.div>
        )}

        {/* Shine effect */}
        {/* <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-20"
          initial={{ x: "-100%" }}
          animate={isHovered ? { x: "100%" } : { x: "-100%" }}
          transition={{ duration: 0.6 }}
        /> */}

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Header */}
          <div className="mb-6">
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 12, scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/30 transition-all`}
            >
              <Icon size={28} />
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors leading-relaxed">
              {description}
            </p>
          </div>

          {/* Price */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.1 }}
            viewport={{ once: true }}
            className="mb-8 pb-8 border-b border-border/30 group-hover:border-primary/30 transition-colors"
          >
            {price === 0 ? (
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                  price
                </span>
                <TextGradient
                  className={"text-4xl lg:text-5xl font-black text-left"}
                >
                  Contact Us
                </TextGradient>
              </div>
            ) : (
              <>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                    from
                  </span>
                  <span className="text-5xl lg:text-6xl font-black text-primary">
                    ${price}
                  </span>
                </div>
                <p className="text-xs text-foreground/50">Per service</p>
              </>
            )}
          </motion.div>

          {/* Features List */}
          <motion.ul
            className="space-y-3 mb-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: delay + 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.3 },
                  },
                }}
                className={`flex items-start gap-3 text-sm ${
                  feature.highlight
                    ? "font-semibold text-primary"
                    : "text-foreground/70 group-hover:text-foreground/90"
                } transition-colors`}
              >
                <Check
                  size={18}
                  className={`mt-0.5 flex-shrink-0 ${
                    feature.highlight ? "text-primary" : "text-primary/60"
                  }`}
                />

                <span>{feature.text}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-4 px-6 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 group/btn overflow-hidden relative ${
              isPopular
                ? "bg-gradient-to-r from-primary to-blue-600 text-primary-foreground shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50"
                : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 hover:border-primary/50"
            }`}
            onClick={() => router.push(Routes.BOOKING)}
          >
            <span className="relative z-10 flex items-center gap-2">
              QUOTE ME
              <motion.span
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                className="group-hover/btn:translate-x-1 transition-transform"
              >
                <ArrowRight size={18} />
              </motion.span>
            </span>
          </motion.button>
        </div>

        {/* Background gradient blob */}
        <motion.div
          className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl pointer-events-none ${
            isPopular
              ? "bg-gradient-to-br from-primary/40 to-blue-600/20"
              : "bg-gradient-to-br from-primary/20 to-primary/10"
          }`}
          //   animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

const FloatingShape: React.FC<{
  delay: number;
  position: string;
  size: number;
  opacity: number;
}> = ({ delay, position, size, opacity }) => {
  return (
    <motion.div
      className={`absolute ${position} rounded-full bg-primary/10 blur-3xl pointer-events-none`}
      style={{
        width: size,
        height: size,
        opacity,
      }}
      animate={{
        y: [0, -50, 0],
        x: [0, 30, 0],
      }}
      transition={{
        duration: 8 + delay,
        delay: delay * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const ComparisonRow: React.FC<{
  label: string;
  items: (boolean | string)[];
}> = ({ label, items }) => {
  return (
    <motion.tr
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-b border-border/30 hover:bg-primary/5 transition-colors"
    >
      <td className="py-4 px-6 font-semibold text-foreground">{label}</td>
      {items.map((item, idx) => (
        <td key={idx} className="py-4 px-6 text-center">
          {typeof item === "boolean" ? (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className={`w-5 h-5 rounded-full flex items-center justify-center mx-auto ${
                item ? "" : "bg-muted border-2 border-border"
              }`}
            >
              {item && <TickIcon className="text-primary size-6" />}
            </motion.div>
          ) : (
            <span className="text-sm text-foreground/70">{item}</span>
          )}
        </td>
      ))}
    </motion.tr>
  );
};

export const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      title: "End of Lease Cleaning",
      price: 320,
      description: "Perfect for bond cleans and move in/out cleaning",
      icon: Home,
      color: "from-blue-500 to-cyan-500",
      features: [
        { text: "Move-in/out ready certification" },
        { text: "Bond inspection checklist included" },
        { text: "Professional team with experience" },
        { text: "Complete satisfaction warranty" },
        { text: "We guarantee re-cleaning at no extra cost", highlight: true },
      ],
    },

    {
      title: "Regular Cleaning",
      price: 100,
      description: "Same cleaners every time with equipment provided",
      icon: Sparkles,
      color: "from-green-500 to-emerald-500",
      isPopular: true,
      features: [
        { text: "Consistent cleaner assignment" },
        { text: "All supplies and equipment included" },
        { text: "Flexible scheduling options" },
        { text: "Free cancellation 24 hours prior" },
        { text: "20% savings on weekly plans", highlight: true },
        { text: "15% savings on fortnightly plans", highlight: true },
        { text: "Priority booking advantage", highlight: true },
      ],
    },
    {
      title: "Deep Cleaning",
      price: 200,
      description: "Ideal for spring cleans and pre-inspection cleans",
      icon: Wind,
      color: "from-purple-500 to-pink-500",
      features: [
        { text: "Comprehensive surface disinfection" },
        { text: "Baseboards and ceiling cleaning" },
        { text: "Appliance interior detailed cleaning" },
        { text: "Full property inspection included" },
        { text: "Quality assurance guarantee", highlight: true },
      ],
    },
    {
      title: "Restaurant Cleaning",
      price: 0,
      description: "Specialized cleaning for food service establishments",
      icon: UtensilsCrossed,
      color: "from-yellow-500 to-orange-500",
      features: [
        { text: "Comprehensive surface disinfection" },
        { text: "Baseboards and ceiling cleaning" },
        { text: "Appliance interior detailed cleaning" },
        { text: "Full property inspection included" },
        { text: "Quality assurance guarantee", highlight: true },
      ],
    },
    {
      title: "Airbnb Cleaning",
      price: 80,
      description: "Quick turnaround between guest stays",
      icon: Building2,
      color: "from-indigo-500 to-blue-500",
      features: [
        { text: "Express 2-4 hour turnaround" },
        { text: "Guest-ready property presentation" },
        { text: "24/7 on-demand availability" },
        { text: "Linen change and refresh included" },
        { text: "Last-minute emergency support", highlight: true },
      ],
    },
    {
      title: "Mould Cleaning",
      price: 220,
      description: "Remove mould from your home",
      icon: Droplets,
      color: "from-green-500 to-emerald-500",
      features: [
        { text: "Comprehensive surface disinfection" },
        { text: "Baseboards and ceiling cleaning" },
        { text: "Appliance interior detailed cleaning" },
        { text: "Full property inspection included" },
        { text: "Quality assurance guarantee", highlight: true },
      ],
    },
  ];

  return (
    <section className="relative w-full py-10 sm:py-16 overflow-hidden bg-gradient-to-b from-background via-primary/2 to-background">
      {/* Animated background shapes */}
      {/* <FloatingShape
        delay={0}
        position="top-20 -right-40 z-9999"
        size={400}
        opacity={0.08}
      />
      <FloatingShape
        delay={2}
        position="bottom-40 -left-32"
        size={350}
        opacity={0.06}
      />
      <FloatingShape
        delay={4}
        position="top-1/2 right-1/4"
        size={300}
        opacity={0.05}
      /> */}

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-primary/5 bg-[size:50px_50px] [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6 hover:bg-primary/15 transition-colors duration-300"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-primary">
              Pricing options
            </span>
          </motion.div> */}

          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight">
            Transparent Pricing Plans
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {`Choose the cleaning service that's right for you and get discounts
            when you book a regular cleaning service.`}
            <motion.span
              className="font-semibold text-primary"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Join 2,000+ happy customers!
            </motion.span>
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20"
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              icon={plan.icon}
              color={plan.color}
              delay={index * 0.1}
              isPopular={plan.isPopular}
            />
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Service Comparison
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-border/50 bg-gradient-to-b from-card/70 to-card/30 backdrop-blur-sm shadow-xl shadow-primary/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-primary/5">
                  <th className="py-4 px-6 text-left font-bold text-foreground">
                    Features
                  </th>
                  {[
                    "End of Lease",
                    "Deep Cleaning",
                    "Regular",
                    "Mould",
                    "Restaurant",
                    "Airbnb",
                  ].map((name, idx) => (
                    <th
                      key={idx}
                      className="py-4 px-6 text-center font-bold text-foreground"
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <ComparisonRow
                  label="Online Booking"
                  items={[true, true, true, true, true, true]}
                />
                <ComparisonRow
                  label="Customizable Service"
                  items={[true, true, true, true, true, true]}
                />
                <ComparisonRow
                  label="Guaranteed Results"
                  items={[true, true, true, true, true, true]}
                />
                <ComparisonRow
                  label="Free Cancellation 24hrs"
                  items={[true, true, true, true, true, true]}
                />
                <ComparisonRow
                  label="Consistent Cleaners"
                  items={[false, false, true, false, false, false]}
                />
                <ComparisonRow
                  label="All Supplies Included"
                  items={[false, true, true, true, true, true]}
                />
                <ComparisonRow
                  label="Savings/Discounts"
                  items={[false, false, true, true, false, true]}
                />
                <ComparisonRow
                  label="Express Service (2-4hrs)"
                  items={[false, false, false, false, false, true]}
                />
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center bg-gradient-to-r from-primary/5 via-primary/3 to-primary/5 border border-primary/20 rounded-3xl p-8 lg:p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Ready to get started?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Pick the perfect cleaning plan for your needs and experience the N&T
            Spotless Cleaning difference today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 group overflow-hidden inline-flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Your Free Quote
              <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <CompactApp
            title="Ready to get started?"
            subtitle="Pick the perfect cleaning plan for your needs and experience the N&T
            Spotless Cleaning difference today."
            textButton="Get Your Free Quote"
            className="rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
