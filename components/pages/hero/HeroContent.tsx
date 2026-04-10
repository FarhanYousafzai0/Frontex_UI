import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function HeroContent() {
  return (
    <>
      <div className="relative z-10 flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center px-6 pb-28 pt-28 text-center sm:pb-32 sm:pt-32 md:pb-36 md:pt-36">
        <h1
          className="animate-fade-rise-delay font-instrument-serif max-w-6xl text-4xl font-normal text-[#FFFFFF] sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ lineHeight: 0.95, letterSpacing: "-2.46px", textShadow: "0 10px 35px rgba(0,0,0,0.45)" }}
        >
          You know what needs to be built.
          <br />
          <span className="text-white/80 italic">I make it real.</span>
        </h1>

        <p className="animate-fade-rise-delay-2 mt-8 max-w-2xl font-inter text-base leading-relaxed text-white/85 sm:text-lg">
          Launching a product, automating workflow, or scaling your agency — I handle
          the full stack so you can focus on growth.
        </p>

        <div className="animate-fade-rise-delay-2 mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <MagneticButton>
            <div className="rounded-xl border border-white/40 p-[3px]">
              <button type="button" className="group inline-flex items-center gap-2 font-inter rounded-[10px] bg-[#F4EBDD] px-6 py-2.5 text-sm text-[#111111] transition-all duration-300 hover:bg-[#FFF6E9] sm:px-7 sm:py-3">
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </MagneticButton>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="h-7 w-14 rounded-full border border-white/35 bg-white/10 backdrop-blur-md">
          <div className="mx-auto mt-[9px] h-1.5 w-6 rounded-full bg-white/80" />
        </div>
      </div>
    </>
  );
}
