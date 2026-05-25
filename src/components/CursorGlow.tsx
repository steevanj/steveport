import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-magnetic], input, textarea, [role=button]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[100] mix-blend-screen"
        animate={{ x: pos.x - 12, y: pos.y - 12, scale: hover ? 1.6 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.3 }}
        style={{ left: 0, top: 0 }}
      >
        <div className="h-6 w-6 rounded-full bg-amber-400/90 shadow-[0_0_20px_6px_rgba(255,160,60,0.6)]" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed z-[99] hidden md:block"
        animate={{ x: pos.x - 200, y: pos.y - 200 }}
        transition={{ type: "spring", stiffness: 60, damping: 20, mass: 0.6 }}
        style={{ left: 0, top: 0 }}
      >
        <div className="h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-3xl" />
      </motion.div>
    </>
  );
}