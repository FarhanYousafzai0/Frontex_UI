"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

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
        void video.play().catch(() => {
          // Ignore autoplay interruption and preserve manual loop behavior.
        });
      }, 100);
    };

    video.style.opacity = "0";
    void video.play().catch(() => {
      // Ignore autoplay interruption and preserve manual loop behavior.
    });

    rafId = window.requestAnimationFrame(updateOpacity);
    video.addEventListener("ended", handleEnded);

    return () => {
      window.cancelAnimationFrame(rafId);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 md:px-8 md:py-6">
        <header className="glass-header flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <a
            href="#"
            className="flex items-center gap-2 font-instrument-serif text-3xl tracking-tight text-[#FFFFFF]"
          >
            Farhan
            <sup className="align-super text-sm">®</sup>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-inter text-sm transition-colors ${
                  item.isActive ? "text-[#FFFFFF]" : "text-white/75 hover:text-[#FFFFFF]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="group inline-flex items-center gap-2 font-inter rounded-xl bg-[#F4EBDD] px-6 py-2.5 text-sm text-[#111111] transition-transform duration-300 hover:scale-[1.03] hover:bg-[#FFF6E9] sm:px-7 sm:py-3"
          >
            Let&apos;s Talk
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </header>
      </div>

      <div
        className="relative z-10 flex min-h-[calc(100vh-7rem)] w-full flex-col items-center justify-center px-6 pb-28 text-center sm:pb-32 md:pb-36"
        style={{ paddingTop: "calc(8rem - 75px)" }}
      >
        <h1
          className="animate-fade-rise-delay font-instrument-serif max-w-6xl text-4xl font-normal text-[#FFFFFF] sm:text-6xl md:text-7xl lg:text-8xl"
          style={{
            lineHeight: 0.95,
            letterSpacing: "-2.46px",
            textShadow: "0 10px 35px rgba(0,0,0,0.45)",
          }}
        >
          I&apos;m <span className="text-[#FFFFFF] italic">Farhan</span>, crafting
          digital experiences with <span className="text-white/80 italic">love.</span>
        </h1>

        <p className="animate-fade-rise-delay-2 mt-8 max-w-2xl font-inter text-base leading-relaxed text-white/85 sm:text-lg">
          Launching a product, automating workflow, or scaling your agency — I handle
          the full stack so you can focus on growth.
        </p>

        <div className="animate-fade-rise-delay-2 mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <button
            type="button"
            className="group inline-flex items-center gap-2 font-inter rounded-xl bg-[#F4EBDD] px-6 py-2.5 text-sm text-[#111111] transition-transform duration-300 hover:scale-[1.03] hover:bg-[#FFF6E9] sm:px-7 sm:py-3"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="h-7 w-14 rounded-full border border-white/35 bg-white/10 backdrop-blur-md">
          <div className="mx-auto mt-[9px] h-1.5 w-6 rounded-full bg-white/80" />
        </div>
      </div>
    </section>
  );
}
