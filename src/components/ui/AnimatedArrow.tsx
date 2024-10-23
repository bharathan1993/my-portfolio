import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface AnimatedArrowProps {
  targetId: string;
}

export function AnimatedArrow({ targetId }: AnimatedArrowProps) {
  const scrollToTarget = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      onClick={scrollToTarget}
    >
      <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
    </motion.div>
  );
}
