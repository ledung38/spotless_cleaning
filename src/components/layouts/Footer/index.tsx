"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { NextAvatar } from "@/components/ui";
import { Routes } from "@/lib/enum/routes";
import logo from "@/lib/assets/images/logo.webp";
import { TikTokIcon } from "@/components/icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/#services" },
        { label: "Contact", href: "/#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "End of Lease Cleaning", href: "/#services" },
        { label: "Regular Cleaning", href: "/#services" },
        { label: "Deep Cleaning", href: "/#services" },
        { label: "Office Cleaning", href: "/#services" },
        { label: "Restaurant Cleaning", href: "/#services" },
        { label: "Airbnb Cleaning", href: "/#services" },
      ],
    },
    {
      title: "Contact Info",
      links: [
        { label: "+61 1 2345 6789", href: "tel:+61123456789", icon: Phone },
        {
          label: "info@spotlesscleaning.com",
          href: "mailto:info@spotlesscleaning.com",
          icon: Mail,
        },
        { label: "Sydney, Australia", href: "#", icon: MapPin },
      ],
    },
  ];

  const socials = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: TikTokIcon, href: "https://linkedin.com", label: "TikTok" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-primary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -bottom-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 !pb-5">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {/* Brand section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Link
                  href={Routes.HOME}
                  className="flex items-center gap-3 flex-shrink-0 group"
                >
                  <div className="relative transition-all duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-secondary rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
                    <NextAvatar src={logo} alt="logo" className="relative" />
                  </div>
                  <div className="hidden sm:flex flex-col">
                    <span className="text-lg font-black text-white leading-tight tracking-tight">
                      N&T Spotless <br />
                      Professional Cleaning
                    </span>
                  </div>
                </Link>
              </div>

              <p className="text-white text-sm leading-relaxed mb-6">
                Professional cleaning services you can trust. Making Sydney
                cleaner, one space at a time.
              </p>
              {/* Social links */}
              <div className="flex gap-4">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -4 }}
                      className="w-9 h-9 rounded-lg  bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-colors"
                      title={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Footer links */}
            {footerLinks.map((column, columnIndex) => (
              <motion.div key={columnIndex} variants={itemVariants}>
                <h3 className="font-semibold text-white mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => {
                    const Icon = link.icon;
                    return (
                      <li key={linkIndex}>
                        <motion.a
                          href={link.href}
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          whileHover={{ x: 4 }}
                          className="text-white hover:text-primary transition-colors text-sm flex items-center gap-2 cursor-pointer"
                        >
                          {Icon && <Icon className="w-4 h-4" />}
                          {link.label}
                        </motion.a>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"
          />

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white"
          >
            <p>© {currentYear} Spotless Cleaning. All Rights Reserved.</p>
            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ color: "#0A84FF" }}
                className="hover:text-primary transition-colors cursor-pointer text-white"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#0A84FF" }}
                className="hover:text-primary transition-colors cursor-pointer text-white"
              >
                Terms of Service
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
