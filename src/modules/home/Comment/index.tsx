"use client";
import { AnimateDiv, AnimateFlex } from "@/components/common/Animate";
import { TextGradient } from "@/components/common/TextGradient";
import { CommentStar } from "@/components/icons/home";
import Flex from "@/components/ui/Flex";
import ListComment from "@/modules/home/components/ListComment";

type Props = {
  ratings: TRatingDto[];
};

const Comment = (props: Props) => {
  return (
    <div className="relative w-full overflow-hidden  bg-gradient-to-b from-background to-primary/80 py-8 sm:py-12 !pb-24">
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
            animate={"visible"}
            transition={{ type: "spring", delay: 0.1 }}
          >
            <TextGradient className="text-4xl sm:text-5xl font-black  mb-6 inline-block">
              What Our Customers Say
              <CommentStar className="mb-2 max-sm:size-[28px] inline-block ml-3" />
            </TextGradient>
          </AnimateFlex>
          <AnimateDiv
            variants={{
              hidden: { opacity: 0, transform: "scale(0.9)" },
              visible: { opacity: 1, transform: "scale(1)" },
            }}
            initial="hidden"
            animate={"visible"}
            className="w-full"
            transition={{ type: "spring", delay: 0.5 }}
          >
            <ListComment data={props.ratings} />
          </AnimateDiv>
        </Flex>
      </div>
    </div>
  );
};

export default Comment;

export type TRatingDto = {
  customerName: string;
  comment: string;
  avatar: string;
  serviceName: string;
};
