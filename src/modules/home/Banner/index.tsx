import SmoothLoopVideo from "@/components/common/BannerVideo";
import { ArrowCircleRightIcon } from "@/components/icons";
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
import Autoplay from "embla-carousel-autoplay";
import {
  ChevronLeft,
  ChevronRight,
  HandCoins,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
const AnimateCarousel = motion(Carousel);

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
  delay = 0,
}: {
  icon: React.ComponentType<any>;
  text: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.6 + delay,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.05, translateY: -3 }}
      className="flex justify-start items-center gap-2 rounded-full px-2.5 sm:px-4  lg:pr-10  py-2 transition-all duration-300 bg-[#c8d4e0] hover:brightness-110"
    >
      <Icon size={18} className="text-[#6b7d94] font-bold" />
      <span className="font-bold text-[#6b7d94] text ">{text}</span>
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay,
          ease: "easeOut",
        }}
      >
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + idx * 0.08,
              ease: "easeOut",
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
  ctaText = "GET AN INSTANT QUOTE",
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
    // <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-bl from-secondary/30 via-blue-50/30 to-primary/70 flex items-center">
    <div className="relative w-full min-h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <SmoothLoopVideo src="/banner_video.mp4" />
      </div>
      {/* <FloatingIcon Icon={Sparkles} delay={0} position="top-20 right-10" /> */}
      {/* <FloatingIcon Icon={Zap} delay={0.5} position="top-40 left-20" /> */}
      {/* <FloatingIcon Icon={Shield} delay={1} position="bottom-32 right-20" /> */}
      {/* <FloatingIcon Icon={Sparkles} delay={1.5} position="bottom-20 left-32" /> */}
      {/* <div className="bg-[url('/home_banner_v2.png')] absolute inset-0 bg-cover" /> */}
      {/* <div className="bg-gradient-to-r  from-[rgba(248,248,248,.89)] via-[rgba(248,248,248,.59)] to-[rgba(248,248,248,.01)] absolute inset-0" /> */}
      {/* <div className="bg-gradient-to-br from-primary via-blue-800 to-purple-900 absolute inset-0 opacity-40" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" /> */}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-25">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              {/* <TagTitle>Welcome to Premium Cleaning</TagTitle> */}
              {/* <span className="text-4xl font-bold bg-gradient-to-r from-[#FDBA74] to-[#FB923C] bg-clip-text text-transparent">
                2800+ Services Completed
              </span> */}
              <h1 className="text-4xl lg:text-5xl font-black  leading-tight bg-gradient-to-r from-[#0871eb] via-primary/80 to-[#1565C0] bg-clip-text  text-[#e8e3da]">
                <AnimatedText delay={0}>
                  Professional Cleaning Service in Sydney
                </AnimatedText>
                {/* <AnimatedText delay={0.5}>Spotless Care</AnimatedText> */}
              </h1>

              <p className=" sm:text-xl text-lg text-[#e8e3da] leading-relaxed max-w-xl ">
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
            <div className="grid grid-cols-2 gap-3 pt-6 w-fit">
              <FeatureBadge
                icon={Sparkles}
                text="Professional Team"
                delay={0}
              />
              <FeatureBadge icon={Zap} text="On Time" delay={0.1} />
              <FeatureBadge
                icon={Shield}
                text="100% Satisfaction"
                delay={0.2}
              />
              <FeatureBadge
                icon={HandCoins}
                text="Affordable Rates"
                delay={0.3}
              />
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              className="pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCtaClick}
                className="relative px-8 py-4 bg-gradient-to-r from-[oklch(0.62_0.18_250)] to-[oklch(0.55_0.15_250)] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-[oklch(0.62_0.18_250)]/30 transition-all duration-300 group overflow-hidden"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  {ctaText}
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowCircleRightIcon className="size-6" />
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>

            {/* Trust Stats */}
            <motion.div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
              {[
                { number: "2000+", label: "Happy Clients" },
                { number: "8+", label: "Years Experience" },
                { number: "24/7", label: "Customer Support" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.4 + idx * 0.1,
                    ease: "easeOut",
                  }}
                  className="text-center"
                >
                  <p className="text-3xl font-black text-[#e8e3da]">
                    {stat.number}
                  </p>
                  <p className="text-sm font-medium text-[#c8d4e0] mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image Carousel */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => api?.scrollPrev()}
                  className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ChevronLeft size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => api?.scrollNext()}
                  className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ChevronRight size={20} />
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
