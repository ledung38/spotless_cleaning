"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { imageServices } from "@/modules/service/image";
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
import { ChevronLeft, ChevronRight } from "lucide-react";
const AnimateCarousel = motion(Carousel);

export const ServiceImages = ({ slug }) => {
  const images = imageServices[slug];

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(1);
  const totalSlides = images.length; // Total number of slides
  const slidesPerGroup = 4; // Number of slides per pagination item

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
    <div className="relative">
      <div className="relative w-full overflow-hidden bg-white py-16 sm:py-24 lg:py-24 !pb-24 dark:bg-gradient-to-b dark:from-background dark:to-background dark:via-primary/60">
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
              className={`relative z-[2] w-full overflow-hidden `}
              opts={{
                align: "center",
                loop: true,
                skipSnaps: false,
                slidesToScroll: 1,
                startIndex: 1,
              }}
            >
              <CarouselContent className={` h-full -ml-16  `}>
                {images.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className={`relative max-w-none  h-[450px] pl-16 max-sm:basis-full md:basis-1/2 lg:basis-1/3   `}
                  >
                    <motion.img
                      key={index}
                      src={item.src}
                      alt={`Slide ${index + 1}`}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 },
                      }}
                      className="w-full h-full object-fill rounded-2xl"
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
