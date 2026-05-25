import { motion, useScroll } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="scroll-progress fixed left-0 top-0 z-[150] h-[2px] origin-left"
      style={{ scaleX: scrollYProgress, width: "100%" }}
    />
  );
}