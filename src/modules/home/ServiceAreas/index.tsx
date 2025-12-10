"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically load Google Map to avoid SSR issues
const GoogleMapComponent = dynamic(() => import("./GoogleMap"), { ssr: false });

const ServiceAreaCard = ({
  area,
  index,
}: {
  area: {
    name: string;
    description: string;
    coverage: string;
    coordinates: [number, number];
  };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-blue-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <MapPin className="text-primary w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {area.name}
          </h3>
          <p className="text-sm text-primary font-semibold mt-1">
            {area.coverage}
          </p>
        </div>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {area.description}
      </p>
    </motion.div>
  );
};

const ContactInfo = ({
  icon: Icon,
  label,
  value,
  delay,
}: {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 group hover:bg-primary/5 transition-colors duration-300"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-blue-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-primary w-6 h-6" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-muted-foreground font-semibold">{label}</p>
        <p className="text-foreground font-bold">{value}</p>
      </div>
    </motion.div>
  );
};

export const ServiceAreas = () => {
  const serviceAreas = [
    {
      name: "Downtown District",
      description:
        "Complete coverage of the downtown area with fast response times and premium service.",
      coverage: "5km radius",
      coordinates: [10.7769, 106.7009] as [number, number],
    },
    {
      name: "Residential Zone",
      description:
        "Specialized residential cleaning for homes and apartments in our service area.",
      coverage: "8km radius",
      coordinates: [10.8109, 106.6724] as [number, number],
    },
    {
      name: "Business District",
      description:
        "Professional office cleaning and commercial property maintenance services.",
      coverage: "10km radius",
      coordinates: [10.7614, 106.6816] as [number, number],
    },
    {
      name: "Suburban Areas",
      description:
        "Extended coverage for suburban neighborhoods with same-day scheduling available.",
      coverage: "15km radius",
      coordinates: [10.8231, 106.7373] as [number, number],
    },
    {
      name: "Industrial Zone",
      description:
        "Specialized cleaning services for warehouses and industrial facilities.",
      coverage: "12km radius",
      coordinates: [10.7949, 106.6628] as [number, number],
    },
    {
      name: "Retail & Hospitality",
      description:
        "Expert cleaning solutions for shops, restaurants, and hospitality venues.",
      coverage: "7km radius",
      coordinates: [10.7938, 106.7043] as [number, number],
    },
  ];

  return (
    <div className="relative w-full bg-white overflow-hidden py-16 sm:py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
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
            Service Areas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We proudly serve multiple districts and neighborhoods with reliable,
            professional cleaning services. Find your area below or contact us
            for extended coverage.
          </motion.p>
        </motion.div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Service Areas Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {serviceAreas.map((area, idx) => (
              <ServiceAreaCard key={idx} area={area} index={idx} />
            ))}
          </motion.div>

          {/* Right Side - Map & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-96 lg:h-[500px] border border-gray-200">
              <GoogleMapComponent serviceAreas={serviceAreas} />
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Us
              </h3>

              <ContactInfo
                icon={Phone}
                label="Phone"
                value="0968686868"
                delay={0.1}
              />

              <ContactInfo
                icon={Mail}
                label="Email"
                value="info@ntspotless.com"
                delay={0.2}
              />

              <ContactInfo
                icon={Clock}
                label="Hours"
                value="Mon-Fri: 7AM - 7PM, Sat-Sun: 8AM - 6PM"
                delay={0.3}
              />
            </div>

            {/* Service Extension CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-blue-400/10 border border-primary/20 rounded-2xl p-6 text-center"
            >
              <p className="text-sm text-muted-foreground mb-4">
                Don't see your area listed?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Request Service Extension
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
