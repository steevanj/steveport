import { useRef, useState, type ReactNode, type ButtonHTMLAttributes } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost";
  asLink?: string;
};

export function MagneticButton({ children, className, variant = "primary", asLink, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const move = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ x: (e.clientX - (r.left + r.width / 2)) * 0.25, y: (e.clientY - (r.top + r.height / 2)) * 0.25 });
  };
  const leave = () => setPos({ x: 0, y: 0 });

  const styles = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors",
    variant === "primary"
      ? "bg-gradient-to-br from-amber-400 to-orange-500 text-black hover:from-amber-300 hover:to-orange-400 glow-amber"
      : "border border-slate-300/40 bg-white/75 text-slate-900 hover:border-slate-400 hover:text-slate-950 backdrop-blur-sm",
    className,
  );

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.4 }}
      data-magnetic
      className="inline-block"
    >
      {asLink ? (
        <a href={asLink} target={asLink.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={styles}>
          {children}
        </a>
      ) : (
        <button {...rest} className={styles} disabled={rest.disabled}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return inner;
}