"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const HomeReviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "Spotless Cleaning did an amazing job with our end of lease cleaning. They were professional, thorough, and we got our full deposit back!",
      rating: 5,
      service: "End of Lease Cleaning",
    },
    {
      name: "Michael Chen",
      role: "Restaurant Owner",
      content:
        "Exceptional service for our restaurant. They understand health standards and deliver immaculate results every time.",
      rating: 5,
      service: "Restaurant Cleaning",
    },
    {
      name: "Emma Wilson",
      role: "Office Manager",
      content:
        "Our office has never looked better. The team is reliable, punctual, and professional. Highly recommended!",
      rating: 5,
      service: "Office Cleaning",
    },
    {
      name: "David Martinez",
      role: "Airbnb Host",
      content:
        "Quick turnaround and impeccable cleaning between guests. My customers always comment on how clean the property is.",
      rating: 5,
      service: "Airbnb Cleaning",
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
    <section className="relative w-full py-24 md:py-32 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
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
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Real feedback from satisfied clients across Sydney
          </p>
        </motion.div>

        {/* Reviews grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review content */}
              <p className="text-foreground/70 mb-4 leading-relaxed italic">
                "{review.content}"
              </p>

              {/* Author info */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-foreground/60">{review.role}</p>
                <p className="text-sm text-primary font-medium mt-2">
                  {review.service}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-foreground/60">
            <span className="text-3xl font-bold text-primary">98%</span>{" "}
            Customer Satisfaction Rate
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeReviews;
