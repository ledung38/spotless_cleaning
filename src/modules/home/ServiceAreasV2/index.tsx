"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const HomeAreas = () => {
  const areas = [
    "Sydney CBD",
    "Inner West",
    "Eastern Suburbs",
    "North Shore",
    "Western Sydney",
    "Parramatta",
    "Manly",
    "Bondi",
    "Coogee",
    "Newtown",
    "Paddington",
    "Surry Hills",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-card/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            We proudly serve all of Sydney and surrounding areas
          </p>
        </motion.div>

        {/* Areas grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              className="p-4 rounded-xl bg-background border border-border/50 hover:border-primary/50 flex items-center gap-3 transition-all duration-300 cursor-pointer group"
            >
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-foreground/70 group-hover:text-foreground transition-colors">
                {area}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Don't see your area listed? Contact us to discuss custom service
            arrangements for your location.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAreas;
