"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import gsap from "gsap";
import { MagneticButton } from "@/components/ui/magnetic-button";

const videoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const navItems = [
  { label: "Work", href: "#projects", isActive: true },
  { label: "How I Work", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const introDone = useRef(false);

  const [hoveredNav, setHoveredNav] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  const { scrollY } = useScroll();

  const activeIndex = navItems.findIndex((item) => item.isActive);
  const pillIndex = hoveredNav ?? activeIndex;

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const children = header.querySelectorAll(":scope > *");

    const naturalHeight = header.offsetHeight;
    gsap.set(header, {
      width: "60px",
      height: naturalHeight,
      opacity: 0,
      overflow: "hidden",
    });
    gsap.set(children, { opacity: 0, visibility: "hidden" });

    const tl = gsap.timeline({
      delay: 0.3,
      onComplete: () => {
        gsap.set(header, { overflow: "", height: "" });
        introDone.current = true;
      },
    });

    tl.to(header, { opacity: 1, duration: 0.25, ease: "power2.out" });
    tl.to(header, { width: "100%", duration: 0.9, ease: "power3.inOut" });
    tl.set(children, { visibility: "visible" });
    tl.to(children, {
      opacity: 1,
      duration: 0.4,
      stagger: 0.08,
      ease: "power2.out",
    });

    return () => { tl.kill(); };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!introDone.current) return;

    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous + 5) {
      setScrollDirection("down");
      setNavHidden(true);
    } else if (latest < previous - 5) {
      setScrollDirection("up");
      setNavHidden(false);
    }
  });

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleMobileLinkClick = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const fadeDuration = 0.5;
    let rafId = 0;

    const updateOpacity = () => {
      const { currentTime, duration } = video;

      if (duration && Number.isFinite(duration)) {
        let opacity = 1;

        if (currentTime < fadeDuration) {
          opacity = currentTime / fadeDuration;
        } else if (duration - currentTime < fadeDuration) {
          opacity = Math.max((duration - currentTime) / fadeDuration, 0);
        }

        video.style.opacity = `${opacity}`;
      }

      rafId = window.requestAnimationFrame(updateOpacity);
    };

    const handleEnded = () => {
      video.style.opacity = "0";

      window.setTimeout(() => {
        video.currentTime = 0;
        void video.play().catch(() => {});
      }, 100);
    };

    video.style.opacity = "0";
    void video.play().catch(() => {});

    rafId = window.requestAnimationFrame(updateOpacity);
    video.addEventListener("ended", handleEnded);

    return () => {
      window.cancelAnimationFrame(rafId);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
    <section className="relative m-3 min-h-[calc(100vh-1.5rem)] overflow-hidden rounded-[30px] bg-[#FFFFFF] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={videoUrl}
          muted
          playsInline
          autoPlay
          preload="auto"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.16),rgba(0,0,0,0.45)_55%,rgba(0,0,0,0.7)_100%)]" />

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
        <header
          ref={headerRef}
          className="glass-header mx-auto flex items-center justify-between px-4 py-1.5 sm:px-6 sm:py-2"
        >
          <MagneticButton>
            <a
              href="#"
              className="flex items-center gap-2 font-instrument-serif text-3xl tracking-tight text-[#FFFFFF]"
            >
              Farhan
              <sup className="align-super text-sm">®</sup>
            </a>
          </MagneticButton>

          <nav
            className="hidden items-center gap-1 md:flex"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 font-inter text-sm transition-colors ${
                  item.isActive
                    ? "text-[#FFFFFF]"
                    : "text-white/75 hover:text-[#FFFFFF]"
                }`}
                onMouseEnter={() => setHoveredNav(index)}
              >
                {pillIndex === index && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-white/15 backdrop-blur-sm"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-[1]">{item.label}</span>
                {item.isActive && (
                  <motion.div
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-1/2 h-[2px] w-1.5 -translate-x-1/2 rounded-full bg-white"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <MagneticButton className="hidden md:block">
              <div className="rounded-xl border border-white/40 p-[3px]">
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 font-inter rounded-[10px] bg-[#F4EBDD] px-6 py-2.5 text-sm text-[#111111] transition-all duration-300 hover:bg-[#FFF6E9] sm:px-7 sm:py-3"
                >
                  Let&apos;s Talk
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </div>
            </MagneticButton>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

        </header>
      </motion.div>

      <div
        className="relative z-10 flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center px-6 pb-28 pt-28 text-center sm:pb-32 sm:pt-32 md:pb-36 md:pt-36"
      >
        <h1
          className="animate-fade-rise-delay font-instrument-serif max-w-6xl text-4xl font-normal text-[#FFFFFF] sm:text-6xl md:text-7xl lg:text-8xl"
          style={{
            lineHeight: 0.95,
            letterSpacing: "-2.46px",
            textShadow: "0 10px 35px rgba(0,0,0,0.45)",
          }}
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
              <button
                type="button"
                className="group inline-flex items-center gap-2 font-inter rounded-[10px] bg-[#F4EBDD] px-6 py-2.5 text-sm text-[#111111] transition-all duration-300 hover:bg-[#FFF6E9] sm:px-7 sm:py-3"
              >
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
    </section>

    <AnimatePresence>
      {mobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-[90] bg-black/55 md:hidden"
            onClick={handleMobileLinkClick}
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
                <a href="#" className="font-instrument-serif text-2xl tracking-tight text-white">
                  Farhan<sup className="align-super text-xs">®</sup>
                </a>
              </div>

              <nav className="flex flex-col gap-1 px-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`rounded-xl px-4 py-3 font-inter text-[15px] transition-colors ${
                      item.isActive
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                    onClick={handleMobileLinkClick}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto px-3 pb-4">
                <div className="rounded-xl border border-white/20 p-[3px]">
                  <button
                    type="button"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#F4EBDD] px-6 py-3 font-inter text-sm font-medium text-[#111111] transition-all duration-300 hover:bg-[#FFF6E9]"
                    onClick={handleMobileLinkClick}
                  >
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
    </>
  );
}
