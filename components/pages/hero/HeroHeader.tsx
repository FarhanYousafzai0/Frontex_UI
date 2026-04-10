import { ArrowRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { HeroBrand } from "./HeroBrand";
import { HeroDesktopNav } from "./HeroDesktopNav";

type HeroHeaderProps = {
  headerRef: React.RefObject<HTMLElement | null>;
  navHidden: boolean;
  scrollDirection: "up" | "down";
  pillIndex: number;
  mobileMenuOpen: boolean;
  onHoverNav: (index: number | null) => void;
  onToggleMobileMenu: () => void;
};

export function HeroHeader(props: HeroHeaderProps) {
  const {
    headerRef,
    navHidden,
    scrollDirection,
    pillIndex,
    mobileMenuOpen,
    onHoverNav,
    onToggleMobileMenu,
  } = props;

  return (
    <motion.div
      initial={false}
      animate={{ y: navHidden ? "-110%" : "0%" }}
      transition={
        scrollDirection === "down"
          ? { duration: 0.25, ease: [0.4, 0, 1, 1] }
          : { duration: 0.4, ease: [0, 0, 0.2, 1] }
      }
      className="fixed left-0 right-0 top-0 z-20 mx-auto w-full max-w-7xl px-4 pt-5 sm:px-6 md:px-8 md:pt-6"
    >
      <header ref={headerRef} className="glass-header mx-auto flex items-center justify-between px-4 py-1.5 sm:px-6 sm:py-2">
        <MagneticButton>
          <HeroBrand
            className="flex items-center gap-2.5 font-instrument-serif text-3xl tracking-tight text-[#FFFFFF]"
            iconSize={34}
            supClassName="align-super text-sm"
          />
        </MagneticButton>
        <HeroDesktopNav pillIndex={pillIndex} onHover={onHoverNav} />
        <div className="flex items-center gap-3">
          <MagneticButton className="hidden md:block">
            <div className="rounded-xl border border-white/40 p-[3px]">
              <button type="button" className="group inline-flex items-center gap-2 font-inter rounded-[10px] bg-[#F4EBDD] px-6 py-2.5 text-sm text-[#111111] transition-all duration-300 hover:bg-[#FFF6E9] sm:px-7 sm:py-3">
                Let&apos;s Talk
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </MagneticButton>
          <button type="button" className="inline-flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden" onClick={onToggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
    </motion.div>
  );
}
