"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Globe } from "lucide-react";
import HomeHeader from "@/modules/home/HomeHeader";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";

const AboutPage = () => {
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

  const values = [
    {
      icon: Award,
      title: "Quality",
      description: "We never compromise on the quality of our services",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Reliability",
      description: "We deliver on our promises, every time",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: CheckCircle,
      title: "Professionalism",
      description: "Our team maintains the highest standards",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const achievements = [
    { label: "Years in Business", value: "10+" },
    { label: "Happy Customers", value: "5000+" },
    { label: "Satisfied Rate", value: "98%" },
    { label: "Team Members", value: "50+" },
  ];

  return (
    <div className="w-full min-h-screen bg-background">
      <HomeHeader />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-background pt-32 pb-24">
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
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              About Spotless Cleaning
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-foreground/70 leading-relaxed"
            >
              We are Sydney's trusted partner in professional cleaning services,
              dedicated to transforming spaces and creating healthier, cleaner
              environments for homes and businesses.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative w-full py-24 md:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl border border-border/50 bg-background"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Our mission is to help customers maintain clean, organized, and
                healthy spaces for living and working. We deliver exceptional
                cleaning services with integrity, professionalism, and a
                commitment to customer satisfaction at every step.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Every project, big or small, receives our full attention and
                expertise. We believe that a clean space creates a positive
                environment that improves quality of life and business
                productivity.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl border border-border/50 bg-background"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                To be Sydney's most trusted and respected cleaning service
                provider, known for our unwavering commitment to excellence,
                reliability, and customer satisfaction. We aim to be the
                preferred choice for families and businesses seeking
                professional, dependable cleaning solutions.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                We envision a future where every customer can trust that their
                space will be impeccably clean, professionally managed, and
                maintained to the highest standards of quality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="relative w-full py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Credentials
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Spotless Cleaning has served thousands of satisfied customers
              throughout Sydney with a proven track record of excellence
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ y: -8 }}
                className="p-6 rounded-2xl bg-card border border-border/50 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {item.value}
                </p>
                <p className="text-foreground/60">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-16 p-8 rounded-2xl bg-primary/10 border border-primary/20 text-center"
          >
            <p className="text-lg text-foreground leading-relaxed">
              <span className="font-semibold text-primary">
                98% customer satisfaction rate
              </span>{" "}
              — a testament to our dedication to delivering exceptional cleaning
              services and maintaining long-term customer relationships built on
              trust and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative w-full py-24 md:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              These principles guide every decision and action we take
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-4`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-foreground/60">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative w-full py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Professional Team
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Our team consists of trained, experienced cleaning professionals
              who are passionate about delivering exceptional results. Every
              team member undergoes rigorous training and adheres to our strict
              quality standards.
            </p>
          </motion.div>

          {/* Team highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Expert Training",
                description:
                  "All team members receive comprehensive training in the latest cleaning techniques and safety protocols.",
              },
              {
                title: "Background Checked",
                description:
                  "We conduct thorough background checks to ensure peace of mind and trustworthiness.",
              },
              {
                title: "Fully Insured",
                description:
                  "Spotless Cleaning is fully insured and licensed to protect our customers and team.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
                className="p-6 rounded-2xl bg-card border border-border/50"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/60">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-24 md:py-32 bg-card/50 overflow-hidden">
        <motion.div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.15, 1],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact Spotless Cleaning today and discover why thousands of
              Sydney residents trust us with their cleaning needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-shadow"
                >
                  Book a Cleaning
                </motion.button>
              </Link>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+61123456789"
                className="px-8 py-4 bg-foreground/5 text-foreground rounded-xl font-semibold border border-border hover:bg-foreground/10 transition-colors"
              >
                Call Us Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
