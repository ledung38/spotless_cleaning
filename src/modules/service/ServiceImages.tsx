"use client";
import React from "react";
import { motion } from "motion/react";

export const ServiceImages = () => {
  return (
    <div className="relative">
      <div className="relative w-full overflow-hidden bg-white py-16 sm:py-24 lg:py-24 !pb-24">
        {/* <div className="bg-[url('/bg_layer.webp')] bg-repeat w-64 h-64 absolute"></div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-foreground leading-tight mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
              >
                Cleaning Services Gallery
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed"
            >
              {`Discover a variety of professional cleaning services tailored to meet your needs. Browse through our portfolio to see how we make your space shine!`}
            </motion.p>
          </motion.div>
          {/* images grid  and animation 4 cols and 2 rows */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((image) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: image * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden"
              >
                <img
                  src={`/about.png`}
                  alt={`Image ${image}`}
                  className="w-full h-[200px] object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
