"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

const HomeHero = () => {
  const containerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-15"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 right-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">
                Leading Cleaning Service
              </span>
            </motion.div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gradient-primary"
          >
            Professional Cleaning Service
            <br />
            <span className="text-primary">in Sydney</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Ensure absolute cleanliness for your space. We deliver professional,
            fast and reliable cleaning services for homes and businesses. Let
            your space shine bright and clean.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="#services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <motion.a
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(10, 132, 255, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              href="#services"
              className="px-8 py-4 bg-foreground/5 text-foreground rounded-lg font-semibold border border-border hover:border-primary/50 transition-all"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            variants={floatingVariants}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-16 max-w-4xl mx-auto"
          >
            {[
              { label: "Happy Customers", value: "5000+" },
              { label: "Years Experience", value: "10+" },
              { label: "Quality Service", value: "24/7" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-4 md:p-6 rounded-xl bg-card border border-border/50 backdrop-blur-sm"
              >
                <motion.div
                  variants={pulseVariants}
                  animate="animate"
                  className="text-2xl md:text-3xl font-bold text-primary mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm text-foreground/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HomeHero;
