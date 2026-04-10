import { motion } from "framer-motion";
import { HERO_NAV_ITEMS } from "./constants";

type HeroDesktopNavProps = {
  pillIndex: number;
  onHover: (index: number | null) => void;
};

export function HeroDesktopNav({ pillIndex, onHover }: HeroDesktopNavProps) {
  return (
    <nav className="hidden items-center gap-1 md:flex" onMouseLeave={() => onHover(null)}>
      {HERO_NAV_ITEMS.map((item, index) => (
        <a
          key={item.label}
          href={item.href}
          className={`relative px-4 py-2 font-inter text-sm transition-colors ${
            pillIndex === index ? "text-[#111111]" : "text-white/75 hover:text-[#FFFFFF]"
          }`}
          onMouseEnter={() => onHover(index)}
        >
          {pillIndex === index && (
            <motion.span
              layoutId="nav-pill"
              className="absolute inset-0 block rounded-xl border border-white/40 p-[3px]"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <span className="block h-full w-full rounded-[9px] bg-[#F4EBDD] shadow-[0_8px_20px_rgba(0,0,0,0.2)]" />
            </motion.span>
          )}
          <span className="relative z-[1]">{item.label}</span>
          {item.isActive && (
            <motion.div
              layoutId="nav-dot"
              className="absolute -bottom-1 left-1/2 h-[2px] w-1.5 -translate-x-1/2 rounded-full bg-[#111111]/75"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </a>
      ))}
    </nav>
  );
}
