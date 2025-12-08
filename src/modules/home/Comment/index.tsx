import { useRef } from "react";

import { motion, useInView } from "motion/react";

import ListComment from "@/modules/home/components/ListComment";
import { Container, Text } from "@/components/ui";
import Flex from "@/components/ui/Flex";
import { AnimateFlex } from "@/components/common/Animate";
import { CommentStar } from "@/components/icons/home";

type Props = {
  ratings: TRatingDto[];
};

const Comment = (props: Props) => {
  const containerSecondRef = useRef<HTMLDivElement>(null);

  const isSecondInView = useInView(containerSecondRef, {
    once: true,
    amount: 0.4,
  });
  return (
    <div
      className="relative w-full overflow-hidden  bg-gradient-to-b from-background to-primary/80 py-8 sm:py-12 !pb-24"
      ref={containerSecondRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <Flex vertical={true} align={"center"}>
          <AnimateFlex
            align={"center"}
            gap={8}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={isSecondInView ? "visible" : "hidden"}
            transition={{ type: "spring", delay: 0.1 }}
          >
            <p className="text-4xl sm:text-5xl font-black text-foreground leading-tight mb-6">
              What Our Customers Say
            </p>
            <CommentStar className="mb-2 max-sm:size-[28px]" />
          </AnimateFlex>
          <motion.div
            variants={{
              hidden: { opacity: 0, transform: "scale(0.9)" },
              visible: { opacity: 1, transform: "scale(1)" },
            }}
            initial="hidden"
            animate={isSecondInView ? "visible" : "hidden"}
            className="w-full"
            transition={{ type: "spring", delay: 0.5 }}
          >
            <ListComment data={props.ratings} />
          </motion.div>
        </Flex>
      </div>
    </div>
  );
};

export default Comment;

export type TRatingDto = {
  customerName: string;
  comment: string;

  serviceName: string;
};
