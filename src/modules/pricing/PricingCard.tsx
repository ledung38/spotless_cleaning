"use client";
import {
  AnimateButton,
  AnimateDiv,
  AnimateLi,
  AnimateSpan,
  AnimateUl,
} from "@/components/common/Animate";
import { TextGradient } from "@/components/common/TextGradient";
import { useAppRouter } from "@/hooks/useAppRouter";
import { Routes } from "@/lib/enum/routes";
import {
  ArrowRight,
  Building2,
  Check,
  Droplets,
  Home,
  Sparkles,
  UtensilsCrossed,
  Wind,
} from "lucide-react";
import React from "react";

interface PricingFeature {
  icon?: React.ComponentType<any>;
  text: string;
  highlight?: boolean;
}

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: PricingFeature[];
  icon: React.ComponentType<any>;
  color: string;
  delay: number;
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  icon: Icon,
  color,
  delay,
  isPopular = false,
}) => {
  //   const [isHovered, setIsHovered] = useState(false);
  const router = useAppRouter();
  return (
    <AnimateDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      //   transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      //   onMouseEnter={() => setIsHovered(true)}
      //   onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -12, transition: { duration: 0.01 } }}
      className={`relative group  rounded-3xl overflow-visible transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 ${
        isPopular ? "lg:scale-105 shadow-primary/30" : ""
      }`}
    >
      {/* Card Background */}
      <div
        className={`relative h-full  p-8 lg:p-10 rounded-3xl backdrop-blur-xl transition-all duration-300 ${
          isPopular
            ? "bg-gradient-to-br from-primary/20 via-primary/10 to-blue-500/5 border-2 border-primary/50"
            : "bg-gradient-to-br from-card/80 to-card/40 border border-border/50 group-hover:border-primary/50"
        }`}
      >
        {/* Popular Badge */}
        {isPopular && (
          <AnimateDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
            className="absolute -top-4 left-1/2 -translate-x-1/2 "
          >
            <div className="bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-primary/30 flex items-center gap-2 relative z-50">
              <Sparkles size={16} />
              Most Popular
            </div>
          </AnimateDiv>
        )}

        {/* Shine effect */}
        {/* <AnimateDiv
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-20"
          initial={{ x: "-100%" }}
          animate={isHovered ? { x: "100%" } : { x: "-100%" }}
          transition={{ duration: 0.6 }}
        /> */}

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Header */}
          <div className="mb-6">
            {/* Icon */}
            <AnimateDiv
              whileHover={{ rotate: 12, scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/30 transition-all`}
            >
              <Icon size={28} />
            </AnimateDiv>

            {/* Title */}
            <h3 className="text-2xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors leading-relaxed">
              {description}
            </p>
          </div>

          {/* Price */}

          <AnimateDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.1 }}
            viewport={{ once: true }}
            className="mb-8 pb-8 border-b border-border/30 group-hover:border-primary/30 transition-colors"
          >
            {price === 0 ? (
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                  price
                </span>
                <TextGradient
                  className={"text-4xl lg:text-5xl font-black text-left"}
                >
                  Contact Us
                </TextGradient>
              </div>
            ) : (
              <>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                    from
                  </span>
                  <span className="text-5xl lg:text-6xl font-black text-primary">
                    ${price}
                  </span>
                </div>
                <p className="text-xs text-foreground/50">Per service</p>
              </>
            )}
          </AnimateDiv>

          {/* Features List */}
          <AnimateUl
            className="space-y-3 mb-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: delay + 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, idx) => (
              <AnimateLi
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.3 },
                  },
                }}
                className={`flex items-start gap-3 text-sm ${
                  feature.highlight
                    ? "font-semibold text-primary"
                    : "text-foreground/70 group-hover:text-foreground/90"
                } transition-colors`}
              >
                <Check
                  size={18}
                  className={`mt-0.5 flex-shrink-0 ${
                    feature.highlight ? "text-primary" : "text-primary/60"
                  }`}
                />

                <span>{feature.text}</span>
              </AnimateLi>
            ))}
          </AnimateUl>

          {/* CTA Button */}
          <AnimateButton
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-4 px-6 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 group/btn overflow-hidden relative ${
              isPopular
                ? "bg-gradient-to-r from-primary to-blue-600 text-primary-foreground shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50"
                : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 hover:border-primary/50"
            }`}
            onClick={() => router.push(Routes.BOOKING)}
          >
            <span className="relative z-10 flex items-center gap-2">
              QUOTE ME
              <AnimateSpan
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                className="group-hover/btn:translate-x-1 transition-transform"
              >
                <ArrowRight size={18} />
              </AnimateSpan>
            </span>
          </AnimateButton>
        </div>

        {/* Background gradient blob */}
        <AnimateDiv
          className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl pointer-events-none ${
            isPopular
              ? "bg-gradient-to-br from-primary/40 to-blue-600/20"
              : "bg-gradient-to-br from-primary/20 to-primary/10"
          }`}
          //   animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </AnimateDiv>
  );
};

const PricingList = () => {
  const pricingPlans = [
    {
      title: "End of Lease Cleaning",
      price: 320,
      description: "Perfect for bond cleans and move in/out cleaning",
      icon: Home,
      color: "from-blue-500 to-cyan-500",
      features: [
        { text: "Move-in/out ready certification" },
        { text: "Bond inspection checklist included" },
        { text: "Professional team with experience" },
        { text: "Complete satisfaction warranty" },
        { text: "We guarantee re-cleaning at no extra cost", highlight: true },
      ],
    },

    {
      title: "Regular Cleaning",
      price: 100,
      description: "Same cleaners every time with equipment provided",
      icon: Sparkles,
      color: "from-green-500 to-emerald-500",
      isPopular: true,
      features: [
        { text: "Consistent cleaner assignment" },
        { text: "All supplies and equipment included" },
        { text: "Flexible scheduling options" },
        { text: "Free cancellation 24 hours prior" },
        { text: "20% savings on weekly plans", highlight: true },
        { text: "15% savings on fortnightly plans", highlight: true },
        { text: "Priority booking advantage", highlight: true },
      ],
    },
    {
      title: "Deep Cleaning",
      price: 200,
      description: "Ideal for spring cleans and pre-inspection cleans",
      icon: Wind,
      color: "from-purple-500 to-pink-500",
      features: [
        { text: "Comprehensive surface disinfection" },
        { text: "Baseboards and ceiling cleaning" },
        { text: "Appliance interior detailed cleaning" },
        { text: "Full property inspection included" },
        { text: "Quality assurance guarantee", highlight: true },
      ],
    },
    {
      title: "Restaurant Cleaning",
      price: 0,
      description: "Specialized cleaning for food service establishments",
      icon: UtensilsCrossed,
      color: "from-yellow-500 to-orange-500",
      features: [
        { text: "Comprehensive surface disinfection" },
        { text: "Baseboards and ceiling cleaning" },
        { text: "Appliance interior detailed cleaning" },
        { text: "Full property inspection included" },
        { text: "Quality assurance guarantee", highlight: true },
      ],
    },
    {
      title: "Airbnb Cleaning",
      price: 80,
      description: "Quick turnaround between guest stays",
      icon: Building2,
      color: "from-indigo-500 to-blue-500",
      features: [
        { text: "Express 2-4 hour turnaround" },
        { text: "Guest-ready property presentation" },
        { text: "24/7 on-demand availability" },
        { text: "Linen change and refresh included" },
        { text: "Last-minute emergency support", highlight: true },
      ],
    },
    {
      title: "Mould Cleaning",
      price: 220,
      description: "Remove mould from your home",
      icon: Droplets,
      color: "from-green-500 to-emerald-500",
      features: [
        { text: "Comprehensive surface disinfection" },
        { text: "Baseboards and ceiling cleaning" },
        { text: "Appliance interior detailed cleaning" },
        { text: "Full property inspection included" },
        { text: "Quality assurance guarantee", highlight: true },
      ],
    },
  ];

  return (
    <AnimateDiv
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20"
    >
      {pricingPlans.map((plan, index) => (
        <PricingCard
          key={index}
          title={plan.title}
          price={plan.price}
          description={plan.description}
          features={plan.features}
          icon={plan.icon}
          color={plan.color}
          delay={index * 0.1}
          isPopular={plan.isPopular}
        />
      ))}
    </AnimateDiv>
  );
};

export default PricingList;
