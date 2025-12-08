import { motion } from "framer-motion";
import { cn } from "@/lib/utils/index";

type Props = {
  children: React.ReactNode;
  className?: string;
  isShowPulse?: boolean;
};
const TagTitle = ({ children, className = "", isShowPulse = false }) => {
  return (
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "text-primary mb-4 text-base font-semibold inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 via-white/10 to-primary/20 backdrop-blur-sm border border-primary rounded-full px-4 py-2 ",
        className
      )}
    >
      {isShowPulse && (
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
      )}
      {children}
    </motion.span>
  );
};

export default TagTitle;
