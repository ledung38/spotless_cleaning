"use client";

import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";

const HomeCTA = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.15, 1],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ready for a Cleaner Space?
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact us today for a free consultation and discover why thousands
            of Sydney residents trust Spotless Cleaning
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(10, 132, 255, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              href="mailto:info@spotlesscleaning.com"
              className="px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <Calendar className="w-5 h-5" />
              Book Now
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+61123456789"
              className="px-8 py-4 bg-foreground/5 text-foreground rounded-xl font-semibold border border-border flex items-center gap-2 hover:bg-foreground/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </motion.a>
          </motion.div>

          {/* Trust message */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm text-foreground/50"
          >
            Over 5000+ happy customers trust us
          </motion.p>
        </motion.div>
      </div>

      {/* Floating decorations */}
      <motion.div
        className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-accent rounded-full blur-3xl opacity-10 pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default HomeCTA;
