import { AnimateDiv, AnimateLi } from "@/components/common/Animate";
import { CompactApp } from "@/components/common/Compact";
import { TickIcon } from "@/components/icons";
import TagTitle from "@/modules/home/Tag";
import { listServiceIncludes } from "@/modules/service/contants";
import { Sparkles } from "lucide-react";
import React from "react";

interface ServiceItemProps {
  title: string;
  items: string[];
  icon: React.ComponentType<any>;
  delay: number;
  color: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  items,
  icon: Icon,
  delay,
  color,
}) => {
  return (
    <AnimateDiv
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative group"
    >
      <div className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-primary/20 ring-2 ring-primary/40 flex items-center justify-center">
        <AnimateDiv
          className="w-2 h-2 rounded-full bg-primary"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, delay, repeat: Infinity }}
        />
      </div>

      <div
        className={`pl-8 pb-8 border-l-2 border-primary/30 group-hover:border-primary/80 transition-colors duration-300`}
      >
        <div className="flex items-start gap-3 mb-3">
          <div
            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}
          >
            <Icon size={20} />
          </div>
          <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h4>
        </div>

        <ul className="space-y-2">
          {items.map((item, idx) => (
            <AnimateLi
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: delay + 0.1 + idx * 0.05,
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-2 text-md text-foreground/70 group-hover:text-foreground/90 transition-colors"
            >
              <TickIcon className={"size-5"} />
              <span>{item}</span>
            </AnimateLi>
          ))}
        </ul>
      </div>
    </AnimateDiv>
  );
};

const OptionalExtraCard: React.FC<{
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  delay: number;
  color: string;
}> = ({ title, description, icon: Icon, delay, color }) => {
  return (
    <AnimateDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative p-5 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden"
    >
      {/* Background gradient on hover */}
      <AnimateDiv
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />

      {/* Shine effect */}
      <AnimateDiv
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-10"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />

      {/* Content */}
      <div className="relative z-10">
        <AnimateDiv
          whileHover={{ rotate: 12, scale: 1.15 }}
          transition={{ duration: 0.3 }}
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3 text-white shadow-lg`}
        >
          <Icon size={24} />
        </AnimateDiv>

        <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-sm text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors">
          {description}
        </p>
      </div>
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
      className={`absolute ${position} rounded-full bg-primary/10 blur-3xl pointer-events-none`}
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
    />
  );
};

export const HowItWorks = ({ slug }) => {
  const mainServices = listServiceIncludes[slug]?.mainServices || [];
  const optionalExtras = listServiceIncludes[slug]?.optionalExtras || [];

  const getServiceTitle = (): string => {
    switch (slug) {
      case "end-of-lease-cleaning":
        return "End of Lease (Bond) Cleaning";
      case "regular-cleaning":
        return "Regular Cleaning Service";
      case "deep-cleaning":
        return "Professional Deep Cleaning";
      case "restaurant-cleaning":
        return "Commercial Restaurant Cleaning";
      case "airbnb-cleaning":
        return "Airbnb & Rental Property Cleaning";
      case "mould-cleaning":
        return "Mould Cleaning & Treatment";
      default:
        return "Our Cleaning Service";
    }
  };

  const getServiceSubtitle = (): string => {
    switch (slug) {
      case "end-of-lease-cleaning":
        return "Our bond cleaning is an end of lease cleaning service will include the following. Get all the details that our agents expects, like cleaning your skirting boards, cornices, switches, power points, extractor fans, light fittings, door handles and more.";
      case "regular-cleaning":
        return "Maintain a fresh and tidy home with our flexible regular cleaning service. Choose your preferred schedule and let our professional team handle the rest.";
      case "deep-cleaning":
        return "Our comprehensive deep cleaning service reaches every corner of your space, removing hidden dirt, dust, and allergens for a spotless finish.";
      case "restaurant-cleaning":
        return "Specialized commercial cleaning for food service establishments. Our team is health code certified and experienced in maintaining sanitary kitchen and dining environments.";
      case "airbnb-cleaning":
        return "Ensure 5-star guest reviews with our rapid turnaround Airbnb cleaning service. We prepare your property to be guest-ready for every arrival.";
      case "mould-cleaning":
        return "Professional mould removal and treatment using state-of-the-art equipment. We eliminate mould at the source and prevent future growth.";
      default:
        return "Experience professional cleaning that exceeds expectations.";
    }
  };

  return (
    <section className="relative w-full py-8 lg:py-16 overflow-hidden bg-gradient-to-b from-white  to-primary/50 dark:from-background">
      {/* Animated background shapes */}
      <FloatingShape
        delay={0}
        position="top-20 -right-40"
        size={400}
        opacity={0.08}
      />
      <FloatingShape
        delay={2}
        position="bottom-40 -left-32"
        size={350}
        opacity={0.06}
      />
      <FloatingShape
        delay={4}
        position="top-1/2 right-1/4"
        size={300}
        opacity={0.05}
      />

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-primary/5 bg-[size:50px_50px] [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          {/* Badge */}
          {/* <AnimateDiv
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6 hover:bg-primary/15 transition-colors duration-300"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-primary">
              How it works ?
            </span>
          </AnimateDiv> */}
          <TagTitle isShowPulse>How it works ?</TagTitle>

          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight">
            {getServiceTitle()}
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {getServiceSubtitle()}
          </p>
        </AnimateDiv>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              items={service.items}
              icon={service.icon}
              delay={index * 0.1}
              color={service.color}
            />
          ))}
        </div>

        {/* Optional Extras Section */}
        <AnimateDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <AnimateDiv
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white"
            >
              <Sparkles size={20} />
            </AnimateDiv>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              Optional Extras
            </h3>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Add extra and customise your end of lease cleaning service to meet
            your needs:
          </p>

          <AnimateDiv
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.6,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {optionalExtras.map((extra, index) => (
              <OptionalExtraCard
                key={index}
                title={extra.title}
                description={extra.description}
                icon={extra.icon}
                delay={index * 0.08}
                color={extra.color}
              />
            ))}
          </AnimateDiv>
        </AnimateDiv>

        {/* CTA Section */}
        {/* <AnimateDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center bg-gradient-to-r from-primary/5 via-primary/3 to-primary/5 border border-primary/20 rounded-3xl p-8 lg:p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Ready for a spotless clean?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our professional team is ready to handle your end of lease cleaning
            with precision and care. Get your bond back and move with
            confidence.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 group overflow-hidden inline-block"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Your Free Quote
              <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                →
              </motion.span>
            </span>
          </motion.button>
        </AnimateDiv> */}

        <AnimateDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <CompactApp
            title="Ready for a spotless clean?"
            subtitle="Our professional team is ready to handle your end of lease cleaning with precision and care. Get your bond back and move with confidence."
            textButton="Book Your Free Quote"
            className="rounded-3xl"
          />
        </AnimateDiv>
      </div>
    </section>
  );
};
