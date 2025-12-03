"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Users } from "lucide-react";

const HomeFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast & Professional",
      description:
        "Quick turnaround times without compromising on quality or attention to detail.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description:
        "Every service is thoroughly inspected to ensure the highest cleaning standards.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description:
        "Our trained professionals bring years of expertise to every cleaning job.",
    },
    {
      icon: Shield,
      title: "Safe & Reliable",
      description:
        "We use eco-friendly products that are safe for families and the environment.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-card/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Spotless Cleaning?
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            We're committed to delivering excellence in every service
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="flex gap-4 group"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white mt-1"
                >
                  <Icon className="w-6 h-6" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFeatures;
