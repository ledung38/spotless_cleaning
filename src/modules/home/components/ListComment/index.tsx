import { DecorQuote } from "@/components/icons";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  Container,
  NextAvatar,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  Text,
} from "@/components/ui";
import Flex from "@/components/ui/Flex";
import { usePathname } from "next/navigation";
import { memo, useEffect, useRef, useState } from "react";

const Item = ({ item }: { item: any }) => {
  return (
    <div className="h-full w-full rounded-3xl bg-white dark:bg-card px-6 py-4 sm:py-8">
      <Flex
        vertical={true}
        align={"center"}
        justify={"space-between"}
        className="h-full"
      >
        <Flex vertical={true} align={"center"} flex={1}>
          <Text as="h3" size={"medium"} weight={700}>
            {item.serviceName}
          </Text>
          <Text
            as="p"
            size={"small"}
            color="var(--text-2)"
            textAlign={"justify"}
            className="mt-2 inline-block"
          >
            {item.comment}
          </Text>
        </Flex>
        <Flex vertical={true} align={"center"} className="mt-6" gap={8}>
          <NextAvatar
            width={64}
            height={64}
            src={item.avatar}
            className="relative h-16 w-16 rounded-full [&_img]:object-cover"
            alt="subject"
          >
            {item.customerName.charAt(0).toUpperCase()}
          </NextAvatar>
          <Text weight={700} color="var(--text-2)" size={"medium"}>
            {item.customerName}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

const ListComment = ({ data }: { data: any }) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(1);
  const pathname = usePathname();

  const totalSlides = data?.length ?? 0; // Total number of slides
  const slidesPerGroup = totalSlides >= 3 ? 3 : totalSlides; // Number of slides per pagination item
  const totalGroups = Math.ceil(totalSlides / slidesPerGroup); // Total pagination items
  const containerSecondRef = useRef<HTMLDivElement>(null);

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
    <Container className="p-0 sm:py-4" ref={containerSecondRef}>
      <Flex vertical={true} align={"center"} gap={24}>
        <Flex align={"center"} justify={"center"} className="mb-2">
          <div className="relative w-fit">
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Real feedback from satisfied clients across Sydney
            </p>
            <DecorQuote
              mainColor={"#FFEDA7"}
              className="absolute top-4 right-[100px] z-0 max-sm:top-12 max-sm:right-[-16px] max-sm:size-[60px]"
            />
          </div>
        </Flex>
        <DecorQuote
          className="absolute bottom-6 left-[-12px] z-0 size-8 sm:hidden"
          mainColor={"#FFEDA7"}
        />

        <Carousel
          setApi={setApi}
          className="relative z-[2] max-w-[1000px] max-sm:max-w-full"
          opts={{
            align: "center",
            loop: true,
            skipSnaps: false,
            slidesToScroll: 1,
            startIndex: 1,
          }}
        >
          <CarouselContent
            className={`max-sm:pb-2 sm:py-12 ${
              totalSlides == 1 ? "justify-center" : ""
            }`}
          >
            {data?.map((item: any, index: number) => (
              <CarouselItem
                key={item?.id ?? index}
                className={`relative pl-4 md:basis-1/2 ${
                  totalSlides >= 3
                    ? "max-w-none lg:basis-1/3"
                    : totalSlides >= 2
                      ? "lg:basis-1/2"
                      : "lg:basis-full"
                } ${index == current ? "z-[1]" : "z-[0]"} `}
              >
                {current === index && totalSlides >= 3 && (
                  <DecorQuote
                    className="absolute bottom-[-16px] left-0 z-0 size-8 max-sm:hidden"
                    mainColor={"#FFEDA7"}
                  />
                )}
                <div
                  className={`relative transition-all duration-150 ease-in-out lg:h-[450px] lg:w-[300px] ${
                    index == current && totalSlides >= 3
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-70"
                  }`}
                >
                  <Item item={item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Flex>
      <div className="mt-4">
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
                    className={`inline-block h-4 w-4 rounded-full ${
                      isActiveGroup
                        ? "bg-primary"
                        : "bg-secondary hover:bg-secondary"
                    }`}
                  ></PaginationLink>
                </PaginationItem>
              );
            })}
          </PaginationContent>
        </Pagination>
      </div>
    </Container>
  );
};

export default memo(ListComment);
