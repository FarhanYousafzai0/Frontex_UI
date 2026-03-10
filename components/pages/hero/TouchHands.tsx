"use client";

import { motion } from "framer-motion";

export function TouchHands() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-28 hidden h-56 md:block">
      <motion.div
        initial={{ x: -190, opacity: 0 }}
        animate={{ x: -8, opacity: [0, 0.75, 0.58] }}
        transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        className="touch-hand touch-left absolute left-8 top-16 h-36 w-56"
      />
      <motion.div
        initial={{ x: 190, opacity: 0 }}
        animate={{ x: 8, opacity: [0, 0.75, 0.58] }}
        transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1], delay: 0.03 }}
        className="touch-hand touch-right absolute right-8 top-16 h-36 w-56"
      />
      <motion.div
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: [0.1, 1.25, 1], opacity: [0, 1, 0.25] }}
        transition={{ duration: 1.05, delay: 0.84 }}
        className="absolute left-1/2 top-[5.55rem] h-4 w-4 -translate-x-1/2 rounded-full bg-zinc-900"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 2], opacity: [0, 0.3, 0] }}
        transition={{ duration: 1, delay: 0.88 }}
        className="absolute left-1/2 top-[5.25rem] h-12 w-12 -translate-x-1/2 rounded-full border border-zinc-500/40"
      />
    </div>
  );
}
