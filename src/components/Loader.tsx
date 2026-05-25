import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Loader() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p = Math.min(100, p + Math.random() * 14 + 4);
      setPct(Math.floor(p));
      if (p >= 100) {
        clearInterval(id);
        setTimeout(() => setDone(true), 450);
      }
    }, 90);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl font-bold tracking-tight text-gradient-amber"
          >
            STEVE DEV
          </motion.div>
          <div className="mt-8 h-px w-64 overflow-hidden bg-white/10">
            <motion.div
              className="h-full scroll-progress"
              style={{ width: `${pct}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <div className="mt-3 font-mono text-xs text-muted-foreground">{pct}%  •  loading experience</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}