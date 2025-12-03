"use client";

import { motion } from "framer-motion";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/common/ModeToggle";
import Link from "next/link";

const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {/* Top banner */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.5 }}
        className="hidden md:block bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-primary/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-sm">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-primary/80"
          >
            <Sparkles className="w-4 h-4" />
            <span>Professional Cleaning Services for Sydney</span>
          </motion.div>
          <motion.a
            whileHover={{ x: 4 }}
            href="tel:+61123456789"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <Phone className="w-4 h-4" />
            +61 1 2345 6789
          </motion.a>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
            : "bg-background/80 backdrop-blur-xl border-b border-border/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with animation */}
            <Link href="/">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.08 }}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <motion.div
                  className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-white font-bold text-xl group-hover:scale-110 transition-transform">
                    S
                  </span>
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-primary/20"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
                <div className="hidden sm:block">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg font-bold text-foreground leading-none"
                  >
                    Spotless
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="text-xs text-primary/70"
                  >
                    Cleaning
                  </motion.p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex items-center gap-1"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  onMouseEnter={() => setActiveNav(item.label)}
                  onMouseLeave={() => setActiveNav("")}
                >
                  <Link href={item.href}>
                    <motion.div className="relative px-4 py-2 text-foreground/70 font-medium text-sm cursor-pointer">
                      <span className="relative z-10 hover:text-foreground transition-colors">
                        {item.label}
                      </span>
                      <motion.div
                        className="absolute bottom-1 left-2 right-2 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX: activeNav === item.label ? 1 : 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        style={{ transformOrigin: "left" }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Right side actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 md:gap-4"
            >
              {/* CTA Button - Hidden on small screens */}
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-shadow"
              >
                <span>Book Now</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>

              {/* Theme Toggle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ModeToggle />
              </motion.div>

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 hover:bg-foreground/10 rounded-lg transition-colors"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: isOpen ? 0 : -10 }}
              className="px-4 py-6 space-y-3 border-t border-border/30 bg-background/50 backdrop-blur"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    x: isOpen ? 0 : -20,
                  }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    <motion.div
                      whileHover={{ x: 8, color: "var(--color-primary)" }}
                      className="block px-4 py-3 text-foreground/70 hover:text-foreground rounded-lg font-medium transition-colors"
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.a
                href="tel:+61123456789"
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-lg font-medium border border-primary/20 mt-4"
              >
                <Phone className="w-5 h-5" />
                <span>+61 1 2345 6789</span>
              </motion.a>

              {/* Mobile Book Now Button */}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ delay: 0.48 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg font-semibold w-full"
              >
                <Sparkles className="w-5 h-5" />
                Book Now
              </motion.a>
            </motion.div>
          </motion.nav>
        </div>
      </motion.header>
    </>
  );
};

export default HomeHeader;
