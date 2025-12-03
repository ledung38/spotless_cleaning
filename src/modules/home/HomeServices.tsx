"use client";

import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Droplets,
  UtensilsCrossed,
  Wind,
  Briefcase,
} from "lucide-react";

const HomeServices = () => {
  const services = [
    {
      icon: Home,
      title: "End of Lease Cleaning",
      description:
        "Professional end of lease cleaning services to ensure you get your full deposit back.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Droplets,
      title: "Regular Cleaning",
      description:
        "Scheduled cleaning services to keep your space clean and fresh every week or month.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Wind,
      title: "Deep Cleaning",
      description:
        "Comprehensive deep cleaning that tackles every corner and surface thoroughly.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurant Cleaning",
      description:
        "Specialized cleaning services for restaurants, meeting health and safety standards.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Building2,
      title: "Airbnb Cleaning",
      description:
        "Quick turnaround cleaning services for Airbnb properties between guest stays.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Briefcase,
      title: "Office Cleaning",
      description:
        "Professional office cleaning to maintain a clean and productive work environment.",
      color: "from-red-500 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="services"
      className="relative w-full py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </motion.h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive cleaning solutions tailored to meet your needs
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 text-white`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/60 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* CTA link */}
                  <motion.a
                    whileHover={{ x: 4 }}
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                  >
                    Learn more
                    <span>→</span>
                  </motion.a>
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
