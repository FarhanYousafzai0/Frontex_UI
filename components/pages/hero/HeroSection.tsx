"use client";

import { useCallback, useRef, useState } from "react";
import { HERO_NAV_ITEMS, HERO_VIDEO_URL } from "./constants";
import { HeroContent } from "./HeroContent";
import { HeroHeader } from "./HeroHeader";
import { HeroMobileSidebar } from "./HeroMobileSidebar";
import { useBodyScrollLock } from "./hooks/useBodyScrollLock";
import { useHeroHeaderIntro } from "./hooks/useHeroHeaderIntro";
import { useHeroNavVisibility } from "./hooks/useHeroNavVisibility";
import { useHeroVideoFadeLoop } from "./hooks/useHeroVideoFadeLoop";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const introDoneRef = useRef(false);

  const [hoveredNav, setHoveredNav] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeIndex = HERO_NAV_ITEMS.findIndex((item) => item.isActive);
  const pillIndex = hoveredNav ?? activeIndex;
  const { navHidden, scrollDirection } = useHeroNavVisibility(introDoneRef);

  useHeroHeaderIntro(headerRef, introDoneRef);
  useHeroVideoFadeLoop(videoRef);
  useBodyScrollLock(mobileMenuOpen);

  const toggleMobileMenu = useCallback(() => setMobileMenuOpen((prev) => !prev), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      <section className="relative m-3 min-h-[calc(100vh-1.5rem)] overflow-hidden rounded-[30px] bg-[#FFFFFF] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 z-0">
          <video ref={videoRef} className="h-full w-full object-cover" src={HERO_VIDEO_URL} muted playsInline autoPlay preload="auto" />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.16),rgba(0,0,0,0.45)_55%,rgba(0,0,0,0.7)_100%)]" />
        <HeroHeader
          headerRef={headerRef}
          navHidden={navHidden}
          scrollDirection={scrollDirection}
          pillIndex={pillIndex}
          mobileMenuOpen={mobileMenuOpen}
          onHoverNav={setHoveredNav}
          onToggleMobileMenu={toggleMobileMenu}
        />
        <HeroContent />
      </section>
      <HeroMobileSidebar open={mobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
