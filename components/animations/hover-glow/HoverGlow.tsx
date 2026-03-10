"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HoverGlowProps {
  className?: string;
  children: React.ReactNode;
}

export function HoverGlow({ className, children }: HoverGlowProps) {
  return (
    <motion.div className={cn("relative", className)} whileHover="hover" initial="rest">
      <motion.span
        className="pointer-events-none absolute -inset-2 rounded-2xl bg-zinc-400/20 blur-lg"
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
