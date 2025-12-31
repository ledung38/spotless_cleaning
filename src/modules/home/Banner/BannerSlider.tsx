"use client";
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
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
// const AnimateCarousel = motion(Carousel);

const BannerSlider = ({ images, autoPlay, autoPlayInterval }) => {
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

  return (
    <div className="relative h-96 lg:h-[480px] rounded-3xl overflow-hidden">
      <Carousel
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
                  stopOnMouseEnter: true, // 👈 hover là STOP
                  stopOnInteraction: false, // 👈 rời chuột chạy lại
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
              <Image
                key={index}
                src={item.src}
                alt={`Slide ${index + 1}`}
                width={500}
                height={450}
                priority={index === 0}
                className="absolute inset-0 w-full h-[450px] object-fill"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-0 flex items-center justify-between p-4 z-20 rounded-3xl">
          <button
            data-slot="button"
            aria-label="previous slider"
            onClick={() => api?.scrollPrev()}
            className="w-10 h-10 rounded-full hover:scale-115 active:scale-90 bg-white/95 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronLeft aria-hidden="true" size={20} />
          </button>

          <button
            data-slot="button"
            aria-label="next slider"
            onClick={() => api?.scrollNext()}
            className="w-10 h-10 rounded-full hover:scale-115 active:scale-90 bg-white/95 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronRight aria-hidden="true" size={20} />
          </button>
        </div>
      </Carousel>
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
    </div>
  );
};

export default BannerSlider;
