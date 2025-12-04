import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Sparkles, Zap, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui";
const AnimateCarousel = motion(Carousel);
import Autoplay from "embla-carousel-autoplay";

const FloatingIcon = ({
  Icon,
  delay,
  position,
}: {
  Icon: React.ComponentType<any>;
  delay: number;
  position: string;
}) => {
  return (
    <motion.div
      className={`absolute ${position}`}
      animate={{
        y: [0, -30, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="text-primary opacity-60">
        <Icon size={64} className="drop-shadow-lg" />
      </div>
    </motion.div>
  );
};

const FeatureBadge = ({
  icon: Icon,
  text,
  delay,
}: {
  icon: React.ComponentType<any>;
  text: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{ scale: 1.1, translateY: -5 }}
      className="flex items-center gap-2 bg-primary/8 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 hover:bg-primary/12 transition-colors duration-300"
    >
      <Icon size={18} className="text-primary" />
      <span className=" font-semibold text-foreground">{text}</span>
    </motion.div>
  );
};
const AnimatedText = ({
  children,
  delay,
}: {
  children: string;
  delay: number;
}) => {
  const words = children.split(" ");

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + idx * 0.1,
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

interface ServiceBannerV2Props {
  title?: string;
  description?: string;
  icon?: React.ComponentType<any>;
  highlights?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
  images?: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const Banner = ({
  description = `Professional cleaning services that exceed expectations. From
                  deep cleaning to regular maintenance, we keep your space
                  pristine with premium attention to detail.`,
  ctaText = "Get Started",
  onCtaClick,
  images = [
    "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1628840042765-356cda07f4ee?w=600&h=600&fit=crop",
  ],
  autoPlay = true,
  autoPlayInterval = 3000,
}: ServiceBannerV2Props) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(1);
  const totalSlides = images.length; // Total number of slides
  const slidesPerGroup = 1; // Number of slides per pagination item

  const totalGroups = Math.ceil(totalSlides / slidesPerGroup);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    api.on("reInit", handleSelect);

    return () => {
      api.off("select", handleSelect);
      api.off("reInit", handleSelect);
    };
  }, [api]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-primary/5 via-blue-50/30 to-accent/10 flex items-center">
      <FloatingIcon Icon={Sparkles} delay={0} position="top-20 right-10" />
      <FloatingIcon Icon={Zap} delay={0.5} position="top-40 left-20" />
      <FloatingIcon Icon={Shield} delay={1} position="bottom-32 right-20" />
      <FloatingIcon Icon={Sparkles} delay={1.5} position="bottom-20 left-32" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <div className="text-base font-semibold text-blue-300 mb-4">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  Welcome to Premium Cleaning
                </motion.span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-foreground leading-tight">
                <AnimatedText delay={0.2}>Your Home Deserves</AnimatedText>
                <AnimatedText delay={0.5}>Spotless Care</AnimatedText>
              </h1>

              <p className=" sm:text-xl text-lg text-muted-foreground leading-relaxed max-w-xl">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="inline"
                >
                  {description}
                </motion.span>
              </p>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 pt-6">
              <FeatureBadge
                icon={Sparkles}
                text="Professional Team"
                delay={1.0}
              />
              <FeatureBadge icon={Zap} text="Fast Service" delay={1.2} />
              <FeatureBadge
                icon={Shield}
                text="100% Satisfaction"
                delay={1.4}
              />
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
              <button
                onClick={onCtaClick}
                className="relative px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group overflow-hidden"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  {ctaText}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </button>
            </motion.div>

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20"
            >
              {[
                { number: "5000+", label: "Happy Clients" },
                { number: "12+", label: "Years Experience" },
                { number: "24/7", label: "Customer Support" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-3xl font-black text-secondary">
                    {stat.number}
                  </p>
                  <p className="text-sm text-primary/80 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image Carousel */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative h-96 lg:h-[480px] rounded-3xl overflow-hidden"
          >
            <AnimateCarousel
              variants={{
                hidden: { opacity: 0, transform: "scale(0.9)" },
                visible: { opacity: 1, transform: "scale(1)" },
              }}
              initial="hidden"
              animate={"visible"}
              transition={{ type: "spring", delay: 0.2 }}
              setApi={setApi}
              className={`relative z-[2] w-full
               inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-blue-100/20 border border-primary/10
              `}
              opts={{
                align: "center",
                loop: true,
                skipSnaps: false,
                slidesToScroll: 1,
                startIndex: 1,
              }}
              plugins={
                autoPlay
                  ? [
                      Autoplay({
                        delay: autoPlayInterval, // thời gian chuyển slide
                        stopOnInteraction: false,
                        stopOnMouseEnter: true,
                      }),
                    ]
                  : []
              }
            >
              <CarouselContent className={` w-full h-full ml-0`}>
                {images.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className={`relative w-full h-[450px] max-sm:basis-full`}
                  >
                    <motion.img
                      key={index}
                      src={images[2]}
                      alt={`Slide ${index + 1}`}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 },
                      }}
                      className="absolute inset-0 w-full h-[450px] object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute inset-0 flex items-center justify-between p-4 z-20 rounded-3xl">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => api?.scrollPrev()}
                  className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-white transition-all duration-300 shadow-lg"
                >
                  <ChevronLeft size={24} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => api?.scrollNext()}
                  className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-white transition-all duration-300 shadow-lg"
                >
                  <ChevronRight size={24} />
                </motion.button>
              </div>
            </AnimateCarousel>
            <div className="mt-2">
              <Pagination>
                <PaginationContent>
                  {Array.from({ length: totalGroups }).map((_, groupIndex) => {
                    // Calculate the first slide index in this group
                    const firstSlideInGroup = groupIndex * slidesPerGroup;
                    // Calculate the middle slide index for this group
                    const isActiveGroup =
                      current >= firstSlideInGroup &&
                      current < firstSlideInGroup + slidesPerGroup;

                    return (
                      <PaginationItem key={groupIndex}>
                        <PaginationLink
                          isActive={isActiveGroup}
                          onClick={() => {
                            api?.scrollTo(firstSlideInGroup);
                          }}
                          className={`inline-block h-3 w-3 rounded-full z-9999 ${
                            isActiveGroup
                              ? "bg-primary"
                              : "bg-secondary/50 hover:bg-secondary"
                          }`}
                        ></PaginationLink>
                      </PaginationItem>
                    );
                  })}
                </PaginationContent>
              </Pagination>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
