import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { HERO_NAV_ITEMS } from "./constants";
import { HeroBrand } from "./HeroBrand";

type HeroMobileSidebarProps = {
  open: boolean;
  onClose: () => void;
};

export function HeroMobileSidebar({ open, onClose }: HeroMobileSidebarProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-[90] bg-black/55 md:hidden"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "-105%", opacity: 0.9 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-105%", opacity: 0.9 }}
            transition={{ duration: 0.34, ease: [0.22, 0.8, 0.2, 1] }}
            className="fixed inset-y-0 left-0 z-[100] w-[86vw] max-w-[320px] p-3 md:hidden"
          >
            <div className="glass-header flex h-full flex-col rounded-3xl border-white/20 bg-black/25 backdrop-blur-xl">
              <div className="flex items-center justify-between px-5 py-4">
                <HeroBrand
                  className="flex items-center gap-2.5 font-instrument-serif text-2xl tracking-tight text-white"
                  iconSize={30}
                  supClassName="align-super text-xs"
                />
              </div>
              <nav className="flex flex-col gap-1 px-3">
                {HERO_NAV_ITEMS.map((item) => (
                  <a key={item.label} href={item.href} className={`rounded-xl px-4 py-3 font-inter text-[15px] transition-colors ${item.isActive ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"}`} onClick={onClose}>
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto px-3 pb-4">
                <div className="rounded-xl border border-white/20 p-[3px]">
                  <button type="button" className="group inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#F4EBDD] px-6 py-3 font-inter text-sm font-medium text-[#111111] transition-all duration-300 hover:bg-[#FFF6E9]" onClick={onClose}>
                    Let&apos;s Talk
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
