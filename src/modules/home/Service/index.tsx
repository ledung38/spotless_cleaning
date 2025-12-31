import { AnimateDiv } from "@/components/common/Animate";
import { TextGradient } from "@/components/common/TextGradient";
import { ArrowRightIcon } from "@/components/icons";
import { services } from "@/modules/home/contants";
import TagTitle from "@/modules/home/Tag";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface ServiceCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
  delay: number;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  color,
}) => {
  const link = `/service/${title.toLowerCase().replaceAll(" ", "-")}`;
  return (
    <Link
      href={link}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
    >
      <AnimateDiv
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" },
          },
        }}
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
        className="relative rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden"
      >
        {/* Background gradient - Disabled on mobile */}
        <AnimateDiv
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 hidden sm:block`}
        />

        {/* Nội dung */}
        <div>
          <Image
            src={Icon.src}
            width={Icon.width}
            height={Icon.height}
            alt={title}
            className="w-full h-full"
            quality={75}
          />

          <div className="relative z-10 p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>

            <p className="text-foreground/60 leading-relaxed mb-4">
              {description}
            </p>

            {/* CTA text (nằm trong link luôn) */}
            <div className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:ml-1 transition-all duration-300">
              <span className="sr-only">Learn more about {title}</span>
              <span aria-hidden="true">Learn more</span>
              <ArrowRightIcon className="w-5 h-5 [&_path]:stroke-primary" />
            </div>
          </div>
        </div>

        {/* Shine effect - Hidden on mobile */}
        <AnimateDiv
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 hidden sm:block"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
      </AnimateDiv>
    </Link>
  );
};

const SectionTitle: React.FC<{ delay: number }> = ({ delay }) => {
  return (
    <AnimateDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-16"
    >
      {/* Badge */}
      {/* <AnimateDiv
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay - 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6 hover:bg-primary/15 transition-colors duration-300"
      >
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        <span className="text-sm font-semibold text-primary">Our Services</span>
        </AnimateDiv>*/}
      <TagTitle isShowPulse={true}>Our Services</TagTitle>

      {/* Main Title */}
      <TextGradient
        as="h2"
        className="text-4xl lg:text-5xl font-black text-center mb-4 leading-tight max-w-3xl mx-auto"
      >
        Exceptional Cleaning Services Tailored for You
      </TextGradient>

      {/* Subtitle */}
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        We provide comprehensive cleaning solutions with professional expertise,
        modern techniques, and outstanding customer satisfaction.
      </p>
    </AnimateDiv>
  );
};

const FloatingShape: React.FC<{
  delay: number;
  position: string;
  size: number;
  opacity: number;
}> = ({ delay, position, size, opacity }) => {
  return (
    <AnimateDiv
      className={`absolute ${position} rounded-full bg-primary/10 blur-3xl`}
      style={{
        width: size,
        height: size,
        opacity,
      }}
      animate={{
        y: [0, -50, 0],
        x: [0, 30, 0],
      }}
      transition={{
        duration: 8 + delay,
        delay: delay * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    ></AnimateDiv>
  );
};

export const Service: React.FC = () => {
  return (
    <section className="bg-white relative w-full py-10 lg:py-16 overflow-hidden dark:bg-gradient-to-b dark:from-background dark:to-background dark:via-primary/60">
      {/* Animated background shapes */}
      <FloatingShape
        delay={0}
        position="top-20 -right-40"
        size={400}
        opacity={1}
      />

      <FloatingShape
        delay={2}
        position="bottom-40 -left-32"
        size={350}
        opacity={1}
      />
      <FloatingShape
        delay={4}
        position="top-1/2 right-1/4"
        size={300}
        opacity={1}
      />

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-primary/5 bg-[size:50px_50px] [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle delay={0} />

        {/* Services grid */}
        <AnimateDiv
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ServiceCard
                icon={Icon}
                title={service.title}
                description={service.description}
                color={service.color}
                delay={index}
                key={index}
              />
            );
          })}
        </AnimateDiv>

        {/* CTA Section */}

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.9,
            ease: "easeOut",
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to experience spotless clean? Our team is here to help with
            professional cleaning services tailored to your needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Service
              <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                <ArrowRight size={20} />
              </motion.span>
            </span>
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};
